import Modal from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <li className="ImageGalleryItem ">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageURL} alt={tags} />
      )}
    </li>
  );
};

// export default class ImageGalleryItem extends Component {
//   state = { showModal: false };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   render() {
//     const { webformatURL, tags, largeImageURL } = this.props.image;
//     const { showModal } = this.state;
//     return (
//       <li className="ImageGalleryItem ">
//         <img
//           src={webformatURL}
//           alt={tags}
//           className="ImageGalleryItem-image"
//           onClick={this.toggleModal}
//         />
//         {showModal && (
//           <Modal onClose={this.toggleModal} src={largeImageURL} alt={tags} />
//         )}
//       </li>
//     );
//   }
// }
