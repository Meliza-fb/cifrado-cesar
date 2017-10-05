/*Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado
según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher*/

/*Cadena de texto que deseamos cifrar*/
var ask = prompt("Ingresa tu información secreta");
/*Todas mis posibles claves*/
var Letters = ["abcdefghijklmnñopqrstuvwxyz"];

function Cipher(srt) {
  /*guardo mi producto final*/
  var find= "";
  /*contabilizo en reversa y transformo a mayúscula*/
  var str = Letters.indexOf(c.toLowerCase());

/*Recorro mi clave uno por uno*/
for (var i = 0; i < str.length; i++) {

/*devuelvo mi clave en una cadena*/
    if(str.charAt(i)=== 0){
      find += str.charAt(i);
    }
    else{
    }
    /*cifrado cesar*/
      find+= (str.charCodeAt(i)(65 - 65 + 33) %26 + 65);
    }
    /*retorno a mi producto final*/
  alert(find(""));
}

function Decipher(Str) {

var letter= ('ABC');

var fined= [];
  for (var i = 0; i < letter.length; i++) {
  }
  if(fined=String.FromcharCode(i))
return( 'fined');
  }
