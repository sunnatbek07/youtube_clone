import React, { useEffect, useState } from 'react';
import HomeTabs from '../../components/Ui/HomePageTabs';
import './style.scss';
import useVideoApi from '../../service/Video/getVideoApi';
import VideoCard from '../../components/Ui/HomeCard';

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
            <section className='home'>
                <HomeTabs />
                <div className='videoWrapper'>
                    {
                        videos.map((item, index) => {
                            return <VideoCard key={index} state={item} />
                        })
                    }
                </div>
            </section >
        </>
    )
}

export default Home