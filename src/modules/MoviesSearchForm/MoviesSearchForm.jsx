import { useState } from "react";

export const MovieSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search:''
    })

    const handleChanges = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state, 
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ ...state });
        setState({ search:''})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >
                <input name="search" type="text" onChange={handleChanges} value={state.search } placeholder="Enter your favorite movie" required/>
                <button type="submit">Search movie</button>
            </label>
        </form>
    )
}
