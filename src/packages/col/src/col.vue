<template>
  <div :class="[
    size && $style[`col-${size}`],
    offset && $style[`offset-${offset}`],
    order && $style[`order-${order}`]
  ]">
    <slot></slot>
  </div>
</template>

<script src="./col.js"></script>
<style src="./col.scss" lang="scss" module></style>
