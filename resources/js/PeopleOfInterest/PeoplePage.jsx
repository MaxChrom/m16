import React from "react";
import StatusFilter from "./StatusFilter";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PeoplePage({
    selectedStatus,
    setSelectedStatus,
    people,
    setPeople,
}) {
    const sendEmail = async () => {
        const response = await axios.get('/api/sendTestEmail')
        console.log(response.status)
    }
     const sendNotification = async () => {
        const response = await axios.get('/api/sendNotification')
        console.log(response.status)
    }
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
            <button onClick={(e) => {
                e.preventDefault()
                sendEmail()
            }}>SEND TEST EMAIL</button>

            <button onClick={(e) => {
                e.preventDefault()
                sendNotification()
            }}>SEND TEST NOTIFICATION</button>

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
