<template>
  <button :class="[
    $style.button, $style[`button--${size}`],
    $style[`button--${type}`],
    !$slots.default &&  $style[`button--notext`]
  ]">
    <i
      v-if="icon"
      class="fa"
      :class="`fa-${icon}`"
    ></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script src="./button.js"></script>
<style src="./button.scss" lang="scss" module></style>
