<template>
  <div :class="[$style.icon]">
    <i
      :class="`fa fa-${name}`"
      :style="{fontSize: `${size}px`, lineHeight: `${size}px`, color,}"
    ></i>
  </div>
</template>

<script src="./icon.js"></script>
<style src="./icon.scss" lang="scss" module></style>
