const key = '2909bb37076c77332f2a706184ab330e';
const language = 'en-US';
const timeWindow = 'day';

function buildQueryParams(parmsJson) {
    return new URLSearchParams(parmsJson).toString();
}

const apiData = {
    teste: (value1, value2) => console.log(buildQueryParams({ value1: value1, value2: value2 })),
    // trending: (mediaType) => `/trending/${mediaType}/${timeWindow}?api_key=${key}`,
    trending: (mediaType) => `/trending/${mediaType}/${timeWindow}?${buildQueryParams({ api_key: key })}`,
    // latest: `/movie/latest?api_key=${key}&language=${language}`,
    latest: `/movie/latest?${buildQueryParams({ api_key: key, language: language })}`,
    // popular: (page) => `/movie/popular?api_key=${key}&language=${language}&page=${page}`,
    popular: (page) => `/movie/popular?${buildQueryParams({ api_key: key, language: language, page: page })}`,
    // topRated: (page) => `/movie/top_rated?api_key=${key}&language=${language}&page=${page}`,
    topRated: (page) => `/movie/top_rated?${buildQueryParams({ api_key: key, language: language, page: page })}`,
    // movieImage: (movieId) => `/movie/{${movieId}}/images?api_key=${key}&language=${language}`,
    movieImage: (movieId) => `/movie/{${movieId}}/images?${buildQueryParams({ api_key: key, language: language })}`,
    // searchMovie: (movie, page) => `/search/movie?api_key=${key}&query=${movie}&page=${page}`,
    searchMovie: (movie, page) => `/search/movie?${buildQueryParams({ api_key: key, query: movie, page: page })}`,
    // config: `/configuration?api_key=${key}`,
    config: `/configuration?${buildQueryParams({ api_key: key })}`,
};

export default apiData;
