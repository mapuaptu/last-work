<template>
  <div :class="[$style.uploader]">
    <div
      v-if="$slots.image"
      :class="[$style.image]"
    >
      <slot name="image"></slot>
      <div :class="[$style.delete]">
        <i
          :class="['fa', 'fa-trash', $style.icon]"
          @click="onDelete"
        ></i>
      </div>
    </div>
    <label>
      <div
        :class="[$style.button]"
        @click="$refs.input.click()"
      >
        <slot></slot>
      </div>
      <input
        :class="[$style.original]"
        type="file"
        accept="image/*"
        ref="input"
        @input="onInput"
      />
    </label>
  </div>
</template>

<script src="./uploader.js"></script>
<style src="./uploader.scss" lang="scss" module></style>
