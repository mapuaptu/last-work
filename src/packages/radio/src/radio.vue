<template>
  <div :class="[$style.radio]">
    <div :class="[$style.input]">
      <div :class="[
        $style.inner,
        isChecked && $style['inner--checked'],
        disabled && $style['inner--disabled'],
      ]"></div>
      <input
        :class="[$style.original]"
        type="radio"
        :disabled="disabled"
        :value="label"
        :checked="isChecked"
        v-bind="$attrs"
        @change="onChange"
      />
    </div>
    <div
      v-if="label"
      :class="[$style.label]"
    >{{label}}</div>
  </div>
</template>

<script src="./radio.js"></script>
<style src="./radio.scss" lang="scss" module></style>
