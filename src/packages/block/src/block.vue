<template>
  <div :class="[
    $style.block,
    status && $style[`block--${status}`],
    !size && $style['block--purge'],
    link && $style['block--link'],
    disabled && $style['block--disabled'],
  ]">
    <slot></slot>
  </div>
</template>

<script src="./block.js"></script>
<style src="./block.scss" lang="scss" module></style>
