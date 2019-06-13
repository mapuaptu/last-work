import Button from './packages/button';
import Container from './packages/container';
import Row from './packages/row';
import Col from './packages/col';
import Input from './packages/input';
import Checkbox from './packages/checkbox';
import Logo from './packages/logo';

const components = {
  Button,
  Container,
  Row,
  Col,
  Input,
  Checkbox,
  Logo,
};

export default (Vue) => {
  Object.values(components).map((component) => Vue.component(component.name, component));
};

export { Button, Container, Row, Col, Input, Checkbox, Logo };
