import Button from './packages/button';
import { Grid, Column } from './packages/grid';
import Container from './packages/container';
import Row from './packages/row';
import Col from './packages/col';
import Input from './packages/input';
import Icon from './packages/icon';
import Checkbox from './packages/checkbox';
import Logo from './packages/logo';
import Dropdown from './packages/dropdown';
import DropdownItem from './packages/dropdown-item';
import Form from './packages/form';
import FormField from './packages/form-field';
import Radio from './packages/radio';
import Panel from './packages/panel';
import Select from './packages/select';

import { version } from '../package.json';

const components = [
  Button,
  Grid,
  Column,
  Container,
  Row,
  Col,
  Input,
  Icon,
  Checkbox,
  Logo,
  Dropdown,
  DropdownItem,
  Form,
  FormField,
  Radio,
  Panel,
  Select,
];

const install = (Vue) => {
  components.map((component) => Vue.component(component.name, component));
};

export default install;
export {
  version,
  Button,
  Grid,
  Column,
  Container,
  Row,
  Col,
  Input,
  Icon,
  Checkbox,
  Logo,
  Dropdown,
  DropdownItem,
  Form,
  FormField,
  Radio,
  Panel,
  Select,
};
