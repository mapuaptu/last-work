<template>
  <div
    :class="$style.dropdown"
    v-click-outside="onClose"
    data-test-dropdown="data-test-dropdown"
  >

    <div
      v-if="$slots.control"
      :class="$style.control"
      @click="onClick"
    >
      <slot name="control"></slot>
    </div>

    <dd-icon
      v-else
      :class="$style.icon"
      :name="icon"
      color="#617c92"
      :size="18"
      @click.native="onClick"
    ></dd-icon>

    <transition name="fade">
      <div
        v-if="value"
        :class="[
        $style.menu,
        position && $style[`menu--${position}`],
      ]"
      >
        <div
          v-if="$slots.default"
          @click="onClose"
        >
          <slot></slot>
        </div>

      </div>
    </transition>
  </div>
</template>

<script src="./dropdown.js"></script>
<style src="./dropdown.scss" lang="scss" module></style>
