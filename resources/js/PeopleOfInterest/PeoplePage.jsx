import React from "react";
import StatusFilter from "./StatusFilter";
import { Link } from "react-router-dom";

export default function PeoplePage({
    selectedStatus,
    setSelectedStatus,
    people,
    setPeople,
}) {
    return (
        <div>
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
                    return (
                        <div>
                            <div>{person.name}</div>
                            {person.missions.map((mission) => {
                                return (
                                    <p>
                                        {mission.name}{" "}
                                        <Link to={"/mission/" + mission.id}>
                                            EDIT
                                        </Link>
                                    </p>
                                );
                            })}
                        </div>
                    );
                })
                : null}
        </div>
    );
}
