<template>
  <label :class="[$style.switch, disabled && $style['switch--disabled']]">
    <input
      type="checkbox"
      :class="[$style.input]"
      :checked="value"
      :disabled="disabled"
      @change="onChange"
    >
    <span
      :class="[$style.label, $style['label--on']]"
      v-show="$slots.on && value"
    >
      <slot name="on"></slot>
    </span>

    <span :class="[$style.core, value && $style['core--checked']]"></span>

    <span
      :class="[$style.label, $style['label--off']]"
      v-show="$slots.off && !value"
    >
      <slot name="off"></slot>
    </span>
  </label>
</template>

<script src="./switch.js"></script>
<style src="./switch.scss" lang="scss" module></style>
