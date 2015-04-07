function nuevo(){
	$( ".alg" ).css( "display", "none" );
	var tfgein = document.getElementById("tfge-n");
	var pval = document.getElementById("p-n");
	var cval = document.getElementById("c-n");
	var tfge = parseFloat(0);
	var p  = parseFloat(0);
	var c = parseFloat(0);
	if (tfgein.value != "" && tfgein.value != null)
	{
		tfge = parseFloat(tfgein.value);
		tfge = tfge.toFixed(2);
	}
	if (pval.value != "" && pval.value != null)
	{
		p = p + parseFloat(pval.value);
		p = p.toFixed(2);
	}
	if (cval.value != "" && cval.value != null)
	{
		c = c + parseFloat(cval.value);
		c = c.toFixed(2);
	}

	var pth = document.getElementById("pth-n");
	var pthmin = document.getElementById("pthmin-n");
	var pthmax = document.getElementById("pthmax-n");
	var va = document.getElementById("va-n");
	var resultado = document.getElementById("resultado");
	var algoritmo = document.getElementById("algoritmo");
	if(tfgein.value != "" && pval.value != "" && cval.value != "" && pth.value != "" && pthmin.value != "" && pthmax .value != "" && va.value != 0 )
	{
	
	var opts = {
  lines: 8, // The number of lines to draw
  length: 20, // The length of each line
  width: 5, // The line thickness
  radius: 15, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: true, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '50%', // Top position relative to parent
  left: '50%' // Left position relative to parent
};
var target = document.getElementById('inicia');
var spinner = new Spinner(opts).spin(target);
setTimeout(function(){spinner.stop()} , 2100);
	//inicio a1
			var p1 = pthmax.value * 2;
			var p2 = pthmax.value * 9; 
				if( pth.value < p1  )
				{
					resultado.innerHTML = "<p>Medir Calcio y Fósforo</p><p>Observar Tendencia</p><br/><a onclick='aumento()' class='swipebox view_details'>PTHi en aumento</a>";
				}
				else if(pth.value == "" && pth.value == null)
				{resultado.innerHTML = "<p> Datos incompletos</p>";}
				else
				{
					if(pth.value > p2)
					{
							if(va.value == "I")
							{
								// inicio de a2
								if(tfge <= 15)
								{
									var factor = 100;									 
									 if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Corregir Calcio y Fósforo</p><p>Ajustar Quelante</p><p>Revisar Nutrición</p>";
										document.getElementById("algoritmo21").style.display = "block";
										}
									else if (c >= 8.5 && c <= 10 && p >= 3.5 && p <= 5.5)
									{
										var dosis = pth.value / factor ;
										resultado.innerHTML = "<p>Dosis de ASRVD = " + dosis + " mcg </p><p>Medir Calcio y Fósforo a las 2-4 semanas y PTHi a las 4 semanas</p>";
										document.getElementById("algoritmo22").style.display = "block";
										}
									else if (c > 10 || p > 5.5)
									{
										resultado.innerHTML = "<p>Corregir Calcio y Fósforo</p><p>Ajustar o Cambiar Quelante";
										document.getElementById("algoritmo23").style.display = "block";
										}
									else
									{
										resultado.innerHTML = "";
										}
									 //fin de a2									
									}
								else if (tfge.value == 0.00)
								{
									resultado.innerHTML = "<p> Datos incompletos</p>";
									}
									else
									{
										resultado.innerHTML = "<p>Validar TFGe o Vía de administración</p>";
										}
								}
								else if(va.value == "0")
								{ }
								else
								{
									if(tfge <= 15)
								{
									//inicio de a3 
									var factor = 80;									 
									 if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Corregir Calcio y Fósforo</p><p>Ajustar Quelante</p><p>Revisar Nutrición</p>";
										document.getElementById("algoritmo31").style.display = "block";
										}
									else if (c >= 8.5 && c <= 10 && p >= 3.5 && p <= 5.5)
									{
									var dosis = pth.value / factor;
										resultado.innerHTML = "<p>Dosis de ASRVD = " + dosis + " mcg</p><p>Medir Calcio y Fósforo a las 2-4 semanas y PTHi a las 4 semanas</p>";
										document.getElementById("algoritmo32").style.display = "block";
										}
									else if (c > 10 || p > 5.5)
									{
										resultado.innerHTML = "<p>Corregir Calcio y Fósforo</p><p>Ajustar o Cambiar Quelante";
										document.getElementById("algoritmo33").style.display = "block";
										}
									else
									{
										resultado.innerHTML = "";
										}
									}
									//fin de a3
								else if (tfge == 0.00)
								{
									resultado.innerHTML = "<p> Datos incompletos</p>";
									}
									else
									{
										//inicio de a4
										var pp1;
										var pp2;
										 if(tfge >= 30 && tfge <= 60)
											{
											pp1 = pthmin.value * 1.5;
											pp2 = pthmax.value * 1.5;
											}
											else if (tfge >= 15 && tfge <= 29)
											{
											pp1 = pthmin.value * 1.5;
											pp2 = pthmax.value * 1.5;
											}	
										else if (tfge == 0.00)
										{
											resultado.innerHTML = "<p> Datos incompletos</p>";
											}
											if(pth.value >= p2 && pth.value <= 500)
											{
												resultado.innerHTML = "<p>Dosis de ASRVD:  1 mcg/día ó 2 mcg/día 3 veces / semana</p><p>Evaluar Calcio y Fósforo a las 2-4 semanas y PTHi a las 4 semanas</p>";
												document.getElementById("algoritmo42").style.display = "block";
												}
												else if (pth.value == "0")
												{
													resultado.innerHTML = "<p> Datos incompletos</p>";
													}
													else
													{
													if(pth.value > 500)
													{
													resultado.innerHTML = "<p>Dosis de ASRVD: 2 mcg/dia o 4 mcg 3 veces / semana</p>";
													document.getElementById("algoritmo43").style.display = "block";
													}
													else if (pth.value == "0")
												{
													resultado.innerHTML = "<p> Datos incompletos</p>";
													}
													else
													{
													resultado.innerHTML = "<p>PTHi normal para el metodo</p><p>Observar tendencia</p>";
													document.getElementById("algoritmo41").style.display = "block";
													}
														}
										//fin de a4
										}
									//fin
									}
						}
					else
					{
						resultado.innerHTML = "<p>Medir PTHi a los 3 meses</p><p>Observar tendencia</p><br/><a onclick='aumento()' class='swipebox view_details'>PTHi en aumento</a>";
						}
						
					}
					//
					}
					else{
					alert('Todos los campos son obligatorios');
					}
					
	}
	
	
	function tratado()
	{
		$( ".alg" ).css( "display", "none" );
		var tfgein = document.getElementById("tfge-t");
		var pval = document.getElementById("p-t");
		var cval = document.getElementById("c-t");
		var tfge = parseFloat(0);
		var p  = parseFloat(0);
		var c = parseFloat(0);
		if (tfgein.value != "" && tfgein.value != null)
		{
			tfge = parseFloat(tfgein.value);
			tfge = tfge.toFixed(2);
		}
		if (pval.value != "" && pval.value != null)
		{
			p = p + parseFloat(pval.value);
			p = p.toFixed(2);
		}
		if (cval.value != "" && cval.value != null)
		{
			c = c + parseFloat(cval.value);
			c = c.toFixed(2);
		}
		var pthi = document.getElementById("pthi-t");
		var ptha = document.getElementById("ptha-t");
		var pthmin = document.getElementById("pthmin-t");
		var pthmax = document.getElementById("pthmax-t");
		var asrvd = document.getElementById("asrvd-t");
		var va = document.getElementById("va-t");
		var resultado = document.getElementById("resultado2");
		var algoritmo = document.getElementById("algoritmo2");
		
		if(tfgein.value != "" && pval.value != "" && cval.value != "" && pthi.value != "" && ptha.value != "" && pthmin.value != "" && pthmax .value != ""  && asrvd.value != "" && va.value != 0)
		{
			var optss = {
		  lines: 8, // The number of lines to draw
		  length: 20, // The length of each line
		  width: 5, // The line thickness
		  radius: 15, // The radius of the inner circle
		  corners: 1, // Corner roundness (0..1)
		  rotate: 0, // The rotation offset
		  direction: 1, // 1: clockwise, -1: counterclockwise
		  color: '#000', // #rgb or #rrggbb or array of colors
		  speed: 1, // Rounds per second
		  trail: 60, // Afterglow percentage
		  shadow: true, // Whether to render a shadow
		  hwaccel: false, // Whether to use hardware acceleration
		  className: 'spinner', // The CSS class to assign to the spinner
		  zIndex: 2e9, // The z-index (defaults to 2000000000)
		  top: '50%', // Top position relative to parent
		  left: '50%' // Left position relative to parent
		};
		var targett = document.getElementById('iniciaa');
		var spinnerr = new Spinner(optss).spin(targett);
		setTimeout(function(){spinnerr.stop()} , 2100);
		if(va.value == "I")
		{
		
		if(tfge <= 15)
									{
										
			//inicio de b1
				if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Mantener dosis de ASRVD</p><p>Ajustar Quelante y Suplemento de Calcio</p><p>Revisar Nutrición</p>";
										document.getElementById("algoritmo24").style.display = "block";
										}
									else if (c >= 8.5 && c <= 10.3 && p >= 3.5 && p <= 5.5)
									{
										var variacion = pthi.value - ptha.value;
										variacion = 100 * variacion / pthi.value;
										if(variacion < 30)
										{
												var ndosis = asrvd.value * 1 + asrvd.value * 25/100;
												resultado.innerHTML = "<p>Aumentar dosis de ASRVD 25% = " + ndosis +" mcg</p><p>Medir Calcio, Fósforo, PTHi a las 4 semanas</p><p>Si la dosis > 40 mcg Omitir, considerar calcimimetrico o PTX</p>";
												document.getElementById("algoritmo27").style.display = "block";
												
											}
											else if (variacion > 30 && variacion <= 60 )
											{
												resultado.innerHTML = "<p>Mantener dosis de ASRVD hasta PTH en Rango 2 – 9x valor Normal</p>";
												document.getElementById("algoritmo26").style.display = "block";
											}
											else if (variacion > 60 )
											{
												var ndosis = asrvd.value - asrvd.value * 50/100;
												resultado.innerHTML = "<p>Disminuir dosis de ASRVD 50% = " + ndosis +" mcg u Omitir por 4 semanas</p><p>Medir Calcio, Fósforo, PTHi a las 4 semanas</p>";
												document.getElementById("algoritmo25").style.display = "block";
												}
												
											else
											{
												}
									}
									else if (c > 10.3 || p > 5.5)
									{
										if(c > 11)
										{resultado.innerHTML = "<p>Omitir dosis de ASRVD</p><p>Usar Quelantes no cálcicos";
										document.getElementById("algoritmo28").style.display = "block";
										}
										else
										{
											var ndosis = asrvd.value - asrvd.value * 50/100;
											resultado.innerHTML = "<p>Disminuir dosis de ASRVD 50% = " + ndosis +" mcg</p><p>Usar Quelantes no cálcicos";
											document.getElementById("algoritmo28").style.display = "block";
											}
										
										}
									else
									{
										resultado.innerHTML = "";
										}
										}
										else{
										resultado.innerHTML = "<p>Validar TFGe o Vía de administración</p>";
										}
				//fin de b1
		
			
			}
			else if(va.value == "0")
			{
				}
			else
			{
				if(tfge <= 15)
				{
					//inicio de b2
					if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Mantener dosis de ASRVD</p><p>Ajustar Quelante y Suplemento de Calcio</p><p>Revisar Nutrición</p>";
										document.getElementById("algoritmo44").style.display = "block";
										}
									else if (c >= 8.5 && c <= 10.3 && p >= 3.5 && p <= 5.5)
									{
										var variacion = pthi.value - ptha.value;
										variacion = 100 * variacion / pthi.value;
										if(variacion < 30)
										{
											var dosis1 = asrvd.value * 1 + 1;
											var dosis2 = dosis1 + 1;
												resultado.innerHTML = "<p>Aumentar dosis de ASRVD "+ dosis1 +" mcg/dia ó "+ dosis2 +" mcg 3 veces por semana</p><p>Medir Calcio, Fósforo, PTHi a las 4 semanas</p>";
												document.getElementById("algoritmo47").style.display = "block";
											}
											else if (variacion > 30 && variacion <= 60 )
											{	
												resultado.innerHTML = "<p>Mantener dosis de ASRVD hasta PTH en Rango 2 – 9x valor Normal</p>";
												document.getElementById("algoritmo46").style.display = "block";
											}
											else if (variacion > 60 )
											{
												var ndosis = asrvd.value - asrvd.value * 50/100;
												resultado.innerHTML = "<p>Disminuir dosis de ASRVD 50% = "+ ndosis +" mcg u Omitir por 4 semanas</p><p>Medir Calcio, Fósforo, PTHi a las 4 semanas</p>";
												document.getElementById("algoritmo45").style.display = "block";
												}
											else
											{}
									}
									else if (c > 10.3 || p > 5.5)
									{
										if(c > 11)
										{	resultado.innerHTML = "<p>Omitir ASRVD</p><p>Usar Quelantes no cálcicos";
											document.getElementById("algoritmo48").style.display = "block";
										}
										else
										{
											var ndosis = asrvd.value - asrvd.value * 50/100;
											resultado.innerHTML = "<p>Disminuir dosis de ASRVD 50% = " + ndosis + " mcg</p><p>Usar Quelantes no cálcicos";
											document.getElementById("algoritmo48").style.display = "block";
											}
										}
									else
									{
										resultado.innerHTML = "";
										}
					//fin de b2
					}
					else if(tfge == 0.00)
					{}
					else
					{
						//inicio de b3
						var estadio;
						if(tfge >=30 && tfge <=60 )
						{
							estadio = 3;
							
							}
						else if(tfge >=15 && tfge  <=29)
						{
							estadio = 4;
							}
						if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Mantener dosis de ASRVD</p><p>Ajustar Quelante y Suplemento de Calcio</p><p>Revisar Nutrición</p>";
										document.getElementById("algoritmo44").style.display = "block";
										}
									else if (c >= 8.5 && c <= 10.3 && p >= 3.5 && p <= 5.5)
									{
										var variacion = pthi.value - ptha.value;
										variacion = 100 * variacion / pthi.value;
										if(variacion < 30)
										{
											var ndosis25 = asrvd.value * 1 + asrvd.value * 25/100;
											var ndosis50 = asrvd.value * 1 + asrvd.value * 50/100;
												resultado.innerHTML = "<p>Aumentar dosis de ASRVD 25%("+ndosis25+" mcg) - 50%("+ndosis50+" mcg)</p><p>Medir Calcio, Fósforo, PTHi a las 4 semanas</p>";
												document.getElementById("algoritmo47").style.display = "block";
											}
											else if (variacion > 30 && variacion <= 60 )
											{
											if(estadio == 3)
											{
												resultado.innerHTML = "<p>ECR3</p><p>Mantener dosis de ASRVD hasta PTH en Rango: 1,5 * valor Normal</p>";
												document.getElementById("algoritmo46").style.display = "block";
												}
											else if (estadio == 4)
											{
											resultado.innerHTML = "<p>ECR4</p><p>Mantener dosis de ASRVD hasta PTH en Rango: 2 * valor Normal</p>";
											document.getElementById("algoritmo46").style.display = "block";
											}
											}
											else if (variacion > 60 )
											{
												var ndosis25 = asrvd.value - asrvd.value * 25/100;
												var ndosis50 = asrvd.value - asrvd.value * 50/100;
												resultado.innerHTML = "<p>Disminuir dosis de ASRVD 25%("+ndosis25+" mcg) - 50%("+ndosis50+" mcg)</p><p>Medir Calcio, Fósforo, PTHi a las 4 semanas</p>";
												document.getElementById("algoritmo45").style.display = "block";
												}
											else
											{
												
												}
									}
									else if (c > 10.3 || p > 5.5)
									{
										if(c > 11)
										{
											resultado.innerHTML = "<p>Omitir dosis de ASRVD</p><p>Usar Quelantes no cálcicos";
											document.getElementById("algoritmo48").style.display = "block";
										}
										else
										{
											var ndosis = asrvd.value - asrvd.value * 50/100;
											resultado.innerHTML = "<p>Disminuir dosis de ASRVD 50% = "+ ndosis+" mcg</p><p>Usar Quelantes no cálcicos";
											document.getElementById("algoritmo48").style.display = "block";
											}
										}
									else
									{
										resultado.innerHTML = "";
										}
						//fin de b3
						}
			}
			//
			}
			else
			{alert('Todos los campos son obligatorios');}
		}
			
			function limpiar()
		{
		
			$('#algoritmo21').css('display', 'none');
			$('#algoritmo22').css('display', 'none');
			$('#algoritmo23').css('display', 'none');
			$('#algoritmo31').css('display', 'none');
			$('#algoritmo32').css('display', 'none');
			$('#algoritmo33').css('display', 'none');
			$('#algoritmo41').css('display', 'none');
			$('#algoritmo42').css('display', 'none');
			$('#algoritmo43').css('display', 'none');
			$('#algoritmo44').css('display', 'none');
			$('#algoritmo45').css('display', 'none');
			$('#algoritmo46').css('display', 'none');
			$('#algoritmo47').css('display', 'none');
			$('#algoritmo48').css('display', 'none');
			$('#algoritmo38').css('display', 'none');
			$('#algoritmo24').css('display', 'none');
			$('#algoritmo25').css('display', 'none');
			$('#algoritmo26').css('display', 'none');
			$('#algoritmo27').css('display', 'none');
			$('#algoritmo28').css('display', 'none');
			document.getElementById("tfge-t").value = "";
			document.getElementById("p-t").value = "";
			document.getElementById("c-t").value = "";
			document.getElementById("pthi-t").value = "";
			document.getElementById("ptha-t").value = "";
			document.getElementById("pthmin-t").value = "";
			document.getElementById("pthmax-t").value = "";
			document.getElementById("asrvd-t").value = "";
			document.getElementById("va-t").value = "0";
			document.getElementById("resultado2").innerHTML = "<p>No se ha realizado ningun calculo.</p>";
			
			document.getElementById("tfge-n").value = "";
			document.getElementById("p-n").value = "";
			document.getElementById("c-n").value = "";
			document.getElementById("pth-n").value = "";
			document.getElementById("pthmin-n").value = "";
			document.getElementById("pthmax-n").value = "";
			document.getElementById("va-n").value = "0";
			document.getElementById("resultado").innerHTML = "<p>No se ha realizado ningun calculo.</p>";
			
			//tfge
			document.getElementById("creat-n").value = "";
			document.getElementById("edad-n").value = "";
			document.getElementById("raza-n").value = "0";
			document.getElementById("sexo-n").value = "0";
			document.getElementById("creat-t").value = "";
			document.getElementById("edad-t").value = "";
			document.getElementById("raza-t").value = "0";
			document.getElementById("sexo-t").value = "0";
			}
			
			function tfge(tipo)
			{
			
				//calculado
				var crk;
				var etfg;
				var alfa;
				var minn;
				var maxxx;
				var fact;
			//captura
				var creat;
				var edad;
				var sexo;
				var raza;
				if(tipo == 1)
				{
					creat = document.getElementById("creat-n").value;
					edad = document.getElementById("edad-n").value;
					sexo = document.getElementById("sexo-n").value;
					raza = document.getElementById("raza-n").value;
					}
					else
					{
					creat = document.getElementById("creat-t").value;
					edad = document.getElementById("edad-t").value;
					sexo = document.getElementById("sexo-t").value;
					raza = document.getElementById("raza-t").value;
						}
					if(creat != "" && edad != "" && sexo != 0 && raza != 0)
					{
						if (sexo == 'M')
						{
							crk = creat / 0.9;
							alfa = -0.411;
							fact= 1;
							}
						else if (sexo == 'F')
						{
							crk = creat / 0.7;
							alfa = -0.329;
							fact= 1.018;
							}
							
							if(crk <= 1)
							{
								minn = crk;
								maxx = 1;
								}
							else 
							{
								minn = 1;
								maxx = crk;
								}
							
						etfg = 141 * Math.pow(minn,alfa) * Math.pow(maxx, -1.209) * Math.pow(0.993, edad) * fact;
						
						if(raza == "N")
						{
							etfg = etfg * 1.159;
							}
							etfg = etfg.toFixed(2);							
							if(tipo == 1)
							{
								document.getElementById("tfge-n").value = etfg;
								document.getElementById("cal1").click();
								}
								else
								{
									document.getElementById("tfge-t").value = etfg;
									document.getElementById("cal2").click();
									}
							}
							else
							{
									
				 navigator.notification.alert(
            'Todos los campos son obligatorios' ,
			 alertDismiss,
            'Notificaci\u00f3n',            
            'Aceptar'                  
        );
						
							}
				}
				
				
				function aumento()
				{
				
	var tfgein = document.getElementById("tfge-n");
	var pval = document.getElementById("p-n");
	var cval = document.getElementById("c-n");
	var tfge = parseFloat(0);
	var p  = parseFloat(0);
	var c = parseFloat(0);
	if (tfgein.value != "" && tfgein.value != null)
	{
		tfge = parseFloat(tfgein.value);
		tfge = tfge.toFixed(2);
	}
	if (pval.value != "" && pval.value != null)
	{
		p = p + parseFloat(pval.value);
		p = p.toFixed(2);
	}
	if (cval.value != "" && cval.value != null)
	{
		c = c + parseFloat(cval.value);
		c = c.toFixed(2);
	}

	var pth = document.getElementById("pth-n");
	var pthmin = document.getElementById("pthmin-n");
	var pthmax = document.getElementById("pthmax-n");
	var va = document.getElementById("va-n");
	var resultado = document.getElementById("resultado");
	var algoritmo = document.getElementById("algoritmo");
			var optss = {
		  lines: 8, // The number of lines to draw
		  length: 20, // The length of each line
		  width: 5, // The line thickness
		  radius: 15, // The radius of the inner circle
		  corners: 1, // Corner roundness (0..1)
		  rotate: 0, // The rotation offset
		  direction: 1, // 1: clockwise, -1: counterclockwise
		  color: '#000', // #rgb or #rrggbb or array of colors
		  speed: 1, // Rounds per second
		  trail: 60, // Afterglow percentage
		  shadow: true, // Whether to render a shadow
		  hwaccel: false, // Whether to use hardware acceleration
		  className: 'spinner', // The CSS class to assign to the spinner
		  zIndex: 2e9, // The z-index (defaults to 2000000000)
		  top: '50%', // Top position relative to parent
		  left: '50%' // Left position relative to parent
		};
		var targett = document.getElementById('iniciaa');
		var spinnerr = new Spinner(optss).spin(targett);
		setTimeout(function(){spinnerr.stop()} , 2100);		
					if(va.value == "I")
							{
								// inicio de a2
								if(tfge <= 15)
								{
									var factor = 100;									 
									 if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Corregir Calcio y Fósforo</p><p>Ajustar Quelante</p><p>Revisar Nutrición</p>";
										document.getElementById("algoritmo21").style.display = "block";
										}
									else if (c >= 8.5 && c <= 10 && p >= 3.5 && p <= 5.5)
									{
										var dosis = pth.value / factor;
										resultado.innerHTML = "<p>Dosis de ASRVD = " + dosis + " mcg </p><p>Medir Calcio y Fósforo a las 2-4 semanas y PTHi a las 4 semanas</p>";
										document.getElementById("algoritmo22").style.display = "block";
										}
									else if (c > 10 || p > 5.5)
									{
										resultado.innerHTML = "<p>Corregir Calcio y Fósforo</p><p>Ajustar o Cambiar Quelante";
										document.getElementById("algoritmo23").style.display = "block";
										}
									else
									{
										resultado.innerHTML = "";
										}
									 //fin de a2									
									}
								else if (tfge.value == 0.00)
								{
									resultado.innerHTML = "<p> Datos incompletos</p>";
									}
									else
									{
										resultado.innerHTML = "<p>Validar TFGe o Vía de administración</p>";
										}
								}
								else if(va.value == "0")
								{ }
								else
								{
									if(tfge <= 15)
								{
									//inicio de a3 
									var factor = 80;									 
									 if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Corregir Calcio y Fósforo</p><p>Ajustar Quelante</p><p>Revisar Nutrición</p>";
										document.getElementById("algoritmo31").style.display = "block";
										}
									else if (c >= 8.5 && c <= 10 && p >= 3.5 && p <= 5.5)
									{
									var dosis = pth.value / factor;
										resultado.innerHTML = "<p>Dosis de ASRVD = " + dosis + " mcg</p><p>Medir Calcio y Fósforo a las 2-4 semanas y PTHi a las 4 semanas</p>";
										document.getElementById("algoritmo32").style.display = "block";
										}
									else if (c > 10 || p > 5.5)
									{
										resultado.innerHTML = "<p>Corregir Calcio y Fósforo</p><p>Ajustar o Cambiar Quelante";
										document.getElementById("algoritmo33").style.display = "block";
										}
									else
									{
										resultado.innerHTML = "";
										}
									}
									//fin de a3
								else if (tfge == 0.00)
								{
									resultado.innerHTML = "<p> Datos incompletos</p>";
									}
									else
									{
										//inicio de a4
										var pp1;
										var pp2;
										 if(tfge >= 30 && tfge <= 60)
											{
											pp1 = pthmin.value * 1.5;
											pp2 = pthmax.value * 1.5;
											}
											else if (tfge >= 15 && tfge <= 29)
											{
											pp1 = pthmin.value * 1.5;
											pp2 = pthmax.value * 1.5;
											}	
										else if (tfge == 0.00)
										{
											resultado.innerHTML = "<p> Datos incompletos</p>";
											}
											if(pth.value >= pp2 && pth.value <= 500)
											{
												resultado.innerHTML = "<p>Dosis de ASRVD:  1 mcg/día ó 2 mcg/día 3 veces / semana</p><p>Evaluar Calcio y Fósforo a las 2-4 semanas y PTHi a las 4 semanas</p>";
												document.getElementById("algoritmo42").style.display = "block";
												}
												else if (pth.value == "0")
												{
													resultado.innerHTML = "<p> Datos incompletos</p>";
													}
													else
													{
													if(pth.value > 500)
													{
													resultado.innerHTML = "<p>Dosis de ASRVD: 2 mcg/dia o 4 mcg 3 veces / semana</p>";
													document.getElementById("algoritmo43").style.display = "block";
													}
													else if (pth.value == "0")
												{
													resultado.innerHTML = "<p> Datos incompletos</p>";
													}
													else
													{
													resultado.innerHTML = "<p>PTHi normal para el metodo</p><p>Observar tendencia</p>";
													document.getElementById("algoritmo41").style.display = "block";
													}
														}
										//fin de a4
										}
									//fin
									}
					
					
					}
