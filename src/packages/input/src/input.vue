<template>
  <div :class="[
    $style.input,
  ]">
    <input
      :class="[
        $style.inner,
        disabled && $style['inner--disabled'],
        status && $style[`inner--${status}`],
      ]"
      :type="type"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      @input="onInput"
      ref="input"
    />
  </div>
</template>

<script src="./input.js"></script>
<style src="./input.scss" lang="scss" module></style>
