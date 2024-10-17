const BASE_URL = 'https://swapi.dev/api/vehicles'

export const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

