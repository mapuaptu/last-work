<template>
  <button>
    <span v-if="$slots.default">
      <i class="fa fa-circle"></i>
      <slot></slot>
    </span>
  </button>
</template>

<script src="./button.js"></script>
<style src="./button.scss" lang="scss" module></style>
