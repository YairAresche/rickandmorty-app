import React from 'react'
import { Spinner } from 'react-bootstrap';
import Character from '../Character/Character';

import './CharacterList.css'

const CharacterList = ({ characters, handleSelectCharacter, loading, selectedCharacters }) => {
    return (
        <ul className='character-list'>
            {
                loading ? <Spinner /> : characters.map(character => <Character key={character.id} character={character} handleSelectCharacter={handleSelectCharacter} selectedCharacters={selectedCharacters} />)
            }
        </ul>
    )
}

export default CharacterList