import React, { Component } from 'react';

/**
 * Wiggle component
 * Used to adjust element prespective on hover
 * Has no content but it's children
 * 
 * Required props:
 * - elementId => OF the element on the page
 * - children => All other children will be redered inside the component
 */
class Wiggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style : {}
    }

    const defaultSettings = {
      reverse: false,
      max: 35,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: "1.1",
      speed: "1000",
      transition: true,
      axis: null,
      reset: true
    };

    this.width = null;
    this.height = null;
    this.left = null;
    this.top = null;
    this.transitionTimeout = null;
    this.updateCall = null;
    this.element = null;
    this.settings = Object.assign({}, defaultSettings, this.props.options);
    this.reverse = this.settings.reverse ? -1 : 1;

    // Events
    this.onMouseEnter = this.onMouseEnter.bind(this, this.props.onMouseEnter);
    this.onMouseMove = this.onMouseMove.bind(this, this.props.onMouseMove);
    this.onMouseLeave = this.onMouseLeave.bind(this, this.props.onMouseLeave);
  }

  // After component mount select the element on the page
  componentDidMount() {
    this.element = document.getElementById(this.props.elementId);
  }

  // Before component mount clear timeout and animation frames
  componentWillUnmount() {
    clearTimeout(this.transitionTimeout);
    cancelAnimationFrame(this.updateCall);
  }

  // Update element styles on mouse enter
  onMouseEnter(cb = () => {}, e) {
    this.updateElementPosition();

    this.setState(Object.assign({}, this.state, {
      style : {
        ...this.state.style,
        willChange : 'transform'
      }
    }))

    this.setTransition();

    return cb(e)
  }

  // Reset transform styles
  reset() {
    window.requestAnimationFrame(() => {
      this.setState(Object.assign({}, this.state, {
        style : {
          ...this.state.style,

          transform : `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        }
      }))
    });
  }

  // Get animation frame on mouse move
  onMouseMove(cb = () => {}, e) {
    e.persist();

    if (this.updateCall !== null) {
      window.cancelAnimationFrame(this.updateCall);
    }

    this.event = e;
    this.updateCall = requestAnimationFrame(this.update.bind(this, e));

    return cb(e);
  }

  // Set the setting during mouse enter and leave
  setTransition() {
    clearTimeout(this.transitionTimeout);

    this.setState(Object.assign({}, this.state, {
      style : {
        ...this.state.style,
        transition : `${this.settings.speed}ms ${this.settings.easing}`
      }
    }))

    this.transitionTimeout = setTimeout(() => {
      this.setState(Object.assign({}, this.state, {
        style : {
          ...this.state.style,
          transition: ''
        }
      }))
    }, this.settings.speed);
  }

  // Reset setting on mouse leave
  onMouseLeave(cb = () => {}, e) {
    this.setTransition();

    if (this.settings.reset) {
      this.reset();
    }
    return cb(e)
  }

  // Get values during the event
  getValues(e) {
    const x = (e.nativeEvent.clientX - this.left) / this.width;
    const y = (e.nativeEvent.clientY - this.top) / this.height;
    const _x = Math.min(Math.max(x, 0), 1);
    const _y = Math.min(Math.max(y, 0), 1);

    const tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2);
    const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2);

    const percentageX =  _x * 100
    const percentageY = _y * 100

    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY
    };
  }

  // Update element position
  updateElementPosition() {
    const rect = this.element.getBoundingClientRect();
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }

  // Update the style for the element
  update(e) {
    let values = this.getValues(e);

    this.setState(Object.assign({}, this.state, {
        style : {
          ...this.state.style,
          transform: `perspective(${this.settings.perspective}px)
                      rotateX(${this.settings.axis === 'x' ? 0 : values.tiltY}deg)
                      rotateY(${this.settings.axis === 'y' ? 0 : values.tiltX}deg)
                      scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`
        }
      }))

    this.updateCall = null;
  }
  
  render() {
    const style = Object.assign({}, this.props.style, this.state.style)
    return (
      <div style={style}
        onMouseEnter={this.onMouseEnter}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
        options={{ max : 25 }}
        >
        {this.props.children}
      </div>
    );
  }
}

export default Wiggle;
