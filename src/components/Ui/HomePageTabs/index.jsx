import React, {useState} from 'react';
import './style.scss';

const HomeTabs = () => {
    const tabItems = ['All', 'Live', 'Music', 'Gaming', 'Background Music', 'Game Shows', 'Camping', 'Crismats decorations', 'Quarterbacks', 'Comedy', 'Action-adventure game', 'Pop Music', 'Recently uploaded'];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className='tabs'>
            <ul className="tab-list">
                {tabItems.map((tab, index) => (
                    <li
                        key={index}
                        className={index === activeTab ? 'active-tab' : ''}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            {/* <div className="tab-content">
                {tabItems[activeTab]}
            </div> */}
        </div>
    )
}

export default HomeTabs;