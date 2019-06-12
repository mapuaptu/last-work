<template>
  <div
    :class="[
      $style.row,
      $style[`justify-content-${justify}`],
      $style[`align-items-${this.align}`]
    ]"
    :style="styleList"
  >
    <slot></slot>
  </div>
</template>

<script src="./row.js"></script>
<style src="./row.scss" lang="scss" module></style>
