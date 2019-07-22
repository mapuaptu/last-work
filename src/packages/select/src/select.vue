<template>
  <div :class="classList">
    <multiselect
      :value="value"
      :options="options"
      :placeholder="placeholder"
      :show-labels="false"
      :searchable="false"
      :disabled="disabled"
      v-bind="$attrs"
      @input="onInput"
    >
      <template #caret>
        <div :class="$style.caret">
          <i class="fa fa-angle-down"></i>
        </div>
      </template>
      <template #option="props">
        <slot
          name="option"
          :option="props.option"
        ></slot>
      </template>
      <template #singleLabel="props">
        <slot
          name="singleLabel"
          :option="props.option"
        ></slot>
      </template>
    </multiselect>
  </div>
</template>

<script src="./select.js"></script>
<style src="./select.scss" lang="scss" module></style>
