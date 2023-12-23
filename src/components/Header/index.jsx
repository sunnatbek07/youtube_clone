import React from 'react';
import YoutubeLogo from "../Icons/YoutubeLogo";
import Search from './../Icons/Search';
import { Link } from 'react-router-dom';
import './style.scss';
import SignIn from './../Icons/SignIn';

const Header = () => {
    return (
        <header>
            <div className='flex items-center gap-6'>
                <i className='bx bx-menu text-3xl'></i>
                <Link to={'/'}>
                    <YoutubeLogo />
                </Link>
            </div>
            <div className='flex items-center gap-x-4'>
                <div className='searchBox'>
                    <div className='searchInp'>
                        <input type="text" placeholder='Search' />
                    </div>
                    <button className='searchBtn'>
                        <Search />
                    </button>
                </div>
                <button className='microphoneBtn'>
                    <i class='bx bxs-microphone'></i>
                </button>
            </div>
            <div className='settings'>
                <i class='bx bx-dots-vertical-rounded text-2xl cursor-pointer'></i>
                <button>
                    <SignIn />
                    <span>Sign in</span>
                </button>
            </div>
        </header>
    )
}

export default Header;