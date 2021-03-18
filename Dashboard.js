import React from 'react'
import About from './About'
import Explore from './Explore'
import FeedBack from './FeedBack'
import Home from './Home'
import NabBar from './NabBar'
import PeerLearn from './PeerLearn'
import Register from './Register'

function Dashboard() {
    return (
        <div>
        <NabBar />
             <Home />
             <PeerLearn />
            <Explore />

            <FeedBack />

            {/* <Register /> */}
            <About />
        </div>
    )
}

export default Dashboard
