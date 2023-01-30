
import Episode from '../Episode/Episode'

import './EpisodeList.css'

const EpisodesList = ({ episodesCharacter }) => {

    return (
        
        <ul className='episode-list' >
            {episodesCharacter ? episodesCharacter.map(episode => <Episode key={episode.id} episode={episode} />) : ""}
        </ul>
    )
}

export default EpisodesList