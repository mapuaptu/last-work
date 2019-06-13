<template>
  <label :class="[$style.wrapper]">
    <div :class="[$style.input]">
      <span :class="[$style.inner, value && $style['inner--checked']]"></span>
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
      :class="[$style.label]"
      v-if="$slots.default"
    >
      <slot></slot>
    </div>
  </label>
</template>

<script src="./checkbox.js"></script>
<style src="./checkbox.scss" lang="scss" module></style>
