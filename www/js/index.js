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

function alertDismiss()
{
	
	}

function validate()
{	
	var sis = localStorage.getItem("clave");
	if(sis == 1)
	{
	var myElement1 = document.querySelector("#header");
	myElement1.style.visibility = "visible";
	var myElements1 = document.querySelectorAll(".swiper-slide");
	for (var i = 0; i < myElements1.length; i++) {
    myElements1[i].style.visibility = "visible";
}
	}
	else
	{
	clave();
	}
	}
	
	
	function clave()
	{
		navigator.notification.confirm(
        ' Términos de Uso: Al hacer uso de esta aplicación, usted reconoce y acuerda estar legalmente sometido a los siguientes términos de uso y descargo de responsabilidad. En caso de no estar de acuerdo con los mismos, se ruega no proceder a utilizar esta aplicación.Estos Términos de Uso, así como la información y los materiales contenidos en esta aplicación están sujetos a cambios sin previo aviso y no se consolida ninguna obligación de actualizar o mantener actualizada la información contenida en la presente aplicación.Acceso Sujeto a restricciones locales:La aplicación CALCULADORA ASRVD, está diseñada para ser utilizada únicamente en la República Bolivariana de Venezuela  y toda la información y funcionalidad en ella contenida no está dirigida a, o destinada a ser utilizada por cualquier persona que resida o se encuentre en cualquier jurisdicción en la que la distribución de dicha información o funcionalidad es contrario a las leyes o prácticas de dicha jurisdicción.Alcance de los Servicios y Limitación de Responsabilidad:El objetivo de la aplicación CALCULADORA ASRVD es hacer recomendaciones prácticas que permitan orientar al médico nefrólogo, y otros especialistas involucrados en el manejo de los trastornos del metabolismo mineral de la ERC, en la toma de decisiones al lado del paciente, en las unidades de diálisis, o en el consultorio para el uso de medicamentos dirigidos al control de los niveles elevados de hormona paratiroidea (PTH), tales como los análogos activos de la vitamina D y muy particularmente, de los ASRVD bajo las condiciones habituales observadas en pacientes con trastornos minerales y óseos asociados a ERC (TMO-ERC).Para lograr este objetivo se facilitan las herramientas para el cálculo de la Tasa de Filtración Glomerular a través de la fórmula CKD-EPI, colocación de valores de calcio, fósforo y hormona paratiroidea (PTHi) en suero, a partir de la cual se desarrollan diagramas de flujo orientado a alcanzar un adecuado control del paciente, ya sea con el inicio, modificación o suspensión de la dosis de activador selectivo del receptor de vitamina D como de empleo de calcimiméticos, quelantes de fósforo o recomendaciones en la nutrición. El diseño de la aplicación está basado en los siguientes documentos: 1.- Guías de práctica clínica para el diagnóstico, evaluación, prevención y tratamiento de los trastornos minerales y óseos de la enfermedad renal crónica (TMO-ERC) en adultos, de la Sociedad Latinoamericana de Nefrología e Hipertensión, 2.- Recomendaciones para el uso de metabolitos activos y análogos de vitamina D, calcimiméticos y quelantes de fósforo en pacientes con enfermedad renal crónica estadios 3-5D, de la Sociedad Venezolana de Nefrología, y 3.- el Prospecto del activado selectivo receptor de vitamina D, paricalcitol, aprobado por el Instituto Nacional de Higiene Rafael Rangel.La información de la aplicación es tomada de los “Algoritmos para el tratamiento del Hiperparatiroidismo Secundario con enfermedad renal crónica en Venezuela” el cual fue realizado por un Grupo de Trabajo y sometido a consulta pública en sesión ampliada con médicos nefrólogos que sirvieron como asesores (Grupo Asesor). En donde se revisaron para facilitar su compresión y adaptación a las condiciones y medios disponibles en la práctica nefrológica en Venezuela.Es importante señalar que La Aplicación no pretenden sustituir ni el criterio médico, ni a las guías de práctica clínica o recomendaciones mencionadas y otras desarrolladas previamente, ni establecer normas de estricto cumplimiento por los usuarios. En consecuencia, su uso debe ser llevado a cabo de acuerdo al criterio médico, adecuándolo a las necesidades de cada paciente.Cualquier información disponible en la aplicación se publica  únicamente con la intensión de coadyuvar en el manejo de  la ERC en Venezuela y no debe ser interpretado como una solicitud o una oferta de compra o venta de productos farmacéuticos relacionados. Ninguna representación o garantía, ya sea expresa o implícita, se proporciona en relación a la exactitud, integridad o fiabilidad de las recomendaciones, ni son una declaración completa de los valores, resultados o recomendaciones que se hace referencia en el mismo. Los resultados, valores y/o recomendaciones no deben ser considerados por los destinatarios como un sustituto para el ejercicio de su propio juicio y criterio médico. Esta aplicación puede arrojar resultados que constituyen recomendaciones estadísticas o prospectivas. Si bien estos resultados pueden hacer recomendaciones prácticas que permitan orientar al médico nefrólogo, y otros especialistas involucrados en el manejo de los trastornos del metabolismo mineral de la ERC en Venezuela, existen una serie de riesgos, incertidumbres y otros factores importantes que podrían causar que las recomendaciones de la aplicación difieran materialmente de las expectativas o criterio médico, de ahí que no deben ser considerados en ningún por los destinatarios como un sustituto para el ejercicio de su propio juicio y criterio médico.', 
         onConfirm,            
        'Calculadora ASRVD',           
        'Acepto,No acepto'        
        );
		}
	
	
    
