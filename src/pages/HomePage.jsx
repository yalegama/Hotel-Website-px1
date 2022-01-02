import React from 'react'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers/Offers'
import Destination from '../components/OurDestinationa/Destination'
import Slider from '../components/slider/Slider'
import SearchBar from '../components/Search/SearchBar'

function HomePage() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Slider/>
            <SearchBar/>
            <Destination/>
            <Experience/>
            <Offers/>
            <Footer/>
        </div>
    )
}

export default HomePage
