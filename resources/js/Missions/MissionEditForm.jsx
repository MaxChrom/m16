import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MissionEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [data, setData] = useState({
        'id': '',
        'name': '',
        'year': '',
        'outcome': ''
    });

    const [successMessage, setSuccessMessage] = useState(null)

    const loadMission = async () => {
        const response = await axios.get('/api/mission/' + id);
        setData(response.data);
    }


    const handleSubmit = async () => {
        try {

            const response = await axios.post('/api/mission/store', data);
            setData({
                ...data,
                id: response.data.mission.id
            })
            console.log(response.data);
            setSuccessMessage("Mission was saved!")
            navigate('/missions/' + response.data.mission.id)

        } catch (error) {

            console.log(error.status)
            console.log(error)

        }



    }


    useEffect(() => {
        if (id) {
            loadMission();
        }
    }, []);

    const handleChange = (event) => {
        setData(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });

        });
    }

    return (
        <form action="" method="post">
            {
                successMessage ? (<div className="successMessage">{successMessage}</div>) : ""
            }
            <br />

            Name:<br />
            <input type="text" name="name" value={data.name} onChange={handleChange} />
            <br />

            Year:<br />
            <input type="number" name="year" value={data.year} onChange={handleChange} />
            <br />

            Outcome:<br />
            <select name="outcome" value={data.outcome} onChange={handleChange}>
                <option value="">Not known</option>
                <option value="1">Success</option>
                <option value="0">Failure</option>
            </select>
            <br />

            <br />
            <button onClick={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>SUBMIT</button>

        </form>
    )
}

export default MissionEditForm;