function onConfirm(buttonIndex) {
        if(buttonIndex == 1)
		{
	var pass = prompt('Ingrese la clave para utilizar la Calculadora ASRVD');	
	if(pass == "kidney")
	{
	localStorage.setItem("clave", "1");
       if (confirm('¿Desea realizar un paseo por la aplicación?'))
       {
       
        //iniciooooooooooo
        var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'http://farm9.staticflickr.com/8746/17055865276_f68687c50e_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm9.staticflickr.com/8728/16894048368_c5f9ecedf8_z.jpg',
		w: 1080,
        h: 1920
    },
      {
        src: 'http://farm8.staticflickr.com/7626/17055863146_15ddff9829_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm9.staticflickr.com/8771/17081106551_271057cf6b_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm8.staticflickr.com/7659/16894050268_e2c294110f_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm9.staticflickr.com/8784/17081843465_4858ab4707_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm8.staticflickr.com/7597/17081841765_7b350e6ee2_z.jpg',
        w: 1080,
        h: 1920,
		title: 'deslice hacia arriba o pellizque la pantalla para salir del paseo.'
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0,	// start at first slide
	loop: false
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();

gallery.listen('close', function() {  
	
var myElement = document.querySelector("#header");
myElement.style.visibility = "visible";
var myElements = document.querySelectorAll(".swiper-slide");
for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.visibility = "visible";
}
document.location = "index.html";
}
);
///finnnnnnnnnnnnnnnnnn
       }
       else
       {
      	navigator.notification.alert(
            'Esta aplicación no ha sido probada en las versiones posteriores a su publicación. \n Android: x.x \n iOS : 8.3', 
			alertDismiss,
            'Calculadora ASRVD',            
            'Aceptar'                  
        );
       }
	validate();
	}
	else
	{
	cerrar();
	}
		}
		else
		{ 
		 cerrar();
		}
    }
    
    function cerrar(){
    	
    		 navigator.app.exitApp();
    	
    }
	
	    function paseo(){
		if(confirm('¿Desea realizar un paseo por la aplicación?'))
		{
							var pswpElement4 = document.querySelectorAll('.pswp')[0];

			// build items array
			var items4 = [
    {
        src: 'http://farm9.staticflickr.com/8746/17055865276_f68687c50e_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm9.staticflickr.com/8728/16894048368_c5f9ecedf8_z.jpg',
		w: 1080,
        h: 1920
    },
      {
        src: 'http://farm8.staticflickr.com/7626/17055863146_15ddff9829_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm9.staticflickr.com/8771/17081106551_271057cf6b_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm8.staticflickr.com/7659/16894050268_e2c294110f_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm9.staticflickr.com/8784/17081843465_4858ab4707_z.jpg',
        w: 1080,
        h: 1920
    },
      {
        src: 'http://farm8.staticflickr.com/7597/17081841765_7b350e6ee2_z.jpg',
        w: 1080,
        h: 1920,
		title: 'deslice hacia arriba o pellizque la pantalla para salir del paseo.'
    }
];

			// define options (if needed)
			var options4 = {
				// optionName: 'option value'
				// for example:
				index: 0,
				loop: false
			};

			// Initializes and opens PhotoSwipe
			var gallery4 = new PhotoSwipe( pswpElement4, PhotoSwipeUI_Default, items4, options4);
			gallery4.init();
    		} 
    	
    }
	
	
	  function sucinta(producto){
    	
    	if(producto == 1)
		{
		
			var pswpElement1 = document.querySelectorAll('.pswp')[0];

			// build items array
			var items1 = [
				{
					src: 'http://farm8.staticflickr.com/7614/17069073431_a9408002cc_z.jpg',
					w: 623,
					h: 645
				},
				{
					src: 'http://farm8.staticflickr.com/7615/17069817245_f8cd20c8e7_z.jpg',
					w: 623,
					h: 645
				},
				{
					src: 'http://farm9.staticflickr.com/8711/17068343872_d6a4632f64_z.jpg',
					w: 623,
					h: 645,
					title: 'deslice hacia arriba o pellizque la pantalla para salir de la informacion sucinta.'
				}
			];

			// define options (if needed)
			var options1 = {
				// optionName: 'option value'
				// for example:
				index: 0, // start at first slide
				loop: false
			};
			
			var gallery1 = new PhotoSwipe( pswpElement1, PhotoSwipeUI_Default, items1, options1);
			gallery1.init();
		}
		else if(producto == 2)
		{
			var pswpElement2 = document.querySelectorAll('.pswp')[0];

			// build items array
			var items2 = [
				{
					src: 'http://farm9.staticflickr.com/8737/16447375274_4d4df053cc_z.jpg',
					w: 623,
					h: 645
				},
				{
					src: 'http://farm8.staticflickr.com/7602/17081104591_455e4c43fd_z.jpg',
					w: 623,
					h: 645
				},
				{
					src: 'http://farm8.staticflickr.com/7663/16874428547_0bac530ecc_z.jpg',
					w: 623,
					h: 645
				},
				{
					src: 'http://farm8.staticflickr.com/7721/16895614499_f9be6bdf59_z.jpg',
					w: 623,
					h: 645,
					title: 'deslice hacia arriba o pellizque la pantalla para salir de la informacion sucinta.'
					
				}
			];

			// define options (if needed)
			var options2 = {
				// optionName: 'option value'
				// for example:
				index: 0,
				loop: false
			};
			
			var gallery2 = new PhotoSwipe( pswpElement2, PhotoSwipeUI_Default, items2, options2);
			gallery2.init();
		}
		else {alert ('Algo malo ha sucedido en la aplicación');}
		
		
		
    	
    }
	
	

