import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import About from "./components/PageContent/About";
import ButtonsMedia from "./components/PageContent/ButtonsMedia";
import Plans from "./components/PageContent/Plans";
import WhoI from "./components/PageContent/WhoI";
import Results from "./components/Results/Results";
import Footer from "./components/PageContent/Footer";
import { GlobalStyle } from "./components/UI/GlobalStyles";
import ButtonTop from "./components/PageContent/ButtonTop";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <ButtonsMedia />
      <About />
      <Plans />
      <Results />
      <ButtonTop />
      <Footer />
    </>
  );
}

export default App;
