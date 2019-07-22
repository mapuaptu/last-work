<template>
  <div
    :class="$style.userpic"
    :style="{'--size': size}"
  >
    <img
      v-if="url"
      :src="url"
      :alt="alt"
    >
    <i
      v-else
      :class="['fa', 'fa-user', $style.icon]"
    ></i>
  </div>
</template>

<script src="./userpic.js"></script>
<style src="./userpic.scss" lang="scss" module></style>
