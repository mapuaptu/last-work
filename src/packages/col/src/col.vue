<template>
  <div :class="[$style[`col-${size}`], $style[`offset-${offset}`]]">
    <slot></slot>
  </div>
</template>

<script src="./col.js"></script>
<style src="./col.scss" lang="scss" module></style>
