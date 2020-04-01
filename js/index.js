function onLoadListener() {


     const listOfImages = [
           "./img/wind.jpg",
           "./img/solar.jpg",
           "./img/biomass.jpg"
        ];

     const images = [];
     for (let i = 0; i < listOfImages.length; i++) {
         images[i] = new Image();
         images[i].src = listOfImages[i];
     }


 };
 window.addEventListener("load", onLoadListener);


 const buttons = document.querySelectorAll("button");



 const energyResources = {
     trees: {
         heading: "Wind Power",
         bodyText: "The cost of wind power has decreased by 90 percent since the 1980s. With declining costs comes more incentive to invest, and communities have come together to build wind farms to power local businesses. By operating off the power of small wind farms, communities who suffer from high energy costs can work together for a better future.",
         imgURL: "./img/wind.jpg",
         imgALT: "Wind Turbine",
         line: "\"Don’t Let that Wind Pass Unused!\""
     },

     wind: {
         heading: "Solar Power",
         bodyText: "Solar power is the most affordable its ever been and not only are environmentalists investing in a green future but so are communities and corporations. When multiple individuals and organizations come together to offer affordable, energy-efficient housing, everyone benefits.",
         imgURL: "./img/solar.jpg",
         imgALT: "Solar Panel",
         line: "\"A true source of energy.\""
     },
     solar: {
         heading: "Biomass Power",
         bodyText: "The cost of creating biomass is much less than non-sustainable energy sources, and is better value than most renewable energy options as well. The fuel is cheap and accessible, and the infrastructure for generating biomass energy can be relatively cost effective. And as more and more research goes in to understanding biomass, then costs may be able to be lowered further still.",
         imgURL: "./img/biomass.jpg",
         imgALT: "Biomass",
         line: "\"Let's go green to get our globe clean.\""
     }
 }

 const container = document.querySelector(".container");
 const line = document.querySelector(".line");


 function ClickToListener(e) {


     let btnLabel = e.target.textContent;

     if (btnLabel === "Biomass") {
         container.innerHTML = `<img src="${energyResources.solar.imgURL}" alt="${energyResources.solar.imgALT}" class="main-image">
                        <h2>${energyResources.solar.heading}</h2>
                        <p class="bodyText">${energyResources.solar.bodyText}</p>`;
         line.innerHTML = `<h2 class="line"> ${energyResources.solar.line}</h2>`;

     } else if (btnLabel === "Solar") {
         container.innerHTML = `<img src="${energyResources.wind.imgURL}" alt="${energyResources.wind.imgALT}" class="main-image">
                        <h2>${energyResources.wind.heading}</h2>
                        <p class="bodyText">${energyResources.wind.bodyText}</p>`;
          line.innerHTML = `<h2 class="line"> ${energyResources.wind.line}</h2>`;

     } else {
         container.innerHTML = `<img src="${energyResources.trees.imgURL}" alt="${energyResources.trees.imgALT}" class="main-image">
                        <h2>${energyResources.trees.heading}</h2>
                        <p class="bodyText">${energyResources.trees.bodyText}</p>`;
          line.innerHTML = `<h2 class="line"> ${energyResources.trees.line}</h2>`;

     }
  
     for (let i of buttons) {
         let target = e.target;

         if (i.hasAttribute("id", "active-button")) {
             i.removeAttribute("id", "active-button");
             target.setAttribute("id", "active-button");
         }
     }
 }
 for (let b of buttons) {

     b.addEventListener("click", ClickToListener);

 }


