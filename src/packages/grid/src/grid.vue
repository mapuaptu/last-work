<template>
  <div
    :class="$style.grid"
    :style="styleGrid"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dd-grid',
  props: {
    direction: {
      type: String,
      default: 'row',
    },
    gap: {
      type: [Number, String],
      default: 15,
    },
    columns: {
      type: [Number, String],
      default: 'auto',
    },
  },
  data() {
    return {
      columnsCount: 0,
    };
  },
  computed: {
    styleGrid() {
      return `grid-gap: ${this.gap}px;`;
    },
    getColumn() {
      return this.columnsCount;
    },
  },
  provide() {
    const getColumns = {};
    Object.defineProperty(getColumns, 'count', {
      enumerable: true,
      get: () => this.columnsCount,
    });
    return {
      getColumns,
    };
  },
  created() {
    this.$nextTick(() => {
      if (this.$children) {
        this.columnsCount = this.$children.length;
      }
    });
  },
};
</script>

<style lang="scss" module>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
</style>
