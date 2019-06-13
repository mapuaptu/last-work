<template>
  <div
    class="ez-input"
    :class="classList"
  >
    <input
      v-if="!useslot"
      :tabindex="tabindex"
      class="ez-input__control"
      :class="`input-${type}`"
      v-bind="$attrs"
      :type="type"
      :disabled="inputDisabled"
      :readonly="readonly"
      :value="value"
      ref="input"
      v-on="listeners"
    />
    <slot
      v-if="useslot"
      v-bind="$attrs"
    ></slot>
    <ez-button
      type="text"
      v-if="type == 'search'"
      icon="search"
    />

    <div
      class="ez-input__ico-wrap"
      @click="handleIcon"
      v-if="inputStatusIcon || icon"
    >
      <ez-icon
        v-if="inputStatusIcon && !showIcon"
        class="ez-input__ico-status"
        :name="inputStatusIcon"
      />
      <ez-icon
        v-if="showIcon"
        class="ez-input__ico-status ez-input__ico-status_custom"
        :name="icon"
      />
    </div>

    <label
      v-if="type === 'file'"
      class="ez-input__label ez-input__label--file"
      @click="handleInputFile"
      :class="{'is-active': value}"
    >
      {{!value ? $attrs.placeholder : fileName}}
    </label>
  </div>
</template>

<script src="./input.js"></script>

<style src="./input.scss" lang="scss" scoped></style>
