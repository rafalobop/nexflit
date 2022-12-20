const key = process.env.REACT_APP_MOVIES_KEY;

const request = {
    popularRequest: `${process.env.REACT_APP_MOVIES_URL_REQUEST}/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRatedRequest:`${process.env.REACT_APP_MOVIES_URL_REQUEST}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    trendingRequest:`${process.env.REACT_APP_MOVIES_URL_REQUEST}/movie/popular?api_key=${key}&language=en-US&page=2`,
    horrorRequest:`${process.env.REACT_APP_MOVIES_URL_REQUEST}/search/movie?api_key=${key}&language=en-US&query=horror&page=1`,
    upcomingRequest:`${process.env.REACT_APP_MOVIES_URL_REQUEST}/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default request