const key = '2909bb37076c77332f2a706184ab330e';
const language = 'en-US';
const timeWindow = 'day';

function buildQueryParams(parmsJson) {
    return new URLSearchParams(parmsJson).toString();
}

const apiData = {
    trending: (mediaType) => `/trending/${mediaType}/${timeWindow}?${buildQueryParams({ api_key: key })}`,
    latest: `/movie/latest?${buildQueryParams({ api_key: key, language: language })}`,
    popular: (page) => `/movie/popular?${buildQueryParams({ api_key: key, language: language, page: page })}`,
    topRated: (page) => `/movie/top_rated?${buildQueryParams({ api_key: key, language: language, page: page })}`,
    movieImage: (movieId) => `/movie/{${movieId}}/images?${buildQueryParams({ api_key: key, language: language })}`,
    searchMovie: (movie, page) => `/search/movie?${buildQueryParams({ api_key: key, query: movie, page: page })}`,
    config: `/configuration?${buildQueryParams({ api_key: key })}`,
    genres: `/genre/movie/list?${buildQueryParams({ api_key: key, language: language })}`,
    videos: (type, id) => `/${type}/${id}/videos?${buildQueryParams({ api_key: key, language: language })}`,
    whatchProviders: (movieId) => `/movie/${movieId}/watch/providers?${buildQueryParams({ api_key: key })}`,
};

export default apiData;
