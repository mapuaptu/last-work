<template>
  <button
    :class="classList"
    data-test-button="data-test-button"
  >
    <dd-icon
      v-if="icon"
      :class="$style.icon"
      :name="icon"
    ></dd-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script src="./button.js"></script>
<style src="./button.scss" lang="scss" module></style>
