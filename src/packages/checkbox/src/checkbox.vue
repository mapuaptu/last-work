<template>
  <label :class="[$style.wrapper]">
    <div>
      <span :class="[$style.inner]"></span>
      <input
        :class="[$style.input]"
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
