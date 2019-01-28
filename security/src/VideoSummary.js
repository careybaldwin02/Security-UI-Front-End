import React from 'react';
import SideBar from './SideBar.js';
import Header from './Header';
import './App.css';
import VideoOverview from './VideoOverview';

const VideoSummary = () => {
    return (
        <div className = "container">
            <div>
                <SideBar />
                <Header />
            </div>
            <div className = "docs">
                <VideoOverview />
            </div>
        </div>
    )};

export default VideoSummary;