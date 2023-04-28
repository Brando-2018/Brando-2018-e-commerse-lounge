import React from "react";
import myImage from '../../assets/image/cigarlanding.jpg';
import './style.css';

function HomeHero () {


    const description = "This is your very own all-inclusive website for your avid cigars needs and coinsurer essentials. With this website you’ll be able to buy cigars, humidors, hookahs, lighters, cutters, cases, ashtrays, and shirt!"; 

return (
<div className="HomeHero-container">
    <div>
        <img className="hero-image" src={myImage} alt="cigarlanding.jpg" />
        <p>
        {description}
        </p>
    </div>
</div>            
);
};

export default HomeHero;