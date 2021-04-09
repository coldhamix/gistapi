import React from 'react';
import styled from "styled-components";
import Octicon from 'react-octicon';
import PropTypes from "prop-types";

const GistLink = ({icon, text, href}) => (
    <Link href={href} target={'_blank'} rel={'noreferrer'}>
        <Octicon name={icon}/>
        <LinkText>{text}</LinkText>
    </Link>
)

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

GistLink.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
};

export default GistLink;
