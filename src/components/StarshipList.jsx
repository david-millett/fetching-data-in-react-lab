import StarshipCard from "./StarshipCard.jsx"

const StarshipList = (props) => {
    const filteredStarships = props.starships.filter(starship => {
        return starship.name === props.filter
    })

    return (
        <>

            <h2>Starships</h2>

            {props.filter 
            ? <>
                <p>Number of results: {filteredStarships.length}</p>
                <ul>
                    {filteredStarships.map((starship) => {
                    return <StarshipCard key={starship.name} starship={starship} />
                })}
                </ul>
            </>

            : <>
                <p>Number of results: {props.starships.length}</p>
                <ul>
                    {props.starships.map((starship) => {
                        return <StarshipCard key={starship.name} starship={starship} />
                    })}
                </ul>
            </>
        }

        </>
    
    )
}

export default StarshipList