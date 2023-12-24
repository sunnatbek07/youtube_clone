import React, { useEffect, useState } from 'react';
import HomeTabs from '../../components/Ui/HomePageTabs';
import './style.scss';
import useVideoApi from '../../service/Video/getVideoApi';
import VideoCard from '../../components/Ui/HomeCard';
import TrendingCard from '../../components/Ui/TrendingCard';

const Trending = () => {
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
        <div className='videoWrapper'>
          <div className='flex items-center gap-x-5'>
            <img src="https://www.youtube.com/img/trending/avatar/trending.png" className='rounded-full w-[72px] h-[72px]' alt="Trending image" />
            <h2 className='text-[2em] font-bold'>Trending</h2>
          </div>
          {
            videos.map((item, index) => {
              return <TrendingCard key={index} state={item} />
            })
          }
        </div>
      </section >
    </>
  )
}

export default Trending