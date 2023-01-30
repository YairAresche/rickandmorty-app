import Character from '../Character/Character';
import Loader from '../Loader/Loader';

import './CharacterList.css'

const CharacterList = ({ characters, handleSelectCharacter, loading, selectedCharacters }) => {
    return (
        <ul className='character-list'>
            {
                loading ? <Loader /> : characters.map(character => <Character key={character.id} character={character} handleSelectCharacter={handleSelectCharacter} selectedCharacters={selectedCharacters} />)
            }
        </ul>
    )
}

export default CharacterList