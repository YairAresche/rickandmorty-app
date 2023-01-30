import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CharacterListContainer from '../containers/CharacterListContainer/CharacterListContainer';
import EpisodesContainer from '../containers/EpisodesListContainer/EpisodesListContainer';
import NavBar from '../components/NavBar/NavBar';

const Home = () => {
    const [loadingEpisode, setLoadingEpisode] = useState(true);
    const [selectedCharacters1, setSelectedCharacters1] = useState(null);
    const [selectedCharacters2, setSelectedCharacters2] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const [commonEpisodes, setCommonEpisodes] = useState([])

    const handleSelectCharacter = (character, column) => {
        if (column === 1) {
            setSelectedCharacters1(character)
        }
        if (column === 2) {
            setSelectedCharacters2(character)
        }
    }

    useEffect(() => {
        if (selectedCharacters1 && selectedCharacters2) {
            const selectedCharacters = [selectedCharacters1, selectedCharacters2];
            Promise.all(selectedCharacters.map(character =>
                fetch(`https://rickandmortyapi.com/api/episode/${character.episodeId}`)
                    .then(resp => resp.json())
            ))
                .then(resp => {
                    setEpisodes(resp);
                    if (!Array.isArray(resp[0])) { resp[0] = [resp[0]] }
                    if (!Array.isArray(resp[1])) { resp[1] = [resp[1]] }
                    const common = resp[0].filter(element1 => {
                        return resp[1].find(element2 => element1.id === element2.id)
                    });
                    setCommonEpisodes(common)
                })
                .catch(error => console.log(error))
                .finally(() => setLoadingEpisode(false))

        }
    }, [selectedCharacters1, selectedCharacters2]);

    return (
        <>
            <NavBar />

            <Container fluid="xxl" className='characters-row'>
                <CharacterListContainer tittle={import.meta.env.VITE_TITTLE1} handleSelectCharacter={(character) => handleSelectCharacter(character, 1)} selectedCharacters={selectedCharacters1} />
                <CharacterListContainer tittle={import.meta.env.VITE_TITTLE2} handleSelectCharacter={(character) => handleSelectCharacter(character, 2)} selectedCharacters={selectedCharacters2} />
            </Container>

            {
                selectedCharacters1 && selectedCharacters2 ?
                    <EpisodesContainer episodesCharacter1={episodes[0]} episodesCharacter2={episodes[1]} commonEpisodes={commonEpisodes} selectedCharacters1={selectedCharacters1} selectedCharacters2={selectedCharacters2} loading={loadingEpisode} />
                    : <h4 className='text-center' >Select one character from each column</h4>
            }
        </>
    )
}

export default Home