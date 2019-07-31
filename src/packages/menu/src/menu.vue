<template>
  <nav
    :class="$style.menu"
    data-test-menu="data-test-menu"
    v-click-outside="onClickOutside"
  >
    <div :class="$style.inner">
      <slot></slot>
    </div>

    <transition name="fade">
      <div
        v-if="mobileOpen"
        :class="$style.mobile"
        @click="onClickOutside"
      >
        <slot></slot>
      </div>
    </transition>

    <div
      :class="$style.icon"
      @click="onClick"
    >
      <i class="fa fa-bars"></i>
    </div>
  </nav>
</template>

<script src="./menu.js"></script>
<style src="./menu.scss" lang="scss" module></style>
