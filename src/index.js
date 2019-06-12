import Button from './packages/button';
import Container from './packages/container';
import Row from './packages/row';
import Col from './packages/col';

const components = {
  Button,
  Container,
  Row,
  Col,
};

export default (Vue) => {
  Object.values(components).map((component) => Vue.component(component.name, component));
};

export { Button, Container, Row, Col };
