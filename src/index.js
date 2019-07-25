import Block from './packages/block';
import Button from './packages/button';
import Card from './packages/card';
import CardItem from './packages/card-item';
import Checkbox from './packages/checkbox';
import Col from './packages/col';
import Container from './packages/container';
import Datepicker from './packages/datepicker';
import Dropdown from './packages/dropdown';
import DropdownItem from './packages/dropdown-item';
import Form from './packages/form';
import FormField from './packages/form-field';
import Icon from './packages/icon';
import Input from './packages/input';
import InputSplit from './packages/input-split';
import Logo from './packages/logo';
import Menu from './packages/menu';
import Modal from './packages/modal';
import Notification from './packages/notification';
import Progressbar from './packages/progressbar';
import Radio from './packages/radio';
import Row from './packages/row';
import Select from './packages/select';
import Spinner from './packages/spinner';
import Switch from './packages/switch';
import Uploader from './packages/uploader';
import Userpic from './packages/userpic';

import { version } from '../package.json';

const components = [
  Block,
  Button,
  Card,
  CardItem,
  Checkbox,
  Col,
  Container,
  Datepicker,
  Dropdown,
  DropdownItem,
  Form,
  FormField,
  Icon,
  Input,
  InputSplit,
  Logo,
  Menu,
  Modal,
  Notification,
  Progressbar,
  Radio,
  Row,
  Select,
  Spinner,
  Switch,
  Uploader,
  Userpic,
];

const install = (Vue) => {
  components.map((component) => Vue.component(component.name, component));
};

export default install;

export {
  version,
  Block,
  Button,
  Card,
  CardItem,
  Checkbox,
  Col,
  Container,
  Datepicker,
  Dropdown,
  DropdownItem,
  Form,
  FormField,
  Icon,
  Input,
  InputSplit,
  Logo,
  Menu,
  Modal,
  Notification,
  Progressbar,
  Radio,
  Row,
  Select,
  Spinner,
  Switch,
  Uploader,
  Userpic,
};
