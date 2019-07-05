<template>
  <div
    :class="[$style.userpic]"
    :style="{'--size': size}"
  >
    <img
      v-if="url"
      :src="url"
      :alt="alt"
    >
    <i
      :class="['fa', 'fa-user', $style.icon]"
      v-else
    ></i>
  </div>
</template>

<script src="./userpic.js"></script>
<style src="./userpic.scss" lang="scss" module></style>
