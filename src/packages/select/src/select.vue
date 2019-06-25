<template>
  <div :class="[$style.select]">
    <multiselect
      :value="value"
      :options="options"
      :show-labels="false"
      :searchable="false"
      v-bind="$attrs"
    ></multiselect>
  </div>
</template>

<script src="./select.js"></script>
<style src="./select.scss" lang="scss" module></style>
