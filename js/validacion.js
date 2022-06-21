var nombreAValidar = document.querySelector('#nombre__form');
var correoAValidar = document.querySelector('#email__form');
var asuntoAValidar = document.querySelector('#asunto__form');

var botonEnviar = document.getElementById('boton__enviar');
botonEnviar.addEventListener('click', function()
{
    event.preventDefault();
    var validacionDeNombre = validarMensaje(nombreAValidar.value, 'nombre');
    var validacionDeCorre = validarMensaje(correoAValidar.value, 'correo');
    var validacionDeAsunto = validarMensaje(asuntoAValidar.value, 'asunto');

    if (validacionDeNombre == false)
    {
        alert('¡El nombre es incorrecto!');
    }
    if (validacionDeAsunto == false) 
    {
        alert('¡El asunro es inválido')
    }
    if (validacionDeCorre == false) 
    {
        alert('¡El correo es inválido!')
    }

    if (validacionDeNombre == true && validacionDeAsunto == true && validacionDeCorre == true)
    {
        alert('¡Se ha enviado tu mensaje!');
        return true;
    }
    return false;
});

function validarMensaje(textoAValidar, tipo)
{
    if (tipo == 'nombre')
    {
        if (textoAValidar.length =! 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else if (tipo == 'correo')
    {
        for(var i = 0; i < textoAValidar.length; i++)
        {
            if (textoAValidar[i] == '@')
            {
                return true;
            }
        }
        return false;
    }
    else if (tipo == 'asunto')
    {
        if (textoAValidar.length =! 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}