<template>
  <div
    :class="$style.uploader"
    data-test-uploader="data-test-uploader"
  >
    <div
      v-if="$slots.image"
      :class="$style.image"
    >
      <slot name="image"></slot>
      <div :class="$style.delete">
        <i
          :class="['fa', 'fa-trash', $style.icon]"
          @click="onDelete"
          data-test="icon"
        ></i>
      </div>
    </div>
    <div
      :class="$style.button"
      @click="$refs.input.click()"
    >
      <slot></slot>
    </div>
    <input
      :class="$style.original"
      type="file"
      accept="image/*"
      ref="input"
      @input="onInput"
    />
  </div>
</template>

<script src="./uploader.js"></script>
<style src="./uploader.scss" lang="scss" module></style>
