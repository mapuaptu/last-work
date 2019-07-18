<template>
  <div :class="$style['input-split']">
    <input
      :class="[
        $style.inner,
        disabled && $style['inner--disabled'],
        root.status && $style[`inner--${root.status}`],
        size && $style[`inner--${size}`],
      ]"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      @input="onInput"
      :type="type"
    />
    <i
      v-if="root.status"
      :class="[
      $style.icon,
      'fa',
      root.status === 'success' ? [$style['icon--success'],'fa-check-circle'] :
      root.status === 'error' ?
      [$style['icon--error'], 'fa-exclamation-circle']: '',
      size && $style[`icon--${size}`],
    ]"
    >
    </i>

    <div>.dashdojo.com</div>
  </div>
</template>

<script src="./input-split.js"></script>
<style src="./input-split.scss" lang="scss" module></style>
