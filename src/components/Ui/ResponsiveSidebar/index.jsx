import React from 'react';
import "./style.scss";

const ResponsiveSidebar = () => {
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
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/shorts'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                                    <path d="M10 14.65V9.35001L15 12L10 14.65ZM17.77 10.32L16.57 9.82001L18 9.06001C19.84 8.10001 20.53 5.83001 19.56 4.00001C18.59 2.17001 16.32 1.47001 14.49 2.44001L6.00001 6.94001C4.71001 7.62001 3.93001 8.98001 4.00001 10.43C4.07001 11.85 4.93001 13.1 6.22001 13.68C6.25001 13.69 7.42001 14.18 7.42001 14.18L6.00001 14.93C4.17001 15.9 3.47001 18.17 4.44001 20C5.41001 21.83 7.68001 22.53 9.51001 21.56L18.01 17.06C19.3 16.38 20.07 15.02 20 13.57C19.93 12.15 19.06 10.89 17.77 10.32ZM17.54 16.18L9.04001 20.68C7.70001 21.39 6.03001 20.88 5.32001 19.54C4.61001 18.2 5.12001 16.53 6.46001 15.82L8.50001 14.74V13.53L7.81001 13.25L6.70001 12.79C5.71001 12.38 5.05001 11.44 5.00001 10.38C4.95001 9.32001 5.52001 8.32001 6.46001 7.82001L14.96 3.32001C16.3 2.61001 17.97 3.12001 18.68 4.46001C19.39 5.80001 18.88 7.47001 17.54 8.18001L15.5 9.26001V10.47L17.3 11.21C18.29 11.62 18.95 12.56 19 13.62C19.05 14.68 18.48 15.68 17.54 16.18Z" fill="#000000" />
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/feed/subscriptions'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z" fill="#030303" />
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default ResponsiveSidebar