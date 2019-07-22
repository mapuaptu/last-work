<template>
  <div
    :class="classList"
    data-test-card-item="data-test-card-item"
  >
    <div
      :class="$style.name"
      v-if="$slots.name"
    >
      <slot name="name"></slot>
    </div>
    <div
      :class="$style.value"
      v-if="$slots.value"
    >
      <slot name="value"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script src="./card-item.js"></script>
<style src="./card-item.scss" lang="scss" module></style>
