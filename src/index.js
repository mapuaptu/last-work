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
import Switch from './packages/switch';
import Modal from './packages/modal';
import Userpic from './packages/userpic';
import Block from './packages/block';
import Card from './packages/card';
import CardItem from './packages/card-item';
import Notification from './packages/notification';
import Uploader from './packages/uploader';

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
  Switch,
  Modal,
  Userpic,
  Block,
  Card,
  CardItem,
  Notification,
  Uploader,
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
  Switch,
  Modal,
  Userpic,
  Block,
  Card,
  CardItem,
  Notification,
  Uploader,
};
