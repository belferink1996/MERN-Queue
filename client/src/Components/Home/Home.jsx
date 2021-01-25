import { Fragment } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import About from './About/About';
import Features from './Features/Features';
import Donate from './Donate/Donate';
import Footer from './ContactFooter/Footer';

export default function Home({ isHost }) {
  return (
    <Fragment>
      <LandingPage isHost={isHost} />
      <About />
      <Features />
      <Donate />
      <Footer />
    </Fragment>
  );
}
