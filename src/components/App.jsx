import { useEffect, useState } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import * as API from 'services/gallery-api';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export const App = () => {
  const [query, setQuery] = useState('');
  const [error, setErorr] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  const onLoadMoreClick = () => {
    setPage(prevItem => prevItem + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    setErorr(null);

    API.fetchGallery(query, page)
      .then(data => {
        const loadMore = data.totalHits > 12 * page;

        setImages(prevItems => [...prevItems, ...data.hits]);
        setLoadMore(loadMore);
      })
      .catch(error => setErorr(error))
      .finally(() => setLoading(false));
  }, [page, query]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {error && <p>error {error.message}</p>}
      {!loading && loadMore && <Button onClick={onLoadMoreClick} />}
    </>
  );
};

// export default class App extends Component {
//   state = {
//     query: '',
//     error: null,
//     images: [],
//     loading: false,
//     page: 1,
//     loadMore: false,
//   };

//   handleFormSubmit = query => {
//     this.setState({ query, page: 1, images: [] });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevState.query;
//     const prevPage = prevState.page;
//     const { query, page } = this.state;

//     if (prevQuery === query && prevPage === page) {
//       return;
//     }
//     this.setState({ loading: true });

//     API.fetchGallery(query, page)
//       .then(data => {
//         const loadMore = data.totalHits > 12 * page;

//         this.setState(prevState => ({
//           images: [...prevState.images, ...data.hits],
//           loadMore,
//         }));
//       })
//       .catch(error => console.log(error))
//       .finally(() => this.setState({ loading: false }));
//   }

//   onLoadMoreClick = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { images, loading, loadMore } = this.state;
//     return (
//       <>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery images={images} />
//         {loading && <Loader />}
//         {!loading && loadMore && <Button onClick={this.onLoadMoreClick} />}
//       </>
//     );
//   }
// }
