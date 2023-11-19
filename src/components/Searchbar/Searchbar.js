import { useState } from 'react';
import { toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error('Введите запрос');
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleQueryChange}
          value={query}
        />
      </form>
    </header>
  );
};

// export default class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleQueryChange = e => {
//     this.setState({ query: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { query } = this.state;
//     if (query.trim() === '') {
//       return toast.error('Введите запрос');
//     }

//     this.props.onSubmit(query);
//     this.setState({ query: '' });
//   };

//   render() {
//     const { query } = this.state;
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleQueryChange}
//             value={query}
//           />
//         </form>
//       </header>
//     );
//   }
// }
