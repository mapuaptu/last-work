<template>
  <div
    :class="[
    $style.flex,
    size && $style[`col-${size}`],
    sm && $style[`col-sm-${sm}`],
    md && $style[`col-md-${md}`],
    lg && $style[`col-lg-${lg}`],
    xl && $style[`col-xl-${xl}`],
    offset && $style[`offset-${offset}`],
    order && $style[`order-${order}`],
    justify && $style[`justify-content-${justify}`],
    align && $style[`align-items-${align}`],
    self && $style[`align-self-${self}`],
  ]"
    :style="[styleGutter]"
  >
    <slot></slot>
  </div>
</template>

<script src="./col.js"></script>
<style src="./col.scss" lang="scss" module></style>
