import React from "react";
import GistOwner from "./GistOwner";

const Gist = ({gist}) => {
    return <div>
        <GistOwner owner={gist.owner}/>
        <h3>{gist.description}</h3>
        <pre>{JSON.stringify(gist, null, 2)}</pre>
    </div>
}

export default Gist
