<template>
  <div
    :class="$style.dropdown"
    @click="onClick"
    v-click-outside="onClickOutside"
  >
    <i
      class="fa fa-ellipsis-h"
      :class="$style.icon"
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
