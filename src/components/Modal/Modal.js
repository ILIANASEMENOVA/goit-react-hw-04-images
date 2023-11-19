import { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPress);
  }

  keyPress = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };
  onOverlay = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <>
        <div className="Overlay" onClick={this.onOverlay}>
          <div className="Modal">
            <img src={src} alt={alt} />
          </div>
        </div>
      </>
    );
  }
}
