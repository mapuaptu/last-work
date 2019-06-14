<template>
  <div :class="[$style.wrapper]">
    <input
      :class="[$style.input, disabled && $style['input--disabled']]"
      :type="type"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      v-on="$listeners"
      ref="input"
    />
  </div>
</template>

<script src="./input.js"></script>
<style src="./input.scss" lang="scss" module></style>
