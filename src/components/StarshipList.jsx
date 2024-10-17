import StarshipCard from "./StarshipCard"

const StarshipList = (props) => {
    return (
        <>
            <h2>Starships</h2>
            <p>Number of results: {props.starships.length}</p>
        <ul>
            <StarshipCard starships={props.starships} />
        </ul>
        </>
    
    )
}

export default StarshipList