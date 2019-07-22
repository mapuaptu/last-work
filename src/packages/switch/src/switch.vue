<template>
  <label
    :class="classList"
    data-test-switch="data-test-switch"
  >
    <input
      type="checkbox"
      :class="$style.input"
      :checked="value"
      :disabled="disabled"
      @change="onChange"
    >
    <span :class="$style.core"></span>
    <span
      :class="$style.label"
      v-if="$slots.default"
    >
      <slot></slot>
    </span>
  </label>
</template>

<script src="./switch.js"></script>
<style src="./switch.scss" lang="scss" module></style>
