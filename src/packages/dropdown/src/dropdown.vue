<template>
  <div
    :class="$style.dropdown"
    v-click-outside="onClickOutside"
  >

    <div
      v-if="$slots.control"
      :class="[$style.control]"
      @click="onClick"
    >
      <slot name="control"></slot>
    </div>

    <i
      v-else
      :class="[$style.icon, `fa fa-${icon}`]"
      @click="onClick"
    ></i>

    <transition name="fade">
      <div
        v-if="value"
        :class="[
        $style.menu,
        position && $style[`menu--${position}`],
      ]"
      >
        <div v-if="$slots.default">
          <slot></slot>
        </div>

      </div>
    </transition>
  </div>
</template>

<script src="./dropdown.js"></script>
<style src="./dropdown.scss" lang="scss" module></style>
