<template>
  <div :class="[$style.uploader]">
    <div
      v-if="$slots.image"
      :class="[$style.image]"
    >
      <slot name="image"></slot>
      <div
        :class="[$style.delete]"
        @click="onDelete"
      >
        <i :class="['fa', 'fa-trash', $style.icon]"></i>
      </div>
    </div>
    <label>
      <div :class="[$style.button]">
        <small>
          <slot></slot>
        </small>
      </div>
      <input
        :class="[$style.original]"
        type="file"
        accept="image/*"
        @change="onChange"
      />
    </label>
  </div>
</template>

<script src="./uploader.js"></script>
<style src="./uploader.scss" lang="scss" module></style>
