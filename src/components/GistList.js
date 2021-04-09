import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {loadGists} from "../state/gistsSlice";
import Gist from "./Gist";

const GistList = () => {

    const {gists, loading, error, searchQuery} = useSelector(state => state.gists);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGists());
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error happened, try again</h1>;
    }

    return (
        <>
            <h1>{searchQuery ? `Gists for user: ${searchQuery}` : 'Public gists'}</h1>
            {
                gists.map(gist => <Gist
                    key={gist.id}
                    gist={gist}
                />)
            }
        </>
    );
}

export default GistList
