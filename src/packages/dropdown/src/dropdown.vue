<template>
  <div :class="$style.dropdown">
    <i
      class="fa fa-ellipsis-h"
      :class="$style.icon"
      @click="onClick"
    ></i>
    <div
      v-if="value"
      :class="$style.menu"
    >
      <div>123</div>
    </div>
  </div>
</template>

<script src="./dropdown.js"></script>
<style src="./dropdown.scss" lang="scss" module></style>
