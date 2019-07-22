<template>
  <div
    :class="classList"
    data-test-container="data-test-container"
  >
    <slot></slot>
  </div>
</template>

<script src="./container.js"></script>
<style src="./container.scss" lang="scss" module></style>
