<template>
  <div
    class="ez-input"
    :class="classList"
  >
    <input
      class="ez-input__control"
      :class="`input-${type}`"
      :type="type"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
      ref="input"
    />
  </div>
</template>

<script src="./input.js"></script>
<style src="./input.scss" lang="scss" module></style>
