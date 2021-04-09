import React from "react";
import GistOwner from "./GistOwner";
import GistLink from "./GistLink";
import GistTime from "./GistTime";
import styled from "styled-components";

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

export default Gist
