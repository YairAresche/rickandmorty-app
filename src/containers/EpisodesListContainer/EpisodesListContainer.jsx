import { Container } from 'react-bootstrap'
import EpisodesList from '../../components/EpisodesList/EpisodesList';
import Loader from '../../components/Loader/Loader';

import './EpisodesListContainer.css'

const EpisodesListContainer = ({ episodesCharacter1, episodesCharacter2, commonEpisodes, selectedCharacters1, selectedCharacters2, loading }) => {

    return (
        loading ? <Container fluid="xl" className='text-center'> <Loader /> </Container>
        :
        <Container fluid="xl" className="episodes-list-container">
            {
                    <>
                        <div>
                            <h4>{selectedCharacters1.name} - Only Episodes ({episodesCharacter1.length}) </h4>
                            {<EpisodesList episodesCharacter={episodesCharacter1} />}
                        </div>

                        <div>
                            <h4>Characters - Shared Episodes ({commonEpisodes.length}) </h4>
                            {<EpisodesList episodesCharacter={commonEpisodes} />}
                        </div>

                        <div>
                            <h4>{selectedCharacters2.name} - Only Episodes ({episodesCharacter2.length}) </h4>
                            {<EpisodesList episodesCharacter={episodesCharacter2} />}
                        </div>
                    </>
            }
        </Container>
    )
}

export default EpisodesListContainer