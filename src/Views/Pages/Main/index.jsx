import React from 'react'
import { PageWrapper } from '../../Styles/style'
import Header from '../../Components/Header'
import AboutSection from '../../Components/S2_About'
import Tokenomics from '../../Components/Tokenomics'
import HowToBuy from '../../Components/Howtobuy'
import Footer from '../../Components/Footer'

const MainPage = (props) => {
  return (
    <PageWrapper>
        {/* <LockerMenu /> */}
        <Header />
        <AboutSection/>
        <Tokenomics></Tokenomics>
        <HowToBuy />
        <Footer />
    </PageWrapper>
  )
}

export default MainPage