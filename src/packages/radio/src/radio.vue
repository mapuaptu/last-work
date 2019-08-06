<template>
  <div
    :class="classList"
    data-test-radio="data-test-radio"
    @click="onChange"
  >
    <div :class="$style.input">
      <div :class="$style.inner"></div>
      <input
        :class="$style.original"
        type="radio"
        :disabled="disabled"
        :value="label"
        :checked="isChecked"
        v-bind="$attrs"
        ref="input"
      />
    </div>
    <div
      v-if="label"
      :class="$style.label"
    >
      {{label}}
    </div>
    <slot></slot>
  </div>
</template>

<script src="./radio.js"></script>
<style src="./radio.scss" lang="scss" module></style>
