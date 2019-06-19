<template>
  <div :class="[$style.radio]">
    <input
      :class="[$style.inner]"
      type="radio"
      :disabled="disabled"
      :value="label"
      :checked="isChecked"
      v-bind="$attrs"
      @change="onChange"
    />
    <div :class="[$style.label]">{{label}}</div>
  </div>
</template>

<script src="./radio.js"></script>
<style src="./radio.scss" lang="scss" module></style>
