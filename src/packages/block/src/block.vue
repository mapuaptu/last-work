<template>
  <div
    :class="classList"
    data-test-block="data-test-block"
  >
    <slot></slot>
  </div>
</template>

<script src="./block.js"></script>
<style src="./block.scss" lang="scss" module></style>
