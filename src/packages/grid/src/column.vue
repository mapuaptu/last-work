<template>
  <div
    :class="[$style.column, columnClass]"
    ref="column"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dd-column',
  props: {
    size: {
      type: [Number, String],
      default: 'auto',
    },
  },
  inject: {
    getColumns: {
      default: null,
    },
  },
  data() {
    return {
      columns: 0,
    };
  },
  computed: {
    columnClass() {
      return this.size && this.$style[`column-size--${this.size}`];
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.columns = this.getColumns.count;
    });
  },
};
</script>

<style lang="scss" module>
@import '../../../styles/variables';

.column {
  display: flex;
  background-color: $color-light;
}

@for $i from 1 through 12 {
  .column-size--#{$i} {
    grid-column: 1 / span #{$i};

    @media screen and (max-width: 480px) {
      // grid-column: span 12;
    }
  }
}

.column-size--auto {
  grid-column: auto;

  @media screen and (max-width: 480px) {
    // grid-column: span 12;
  }
}
</style>
