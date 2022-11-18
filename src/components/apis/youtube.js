import axios from "axios";

const KEY = 'AIzaSyCs3NYXy1g-DPPJIBbEWn3E-2q8vtF0_V4';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
