import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
import EpisodesList from '../../components/EpisodesList/EpisodesList';

import './EpisodesListContainer.css'

const EpisodesListContainer = ({ episodesCharacter1, episodesCharacter2, commonEpisodes, selectedCharacters1, selectedCharacters2, loading }) => {

    // console.log(selectedCharacters1);
    // console.log(selectedCharacters2);

    return (
        loading ? <Container fluid="xl" className='text-center'> <Spinner /> </Container>
        :
        <Container fluid="xl" className="episodes-list-container">
            {
                    <>
                        <div>
                            <h4>{selectedCharacters1.name} - Only Episodes</h4>
                            {<EpisodesList episodesCharacter={episodesCharacter1} />}
                        </div>

                        <div>
                            <h4>Characters - Shared Episodes</h4>
                            {<EpisodesList episodesCharacter={commonEpisodes} />}
                        </div>

                        <div>
                            <h4>{selectedCharacters2.name} - Only Episodes</h4>
                            {<EpisodesList episodesCharacter={episodesCharacter2} />}
                        </div>
                    </>
            }
        </Container>
    )
}

export default EpisodesListContainer