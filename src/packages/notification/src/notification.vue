<template>
  <div
    :class="classList"
    data-test-notification="data-test-notification"
  >
    <div
      v-if="status !== 'default'"
      :class="$style.icon"
    >
      <dd-icon :name="icon"></dd-icon>
    </div>
    <div
      v-if="$slots.default"
      :class="$style.text"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script src="./notification.js"></script>
<style src="./notification.scss" lang="scss" module></style>
