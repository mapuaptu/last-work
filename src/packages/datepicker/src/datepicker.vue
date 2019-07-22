<template>
  <div :class="classList">
    <v-date-picker
      mode="single"
      popoverVisibility="focus"
      :value="value"
      @input="onInput"
      @click.native="onClick"
      v-click-outside="onClickOutside"
    >
      <slot></slot>
    </v-date-picker>
  </div>
</template>

<script src="./datepicker.js"></script>
<style src="./datepicker.scss" lang="scss" module></style>
