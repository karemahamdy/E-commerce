<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :class="[
      bgColor,
      textColor,
      hoverBgColor,
      rounded,
        borderColor ? 'border' : '',
      padding,
      textSize,
      'transition',
        $attrs.class
    ]"
    @click="handleClick"
     v-bind="$attrs"
  >
    {{ label }}
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
    inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: null
    },
    bgColor: {
      type: String,  
    },
      borderColor: {
      type: String,  
    },
    textColor: {
      type: String,
    },
    hoverBgColor: {
      type: String,
    },
      hoverTextColor: {
      type: String,
      default: 'hover:text-black',
    },
    rounded: {
      type: String,
    },
    padding: {
      type: String,  
    },
    textSize: {
      type: String,    
    }
  },
  computed: {
    computedClasses() {
      return `${this.bgColor} ${this.textColor} ${this.hoverBgColor}  ${this.padding} ${this.rounded} ${this.textSize} ${this.hoverTextColor} ${this.borderColor}`
    }
  },
   methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
}
}
</script>
