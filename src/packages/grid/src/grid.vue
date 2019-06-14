<template>
  <div :class="$style.grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-grid',
  props: {
    direction: {
      type: String,
      default: 'row'
    },
    columns: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      columnsCount: 0
    }
  },
  provide() {
    const getColumns = {};
    Object.defineProperty(getColumns, 'count', {
      enumerable: true,
      get: () => this.columnsCount,
    });
    return {
      getColumns
    }
  },
  mounted() {
    if(this.$children) {
      this.columnsCount = this.$children.length
    }
  }
}
</script>

<style lang="scss" module>
  .grid {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(12, 1fr);
  }
</style>
