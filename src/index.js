import Button from './packages/button';
import { Grid, Column } from './packages/grid';
import Container from './packages/container';
import Row from './packages/row';
import Col from './packages/col';
import Input from './packages/input';
import Checkbox from './packages/checkbox';
import Logo from './packages/logo';
import Dropdown from './packages/dropdown';
import FormField from './packages/form-field';
import { version } from '../package.json';

const components = [
  Button,
  Grid,
  Column,
  Container,
  Row,
  Col,
  Input,
  Checkbox,
  Logo,
  Dropdown,
  FormField,
];

const install = (Vue) => {
  components.map((component) => Vue.component(component.name, component));
};

export default install;
export {
  Button,
  Grid,
  Column,
  Container,
  Row,
  Col,
  Input,
  Checkbox,
  Logo,
  version,
  Dropdown,
  FormField,
};
