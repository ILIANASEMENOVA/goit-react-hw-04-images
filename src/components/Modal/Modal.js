import { useEffect } from 'react';

export const Modal = ({ src, alt, onClose }) => {
  useEffect(() => {
    const keyPress = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyPress);
    return () => window.removeEventListener('keydown', keyPress);
  }, [onClose]);

  const onOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className="Overlay" onClick={onOverlay}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    </>
  );
};

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.keyPress);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.keyPress);
//   }

//   keyPress = event => {
//     if (event.key === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   onOverlay = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { src, alt } = this.props;
//     return (
//       <>
//         <div className="Overlay" onClick={this.onOverlay}>
//           <div className="Modal">
//             <img src={src} alt={alt} />
//           </div>
//         </div>
//       </>
//     );
//   }
// }
