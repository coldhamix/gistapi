import React from "react";
import GistOwner from "./GistOwner";
import GistLink from "./GistLink";
import GistTime from "./GistTime";
import styled from "styled-components";
import PropTypes from "prop-types";

const Gist = ({gist}) => {
    return <Container>
        <GistInfo>
            <GistOwner owner={gist.owner}/>
            <GistInfoList>
                <GistLink icon={'code'} href={gist.html_url}
                          text={`${Object.keys(gist.files).length} Files`}
                />
                <GistLink icon={'repo-forked'} href={gist.forks_url}
                          text={`Forks`}
                />
                <GistLink icon={'comment'} href={gist.comments_url}
                          text={'Comments'}
                />
                <GistLink icon={'star'} text={`Stars`}/>
            </GistInfoList>
        </GistInfo>
        <GistTime
            created_at={gist.created_at}
            updated_at={gist.updated_at}
        />
        <GistDescription>{gist.description}</GistDescription>
        <GistFiles>
            {
                Object.values(gist.files).map(
                    file => <GistLink key={file.raw_url}
                                      icon={'file'} href={file.raw_url}
                                      text={file.filename}/>
                )
            }
        </GistFiles>
    </Container>
}

const Container = styled.div`
  border-top: 1px solid #ececec;
  margin: 0 auto;
  padding: 20px 0 30px;
  width: 800px;
`

const GistInfo = styled.div`
  display: flex;
`;

const GistInfoList = styled.div`
  display: flex;
  margin-left: auto;
`;

const GistDescription = styled.div`
  color: #6c6c6c;
  font-size: 20px;
  margin: 15px 0;
`;

const GistFiles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

Gist.propTypes = {
    gist: PropTypes.shape({
        owner: PropTypes.shape({
            html_url: PropTypes.string,
            avatar_url: PropTypes.string,
            login: PropTypes.string,
        }),
        html_url: PropTypes.string,
        forks_url: PropTypes.string,
        comments_url: PropTypes.string,
        description: PropTypes.string,
        created_at: PropTypes.string,
        updated_at: PropTypes.string,
        files: PropTypes.objectOf(PropTypes.shape({
            raw_url: PropTypes.string,
            filename: PropTypes.string,
        })),
    }),
}

export default Gist
