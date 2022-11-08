import React from "react";
import { useParams } from "react-router-dom";

export default function MissionEditForm() {
    const { missionId } = useParams();

    console.log(missionId);

    const [data, setData] = useState({
        name: null,
        year: null,
        outcome: null,
    });

    const handleChange = (event) => {
        setData((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };
    return (
        <form action="" method="post">
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <input
                type="number"
                name="year"
                value={data.year}
                onChange={handleChange}
            />
            <select name="outcome">
                <option value="true">Success</option>
                <option value="false">Failure</option>
            </select>
        </form>
    );
}
