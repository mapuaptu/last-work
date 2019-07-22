<template>
  <div
    :class="classList"
    :style="styleGutter"
    data-test-col="data-test-col"
  >
    <slot></slot>
  </div>
</template>

<script src="./col.js"></script>
<style src="./col.scss" lang="scss" module></style>
