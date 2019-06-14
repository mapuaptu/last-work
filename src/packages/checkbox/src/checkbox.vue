<template>
  <label :class="[$style.wrapper]">
    <div :class="[$style.input]">
      <span :class="[
        $style.inner,
        value && $style['inner--checked'],
        disabled && $style['inner--disabled'],
        $slots.default && value && $style['inner--text']
      ]"></span>
      <input
        :class="[$style.original]"
        type="checkbox"
        :checked="value"
        :disabled="disabled"
        v-bind="$attrs"
        v-on="$listeners"
      >
    </div>
    <div
      :class="[$style.label, disabled && $style['label--disabled']]"
      v-if="$slots.default"
    >
      <slot></slot>
    </div>
  </label>
</template>

<script src="./checkbox.js"></script>
<style src="./checkbox.scss" lang="scss" module></style>
