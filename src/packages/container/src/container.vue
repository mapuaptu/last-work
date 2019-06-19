<template>
  <div
    :class="[
    $style.container,
    fluid && $style['container-fluid'],
  ]"
    :style="{width: `${width}px`}"
  >
    <slot></slot>
  </div>
</template>

<script src="./container.js"></script>
<style src="./container.scss" lang="scss" module></style>
