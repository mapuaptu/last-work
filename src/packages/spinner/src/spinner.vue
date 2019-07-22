<template>
  <div
    :class="$style.spinner"
    :style="{'--size': size}"
    data-test-spinner="data-test-spinner"
  >
    <slot></slot>
  </div>
</template>

<script src="./spinner.js"></script>
<style src="./spinner.scss" lang="scss" module></style>
