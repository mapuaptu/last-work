<template>
  <button
    class="ez-button"
    :class="classList"
    :disabled="disabled"
    :type="nativeType"
    @click="onClick"
  >
    <ez-icon
      v-if="icon"
      :name="icon"
      :color="iconColor"
      :size="iconSize"
    ></ez-icon>
    <span
      v-if="$slots.default"
      class="ez-button__text"
    >
      <slot></slot>
    </span>
    <span
      class="ez-caret"
      v-if="caret"
    ></span>
    <transition name="ez-button__preloader-transition">
      <div
        class="ez-button__preloader"
        v-if="preloader"
      >
      </div>
    </transition>
  </button>
</template>

<script src="./button.js"></script>
<style src="./button.scss" lang="scss" module></style>
