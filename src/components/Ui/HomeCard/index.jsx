import React from 'react';

const VideoCard = ({ state }) => {
    return (
            <li>
                <iframe
                    src={`https://www.youtube.com/embed/${state.id}`}
                    frameborder="0"
                    width="360"
                    height="200"
                    allowFullScreen={true}
                >
                </iframe>
                <h5>{state.snippet.title}</h5>
            </li>
    )
}

export default VideoCard;