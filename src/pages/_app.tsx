import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";

import { Header } from "components/Header";
import { AppNavigation } from "components/AppNavigation";
import { PageBox } from "components/PageBox";

import { theme } from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <AppNavigation />
      <PageBox>
        <Component {...pageProps} />
      </PageBox>
    </ThemeProvider>
  );
}

export default MyApp;
