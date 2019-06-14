<template>
  <div :class="[$style.column, columnClass]" ref="column">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-col',
  props: {
    size: {
      type: Number,
      default: 1
    }
  },
  inject: {
    getColumns: {
      default: null
    }
  },
  data() {
    return {
      columns: 0
    }
  },
  computed: {
    columnClass() {
      return this.size && this.$style[`column-size--${this.size}`]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.columns = this.getColumns.count;
    })
  }
}
</script>

<style lang="scss" module>
  .column {
    display: flex;
  }

  @for $i from 1 through 12 {
    .column-size--#{$i} {
      grid-column: span #{$i};
    }
  }
</style>
