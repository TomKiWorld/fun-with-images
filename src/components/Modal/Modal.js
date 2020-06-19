import { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.container = document.getElementById('modal-root');
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.container.appendChild(this.el);
  }

  componentWillUnmount() {
    this.container.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
