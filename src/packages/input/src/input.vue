<template>
  <div :class="[
    $style.input,
  ]">
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
      type="text"
    />
    <i :class="[
      $style.icon,
      'fa',
      root.status === 'success' ? [$style['icon--success'],'fa-check-circle'] :
      root.status === 'error' ?
      [$style['icon--error'], 'fa-exclamation-circle']: '',
      size && $style[`icon--${size}`],
    ]">
    </i>
  </div>
</template>

<script src="./input.js"></script>
<style src="./input.scss" lang="scss" module></style>
