
import { memo } from 'react'
import { TbCross } from "react-icons/tb";
import { BiQuestionMark } from "react-icons/bi";
import { SlEmotsmile } from "react-icons/sl";
import { Card, CardImg } from 'react-bootstrap'

import './Character.css'

const Character = memo(({ character, handleSelectCharacter, selectedCharacters }) => {

    return (
        <Card onClick={() => { handleSelectCharacter(character === selectedCharacters ? null : character) }}
            className={`character-card ${character === selectedCharacters ? 'selected' : ''} `}
        >
            <CardImg src={character.image} />
            <Card.Body className='character-card-info'>
                <Card.Title className='name-no-wrap'> {character.name} </Card.Title>
                <div className='icon-status'>
                    {character.status === 'Dead' ? <TbCross /> : character.status === 'unknown' ? <BiQuestionMark /> : <SlEmotsmile />}
                </div>
                <Card.Text>{character.status} - {character.species}</Card.Text>
            </Card.Body>
        </Card>
    )
})

export default Character