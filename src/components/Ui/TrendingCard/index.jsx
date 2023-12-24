import React from 'react'

const TrendingCard = ({state}) => {
    return (
        <div>
            <li className='block lg:flex gap-x-4'>
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
        </div>
    )
}

export default TrendingCard