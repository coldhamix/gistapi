import React from 'react'
import {useSelector} from "react-redux";
import Gist from "./Gist/Gist";
import Loading from "./Loading";
import Error from "./Error";

const GistList = () => {

    const {gists, loading, error} = useSelector(state => state.gists);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error error={error}/>
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
