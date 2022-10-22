import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles'
import {light} from './Styles/Themes'

import Navigation from './components/Navigation'
import Footer from './components/Footer';
import About from './components/sections/About';
import Faq from './components/sections/Faq';
import Home from './components/sections/Home';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';

function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />

      </ThemeProvider>
    </>
  );
}

export default App;
