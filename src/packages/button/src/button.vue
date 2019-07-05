<template>
  <button :class="classList">
    <i
      v-if="icon"
      :class="['fa', `fa-${icon}`]"
    ></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script src="./button.js"></script>
<style src="./button.scss" lang="scss" module></style>
