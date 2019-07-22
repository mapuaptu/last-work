<template>
  <div :class="classList">
    <input
      :class="$style.inner"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      @input="onInput"
      :type="type"
    />
    <div
      v-if="image"
      :class="$style.image"
    >
      <dd-userpic
        :url="image"
        :size="imageSize"
      ></dd-userpic>
    </div>

    <dd-icon
      v-if="root.status"
      :class="$style.icon"
      :name="iconName"
    >
    </dd-icon>
  </div>
</template>

<script src="./input.js"></script>
<style src="./input.scss" lang="scss" module></style>
