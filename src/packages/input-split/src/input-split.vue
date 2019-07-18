<template>
  <div
    :class="[
      $style['input-split'],
      disabled && $style['input-split--disabled'],
      root.status && $style[`input-split--${root.status}`],
      size && $style[`input-split--${size}`],
      focus && $style['input-split--focus'],
    ]"
    @click="onClick"
    v-click-outside="onClickOutside"
  >
    <input
      v-autowidth="{maxWidth: '350px', minWidth: '20px', comfortZone: 0}"
      :class="$style.inner"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      @input="onInput"
      :type="type"
      ref="input"
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

    <div
      v-if="$slots.default"
      :class="$style.domen"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script src="./input-split.js"></script>
<style src="./input-split.scss" lang="scss" module></style>
