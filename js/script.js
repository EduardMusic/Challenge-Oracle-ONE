const BtnEncriptar = document.getElementById("BtnEncriptar");
const BtnDesencriptar = document.getElementById("BtnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const textarea = document.getElementById("textarea");
const resultado = document.getElementById("resultado");

const contenedorInicial = document.querySelector(".contenedorInicial");
const contenedorTexto = document.querySelector(".contenedorTexto");


const popUp = document.querySelector("#popUP");
const msjAlerta = document.getElementById("msjAlerta");

//Encriptar
BtnEncriptar.addEventListener("click", function() {
   
    const texto = textarea.value;
    const textoValidado = validarTextarea(texto);
    
    //si se valido encriptar
    if (textoValidado) {
        const textoEncriptado = encriptar(textoValidado);
        resultado.textContent = textoEncriptado;

        contenedorInicial.style.display = "none";
        contenedorTexto.style.display = "flex";
        
    }
});
//desencriptar
BtnDesencriptar.addEventListener("click", () => {
    
    const textoValidado = validarTextarea(textarea.value);
    const textoDesencriptado = desencriptar(textoValidado);
    resultado.textContent = textoDesencriptado;
  }); 


//boton Copiar
btnCopiar.addEventListener("click", ()=> {
   
  const textoCopiar = resultado.textContent;
  navigator.clipboard.writeText(textoCopiar);
});

//validacion
function validarTextarea(textarea) {
    let texto = textarea;
    var alerta = "";

    // Expresión regular para verificar caracteres permitidos
    let regex = /^[a-zA-Z0-9\s]+$/;
  
    if (texto.length === 0) {

      popUP.style.display = "block";
      msjAlerta.textContent = 'El campo está vacío. Por favor, ingresa un texto.';
      setTimeout(() => {
        popUP.style.display = 'none';
      }, 3000); // 4000 milisegundos = 4 segundos
      return false;
    } else if (!regex.test(texto)) {
      popUP.style.display = "block";
      msjAlerta.textContent ='El texto contiene caracteres no permitidos. Solo se permiten letras, números y espacios.';
      setTimeout(() => {
        popUP.style.display = 'none';
      }, 4000); // 4000 milisegundos = 4 segundos
      return false;
    } else {
      // Convertir el texto a minúsculas
      var textoConvertido = texto.toLowerCase();
    }
    return textoConvertido
  }