<template>
  <nav
    :class="$style.menu"
    data-test-menu="data-test-menu"
  >
    <div :class="$style.inner">
      <slot></slot>
    </div>

    <div
      v-if="mobileOpen"
      :class="$style.mobile"
    >
      <slot></slot>
    </div>

    <div
      :class="$style.icon"
      @click="onClick"
      v-click-outside="onClickOutside"
    >
      <i class="fa fa-bars"></i>
    </div>
  </nav>
</template>

<script src="./menu.js"></script>
<style src="./menu.scss" lang="scss" module></style>
