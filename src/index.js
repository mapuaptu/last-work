import Button from './packages/button';
import { Grid, Col } from './packages/grid';

import { version } from '../package.json';


const components = [
  Button,
  Grid,
  Col,
];


const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;

export {
  version,
  Button,
  Grid,
  Col,
};
