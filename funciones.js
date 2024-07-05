
  function validar() {
    let valido = true;
  
    let nombreIngresado = document.getElementById("nombre");
    if (!validarTexto(nombreIngresado)) valido = false;
    
    let apellidoIngresado = document.getElementById("apellido");
    if (!validarTexto(apellidoIngresado)) valido = false;
    
    let emailIngresado = document.getElementById("email");
    if (!validarEmail(emailIngresado)) valido = false;
    
    let obrasSocialesIngresadas = document.getElementById("obras_sociales");
    if (!validarTexto(obrasSocialesIngresadas)) valido = false;
    
    if (!validarFecha()) valido = false;
  
    if (valido) {
        alert("Usuario registrado correctamente");
      }
      return valido;
  }
function validarTexto(texto) {
    let validarTexto = true;
    let numeros =new RegExp("^[a-zA-ZñÑáéíóúÁÉÍÓÚ\ ]{1,256}$"); // valida que solo sean letras 
  if (!numeros.test(texto.value) || texto.value.length < 2 || texto.value.length > 45){
    setInvalido(texto);
    texto.setAttribute("placeholder", "Campo incompleto");
    validarTexto = false;
  }
  else {
    setValido(texto);
  }
    return validarTexto;
}
function validarEmail(emailText) {
    let validarEmail = true;
  let email = emailText.value.trim();
  let simbolos =new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  if (!simbolos.test(email)) {
    setInvalido(emailText);
    emailText.setAttribute("placeholder", "Email inválido");
    validarEmail = false;
  }
  else {
    setValido(emailText);
  }
  return validarEmail;
}
function setInvalido(element) {
  element.style.borderColor = "red";
  element.style.borderWidth = "2px";
}

function setValido(element) {
  element.style.borderColor = "green";
  element.style.borderWidth = "2px";
}
function validarFecha() {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let anio = document.getElementById("anio").value;
  let valido = true;

  //Expresiones Regulares para validar la entrada de los campos

  // Validar dia
  if (!/^(0[1-9]|[12][0-9]|3[01])$/.test(dia)) {
    setInvalido(document.getElementById("dia"));
    valido = false;
  }
  else {
    setValido(document.getElementById("dia"));
  }
  // Validar mes
  if (!/^(0[1-9]|1[0-2])$/.test(mes)) {
    setInvalido(document.getElementById("mes"));
    valido = false;
  }
  else {
    setValido(document.getElementById("mes"));
  }
  // Validar año
  if (
    !/^\d{4}$/.test(anio) ||
    parseInt(anio) < 1900 ||
    parseInt(anio) > new Date().getFullYear()
  ) {
    setInvalido(document.getElementById("anio"));
    valido = false;
  }
  else {
    setValido(document.getElementById("anio"));
  }

 // Verificar que la combinación día/mes/año sea válida
 if (valido) {
    if (!fechaCorrecta(dia, mes, anio)) {
      setInvalido(document.getElementById("dia"));
      setInvalido(document.getElementById("mes"));
      setInvalido(document.getElementById("anio"));
     
      valido = false;
    } else {
      setValido(document.getElementById("dia"));
      setValido(document.getElementById("mes"));
      setValido(document.getElementById("anio"));
    }
  }
    return valido;
}
function fechaCorrecta(dia, mes, anio) {
    dia = parseInt(dia);
    mes = parseInt(mes);
    anio = parseInt(anio);
  
    // Verifica que Febrero no tenga más de 29 días en un año bisiesto o 28 días en un año no bisiesto
    if (mes == 2) {
      if (dia > 29 || (dia == 29 && !esBisiesto(anio))) {

        return false;
      }
    }
  
    // Verifica que Abril, Junio, Septiembre y Noviembre no tengan más de 30 días
    if (dia == 31 && (mes==2 || mes == 4 || mes == 6 || mes == 9 || mes == 11)) {
      return false;
    }
  
    // Si llegamos aquí, la fecha es válida
    return true;
  }
  

function esBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}
