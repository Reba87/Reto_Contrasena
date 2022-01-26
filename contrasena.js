// Declarando funciones

let arrNumeros = ["1","2","3","4","5","6","7","8","9","0"];
let arrMayus = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y"];
let arrMinus = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y"];
let caracter = ["!", "#", "$","%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", 
">", "?", "@", "\ ", "^" , "_" , "|" , "~"]

let contrasena = "asasdE1@"
let mensaje =""
let num= false
let may= false
let min= false
let car= false

if(contrasena.length>=8){
    for(caracter of contrasena)
    {
        if(arrNumeros.includes(caracter) && num==false)
        {
           
            num = true;
           
        }
        else if(arrMayus.includes(caracter) && may==false)
        {
            may = true;
        }
        else if(arrMinus.includes(caracter) && min==false)
        {
            min = true;
        }
        else if(caracter.includes(caracter) && car == false)
        {
            car =true;
        }

    }

    if(num && may && min && car)
    {
        console.log("Su contraseña es segura")
    }
   
}