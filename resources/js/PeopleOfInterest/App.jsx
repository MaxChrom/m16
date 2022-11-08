import { useState, useEffect } from "react";
import StatusFilter from "./StatusFilter";

export default function App() {
    const [searchFor, setSearchFor] = useState();
    const [selectedStatus, setSelectedStatus] = useState();
    const [people, setPeople] = useState([]);

    const loadPerson = async () => {
        const response = await fetch(
            "http://www.mi6.test/people-of-interest/api"
        );
        const data = await response.json();

        setPeople(data);
        console.log(people);
    };
    useEffect(() => {
        loadPerson();
    }, [searchFor]);

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    onChange={(e) => setSearchFor(e.target.value)}
                />
            </div>
            <StatusFilter
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />

            {people
                ? people.map((person) => {
                      return <div>{person.name}</div>;
                  })
                : null}
        </>
    );
}
