<template>
  <div :class="[
    $style.notification,
    status !== 'default' && $style[`notification--${status}`]
  ]">
    <div
      v-if="status !== 'default'"
      :class="[
        $style.icon,
        status !== 'default' && $style[`icon--${status}`],
      ]"
    >
      <i :class="['fa', `fa-${icon}`]"></i>
    </div>
    <div
      v-if="$slots.default"
      :class="[
        $style.text,
        status !== 'default' && $style[`text--${status}`]
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script src="./notification.js"></script>
<style src="./notification.scss" lang="scss" module></style>
