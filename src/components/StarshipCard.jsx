const StarshipCard = (props) => {
    return (
            <li key={props.starship.name}>
                    <p><strong>{props.starship.name}</strong></p>
                    <p>Class: {props.starship.vehicle_class}</p>
                    <p>Manufacturer: {props.starship.manufacturer}</p>
                    <p>Model: {props.starship.model}</p>
                </li>
    )
}

export default StarshipCard