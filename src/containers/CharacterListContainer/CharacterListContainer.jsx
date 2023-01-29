import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import CharacterList from '../../components/CharacterList/CharacterList';
import Pagination from '../../components/Pagination/Pagination';

import './CharacterListContainer.css'

const CharacterListContainer = ({ tittle, handleSelectCharacter, selectedCharacters}) => {

    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(resp => resp.json())
            .then(resp => {
                const characters = resp.results;
                characters.map(character => { // added a new property to each character
                    character.episodeId = character.episode.map(e => Number(e.split('/')[e.split('/').length - 1])) // cut ID from each episode(string) and change the string to number
                })
                setCharacters(resp.results);
                setMaxPage(resp.info.pages)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [page])

    return (
        <Container fluid="xxl" className='character-list-container'>
            <h4 className='tittle-main'>{tittle}</h4>
            <CharacterList characters={characters} handleSelectCharacter={handleSelectCharacter} loading={loading} selectedCharacters={selectedCharacters} />
            <Pagination page={page} setPage={setPage} maxPage={maxPage} />
        </Container>
    )
}

export default CharacterListContainer