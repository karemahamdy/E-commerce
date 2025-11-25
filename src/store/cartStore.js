import { defineStore } from 'pinia'
import { supabase } from '../lib/supabase.js';

export const useCartStore = defineStore('cart', {
  state: () => ({
    count: 0,
    items: [],       
    coupon: null,
    loading: false,
    error: null,
  }),
  getters: {
    subtotal(state) {
      return state.items.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0), 0);
    },
    // discount amount (currency) based on coupon
    discount_amount(state) {
      if (!state.coupon) return 0;
      const subtotal = state.items.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0), 0);
      if (state.coupon.discount_type === 'percentage') {
        return (subtotal * (Number(state.coupon.discount_value) || 0)) / 100;
      } else if (state.coupon.discount_type === 'fixed') {
        return Number(state.coupon.discount_value) || 0;
      }
      return 0;
    },
    // total after discount
    total(state) {
      const tot = this.subtotal - this.discount_amount;
      return tot > 0 ? tot : 0;
    },
    itemCount(state) {
      return state.items.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0)
    }
  },
  actions: {
  
    async fetchCart(userId) {
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await supabase
          .from('cart_items')
          .select('id, product_id, quantity, product:products(*)')
          .eq('user_id', userId);
        if (error) {
          this.error = error.message || 'Failed to fetch cart';
          this.items = [];
          return;
        }
        this.items = data.map(item => ({
        id: item.id,
        product_id: item.product_id,
        quantity: item.quantity,
        name: item.product.name,
        image: item.product.image_url,
        price: item.product.price,
        originalPrice: item.product.price,
      }))
      } catch (e) {
        this.error = e.message || 'Failed to fetch cart';
        this.items = [];
      } finally {
        this.loading = false;
      }

    },
    
    async addItem(productId, item) {
      this.loading = true;
      this.error = null;
      const { data, error } = await supabase
        .from("cart_items")
        .insert([
          {
            user_id: "test-user-123",
            product_id: productId,
            name: item.name,
            price: item.price,
            color: item.color,
            size: item.size,
            quantity: item.quantity
          }
        ]);

      if (error) {
        console.error("Supabase insert error:", error);
        this.error = error.message || 'Failed to add item';
        this.loading = false;
        return;
      }
      this.count++;
      this.items.push(data[0]); 
      this.loading = false;
    },

    async updateQuantity(userId, productId, quantity) {
      this.loading = true;
      this.error = null;
      const { data, error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('user_id', userId)
        .eq('product_id', productId)
        .select('id, product_id, quantity, product:products(*)')
        .single()
      if (!error) {
        const idx = this.items.findIndex(i => i.product_id === productId)
        if (idx !== -1) this.items[idx] = data
        this.loading = false;
        return;
      }
      this.error = error.message || 'Failed to update quantity';
      this.loading = false;
    },

    async removeItem(userId, productId) {
      this.loading = true;
      this.error = null;
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId)
        .eq('product_id', productId)
      if (!error) {
        this.items = this.items.filter(i => i.product_id !== productId)
        this.loading = false;
        return true;
      }
      this.error = error.message || 'Failed to remove item';
      this.loading = false;
      throw new Error(this.error);
    },

    async clearCart(userId) {
      this.loading = true;
      this.error = null;
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId)
      if (!error) this.items = []
      if (!error) {
        this.loading = false;
        return;
      }
      this.error = error.message || 'Failed to clear cart';
      this.loading = false;
    },
    
    // ...existing code...
    async applyCoupon(code) {
      try {
        const { data, error } = await supabase
          .from('coupons')
          .select('*')
          .eq('code', code)
          .eq('active', true)
          .gte('expires_at', new Date().toISOString())
          .single();

        if (error || !data) {
          this.coupon = null;
          return false;
        }

        this.coupon = data;
        return true;
      } catch (e) {
        console.error('applyCoupon error', e);
        this.coupon = null;
        return false;
      }
    }
    // ...existing code...

  }
})
