import React, { useEffect, useState } from 'react';
import HomeTabs from '../../components/Ui/HomePageTabs';
import './style.scss';
import useVideoApi from '../../service/Video/getVideoApi';

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        useVideoApi.mostPopular().then((res) => {
            setVideos(res.data.items)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    return (
        <>
            <section>
                <HomeTabs />
                <div className='videoWrapper'>
                    {
                        videos.map((item, id) => {
                            return <li key={id}>
                                <iframe 
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    frameborder="0"
                                    width="360"
                                    height="210"
                                    allowFullScreen={true}
                                >
                                </iframe>
                            </li>
                        })
                    }
                </div>
            </section >
        </>
    )
}

export default Home