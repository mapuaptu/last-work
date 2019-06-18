<template>
  <div :class="[
    $style.input,
  ]">
    <input
      :class="[
        $style.inner,
        disabled && $style['inner--disabled'],
      ]"
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
