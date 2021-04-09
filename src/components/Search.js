import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import useDebounce from "../util/use-debounce";
import {useDispatch} from "react-redux";
import {loadGists} from "../state/slice/gists";

const Search = () => {

    const dispatch = useDispatch();

    const [query, setQuery] = useState('');

    /*
     * We debounce the value of the controlled search input here to 300ms to reduce amount of requests to the API.
     * It will fire only after 300ms after the last keystroke when there are no subsequent keystrokes.
     * Otherwise we would spam too much requests to the backend, each time when user types next character.
     */
    const debouncedQuery = useDebounce(query, 300);
    useEffect(() => {
        dispatch(loadGists(debouncedQuery));
    }, [debouncedQuery, dispatch]);

    return (
        <Wrapper>
            <InputBox>
                <Octicon name="search"/>
                <Input
                    placeholder="Search Gists for the username"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
            </InputBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search
