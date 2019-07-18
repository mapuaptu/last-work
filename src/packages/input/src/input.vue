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
        image && $style['inner--image'],
      ]"
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
        :size="24"
      ></dd-userpic>
    </div>
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
  </div>
</template>

<script src="./input.js"></script>
<style src="./input.scss" lang="scss" module></style>
