import React from 'react'
import { useParams } from 'react-router-dom';

function MissionEditForm() {
    const { missionId } = useParams();
    const [data, setData] = useState({
        "name": null,
        "year": null,
        "outcome": null
    });

    const handleChange = (event) => {
        setValues(previous_values => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form action="" method="post">

            <input type="text" name="name" value={data.name} onChange={handleNameChange} />
            <input type="number" name="year" value={data.year} onChange={handleNameChange} />
            <select name="outcome">
                <option value={true}>Success</option>
                <option value={false}>Failure</option>
            </select>

        </form>
    )
}

export default MissionEditForm