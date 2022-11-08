import React, { useEffect, useState } from "react";

export default function StatusFilter({ selectedStatus, setSelectedStatus }) {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        const res = await fetch("http://www.mi6.test/api/statuses");
        const data = await res.json();
        setStatuses(data);
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
                              className="status__name"
                              onClick={() => {
                                  setSelectedStatus(status.id);
                              }}
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
