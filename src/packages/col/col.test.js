import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Col from './index';

describe('Col', () => {
  it('1. Col - can render data-test attribute', () => {
    const wrapper = mount(Col);
    const attribute = 'data-test-col';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Col - can render content in default slot', () => {
    const content = 'Col content';
    const wrapper = mount(Col, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Col - has paddings when parent(row) have gutter prop.', () => {
    const gutter = 10;
    const Parent = {
      created() {
        this.gutter = gutter;
      },
    };

    const wrapper = mount(Col, {
      parentComponent: Parent,
    });

    expect(wrapper.vm.styleGutter).to.eql({
      paddingLeft: `${gutter / 2}px`,
      paddingRight: `${gutter / 2}px`,
    });
  });
});
