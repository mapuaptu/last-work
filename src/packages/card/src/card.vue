<template>
  <div :class="[$style.card]">
    <div
      v-if="$slots.title"
      :class="[$style.title]"
    >
      <h2>
        <slot name="title"></slot>
      </h2>
    </div>

  </div>
</template>

<script src="./card.js"></script>
<style src="./card.scss" lang="scss" module></style>
