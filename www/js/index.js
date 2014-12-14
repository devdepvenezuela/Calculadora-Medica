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
    	alert('hello');
    }, 
};
