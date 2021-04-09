import React from 'react';

const GistOwner = ({owner}) => {

    return <div>
        <a href={owner.html_url} target={'_blank'}>
            <img src={owner.avatar_url} alt={owner.login}/>
            <span>{owner.login}</span>
        </a>
    </div>

}

export default GistOwner;
