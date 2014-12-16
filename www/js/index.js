var app = {
    // Constructor de la app
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
    	// Ejecutamos la funci?n FastClick, que es la que nos elimina esos 300ms de espera al hacer click
   localStorage.setItem('clavesis', 'clave');
    validate();
    }, 
};


function validate()
{
	var user = localStorage.getItem("claveuser");
	var sis = localStorage.getItem("clavesis");
	if(user == sis)
	{
alert('prueba superada');
		}
		else
		{
			localStorage.setItem('claveuser', 'clave');
			alert('no ha introducido su clave');
			}
	}