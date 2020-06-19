import { Component } from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.container = document.getElementById('pop-up-root');
    this.el = document.createElement('div');
    this.el.classList.add('pop-up-container');
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

export default Popup;
