<template>
  <div
    :class="$style.modal"
    data-test-modal="data-test-modal"
  >
    <slot></slot>
  </div>
</template>

<script src="./modal.js"></script>
<style src="./modal.scss" lang="scss" module></style>
