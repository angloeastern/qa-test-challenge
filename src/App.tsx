import { Provider as ThemeProvider } from '@context/Theme';
import GlobalStyle from '@components/GlobalStyles';
import Layout from '@components/Layout';
import Banner from '@components/Banner';
import CalcBox from '@components/CalcBox';
import SC from './style';

function App() {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <Layout>
          <SC.Container>
            <Banner />
            <CalcBox />
          </SC.Container>
        </Layout>
      </>
    </ThemeProvider>
  );
}

export default App;
