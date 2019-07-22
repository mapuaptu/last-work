<template>
  <label
    :class="classList"
    data-test-checkbox="data-test-checkbox"
  >
    <div :class="$style.input">
      <span :class="$style.inner"></span>
      <input
        :class="$style.original"
        type="checkbox"
        :checked="value"
        :disabled="disabled"
        v-bind="$attrs"
        @change="onChange"
      >
    </div>
    <div
      v-if="$slots.default"
      :class="$style.label"
    >
      <slot></slot>
    </div>
  </label>
</template>

<script src="./checkbox.js"></script>
<style src="./checkbox.scss" lang="scss" module></style>
