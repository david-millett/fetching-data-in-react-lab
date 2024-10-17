const StarshipCard = (props) => {
    return (
        <>
            {props.starships.map((starship) => {
                return <li key={starship.name}>
                    <p><strong>{starship.name}</strong></p>
                    <p>Class: {starship.vehicle_class}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Model: {starship.model}</p>
                </li>
            })}
        </>
    )
}

export default StarshipCard