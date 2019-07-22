<template>
  <div :class="$style.datepicker">
    <v-date-picker
      mode="single"
      popoverVisibility="focus"
      :value="value"
      @input="onInput"
    ></v-date-picker>
  </div>
</template>

<script src="./datepicker.js"></script>
<style src="./datepicker.scss" lang="scss" module></style>
