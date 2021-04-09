import React from 'react'
import {useSelector} from "react-redux";
import Gist from "./Gist/Gist";
import Loading from "./Loading";

const GistList = () => {

    const {gists, loading, error} = useSelector(state => state.gists);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <>
            <h1>Oops, could not find gists for you!</h1>
            <p>Reason: {error.message || 'Unknown'}</p>
        </>;
    }

    return (
        <>
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
