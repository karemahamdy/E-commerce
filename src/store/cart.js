// stores/cart.js
import { defineStore } from 'pinia'
import { supabase } from '@/supabase'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],       
    coupon: null,   
  }),
  getters: {
    total(state) {
      let sum = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      if (state.coupon) {
        if (state.coupon.discount_type === 'percentage') {
          sum = sum * (1 - state.coupon.discount_value / 100)
        } else if (state.coupon.discount_type === 'fixed') {
          sum = sum - state.coupon.discount_value
        }
      }
      return sum
    },
    itemCount(state) {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    }
  },
  actions: {
  
    async fetchCart(userId) {
      const { data, error } = await supabase
        .from('cart_items')
        .select('id, product_id, quantity, product:products(*)')
        .eq('user_id', userId)
      if (!error) this.items = data
    },

    async addItem(userId, product, quantity = 1) {
      const existing = this.items.find(i => i.product_id === product.id)
      if (existing) {
        await this.updateQuantity(userId, product.id, existing.quantity + quantity)
      } else {
        const { data, error } = await supabase
          .from('cart_items')
          .insert({ user_id: userId, product_id: product.id, quantity })
          .select('id, product_id, quantity, product:products(*)')
          .single()
        if (!error) this.items.push(data)
      }
    },
    async updateQuantity(userId, productId, quantity) {
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
      }
    },
    async removeItem(userId, productId) {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId)
        .eq('product_id', productId)
      if (!error) {
        this.items = this.items.filter(i => i.product_id !== productId)
      }
    },

    async clearCart(userId) {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId)
      if (!error) this.items = []
    },
    
    async applyCoupon(code) {
      const { data, error } = await supabase
        .from('coupons')
        .select('*')
        .eq('code', code)
        .eq('active', true)
        .gte('expires_at', new Date().toISOString())
        .single()
      if (error || !data) throw new Error('Coupon not valid')
      this.coupon = data
    }
  }
})
