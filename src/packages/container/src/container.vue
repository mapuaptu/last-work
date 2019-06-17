<template>
  <div :class="[
    $style.container,
    fluid && $style['container-fluid'],
  ]">
    <slot></slot>
  </div>
</template>

<script src="./container.js"></script>
<style src="./container.scss" lang="scss" module></style>
