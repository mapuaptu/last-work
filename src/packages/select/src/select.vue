<template>
  <div :class="[$style.select]">
    <multiselect
      :value="value"
      :options="options"
    ></multiselect>
  </div>
</template>

<script src="./select.js"></script>
<style src="./select.scss" lang="scss" module></style>
