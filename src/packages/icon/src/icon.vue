<template>
  <div :class="$style.icon">
    <i
      :class="`fa fa-${name}`"
      :style="styleList"
    ></i>
  </div>
</template>

<script src="./icon.js"></script>
<style src="./icon.scss" lang="scss" module></style>
