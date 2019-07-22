<template>
  <form
    action=""
    :class="$style.form"
    @submit="onSubmit"
    data-test-form="data-test-form"
  >
    <slot></slot>
  </form>
</template>

<script src="./form.js"></script>
<style src="./form.scss" lang="scss" module></style>
