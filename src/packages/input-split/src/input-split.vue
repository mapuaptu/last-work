<template>
  <div
    :class="classList"
    @click="onClick"
    v-click-outside="onClickOutside"
    data-test-input-split="data-test-input-split"
  >
    <input
      v-autowidth="{maxWidth: '350px', minWidth: '20px', comfortZone: 0}"
      :class="$style.inner"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      @input="onInput"
      :type="type"
      ref="input"
    />
    <dd-icon
      v-if="root.status"
      :class="$style.icon"
      :name="iconName"
    >
    </dd-icon>

    <div
      v-if="$slots.default"
      :class="$style.domen"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script src="./input-split.js"></script>
<style src="./input-split.scss" lang="scss" module></style>
