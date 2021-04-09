import React from 'react';
import styled from "styled-components";
import Octicon from 'react-octicon';

const GistLink = ({icon, text, href}) => {

    return (
        <Link href={href} target={'_blank'} rel={'noreferrer'}>
            <Octicon name={icon}/>
            <LinkText>{text}</LinkText>
        </Link>
    );

}

const Link = styled.a`
  align-items: center;
  color: #0366d6;
  display: flex;
  font-size: 16px;
  justify-content: center;
  margin-left: 20px;
  text-decoration: none;
`;

const LinkText = styled.span`
  margin-left: 5px;
`;


export default GistLink;
