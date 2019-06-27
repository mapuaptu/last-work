<template>
  <div
    :class="[$style.userpic]"
    :style="{width: `${size}px`, height: `${size}px`}"
  >
    <img
      :src="url"
      :alt="alt"
    >
  </div>
</template>

<script src="./userpic.js"></script>
<style src="./userpic.scss" lang="scss" module></style>
