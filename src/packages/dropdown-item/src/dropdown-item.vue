<template>
  <div :class="[
      $style['dropdown-item'],
      disabled && $style[`dropdown-item--disabled`],
    ]">
    <i
      v-if="icon"
      :class="[$style.icon, `fa fa-${icon}`]"
    ></i>
    <div
      v-if="$slots.default"
      :class="[$style.text]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script src="./dropdown-item.js"></script>
<style src="./dropdown-item.scss" lang="scss" module></style>
