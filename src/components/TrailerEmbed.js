import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

export const TrailerEmbed = () => {

    return (
        <div id="trailer-embed">
            <h3> Haunted House Project</h3>
            <div className="player">
                <ReactPlayer
                    className='react-player'
                    width='100%'
                    height='100%'
                    url='https://www.youtube.com/watch?v=5KCUT1os_ug'
                    playing={true}
                    muted={true}
                    controls={true}
                />
            </div>
            
            <div className="btn-wrap">
                <Link to="/startgame"><button>Are You Ready?</button></Link>
            </div>
        </div>
    )
}
