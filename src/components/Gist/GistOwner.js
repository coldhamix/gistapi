import React from 'react';
import styled from "styled-components";

const GistOwner = ({owner}) => {

    return <UserOwner href={owner.html_url} target={'_blank'} rel={'noreferrer'}>
        <UserAvatar src={owner.avatar_url} alt={owner.login}/>
        <UserName>{owner.login}</UserName>
    </UserOwner>

}

const UserOwner = styled.a`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

const UserAvatar = styled.img`
  border-radius: 50px;
  height: 40px;
  margin-right: 8px;
  width: 40px;
`;

const UserName = styled.span`
  color: #0366d6;
  font-size: 16px;
  font-weight: bold;
`;

export default GistOwner;
