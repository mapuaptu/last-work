<template>
  <div
    class="col-xs-5"
    :class="[classList]"
    :style="styleList"
  >
    <slot></slot>
    <pre>{{marginClass}}</pre>
  </div>
</template>

<script src="./col.js"></script>
<style src="./col.scss" lang="scss" scope></style>
