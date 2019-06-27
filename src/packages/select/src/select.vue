<template>
  <div :class="[$style.select]">
    <multiselect
      :value="value"
      :options="options"
      :placeholder="placeholder"
      :show-labels="false"
      :searchable="false"
      v-bind="$attrs"
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
