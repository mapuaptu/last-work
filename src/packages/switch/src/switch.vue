<template>
  <label :class="[$style.switch, disabled && $style['switch--disabled']]">
    <input
      type="checkbox"
      :class="[$style.input]"
      :checked="value"
      :disabled="disabled"
      @change="onChange"
    >
    <span :class="[$style.core, value && $style['core--checked']]"></span>
    <span
      :class="[$style.label]"
      v-if="$slots.label"
    >
      <slot name="label"></slot>
    </span>
  </label>
</template>

<script src="./switch.js"></script>
<style src="./switch.scss" lang="scss" module></style>
