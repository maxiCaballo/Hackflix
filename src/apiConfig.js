const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "61a0856c6ba1886cce974f31f864053d",
    page: 1,
    include_adult: false,
    language: "en-US",
    "vote_count.gte": 5,
  },
};

export default apiConfig;
