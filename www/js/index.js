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
<<<<<<< HEAD
		navigator.notification.alert(
            'Bievenido a la Calculadora Zemplar.', 
			alertDismiss,
            'MIP',            
            'Aceptar'                  
        );
=======
	alert("Bievenido a la Calculadora Zemplar.");
>>>>>>> origin/master
	}
	else
	{
	clave();
	}
	}
	
	
	function clave()
	{
<<<<<<< HEAD
		navigator.notification.confirm(
        ' Términos de Uso: Al hacer uso de esta aplicación, usted reconoce y acuerda estar legalmente sometido a los siguientes términos de uso y descargo de responsabilidad. En caso de no estar de acuerdo con los mismos, se ruega no proceder a utilizar esta aplicación.Estos Términos de Uso, así como la información y los materiales contenidos en esta aplicación están sujetos a cambios sin previo aviso y no se consolida ninguna obligación de actualizar o mantener actualizada la información contenida en la presente aplicación.Acceso Sujeto a restricciones locales:La aplicación CALCULADORA ASRVD, está diseñada para ser utilizada únicamente en la República Bolivariana de Venezuela  y toda la información y funcionalidad en ella contenida no está dirigida a, o destinada a ser utilizada por cualquier persona que resida o se encuentre en cualquier jurisdicción en la que la distribución de dicha información o funcionalidad es contrario a las leyes o prácticas de dicha jurisdicción.Alcance de los Servicios y Limitación de Responsabilidad:El objetivo de la aplicación CALCULADORA ASRVD es hacer recomendaciones prácticas que permitan orientar al médico nefrólogo, y otros especialistas involucrados en el manejo de los trastornos del metabolismo mineral de la ERC, en la toma de decisiones al lado del paciente, en las unidades de diálisis, o en el consultorio para el uso de medicamentos dirigidos al control de los niveles elevados de hormona paratiroidea (PTH), tales como los análogos activos de la vitamina D y muy particularmente, de los ASRVD bajo las condiciones habituales observadas en pacientes con trastornos minerales y óseos asociados a ERC (TMO-ERC).Para lograr este objetivo se facilitan las herramientas para el cálculo de la Tasa de Filtración Glomerular a través de la fórmula CKD-EPI, colocación de valores de calcio, fósforo y hormona paratiroidea (PTHi) en suero, a partir de la cual se desarrollan diagramas de flujo orientado a alcanzar un adecuado control del paciente, ya sea con el inicio, modificación o suspensión de la dosis de activador selectivo del receptor de vitamina D como de empleo de calcimiméticos, quelantes de fósforo o recomendaciones en la nutrición. El diseño de la aplicación está basado en los siguientes documentos: 1.- Guías de práctica clínica para el diagnóstico, evaluación, prevención y tratamiento de los trastornos minerales y óseos de la enfermedad renal crónica (TMO-ERC) en adultos, de la Sociedad Latinoamericana de Nefrología e Hipertensión, 2.- Recomendaciones para el uso de metabolitos activos y análogos de vitamina D, calcimiméticos y quelantes de fósforo en pacientes con enfermedad renal crónica estadios 3-5D, de la Sociedad Venezolana de Nefrología, y 3.- el Prospecto del activado selectivo receptor de vitamina D, paricalcitol, aprobado por el Instituto Nacional de Higiene Rafael Rangel.La información de la aplicación es tomada de los “Algoritmos para el tratamiento del Hiperparatiroidismo Secundario con enfermedad renal crónica en Venezuela” el cual fue realizado por un Grupo de Trabajo y sometido a consulta pública en sesión ampliada con médicos nefrólogos que sirvieron como asesores (Grupo Asesor). En donde se revisaron para facilitar su compresión y adaptación a las condiciones y medios disponibles en la práctica nefrológica en Venezuela.Es importante señalar que La Aplicación no pretenden sustituir ni el criterio médico, ni a las guías de práctica clínica o recomendaciones mencionadas y otras desarrolladas previamente, ni establecer normas de estricto cumplimiento por los usuarios. En consecuencia, su uso debe ser llevado a cabo de acuerdo al criterio médico, adecuándolo a las necesidades de cada paciente.Cualquier información disponible en la aplicación se publica  únicamente con la intensión de coadyuvar en el manejo de  la ERC en Venezuela y no debe ser interpretado como una solicitud o una oferta de compra o venta de productos farmacéuticos relacionados. Ninguna representación o garantía, ya sea expresa o implícita, se proporciona en relación a la exactitud, integridad o fiabilidad de las recomendaciones, ni son una declaración completa de los valores, resultados o recomendaciones que se hace referencia en el mismo. Los resultados, valores y/o recomendaciones no deben ser considerados por los destinatarios como un sustituto para el ejercicio de su propio juicio y criterio médico. Esta aplicación puede arrojar resultados que constituyen recomendaciones estadísticas o prospectivas. Si bien estos resultados pueden hacer recomendaciones prácticas que permitan orientar al médico nefrólogo, y otros especialistas involucrados en el manejo de los trastornos del metabolismo mineral de la ERC en Venezuela, existen una serie de riesgos, incertidumbres y otros factores importantes que podrían causar que las recomendaciones de la aplicación difieran materialmente de las expectativas o criterio médico, de ahí que no deben ser considerados en ningún por los destinatarios como un sustituto para el ejercicio de su propio juicio y criterio médico.', 
         onConfirm,            
        'MIP',           
        'Acepto,No acepto'        
        );
		}
	
	
	 function onConfirm(buttonIndex) {
        if(buttonIndex == 1)
		{
			var clave = prompt('Ingrese la clave de inicio de la calculadora:');	
=======
	alert('Términos de Uso: Al hacer uso de esta aplicación, usted reconoce y acuerda estar legalmente sometido a los siguientes términos de uso y descargo de responsabilidad. En caso de no estar de acuerdo con los mismos, se ruega no proceder a utilizar esta aplicación.Estos Términos de Uso, así como la información y los materiales contenidos en esta aplicación están sujetos a cambios sin previo aviso y no se consolida ninguna obligación de actualizar o mantener actualizada la información contenida en la presente aplicación.Acceso Sujeto a restricciones locales:La aplicación CALCULADORA ASRVD, está diseñada para ser utilizada únicamente en la República Bolivariana de Venezuela  y toda la información y funcionalidad en ella contenida no está dirigida a, o destinada a ser utilizada por cualquier persona que resida o se encuentre en cualquier jurisdicción en la que la distribución de dicha información o funcionalidad es contrario a las leyes o prácticas de dicha jurisdicción.Alcance de los Servicios y Limitación de Responsabilidad:El objetivo de la aplicación CALCULADORA ASRVD es hacer recomendaciones prácticas que permitan orientar al médico nefrólogo, y otros especialistas involucrados en el manejo de los trastornos del metabolismo mineral de la ERC, en la toma de decisiones al lado del paciente, en las unidades de diálisis, o en el consultorio para el uso de medicamentos dirigidos al control de los niveles elevados de hormona paratiroidea (PTH), tales como los análogos activos de la vitamina D y muy particularmente, de los ASRVD bajo las condiciones habituales observadas en pacientes con trastornos minerales y óseos asociados a ERC (TMO-ERC).Para lograr este objetivo se facilitan las herramientas para el cálculo de la Tasa de Filtración Glomerular a través de la fórmula CKD-EPI, colocación de valores de calcio, fósforo y hormona paratiroidea (PTHi) en suero, a partir de la cual se desarrollan diagramas de flujo orientado a alcanzar un adecuado control del paciente, ya sea con el inicio, modificación o suspensión de la dosis de activador selectivo del receptor de vitamina D como de empleo de calcimiméticos, quelantes de fósforo o recomendaciones en la nutrición. El diseño de la aplicación está basado en los siguientes documentos: 1.- Guías de práctica clínica para el diagnóstico, evaluación, prevención y tratamiento de los trastornos minerales y óseos de la enfermedad renal crónica (TMO-ERC) en adultos, de la Sociedad Latinoamericana de Nefrología e Hipertensión, 2.- Recomendaciones para el uso de metabolitos activos y análogos de vitamina D, calcimiméticos y quelantes de fósforo en pacientes con enfermedad renal crónica estadios 3-5D, de la Sociedad Venezolana de Nefrología, y 3.- el Prospecto del activado selectivo receptor de vitamina D, paricalcitol, aprobado por el Instituto Nacional de Higiene Rafael Rangel.La información de la aplicación es tomada de los “Algoritmos para el tratamiento del Hiperparatiroidismo Secundario con enfermedad renal crónica en Venezuela” el cual fue realizado por un Grupo de Trabajo y sometido a consulta pública en sesión ampliada con médicos nefrólogos que sirvieron como asesores (Grupo Asesor). En donde se revisaron para facilitar su compresión y adaptación a las condiciones y medios disponibles en la práctica nefrológica en Venezuela.Es importante señalar que La Aplicación no pretenden sustituir ni el criterio médico, ni a las guías de práctica clínica o recomendaciones mencionadas y otras desarrolladas previamente, ni establecer normas de estricto cumplimiento por los usuarios. En consecuencia, su uso debe ser llevado a cabo de acuerdo al criterio médico, adecuándolo a las necesidades de cada paciente.Cualquier información disponible en la aplicación se publica  únicamente con la intensión de coadyuvar en el manejo de  la ERC en Venezuela y no debe ser interpretado como una solicitud o una oferta de compra o venta de productos farmacéuticos relacionados. Ninguna representación o garantía, ya sea expresa o implícita, se proporciona en relación a la exactitud, integridad o fiabilidad de las recomendaciones, ni son una declaración completa de los valores, resultados o recomendaciones que se hace referencia en el mismo. Los resultados, valores y/o recomendaciones no deben ser considerados por los destinatarios como un sustituto para el ejercicio de su propio juicio y criterio médico. Esta aplicación puede arrojar resultados que constituyen recomendaciones estadísticas o prospectivas. Si bien estos resultados pueden hacer recomendaciones prácticas que permitan orientar al médico nefrólogo, y otros especialistas involucrados en el manejo de los trastornos del metabolismo mineral de la ERC en Venezuela, existen una serie de riesgos, incertidumbres y otros factores importantes que podrían causar que las recomendaciones de la aplicación difieran materialmente de las expectativas o criterio médico, de ahí que no deben ser considerados en ningún por los destinatarios como un sustituto para el ejercicio de su propio juicio y criterio médico.');
	var clave = prompt('Ingrese la clave de inicio de la calculadora:');	
>>>>>>> origin/master
	if(clave == "clave")
	{
	localStorage.setItem("clave", "1");
	validate();
	}
	else
	{
<<<<<<< HEAD
		navigator.notification.alert(
            'Clave incorrecta, intente de nuevo', 
			alertDismiss,
            'MIP',            
            'Aceptar'                  
        );
		validate();
	}
		}
		else
		{ 
		 navigator.app.exitApp();
		}
    }
=======
		alert('clave incorrecta, intente de nuevo');
		validate();
	}	
		
		
	}
>>>>>>> origin/master