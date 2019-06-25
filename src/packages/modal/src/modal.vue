<template>
  <modal name="dd-modal">
    <div :class="[$style.modal]">
      <slot></slot>
    </div>
  </modal>
</template>

<script src="./modal.js"></script>
<style src="./modal.scss" lang="scss" module></style>
