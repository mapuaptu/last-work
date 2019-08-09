import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Uploader from './index';

describe('Uploader', () => {
  it('1. Uploader - can render data-test attribute', () => {
    const wrapper = mount(Uploader);
    const attribute = 'data-test-uploader';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Uploader - can render content in default slot', () => {
    const content = 'Uploader content';
    const wrapper = mount(Uploader, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Uploader - can render content in image slot', () => {
    const content = 'Uploader content';
    const wrapper = mount(Uploader, {
      slots: {
        image: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('4. Uploader - delete button can trigger emit("delete")', () => {
    const wrapper = mount(Uploader, {
      slots: {
        image: '<img></img>',
      },
    });

    wrapper.find('[data-test="icon"]').trigger('click');

    expect(!!wrapper.emitted('delete')).to.equal(true);
  });
});
