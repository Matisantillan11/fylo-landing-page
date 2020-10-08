import React, {Component} from 'react'
import Footer from '../components/footer';
import Hero from '../components/hero'
import Navbar from '../components/navBar';
import Services from '../components/services';


import './styles/home.css'
class Home extends Component{
    render(){
        return (
            <div>
                <Navbar />
                <Hero />
                <Services />
                <Footer />
            </div>
            )
    }
}

export default Home;