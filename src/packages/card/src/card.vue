<template>
  <div
    :class="classList"
    data-test-card="data-test-card"
  >
    <div
      v-if="$slots.title"
      :class="$style.title"
    >
      <h2>
        <slot name="title"></slot>
      </h2>
    </div>
    <div
      v-if="$slots.default"
      :class="$style.content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script src="./card.js"></script>
<style src="./card.scss" lang="scss" module></style>
