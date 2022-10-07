function filltable(data){
        //console.log(data)
        var cardguia = document.querySelector("cardguia");

        for (let json in data) {
          let object= data[json];
          console.log(object);

          for(let drink in object){

            let img =object[drink]["strDrinkThumb"];
            let nombre = object[drink]["strDrink"];
            let alcohol =object[drink]["strAlcoholic"];
            let str = 1;
            let ingredientes=[];
            console.log(ingredientes);
            let ingrediente = "strIngredient"+ str +"";
            while (str<=15&&object[drink][ingrediente]!==null) {


              ingredientes.push(object[drink][ingrediente]);
              ingrediente = "strIngredient"+ str +"";
              str++;

            }
            console.log(ingredientes);
        }

          /*

           let id_de_caso = object.id_de_caso;
          let dto=object.departamento_nom;
          let edad=object.edad;
          let sexo=object.sexo;
          let e=object.recuperado;
          console.log(e);
          let row = table.insertRow()



                    let cell_id_de_caso = row.insertCell()
                    cell_id_de_caso.innerHTML = id_de_caso

                    let cell_departamento_nom = row.insertCell()
                    cell_departamento_nom.innerHTML = dto

                    let cell_sexo = row.insertCell()
                    cell_sexo.innerHTML = sexo

                    let cell_edad = row.insertCell()
                    cell_edad.innerHTML = edad
                    let cell_fecha_reporte_web = row.insertCell()
                    cell_fecha_reporte_web.innerHTML = e

                    let cell_estado = row.insertCell()
                    */
        }
      }


      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then((response) => response.json())
      .then((data) => filltable(data));


class cocktel {
  constructor(drink,num) {
    this.imagen=drink[num]["strDrinkThumb"];
    //this.nombre=nombre;
    //this.ingredientes= ingrediente(ingredientes);
    //this.alcohol=alcohol;

  }
}
