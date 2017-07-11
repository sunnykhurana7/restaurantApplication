import React , { Component } from 'react';
import Foodimage from './images/1.jpg'
class Banner extends React.Component {
    render(){
        return (
            <div className="Banner">
                <img src={Foodimage} alt="No image" />
                <div className="BannerText">
                    <h1>Delicious food from the</h1>
                    <h3>best chefs for you.</h3>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Enter Your Area Name" />
                    <input type="submit" value="Search" />
                </div>
            </div>
        )
    }
}

export default Banner;