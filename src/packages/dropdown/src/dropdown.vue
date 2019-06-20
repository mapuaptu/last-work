<template>
  <div
    :class="$style.dropdown"
    v-click-outside="onClickOutside"
  >
    <i
      :class="[$style.icon, `fa fa-${icon}`]"
      @click="onClick"
    ></i>
    <div
      v-if="value"
      :class="[
        $style.menu,
        position && $style[`menu--${position}`],
      ]"
    >
      <div
        v-if="$slots.default"
        @click="$emit('input', false)"
      >
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<script src="./dropdown.js"></script>
<style src="./dropdown.scss" lang="scss" module></style>
