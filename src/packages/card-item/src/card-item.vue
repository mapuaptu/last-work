<template>
  <div :class="[$style.item]">
    <div
      :class="[$style.name]"
      v-if="$slots.name"
    >
      <slot name="name"></slot>
    </div>
    <div
      :class="[
        $style.value,
        color && $style[`value--${color}`],
      ]"
      v-if="$slots.value"
    >
      <slot name="value"></slot>
    </div>
  </div>
</template>

<script src="./card-item.js"></script>
<style src="./card-item.scss" lang="scss" module></style>
