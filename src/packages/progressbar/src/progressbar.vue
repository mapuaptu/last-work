<template>
  <div
    :class="$style.progressbar"
    data-test-progressbar="data-test-progressbar"
  >
    <slot></slot>
  </div>
</template>

<script src="./progressbar.js"></script>
<style src="./progressbar.scss" lang="scss" module></style>
