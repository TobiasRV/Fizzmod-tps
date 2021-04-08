/*
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  if(texto != null && typeof texto == 'string') {
    let vowelQty = 0;
    texto.toLowerCase().split('').forEach( letter => {
      if(letter == 'a' || letter == 'e' || letter == 'i'|| letter == 'o' || letter == 'u'){
        vowelQty++;
      }
    });
    return vowelQty;
  }
  return -1;
}
/*
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/TobiasRV/Fizzmod-tps.git"
}

/*
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  return class Clase {
    static contadorInstancias = 0;

    constructor(texto){
      this.texto = texto;
      Clase.contadorInstancias++;
    }

    contadorPalabras(){
      if(this.texto != null && typeof this.texto == "string") {
        if(this.texto == ''){
          return 0;
        }
        return this.texto.split(' ').length;
      }
      return -1;
    }

    hayNumeros(){
      if(this.texto != null && typeof this.texto == "string") {
        let regex = /\d/;
        return regex.test(this.texto);
      }
      return -1;
    }
  }
}

module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
