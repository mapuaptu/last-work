export default {
  name: 'UiCol',
  props: {
    size: {
      type: [String, Number],
      default: null,
    },
    offset: {
      type: [String, Number],
      default: null,
    },
    order: {
      type: [String, Number],
      default: null,
    },
    justify: {
      type: String,
      default: null,
    },
    align: {
      type: String,
      default: null,
    },
    self: {
      type: String,
      default: null,
    },
    margin: {
      type: String,
      default: null,
    },
  },
  computed: {
    // gutter() {
    //   let parent = this.$parent;

    //   // eslint-disable-next-line
    //   while (parent && parent.$options._componentTag !== 'row') {
    //     parent = parent.$parent;
    //   }
    //   return parent ? parent.gutter : 0;
    // },
    // styleList() {
    //   const style = {};

    //   if (this.gutter) {
    //     const padding = `${this.gutter / 2}px`;

    //     style.paddingLeft = padding;
    //     style.paddingRight = padding;
    //   }

    //   return style;
    // },
    marginClass() {
      switch (this.margin) {
        case 'left':
          return 'ml-auto';
        case 'right':
          return 'mr-auto';
        case 'center':
          return 'm-auto';
        default:
          return false;
      }
    },
    classList() {
      return [
        // this.size ? this._sizeClass() : 'col',
        // this.offset ? this._offsetClass() : '',
        // this.order ? this._orderClass() : '',
        // this.self ? `align-self-${this.self}` : '',
        // this.justify ? this._justifyClass() : '',
        this.margin ? this.marginClass : '',
      ];
    },
  },
  // methods: {
  //   _generateClass(params, name) {
  //     const classList = [];

  //     switch (typeof params) {
  //       case 'object':
  //         for (const index in params) {
  //           if (!isFinite(index)) {
  //             classList.push(`${name}-${index}-${params[index]}`);
  //           } else if (params[index] instanceof Object) {
  //             for (const key in params[index]) {
  //               classList.push(`${name}-${key}-${params[index][key]}`);
  //             }
  //           } else {
  //             classList.push(`${name}-${params[index]}`);
  //           }
  //         }

  //         break;
  //       case 'string':
  //         classList.push(`${name}-${params}`);
  //         break;
  //       case 'number':
  //         classList.push(`${name}-${params}`);
  //         break;
  //       default:
  //         for (const key in params) {
  //           classList.push(`${name}-${key}-${params[Object.keys(params)]}`);
  //         }
  //     }
  //     return classList;
  //   },
  //   _offsetClass() {
  //     return this._generateClass(this.offset, 'offset');
  //   },
  //   _sizeClass() {
  //     return this._generateClass(this.size, 'col');
  //   },
  //   _orderClass() {
  //     return this._generateClass(this.order, 'order');
  //   },
  //   _justifyClass() {
  //     return this._generateClass(this.justify, 'justify-content');
  //   },
  // },
};
