import React from 'react';
import YoutubeLogo from "../Icons/YoutubeLogo";

import './style.scss';
import Search from './../Icons/Search';

const Header = () => {
    return (
        <header>
            <div className='flex items-center gap-6'>
                <i className='bx bx-menu text-3xl'></i>
                <YoutubeLogo />
            </div>
            <div className='flex items-center'>
                <div className='searchBox'>
                    <div className='searchInp'>
                        <input type="text" placeholder='Search' />
                    </div>
                    <button className='searchBtn'>
                        <Search />
                    </button>
                    <button className='microphoneBtn'>
                        <i class='bx bxs-microphone'></i>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;