const API_KEY = '39481144-61d2dc700e2d425d8e859c1c3';

export function fetchGallery(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет картинки с именем ${query}`));
  });
}
