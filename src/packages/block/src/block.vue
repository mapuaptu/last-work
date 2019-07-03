<template>
  <div :class="[
    $style.block,
    status && $style[`block--${status}`],
    !size && $style['block--purge'],
  ]">
    <slot></slot>
  </div>
</template>

<script src="./block.js"></script>
<style src="./block.scss" lang="scss" module></style>
