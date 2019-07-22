<template>
  <div
    :class="classList"
    :style="styleGutter"
    data-test-row="data-test-row"
  >
    <slot></slot>
  </div>
</template>

<script src="./row.js"></script>
<style src="./row.scss" lang="scss" module></style>
