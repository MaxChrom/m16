import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function StatusFilter({ selectedStatus, setSelectedStatus }) {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        // const res = await fetch("/api/statuses");
        // const data = await res.json();
        // console.log(data)
        try {
            const res = await axios.get("/api/statuses")
            console.log(res)
            setStatuses(res.data);
        } catch (err) {
            console.log(err)
        }


    };

    useEffect(() => {
        loadStatuses();
    }, []);




    return (
        <div>
            <div className="status-filter">This is the status filter</div>

            {statuses
                ? statuses.map((status) => {

                    return (

                        <button
                            className={(status.id == selectedStatus) ? 'status__name status-filter__status--selected' : 'status__name'}
                            onClick={(e) => {
                                setSelectedStatus(status.id);
                                if (selectedStatus == status.id) {
                                    setSelectedStatus("")
                                } else {
                                    setSelectedStatus(status.id)
                                }
                            }
                            }
                            key={status.id}
                        >
                            {status.name}
                        </button>
                    );
                })
                : null}
        </div>
    );
}
