function nuevo(){
	var tfgein = document.getElementById("tfge-n");
	var pval = document.getElementById("p-n");
	var cval = document.getElementById("c-n");
	var tfge = parseFloat(0);
	var p  = parseFloat(0);
	var c = parseFloat(0);
	if (tfgein.value != "" && tfgein.value != null)
	{
		tfge = tfge + parseFloat(tfgein.value);
	}
	if (pval.value != "" && pval.value != null)
	{
		p = p + parseFloat(pval.value);
	}
	if (cval.value != "" && cval.value != null)
	{
		c = c + parseFloat(cval.value);
	}

	var pth = document.getElementById("pth-n");
	var pthmin = document.getElementById("pthmin-n");
	var pthmax = document.getElementById("pthmax-n");
	var va = document.getElementById("va-n");
	var resultado = document.getElementById("resultado");
	
	alert("tfge: " + tfge);
	alert("p: " + p);
	alert("c: " + c);
	alert("Minimo: " + pthmin.value);
	alert("Maximo: " + pthmax.value);
	alert("va: " + va.value);
	//inicio a1
			var p1 = pthmax.value * 2;
			var p2 = pthmax.value * 9; 
				if( pth.value < p1  )
				{
					resultado.innerHTML = "<p>Medir Ca y P</p>";
				}
				else if(pth.value == "" && pth.value == null)
				{resultado.innerHTML = "<p> Datos incompletos</p>";}
				else
				{
					if(pth.value > p2)
					{
							if(va.selected == "I")
							{
								// inicio de a2
								if(tfge.value <= 15)
								{
									var factor = 100;									 
									 if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Corregir C y P</p><p>Ajustar Quelante</p><p>Revisar Nutrición</p>";
										}
									else if (c >= 8.5 && c <= 10 || p >= 3.5 && p <= 5.5)
									{
										resultado.innerHTML = "<p>Dosis de ASRVD = " + pth.value + "/" + factor + "</p><p>Medir C y P a las 2-4 semanas y PTHi a las 4 semanas</p>";
										}
									else if (c > 10 || p > 5.5)
									{
										resultado.innerHTML = "<p>Corregir C y P</p><p>Ajustar o Cambiar Quelante";
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
										resultado.innerHTML = "<p>Validar TFGe</p>";
										}
								}
								else if(va.selected == "0")
								{ }
								else
								{
									if(tfge.value <= 15)
								{
									//inicio de a3 
									var factor = 80;									 
									 if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Corregir C y P</p><p>Ajustar Quelante</p><p>Revisar Nutrición</p>";
										}
									else if (c >= 8.5 && c <= 10 || p >= 3.5 && p <= 5.5)
									{
										resultado.innerHTML = "<p>Dosis de ASRVD = " + pth.value + "/" + factor + "</p><p>Medir C y P a las 2-4 semanas y PTHi a las 4 semanas</p>";
										}
									else if (c > 10 || p > 5.5)
									{
										resultado.innerHTML = "<p>Corregir C y P</p><p>Ajustar o Cambiar Quelante";
										}
									else
									{
										resultado.innerHTML = "";
										}
									}
									//fin de a3
								else if (tfge.value == 0.00)
								{
									resultado.innerHTML = "<p> Datos incompletos</p>";
									}
									else
									{
										//inicio de a4
										var pp1;
										var pp2;
										 if(tfge.value >= 30 && tfge.value <= 60)
											{
											pp1 = pthmin.value * 1.5;
											pp2 = pthmax.value * 1.5;
											}
											else if (tfge.value >= 15 && tfge.value <= 29)
											{
											pp1 = pthmin.value * 1.5;
											pp2 = pthmax.value * 1.5;
											}	
										else if (tfge.value == 0.00)
										{
											resultado.innerHTML = "<p> Datos incompletos</p>";
											}
											if(pth.value >= p2 && pth.value <= 500)
											{
												resultado.innerHTML = "<p>ASRVD:  1 mcg/día ó 2 mcg/día 3 veces / semana</p><p>Evaluar C y P a las 2-4 semanas y PTHi a las 4 semanas</p>";
												}
												else if (pth.value == "0")
												{
													resultado.innerHTML = "<p> Datos incompletos</p>";
													}
													else
													{
														resultado.innerHTML = "<p>PTHi normal para el metodo</p><p>Observar tendencia</p>";
														
														}
										//fin de a4
										}
									//fin
									}
						}
					else
					{resultado.innerHTML = "<p>PTHi normal para el metodo</p><p>Observar tendencia</p>";}
				}
	}
	
	
	function tratado()
	{
		var tfgein = document.getElementById("tfge-t");
		var pval = document.getElementById("p-t");
		var cval = document.getElementById("c-t");
		var tfge = parseFloat(0);
		var p  = parseFloat(0);
		var c = parseFloat(0);
		if (tfgein.value != "" && tfgein.value != null)
		{
			tfge = parseFloat(tfgein.text);
		}
		if (pval.value != "" && pval.value != null)
		{
			p = parseFloat(pval.text);
		}
		if (cval.value != "" && cval.value != null)
		{
			c = parseFloat(cval.text);
		}
		var pthi = document.getElementById("pthi-t");
		var ptha = document.getElementById("ptha-t");
		var pthmin = document.getElementById("pthmin-t");
		var pthmax = document.getElementById("pthmax-t");
		var asrvd = document.getElementById("asrvd-t");
		var va = document.getElementById("va-t");
		var resultado = document.getElementById("resultado2");
		
		
		if(va.selected == "I")
		{
			//inicio de b1
				if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Mantener ASRVD</p><p>Ajustar Quelante y Suplemento de Ca</p><p>Revisar Nutrición</p>";
										}
									else if (c >= 8.5 && c <= 10.3 || p >= 3.5 && p <= 5.5)
									{
										var pth30 = ptha.value * 30/100;
										var pth60 = ptha.value * 60/100;
										if(pthi.value < pth30)
										{
											if (asrvd.value > 40)
											{resultado.innerHTML = "<p>Omitir, considerar calcimimetrico o PTX</p>";}
											else if (asrvd.value <= 40)
											{resultado.innerHTML = "<p>Aumentar ASRVD 25%</p><p>Medir Ca, P, PTHi a las 4 semanas</p>";}
											else if (asrvd.value == 0)
											{
												resultado.innerHTML = "<p> Datos incompletos</p>";
												}
												else
												{resultado.innerHTML = "<p> Datos incompletos</p>";}
											}
											else if (pthi.value > pth30 && pthi.value <= pth60 )
											{resultado.innerHTML = "<p>Mantener ASRVD hasta PTH en Rango 2 – 9x valor Normal</p>";}
											else if (pthi.value > pth60 )
											{resultado.innerHTML = "<p>Disminuir ASRVD 50% u Omitir por 4 semanas</p><p>Medir Ca, P, PTHi a las 4 semanas</p>";}
											else
											{
												
												}
									
									}
									else if (c > 10.3 || p > 5.5)
									{
										if(c > 11)
										{resultado.innerHTML = "<p>Omitir ASRVD</p><p>Usar Quelantes no cálcicos";}
										else
										{resultado.innerHTML = "<p>Disminuir ASRVD 50%</p><p>Usar Quelantes no cálcicos";}
										
										}
									else
									{
										resultado.innerHTML = "";
										}
				//fin de b1
		
			
			}
			else if(va.selected == 0)
			{
						
				}
			else
			{
				if(tfge.value <= 15)
				{
					//inicio de b2
					if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Mantener ASRVD</p><p>Ajustar Quelante y Suplemento de Ca</p><p>Revisar Nutrición</p>";
										}
									else if (c >= 8.5 && c <= 10.3 || p >= 3.5 && p <= 5.5)
									{
										var pth30 = ptha.value * 30/100;
										var pth60 = ptha.value * 60/100;
										if(pthi.value < pth30)
										{
												resultado.innerHTML = "<p>Aumentar ASRVD 1 mcg/dia ó 2 mcg 3 veces por semana</p><p>Medir Ca, P, PTHi a las 4 semanas</p>";
											}
											else if (pthi.value > pth30 && pthi.value <= pth60 )
											{resultado.innerHTML = "<p>Mantener ASRVD hasta PTH en Rango 2 – 9x valor Normal</p>";}
											else if (pthi.value > pth60 )
											{resultado.innerHTML = "<p>Disminuir ASRVD 50% u Omitir por 4 semanas</p><p>Medir Ca, P, PTHi a las 4 semanas</p>";}
											else
											{
												
												}
									
									}
									else if (c > 10.3 || p > 5.5)
									{
										if(c > 11)
										{resultado.innerHTML = "<p>Omitir ASRVD</p><p>Usar Quelantes no cálcicos";}
										else
										{resultado.innerHTML = "<p>Disminuir ASRVD 50%</p><p>Usar Quelantes no cálcicos";}
										
										}
									else
									{
										resultado.innerHTML = "";
										}
					
					
					
					//fin de b2
					
					}
					else if(tfge.value == 0)
					{}
					else
					{
						//inicio de b3
						var estadio;
						if(tfge.value >=30 && tfge.value <=60 )
						{
							estadio = 3;
							}
						else if(tfge.value >=15 && tfge.value <=29)
						{
							estadio = 4;
							}
						if(c < 8.5 || p < 3.5)
									{
										resultado.innerHTML = "<p>Mantener ASRVD</p><p>Ajustar Quelante y Suplemento de Ca</p><p>Revisar Nutrición</p>";
										}
									else if (c >= 8.5 && c <= 10.3 || p >= 3.5 && p <= 5.5)
									{
										var pth30 = ptha.value * 30/100;
										var pth60 = ptha.value * 60/100;
										if(pthi.value < pth30)
										{
												resultado.innerHTML = "<p>Aumentar ASRVD 25 - 50%</p><p>Medir Ca, P, PTHi a las 4 semanas</p>";
											}
											else if (pthi.value > pth30 && pthi.value <= pth60 )
											if(estadio == 3)
											{
												resultado.innerHTML = "<p>ECR3</p><p>Mantener ASRVD hasta PTH en Rango: 1,5 * valor Normal</p>";
												}
											else if (estadio == 4)
											{resultado.innerHTML = "<p>ECR4</p><p>Mantener ASRVD hasta PTH en Rango: 2 * valor Normal</p>";}
											else if (pthi.value > pth60 )
											{resultado.innerHTML = "<p>Disminuir ASRVD 25%-50%</p><p>Medir Ca, P, PTHi a las 4 semanas</p>";}
											else
											{
												
												}
									}
									else if (c > 10.3 || p > 5.5)
									{
										if(c > 11)
										{resultado.innerHTML = "<p>Omitir ASRVD</p><p>Usar Quelantes no cálcicos";}
										else
										{resultado.innerHTML = "<p>Disminuir ASRVD 50%</p><p>Usar Quelantes no cálcicos";}
										
										}
									else
									{
										resultado.innerHTML = "";
										}
						
						//fin de b3
						}
					
			}
		
		
		
		}
			
			function limpiar()
		{
			document.getElementById("tfge-t").value = "0";
			document.getElementById("p-t").value = "0";
			document.getElementById("c-t").value = "0";
			document.getElementById("pthi-t").value = "0";
			document.getElementById("ptha-t").value = "0";
			document.getElementById("pthmin-t").value = "0";
			document.getElementById("pthmax-t").value = "0";
			document.getElementById("asrvd-t").value = "0";
			document.getElementById("va-t").value = "0";
			document.getElementById("resultado2").innerHTML = "<p>No se ha realizado ningun calculo.</p>";
			
			document.getElementById("tfge-n").value = "0";
			document.getElementById("p-n").value = "0";
			document.getElementById("c-n").value = "0";
			document.getElementById("pth-n").value = "0";
			document.getElementById("pthmin-n").value = "0";
			document.getElementById("pthmax-n").value = "0";
			document.getElementById("va-n").value = "0";
			document.getElementById("resultado").innerHTML = "<p>No se ha realizado ningun calculo.</p>";
			
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
						}
						else
						{
							document.getElementById("tfge-t").value = etfg;
							}
				}
