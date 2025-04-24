<template>
  <div class="wrapper">
    <div>
      <Button label="Primary" />
    </div>
    <div>
      <Button label="Secondary" severity="secondary" />
    </div>
    <div class="btn-primary">Primary Button</div>
    <div class="btn-secondary">Secondary Button</div>

    <p class="text-muted">This is muted text.</p>
    <p class="text-success">This is a success message!</p>
    <p class="text-danger">This is a danger alert.</p>
  </div>
</template>

<script setup>
import './style.css'
import './tailwind.css'
</script>
