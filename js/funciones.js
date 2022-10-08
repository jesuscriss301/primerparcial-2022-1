fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then((response) => response.json())
.then((data) => filltable(data));

function filltable(data){
  //console.log(data)
  var cardguia = document.querySelector("cardguia");
  var card ;
  //container.insertAdjacentElement('beforeend',card);
  for (let json in data) {
    let object= data[json];
    console.log(object);
    for(let drink in object){
      let img =object[drink]["strDrinkThumb"];
      let name = object[drink]["strDrink"];
      let alcohol =object[drink]["strAlcoholic"];
      let str = 1;
      let ingredientes=[];
      //console.log(ingredientes);
      let ingrediente = "strIngredient"+ str +"";
      while (str<=15&&object[drink][ingrediente]!==null) {
        ingredientes.push(object[drink][ingrediente]);
        ingrediente = "strIngredient"+ str +"";
        str++;
      }
      card = crearCard(drink, img);

      //container.insertAdjacentElement("beforeend",card);
      //console.log(ingredientes);
    }
  }
}
function crearCard(i, image){

  let card = cardguia.cloneNode();
  let img =imgcocktel.cloneNode();
  let bodycard1 = bodycard.cloneNode();
    let titulococktel1 = titulococktel.cloneNode();
    let ingredientes1 = ingredientes.cloneNode();
    let listingredientes1= listingredientes.cloneNode();
      let ingrediente1= ingrediente.cloneNode();
    let cardfooter1 =cardfooter.cloneNode();
      let alcohol1 = alcohol.cloneNode();
      let comprar1 = comprar.cloneNode();

      card.setAttribute("id","card"+ i)
      img.setAttribute('id','imgcocktel' + i);
      bodycard1.setAttribute('id','bodycard' + i);
      titulococktel1.setAttribute('id','titulococktel' + i);
      ingredientes1.setAttribute('id','ingredientes' + i);
      listingredientes1.setAttribute('id','listingredientes' + i);
      ingrediente1.setAttribute('id','ingrediente' + i);
      cardfooter1.setAttribute('id','cardfooter' + i);
      alcohol1.setAttribute('id','alcohol' + i);
      comprar1.setAttribute('id','comprar' + i);

      img.setAttribute('src', image);


    cardfooter1.insertAdjacentElement('beforeend',alcohol1);
    cardfooter1.insertAdjacentElement('beforeend',comprar1);
      listingredientes1.insertAdjacentElement('beforeend',ingrediente1);
    bodycard1.insertAdjacentElement('beforeend',titulococktel1);
    bodycard1.insertAdjacentElement('beforeend',ingredientes1);
    bodycard1.insertAdjacentElement('beforeend',listingredientes1);
    card.insertAdjacentElement('beforeend',img);
    card.insertAdjacentElement('beforeend',bodycard1);
    card.insertAdjacentElement('beforeend',cardfooter1);
    container.insertAdjacentElement('beforeend',card);
    return card;
}
