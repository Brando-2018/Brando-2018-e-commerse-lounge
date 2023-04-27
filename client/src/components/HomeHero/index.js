import React from "react";

import './style.css';

function HomeHero () {

    const title = "Humidor heaven"

    const description = "This is your very own all-inclusive website for your avid cigars needs and coinsurer essentials. With this website you’ll be able to buy cigars, humidors, hookahs, lighters, cutters, cases, ashtrays, and shirt!"; 


return (
<div className="HomeHero-container">
    <div>
        {title}
        <p>
        {description}
        </p>
    </div>
</div>            
);
};

export default HomeHero;