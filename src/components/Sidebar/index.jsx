import React from 'react';
import './style.scss';
import { NavLink, Link } from 'react-router-dom';
import SignIn from '../Icons/SignIn';

const Sidebar = () => {
    return (
        <aside>
            <div className='max-w-[240px]'>
                <nav>
                    <ul className='nav'>
                        <li>
                            <NavLink to={'/'}>
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path>
                                </svg>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/shorts'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                                    <path d="M10 14.65V9.35001L15 12L10 14.65ZM17.77 10.32L16.57 9.82001L18 9.06001C19.84 8.10001 20.53 5.83001 19.56 4.00001C18.59 2.17001 16.32 1.47001 14.49 2.44001L6.00001 6.94001C4.71001 7.62001 3.93001 8.98001 4.00001 10.43C4.07001 11.85 4.93001 13.1 6.22001 13.68C6.25001 13.69 7.42001 14.18 7.42001 14.18L6.00001 14.93C4.17001 15.9 3.47001 18.17 4.44001 20C5.41001 21.83 7.68001 22.53 9.51001 21.56L18.01 17.06C19.3 16.38 20.07 15.02 20 13.57C19.93 12.15 19.06 10.89 17.77 10.32ZM17.54 16.18L9.04001 20.68C7.70001 21.39 6.03001 20.88 5.32001 19.54C4.61001 18.2 5.12001 16.53 6.46001 15.82L8.50001 14.74V13.53L7.81001 13.25L6.70001 12.79C5.71001 12.38 5.05001 11.44 5.00001 10.38C4.95001 9.32001 5.52001 8.32001 6.46001 7.82001L14.96 3.32001C16.3 2.61001 17.97 3.12001 18.68 4.46001C19.39 5.80001 18.88 7.47001 17.54 8.18001L15.5 9.26001V10.47L17.3 11.21C18.29 11.62 18.95 12.56 19 13.62C19.05 14.68 18.48 15.68 17.54 16.18Z" fill="#000000" />
                                </svg>
                                <span>Shorts</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/feed/subscriptions'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z" fill="#030303" />
                                </svg>
                                <span>Subscriptions</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='nav2'>
                        <li>
                            <NavLink to={'/feed/you'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11 7L17 10.5L11 14V7ZM18 20H4V6H3V21H18V20ZM21 18H6V3H21V18ZM7 17H20V4H7V17Z" fill="#030303" />
                                </svg>
                                <span>You</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/feed/history'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM22 12C22 17.51 17.51 22 12 22C6.49002 22 2.00002 17.51 2.00002 12H3.00002C3.00002 16.96 7.04002 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C8.81002 3 5.92002 4.64 4.28002 7.38C4.17002 7.56 4.06002 7.75 3.97002 7.94L3.94002 8H8.00002V9H1.96002V3H2.96002V7.74C3.00002 7.65 3.03002 7.57 3.07002 7.49C3.18002 7.27 3.30002 7.07 3.42002 6.86C5.22002 3.86 8.51002 2 12 2C17.51 2 22 6.49 22 12Z" fill="#030303" />
                                </svg>
                                <span>History</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='nav3'>
                        <p>
                            Sign in to like videos,
                            comment, and subscribe.
                        </p>

                        <Link to='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ifkv=ASKXGp2ij-g1nD1oSCaoRLe4oqGowva78geNJhlbPT1bghKe8om6gQzaHOqQczPyqI6Pb1OphMRwHQ&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-234609098%3A1703341217877288&theme=glif'>
                            <button>
                                <SignIn />
                                <span>Sign in</span>
                            </button>
                        </Link>
                    </ul>
                    <ul className='explore'>
                        <h4>Explore</h4>
                        <NavLink to={'/feed/trending'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 3.87V13.64C19 17.7 15.86 21 12 21C8.14 21 5 17.7 5 13.63V13.5C5 12.44 5.22 11.37 5.62 10.41C6.12 9.22 6.91 8.2 7.89 7.44C8.74 6.78 9.72 6.3 10.76 5.79C11.15 5.6 11.53 5.41 11.91 5.21C12.27 5.02 12.63 4.83 12.99 4.65V7.87L14.54 6.83L19 3.87ZM20 2L14 6V3C13.15 3.44 12.3 3.88 11.45 4.33C10.04 5.07 8.55 5.67 7.28 6.65C6.15 7.52 5.26 8.7 4.7 10.02C4.24 11.11 4 12.31 4 13.5V13.64C4 18.26 7.58 22 12 22C16.42 22 20 18.26 20 13.64V2ZM9.45 12.89L14 10V15.7C14 17.52 12.66 19 11 19C9.34 19 8 17.53 8 15.7C8 14.51 8.58 13.47 9.45 12.89Z" fill="#030303" />
                            </svg>
                            <span>Trending</span>
                        </NavLink>
                        <button className=" cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 4V13.38C11.27 12.54 10.2 12 9 12C6.79 12 5 13.79 5 16C5 18.21 6.79 20 9 20C11.21 20 13 18.21 13 16V8H19V4H12ZM9 19C7.34 19 6 17.66 6 16C6 14.34 7.34 13 9 13C10.66 13 12 14.34 12 16C12 17.66 10.66 19 9 19ZM18 7H13V5H18V7Z" fill="#030303" />
                            </svg>
                            <span>Music</span>
                        </button>
                        <button className=" cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 9.99998 12 9.99998C13.1 9.99998 14 10.9 14 12ZM8.48 8.44998L7.77 7.74998C6.68 8.82998 6 10.34 6 12C6 13.66 6.68 15.17 7.77 16.25L8.48 15.54C7.57 14.64 7 13.39 7 12C7 10.61 7.57 9.35998 8.48 8.44998ZM16.23 7.74998L15.52 8.45998C16.43 9.35998 17 10.61 17 12C17 13.39 16.43 14.64 15.52 15.55L16.23 16.26C17.32 15.17 18 13.66 18 12C18 10.34 17.32 8.82998 16.23 7.74998ZM5.65 5.62998L4.95 4.91998C3.13 6.72998 2 9.23998 2 12C2 14.76 3.13 17.27 4.95 19.08L5.66 18.37C4.02 16.74 3 14.49 3 12C3 9.50998 4.02 7.25998 5.65 5.62998ZM19.05 4.91998L18.34 5.62998C19.98 7.25998 21 9.50998 21 12C21 14.49 19.98 16.74 18.35 18.37L19.06 19.08C20.87 17.27 22 14.76 22 12C22 9.23998 20.87 6.72998 19.05 4.91998Z" fill="#030303" />
                            </svg>
                            <span>Live</span>
                        </button>
                        <button className=" cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10 12H8V14H6V12H4V10H6V8H8V10H10V12ZM17 12.5C17 11.67 16.33 11 15.5 11C14.67 11 14 11.67 14 12.5C14 13.33 14.67 14 15.5 14C16.33 14 17 13.33 17 12.5ZM20 9.5C20 8.67 19.33 8 18.5 8C17.67 8 17 8.67 17 9.5C17 10.33 17.67 11 18.5 11C19.33 11 20 10.33 20 9.5ZM16.97 5.15L12.47 7.68L11.98 7.95L11.49 7.68L6.99 5.15L3 7.39V13.82L11.98 18.86L20.96 13.82V7.39L16.97 5.15ZM16.97 4L21.96 6.8V14.4L11.98 20L2 14.4V6.8L6.99 4L11.98 6.8L16.97 4Z" fill="#030303" />
                            </svg>
                            <span>Gaming</span>
                        </button>
                        <button className=" cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11 11V17H7V11H11ZM12 10H6V18H12V10ZM3 3.03003V21H17L21 17V3.03003M20 4.00003V15.99L19.99 16H16V19.99L15.99 20H4V4.00003H20ZM18 8.00003H6V6.00003H18V8.00003ZM18 15H13V13H18V15ZM18 12H13V10H18V12Z" fill="#030303" />
                            </svg>
                            <span>News</span>
                        </button>
                        <button className=" cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 5V2H6V5H3V11L6.23 12.61C6.93 15.11 9.2 16.95 11.92 16.99L8 19V22H16V19L12.08 16.99C14.8 16.95 17.07 15.11 17.77 12.61L21 11V5H18ZM6 11.38L4 10.38V6H6V11.38ZM15 21H9V19.61L12 18.07L15 19.61V21ZM17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11V3H17V11ZM20 10.38L18 11.38V6H20V10.38Z" fill="#030303" />
                            </svg>
                            <span>Sports</span>
                        </button>
                        <button className=" cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16 21H13.72C13.37 21.6 12.74 22 12 22C11.26 22 10.62 21.6 10.28 21H8V20H16V21ZM20 10C20 12.96 18.39 15.54 16 16.92V19H8V16.92C5.61 15.54 4 12.96 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10ZM15 18V16.34L15.5 16.05C17.66 14.8 19 12.48 19 10C19 6.14 15.86 3 12 3C8.14 3 5 6.14 5 10C5 12.48 6.34 14.8 8.5 16.06L9 16.34V18H15Z" fill="#030303" />
                            </svg>
                            <span>Learning</span>
                        </button>
                        <button className=" cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.5 6.44V5.94C13.36 5.71 14 4.93 14 4C14 2.9 13.1 2 12 2C10.9 2 10 2.9 10 4H11C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5H11.5V6.44L4 13H6V19H7V21H8V19H10V22H11V19H13V21H14V19H15V16H18V13H20L12.5 6.44ZM6.66 12L12 7.33L17.34 12H6.66ZM14 18H7V13H14V18ZM15 15V13H17V15H15Z" fill="#030303" />
                            </svg>
                            <span>Fashion & Beauty</span>
                        </button>
                    </ul>
                    <ul className='browse'>
                        <button className=' cursor-not-allowed'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17 13H13V17H11V13H7V11H11V7H13V11H17V13ZM12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z" fill="#030303" />
                            </svg>
                            <span>Browse Channels</span>
                        </button>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;