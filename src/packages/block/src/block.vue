<template>
  <div :class="[
    $style.block,
    status && $style[`block--${status}`]
  ]">
    <slot></slot>
  </div>
</template>

<script src="./block.js"></script>
<style src="./block.scss" lang="scss" module></style>
