import { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Episode from '../Episode/Episode'

import './EpisodeList.css'

const EpisodesList = ({ episodesCharacter }) => {
    // console.log(episodesCharacter);

    return (
        
        <ul className='episode-list' >
            {episodesCharacter ? episodesCharacter.map(episode => <Episode episode={episode} />) : ""}
        </ul>
    )
}

export default EpisodesList