import { useState, useEffect } from "react"

export default function App() {

    const [searchFor, setSearchFor] = useState()
    console.log(searchFor)
    const loadPerson = async () => {
        const response = await fetch('http://www.mi6.test/people-of-interest/api')
        const data = await response.json()
        console.log(data)
    }
    useEffect(() => {
        loadPerson()
    }, [searchFor])

    return (
        <div className="search">
            <input type="text" onChange={(e) => setSearchFor(e.target.value)} />
        </div>
    )
}