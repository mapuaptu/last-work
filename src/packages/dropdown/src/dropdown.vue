<template>
  <div
    :class="$style.dropdown"
    @click="onClick"
    v-click-outside="onClickOutside"
  >
    <i :class="[$style.icon, `fa fa-${icon}`]"></i>
    <div
      v-if="value"
      :class="[
        $style.menu,
        position && $style[`menu--${position}`],
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script src="./dropdown.js"></script>
<style src="./dropdown.scss" lang="scss" module></style>
