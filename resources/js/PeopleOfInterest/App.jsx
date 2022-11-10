import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PeoplePage from "./PeoplePage";

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
        // console.log(people);
    };
    useEffect(() => {
        loadPerson();
    }, [searchFor]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/people-of-interest"
                        element={
                            <PeoplePage
                                selectedStatus={selectedStatus}
                                setSelectedStatus={setSelectedStatus}
                                people={people}
                                setPeople={setPeople}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
