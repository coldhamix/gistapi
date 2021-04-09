import React from 'react'
import {useSelector} from "react-redux";
import Gist from "./Gist/Gist";
import Loading from "./Loading";
import Error from "./Error";
import styled from "styled-components";

const GistList = () => {

    const {gists, loading, error, searchQuery} = useSelector(state => state.gists);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <>
            {
                gists.length > 0 && gists.map(gist => <Gist
                    key={gist.id}
                    gist={gist}
                />)
            }
            {
                !gists.length && <NoGists>User "{searchQuery}" has no gists</NoGists>
            }
        </>
    );
}

const NoGists = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
`;


export default GistList
