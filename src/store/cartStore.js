import { defineStore } from "pinia";
import { supabase } from "../lib/supabase.js";

export const useCartStore = defineStore("cart", {
  state: () => ({
    count: 0,
    items: [],
    coupon: null,
    loading: false,
    error: null,
  }),
  getters: {
    subtotal(state) {
      return state.items.reduce(
        (sum, item) =>
          sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
        0
      );
    },
    discount_amount(state) {
      if (!state.coupon) return 0;
      const subtotal = state.items.reduce(
        (sum, item) =>
          sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
        0
      );
      if (state.coupon.discount_type === "percentage") {
        return (subtotal * (Number(state.coupon.discount_value) || 0)) / 100;
      } else if (state.coupon.discount_type === "fixed") {
        return Number(state.coupon.discount_value) || 0;
      }
      return 0;
    },
    total(state) {
      const tot = this.subtotal - this.discount_amount;
      return tot > 0 ? tot : 0;
    },
    itemCount(state) {
      return state.items.reduce(
        (sum, item) => sum + (Number(item.quantity) || 0),
        0
      );
    },
  },
  actions: {
    async fetchCart(userId) {
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await supabase
          .from("cart_items")
          .select("id, product_id, quantity, product:products(*)")
          .eq("user_id", userId);
        if (error) {
          this.error = error.message || "Failed to fetch cart";
          this.items = [];
          return;
        }
        this.items = data.map((item) => ({
          id: item.id,
          product_id: item.product_id,
          quantity: item.quantity,
          name: item.product.name,
          image: item.product.image_url,
          price: item.product.price,
          originalPrice: item.product.price,
          updating: false,
        }));
      } catch (e) {
        this.error = e.message || "Failed to fetch cart";
        this.items = [];
      } finally {
        this.loading = false;
      }
    },

    async addItem(productId, item, options = { suppressLoading: false }) {
      if (!options.suppressLoading) this.loading = true;
      this.error = null;
      const { data, error } = await supabase.from("cart_items").insert([
        {
          user_id: "test-user-123",
          product_id: productId,
          name: item.name,
          price: item.price,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        this.error = error.message || "Failed to add item";
        this.loading = false;
        return;
      }
      this.count++;
      if (data && data.length > 0) {
        this.items.push({ ...data[0], updating: false });
      } else {
        this.items.push({
          id: null,
          product_id: productId,
          name: item.name,
          price: item.price,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
          updating: false,
        });
      }
    },

    async updateQuantity(
      userId,
      productId,
      quantity,
      options = { suppressLoading: true, optimistic: true }
    ) {
      if (!options.suppressLoading) this.loading = true;
      this.error = null;
      let idx = this.items.findIndex((i) => i.product_id === productId);
      let previousQuantity = null;
      if (idx !== -1) {
        previousQuantity = this.items[idx].quantity;
        if (options.optimistic) this.items[idx].quantity = quantity;
        this.items[idx].updating = true;
      }
      const { data, error } = await supabase
        .from("cart_items")
        .update({ quantity })
        .eq("user_id", userId)
        .eq("product_id", productId)
        .select("id, product_id, quantity, product:products(*)")
        .single();
      if (!error) {
        idx = this.items.findIndex((i) => i.product_id === productId);
        if (idx !== -1) {
          const mapped = {
            id: data.id,
            product_id: data.product_id,
            quantity: data.quantity,
            name: data.product?.name,
            image: data.product?.image_url,
            price: data.product?.price,
            originalPrice: data.product?.price,
          };
          this.items[idx] = mapped;
          this.items[idx].updating = false;
        }
        if (!options.suppressLoading) this.loading = false;
        return;
      }
      if (idx !== -1 && options.optimistic) {
        this.items[idx].quantity = previousQuantity;
        this.items[idx].updating = false;
      }
      this.error = error.message || "Failed to update quantity";
      if (!options.suppressLoading) this.loading = false;
      throw new Error(this.error);
    },
    setLocalQuantity(productId, quantity) {
      const idx = this.items.findIndex((i) => i.product_id === productId);
      if (idx !== -1) {
        this.items[idx].quantity = quantity;
        this.items[idx].updating = true;
        return true;
      }
      return false;
    },
    setItemUpdating(productId, updating) {
      const idx = this.items.findIndex((i) => i.product_id === productId);
      if (idx !== -1) {
        this.items[idx].updating = updating;
        return true;
      }
      return false;
    },

    async removeItem(userId, productId, options = { suppressLoading: true }) {
      if (!options.suppressLoading) this.loading = true;
      this.error = null;
      const { error } = await supabase
        .from("cart_items")
        .delete()
        .eq("user_id", userId)
        .eq("product_id", productId);
      if (!error) {
        this.items = this.items.filter((i) => i.product_id !== productId);
        if (!options.suppressLoading) this.loading = false;
        return true;
      }
      this.error = error.message || "Failed to remove item";
      if (!options.suppressLoading) this.loading = false;
      throw new Error(this.error);
    },

    async clearCart(userId) {
      this.loading = true;
      this.error = null;
      const { error } = await supabase
        .from("cart_items")
        .delete()
        .eq("user_id", userId);
      if (!error) this.items = [];
      if (!error) {
        this.loading = false;
        return;
      }
      this.error = error.message || "Failed to clear cart";
      this.loading = false;
    },
    async applyCoupon(code) {
      try {
        const { data, error } = await supabase
          .from("coupons")
          .select("*")
          .eq("code", code)
          .eq("active", true)
          .gte("expires_at", new Date().toISOString())
          .single();

        if (error || !data) {
          this.coupon = null;
          return false;
        }

        this.coupon = data;
        return true;
      } catch (e) {
        console.error("applyCoupon error", e);
        this.coupon = null;
        return false;
      }
    },
   
  },
  async placeOrder(userId, paymentInfo) {
  this.loading = true;
  this.error = null;

  try {
    if (this.items.length === 0) {
      throw new Error("Cart is empty");
    }

    // تحويل كل item لسطر في جدول payment
    const paymentData = this.items.map(item => ({
      user_id: userId,
      product_id: item.product_id,
      product_name: item.name,
      quantity: item.quantity,
      price: item.price,
      total: item.price * item.quantity,
      payment_method: paymentInfo.method,   // من PaymentWay component
      status: "pending",                    // initial status
      billing_name: `${paymentInfo.firstName} ${paymentInfo.lastName}`,
      billing_email: paymentInfo.email,
      billing_address: paymentInfo.address1,
      billing_city: paymentInfo.city,
      billing_state: paymentInfo.state,
      billing_zip: paymentInfo.zip,
      billing_country: paymentInfo.country,
      phone: paymentInfo.phone
    }));

    const { data, error } = await supabase
      .from("payments")
      .insert(paymentData)
      .select(); // select لتأكد إن البيانات اتخزنت

    if (error) {
      this.error = error.message || "Failed to create payment";
      return false;
    }

    // بعد الدفع ممكن تمسحي الكارت
    await this.clearCart(userId);

    return data;
  } catch (e) {
    this.error = e.message || "Payment failed";
    return false;
  } finally {
    this.loading = false;
  }
}

});
