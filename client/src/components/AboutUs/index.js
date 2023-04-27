import React from "react";
import './style.css';
import { Link } from "react-router-dom";

function AboutUs () {
  // Define the data for the footer
  const title = "About Us";

    const description = "This is your very own all-inclusive website for your avid cigars needs and coinsurer essentials. With this website you’ll be able to buy cigars, humidors, hookahs, lighters, cutters, cases, ashtrays, and shirts!"; 

  const columns = [{
    title: "Contribution Contacts",
    resources: [{
      name: "Brandon T",
      link: "brand560on@gmail.com"
    },{
      name: "Manuela R",
      link: "Manuela@gmail.com"
    },{
      name: "john K",
      link: "jkutch2@yahoo.com"
    },{
      name: "Item 4",
      link: "item4"
    }]
  },{
    title: "Column 2",
    resources: [{
      name: "Item 5",
      link: "/item5"
    },{
      name: "Item 6",
      link: "/item6"
    }]
  },{
    title: "Column 3",
    resources: [{
      name: "Item 7",
      link: "/item7"
    },{
      name: "Item 8",
      link: "/item8"
    }]
  }]

return (
    <div className="AboutUs-container">
        <div>
            <h1>
            {title}
            </h1>
            <p>
            {description}
            </p>
                <div className="contact">
                {columns.map((c) => (    
                    <div>
                        {c.title}

                    {c.resources.map((e) =>(
                        <div>
                        {e.name}
                        <Link to={e.link}>
                            <p>{e.link}</p>
                        </Link>
                        </div>
                    ))}   
                    </div>
                ))}
                </div>
        </div>
    </div>
);
};

export default AboutUs;