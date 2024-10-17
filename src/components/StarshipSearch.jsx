import { useState } from "react"

const StarshipSearch = () => {

    const [searchData, setSearchData] = useState('')
    const [filter, setFilter] = useState('')
    
    const handleChange = (event) => {
        setSearchData(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
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