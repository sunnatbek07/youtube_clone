import React from 'react';
import YoutubeLogo from "../Icons/YoutubeLogo";
import Search from './../Icons/Search';
import { Link } from 'react-router-dom';
import './style.scss';
import SignIn from './../Icons/SignIn';
import HomeTabs from '../Ui/HomePageTabs';

const Header = () => {
    return (
        <header>
            <div className='flex items-center gap-6'>
                <i className='bx bx-menu text-2xl cursor-pointer'></i>
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
                <button className='searchBtn2'>
                    <Search />
                </button>
                <button className='microphoneBtn'>
                    <i className='bx bxs-microphone'></i>
                </button>
            </div>
            <div className='settings'>
                <i className='bx bx-dots-vertical-rounded text-2xl cursor-pointer'></i>
                <Link to={'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ifkv=ASKXGp2ij-g1nD1oSCaoRLe4oqGowva78geNJhlbPT1bghKe8om6gQzaHOqQczPyqI6Pb1OphMRwHQ&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-234609098%3A1703341217877288&theme=glif'}>
                    <button>
                        <SignIn />
                        <span>Sign in</span>
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Header;