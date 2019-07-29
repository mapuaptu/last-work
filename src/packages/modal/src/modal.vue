<template>
  <div
    :class="$style.modal"
    data-test-modal="data-test-modal"
  >
    <slot></slot>
    <div
      v-if="$slots.control"
      :class="$style.control"
    >
      <slot name="control"></slot>
    </div>
    <div
      :class="$style.close"
      @click="$emit('close')"
    >
      <i class="fa fa-times"></i>
    </div>
  </div>
</template>

<script src="./modal.js"></script>
<style src="./modal.scss" lang="scss" module></style>
