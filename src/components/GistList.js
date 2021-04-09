import React from 'react'
import {useSelector} from "react-redux";
import Gist from "./Gist";

const GistList = () => {

    const {
        gists,
        loading,
        error,
        searchQuery
    } = useSelector(state => state.gists);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <>
            <h1>Oops, could not find gists for you!</h1>
            <p>Reason: {error.message || 'Unknown'}</p>
        </>;
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
