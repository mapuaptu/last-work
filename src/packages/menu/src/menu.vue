<template>
  <nav
    :class="$style.menu"
    data-test-menu="data-test-menu"
  >
    <slot></slot>
  </nav>
</template>

<script src="./menu.js"></script>
<style src="./menu.scss" lang="scss" module></style>
