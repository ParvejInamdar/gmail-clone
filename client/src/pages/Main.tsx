import React from 'react';
import Header from '../components/Header/Header.tsx';
import Sidebar from '../components/Sidebar/Sidebar.tsx';

const Main = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Sidebar />
                <div>All Mails</div>
            </div>
        </div>
    )
}

export default Main;