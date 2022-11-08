import { useState, useEffect } from "react";
import StatusFilter from "./StatusFilter";

export default function App() {
    const [searchFor, setSearchFor] = useState();
    const [selectedStatus, setSelectedStatus] = useState("");

    const loadPerson = async () => {
        const response = await fetch(
            "http://www.mi6.test/people-of-interest/api"
        );
        const data = await response.json();
    };
    useEffect(() => {
        loadPerson();
    }, [searchFor]);

    useEffect(() => {
        console.log(selectedStatus);
    }, [selectedStatus]);

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
        </>
    );
}
