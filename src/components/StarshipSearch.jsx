import { useState } from "react"

const StarshipSearch = (props) => {

    const [searchData, setSearchData] = useState('')
    
    const handleChange = (event) => {
        setSearchData(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setFilter(searchData)
        console.log(searchData)
        setSearchData('')
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search term:</label>
                <input
                    id="search"
                    type="text"
                    name="search"
                    value={searchData}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
        </>
        
    )
}

export default StarshipSearch