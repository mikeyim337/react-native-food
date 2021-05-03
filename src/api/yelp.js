import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer g4qmqmBn1KnGodSh1iKxEfsPFjMMnhsfjoerwinW_DjmpT9YqZVukuB00btfSvKf9G019Ak012y8MKNelzbxbFDri2np4tBGwa9IvaYFb33QDU9zs4RmsL3IX3SOYHYx'
    }
});

