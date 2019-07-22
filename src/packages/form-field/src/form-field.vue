<template>
  <div
    :class="$style.field"
    data-test-form-field="data-test-form-field"
  >
    <div
      v-if="$slots.label"
      :class="$style.label"
    >
      <slot name="label"></slot>
    </div>
    <slot></slot>
    <div
      v-if="$slots.message"
      :class="[$style.message, status && $style[`message--${status}`]]"
    >
      <slot name="message"></slot>
    </div>
  </div>
</template>

<script src="./form-field.js"></script>
<style src="./form-field.scss" lang="scss" module></style>
