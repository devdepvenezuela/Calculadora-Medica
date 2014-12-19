var app = {
    // Constructor de la app
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
    validate();
    }, 
};


function validate()
{	
	var sis = localStorage.getItem("clave");
	if(sis == "1")
	{
	alert("Bievenido a la Calculadora Zemplar.");
	}
	else
	{
	clave();
	}
	}
	
	
	function clave()
	{
	var clave = prompt('Ingrese la clave de inicio de la calculadora:');	
	if(clave == "clave")
	{
	localStorage.setItem("clave", "1");	
	}
	else
	{
		alert('clave incorrecta, intente de nuevo');
		validate();
	}	
		
		
	}
