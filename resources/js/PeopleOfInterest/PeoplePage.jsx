import React from "react";
import StatusFilter from "./StatusFilter";

export default function PeoplePage() {
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
