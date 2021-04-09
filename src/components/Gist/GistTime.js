import React from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import styled from 'styled-components';

const GistTime = ({updated_at, created_at}) => {
    const formattedCreatedAt = format(parseISO(created_at), 'MM/dd/yyyy');
    const formattedUpdatedAt = format(parseISO(updated_at), 'MM/dd/yyyy');
    return <TimeRow>
        <TimeEntry>Created at: {formattedCreatedAt}</TimeEntry>
        <TimeEntry>Last updated: {formattedUpdatedAt}</TimeEntry>
    </TimeRow>
}

const TimeRow = styled.div`
  margin-top: 10px;
`;

const TimeEntry = styled.span`
  color: gray;
  margin-right: 10px;
`

export default GistTime;
