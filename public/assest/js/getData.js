
fetch("assest/json/shoes.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        const container = document.querySelector(".container");

        const shoes = data;

        // const shoesDiv = document.createElement("div");
        // shoesDiv.classList = "shoes";

        
        // Object.keys(shoes).forEach((shoe) => {
        //     shoesDiv.insertAdjacentHTML
        //     (
        //         // test get data
        //         //  console.log(shoes[shoe][0]),
        //         //  console.log(shoes[shoe].length),

        //         // "beforeend",
        //         // `<div class="shoes">
        //         //     <image src="${shoes[shoe][0].image}" width="350px" height="250px">
        //         //     <h2>${shoes[shoe][0].name}</h2>
        //         //     <p class="des-tab-left">
        //         //         ${shoes[shoe][0].description}
        //         //     </p>
        //         //     <h2 class="price-left">$${shoes[shoe][0].price}</h2>
        //         //     <button class="button-add">ADD TO CART</button>
                    
        //         // </div>`
        //     )
        // });

        let txt = "";
        for(let x in shoes)
        {
            for(let i=0;i<shoes[x].length;i++)
            {
                txt += 

                            `<div class="shoes">
                                <image src="${shoes[x][i].image}" width="350px" height="250px">
                                <h2>${shoes[x][i].name}</h2>
                                <p class="des-tab-left">
                                    ${shoes[x][i].description}
                                </p>
                                <h2 class="price-left">$${shoes[x][i].price}</h2>
                                <a class="button-add" href = "route('addToCart',${shoes[x][i].id})"><p class="text-add">ADD TO CART</p></a>
                                
                            </div>`



                // console.log(shoes[x][i].price);
                // console.log(shoes[x][i].name);

            }
            
        }

         //container.innerHTML = "";
         //container.insertAdjacentElement("beforeend", shoesDiv);

         container.innerHTML= txt;

    })