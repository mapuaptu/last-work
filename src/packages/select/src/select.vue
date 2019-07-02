<template>
  <div :class="[
    $style.select,
    status && $style[`select--${status}`]
  ]">
    <multiselect
      :value="value"
      :options="options"
      :placeholder="placeholder"
      :show-labels="false"
      :searchable="false"
      :disabled="disabled"
      :track-by="status && 'id'"
      :label="status && 'label'"
      v-bind="$attrs"
      @input="onInput"
    >
      <template #caret>
        <div :class="[$style.caret]">
          <i class="fa fa-angle-up"></i>
        </div>
      </template>
    </multiselect>
  </div>
</template>

<script src="./select.js"></script>
<style src="./select.scss" lang="scss" module></style>
