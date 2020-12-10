import React from 'react';

import './homepage.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Test1</h1>
                    <span className='subtitle'>Kjøp nå</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Test2</h1>
                    <span className='subtitle'>Kjøp nå</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Test3</h1>
                    <span className='subtitle'>Kjøp nå</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Dame</h1>
                    <span className='subtitle'>Kjøp nå</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Mann</h1>
                    <span className='subtitle'>Kjøp nå</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;