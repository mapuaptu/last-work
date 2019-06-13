<template>
  <div :class="[
    $style.flex,
    size ? $style[`col-${size}`] : 'col',
    offset && $style[`offset-${offset}`],
    order && $style[`order-${order}`],
    justify && $style[`justify-content-${justify}`],
    align && $style[`align-items-${align}`],
    self && $style[`align-self-${self}`]
  ]">
    <slot></slot>
  </div>
</template>

<script src="./col.js"></script>
<style src="./col.scss" lang="scss" module></style>
