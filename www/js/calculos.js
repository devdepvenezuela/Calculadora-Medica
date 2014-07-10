// JavaScript Document

function nuevo(){
	
	var tfge = document.getElementById("tfge-n");
	var pval = document.getElementById("p-n");
	var cval = document.getElementById("c-n");
	if(pval.value != "" || cval.value != "")
	{
	var p = parseFloat(pval.text);
	var c = parseFloat(cval.text);
	}
	else
	{var p = "p";
	var c = "c";}
	
	var pth = document.getElementById("pth-n");
	var pthmin = document.getElementById("pthmin-n");
	var pthmax = document.getElementById("pthmax-n");
	var va = document.getElementById("va-n");
	var resultado = document.getElementById("resultado");
	
	if( p <= 9.5 && c <= 9.5)
	{
		resultado.innerHTML = "Observar tendencia";
		}
		else if(p == "p" || c == "c")
	{resultado.innerHTML = "<p> Datos incompletos p o c</p>";}
	else
	{
	
		if(tfge.value >= 30 && tfge.value <= 60)
		{
			var p1 = pthmin.value * 1.5;
			var p2 = pthmax.value * 1.5;
			if( pth.value >= p1 && pth.value <= p2  )
			{
				resultado.innerHTML = "<p> ASRVD:  1 mcg/día ó 2 mcg/día 3 veces / semana </p><p>Evaluar C y P a las 2-4 semanas y PTHi a las 4 semanas</p>";
			}
			else if(pth.text == "")
			{resultado.innerHTML = "<p> Datos incompletos</p>";}
			else
			{
				if(pth.value > p2)
				{resultado.innerHTML = "<p>ASRVD: 2 mcg/dia o 4 mcg 3 veces /  semana</p>";}
				else
				{resultado.innerHTML = "<p>PTHi normal para el metodo Observar tendencia</p>";}
				
			}
			
		}
		else if(tfge.value >= 15 && tfge.value <= 29)
		{
			resultado.innerHTML = "<p>Resultado no disponible</p>";
			}
		else if(tfge.value < 15)
		{
			var factor;
			if (va.value == "I")
			{
				factor = 100;
				}
				else if (va.value == "0")
				{
					factor = 80;
					}
					else{}
					
			if(c < 8.5 || p < 3.5)
			{
				resultado.innerHTML = "<p>Corregir C y P</p><p>Ajustar Quelante</p><p>Revisar Nutrición</p>";
				}
				else if (c >= 8.5 && c <= 10 || p >= 3.5 && p <= 5.5)
				{resultado.innerHTML = "<p>Dosis de ASRVD = " + pth.value + "/" + factor + "</p><p>Medir C y P a las 2-4 semanas y PTHi a las 4 semanas</p>";}
				else if (c > 10 || p > 5.5)
				{resultado.innerHTML = "<p>Corregir C y P</p><p>Ajustar o Cambiar Quelante";}
			}
		else
		{
			resultado.innerHTML = "";
			}
	
}
	}