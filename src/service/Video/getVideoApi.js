import api from "../axios";

const useVideoApi = {
    mostPopular: () => api.get('/videos?part=snippet&chart=mostPopular&maxResults=48&key=AIzaSyC46QqSryOgLfrIX1AtgZ7w5GsQyVBZ5Rc'),
}

export default useVideoApi;