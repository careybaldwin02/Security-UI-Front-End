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
                <iframe src="https://drive.google.com/file/d/1tw6-4ywS-TZTBgjvF0bQwfDnXCPt8yV0/preview" width="640" height="480"></iframe>
            </div>
            <div>
            </div>
        </div>
    )};

export default VideoSummary;