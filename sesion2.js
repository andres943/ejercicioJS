// Mostrar todos los números primos

for (var counter = 2; counter <= 100; counter++) {
    var Primo = true;
  
    for (var index = 2; index <= counter; index++) {
      if (counter % index === 0 && index !== counter) {
        Primo = false;
      }
    }
    if (Primo) {
      console.log(counter);
      }
  }
  

// Crear un ciclo desde 0 hasta 100.
// Mostrar todos los números pares en este ciclo

//for (var index = 0; index <= 100; index++) {
  //  if(index % 2 === 0) {
    //  console.log( i );
    //}
  //}





//ejemplo de contro de flujo switc//

//var day = 2;
//var text; //undefined

//switch (day) {
  //  case 0:
    //    text = "domingo";
      //  break;

    //case 1:
      //      text = "lunes";
        //    break;
    //case 2:
      //      text = "martes";
        //    break;
    //case 3:
      //      text = "miercoles";
        //    break;
    //case 4:
      //      text = "jueves";
        //    break;
    //case 5:
      //      text = "viernes";
        //    break;
    //case 6:
      //      text = "sabado";
        //    break;
//        default:
  //          text = "el dia no existe"
    //        break;
      //  }            

//console.log (text);



//var time=12;
//var greeting; //undefined

//if (time < 12) {
 //var greeting= "buenos dias";
//} else if (time < 20) {
  //  greeting= "buenos tardes";
//}else if (time <= 20 && time <24) {
  //  greeting= "buenos noches";
//} else { greeting = "la hora no existe" }

  //  console.log(greeting);

  
//if (/*condiciones a evaluar*/){
    /* codigo a ejecutar si la conicion retorna tru*/   
  //}else {
    /* codigo a ejecutar si la conicion retorna false*/
    
 // }



  //ejemplo de operador ternario

  //var speed = 20;
  //var messege= speed > 100 ?"vas muy rapido": "estas debajo del limite";

 //var message = speed > 120 && speed <= 120 ?
// "vas muy rapido":
 //"estas debajo del limite"


// if(speed > 120) {
// message = "vas muy rapido";
//} else {
//	message = "estas debajo del limite";
//}
// console.log(message);	// You're going too fast!


// ejemplo - truthy/ falsy

// var message;
// var myVar =[1]

// if(value) {
	// value es truthy
// } else {
	// value es falsy
	// puede ser false, 0, '', null, undefined o NaN
//}

//ejemplo- bucles (ciclos)

//for (var index = 0; index <=100; i++){
//   if (index 50){
//  console.log ("hola mundo", index, "primeros 50");
//} else {
//    console.log ("hola mundo", index, "ultimos 50");
//}

//while(condición) {
	// Código a ejecutar en cada ciclo
//}
//El ejemplo 2 podría hacerse con while de la siguiente 
//var i = 0;

//while(i <= 200) {
//	console.log("Hello World");
//	i++;
//}


