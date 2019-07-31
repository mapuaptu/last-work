import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Uploader from './index';

describe('Uploader', () => {
  it('1. Uploader - is vue instance', () => {
    const wrapper = mount(Uploader);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Uploader - can render data attribute', () => {
    const wrapper = mount(Uploader);
    const attribute = 'data-test-uploader';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Uploader - can render text in default slot', () => {
    const message = 'Uploader message';
    const wrapper = mount(Uploader, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
