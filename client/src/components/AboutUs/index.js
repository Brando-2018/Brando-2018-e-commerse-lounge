import React from "react";

function AboutUs () {
  // Define the data for the footer
  const description = "This is your very own all-inclusive website for your avid cigars needs and coinsurer essentials. With this website you’ll be able to buy cigars, humidors, hookahs, lighters, cutters, cases, ashtrays, and shirts!"; 

  const title = "About Humidor Heaven";

  const columns = [{
    title: "Contribution Contacts",
    resources: [{
      name: "Brandon T",
      link: "/brand560on@gmail.com"
    },{
      name: "Manuela R",
      link: "/Manuela@gmail.com"
    },{
      name: "john K",
      link: "/jkutch2@yahoo.com"
    },{
      name: "Item 4",
      link: "/item4"
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
  }];

//   return <
//     description={description}
//     title={title}
//     columns={columns}
//   />;
    return(
        <h1>{AboutUs()}</h1>
    );
}

export default AboutUs;