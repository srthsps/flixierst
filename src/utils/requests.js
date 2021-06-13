const API_KEY = "33cb41a29e641e24a009653c64f7d69c"

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default requests