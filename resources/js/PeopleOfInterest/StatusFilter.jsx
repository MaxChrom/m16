import React, { useEffect, useState } from "react";

export default function StatusFilter() {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        const res = await fetch("https://www.mi6.test/api/statuses");
        const data = await res.json();
        setStatuses(data);
    };

    useEffect(() => {
        loadStatuses();
    });

    return (
        <div>
            <div className="status-filter">This is the status filter</div>
            
            {statuses ? statuses.map(status => { 
                return <div className="status__name">{status.name}</div>
            } : null}
        </div>
    );
}
