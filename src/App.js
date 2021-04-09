import styled from 'styled-components'
import Header from "./components/Header";
import GistList from "./components/GistList";
import GlobalStyles from "./GlobalStyle";
import {Provider} from 'react-redux';
import {store} from "./state/store";

const App = () => {
    return (
        <Provider store={store}>
            <Wrapper className="App" data-testid="app">
                <Header/>
                <GistList/>
                <GlobalStyles/>
            </Wrapper>
        </Provider>
    );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
