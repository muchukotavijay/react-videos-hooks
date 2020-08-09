import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDv8mPYLZyiawh-QdRNyvMiGgsYiwu0Rt8';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: KEY,
                    q:term
                }
            }
        );

        const videos = response.data.items;

        setVideos(videos);
        
    };

    return [videos, search];
}

export default useVideos;