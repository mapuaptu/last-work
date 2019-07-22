<template>
  <div
    :class="$style.icon"
    data-test-icon="data-test-icon"
  >
    <i
      :class="`fa fa-${name}`"
      :style="styleList"
    ></i>
    <slot></slot>
  </div>
</template>

<script src="./icon.js"></script>
<style src="./icon.scss" lang="scss" module></style>
