<template>
  <div
    :class="classList"
    :style="styleGutter"
  >
    <slot></slot>
  </div>
</template>

<script src="./col.js"></script>
<style src="./col.scss" lang="scss" module></style>
