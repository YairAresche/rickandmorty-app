import { memo } from "react"

const Episode = memo(({ episode }) => {
    
        return (
            <>
                <li>
                    {episode.episode} - {episode.name} - {episode.air_date}
                </li>
            </>
        )
    }
)

export default Episode