import React , { Component } from  'react'
import Banner from './Banner'
import './index.css'

class Homepage extends Component {
    render(){
        return (
            <div className="mainwrapper">
                <Banner/>
            </div>
        )
    }
}

export default Homepage