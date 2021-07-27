let op = document.getElementById("op")

const operaciones = () => {

    let op = prompt ("Escoge del 1 al 33 (El 33 es para salir): \n 1 - Amazonas \n 2 - Antioquia \n 3 - Arauca \n 4 - Valle del cauca\n 5 - Atlantico \n 6 - Bolivar \n 7 - Boyaca \n 8 - Caldas \n 9 - Caquetá \n 10 - Casanare \n 11 - Cauca \n 12 - Cesar \n 13 - Choco \n 14 - Cordoba\n 15 - Cundinamarca\n 16 - Guainia\n 17 - Guaviare\n 18 - Huila\n 19 - Guajira\n 20 - Magdalena\n 21 - Meta\n 22 - Nariño\n 23 - Norte de santander\n 24 - Putumayo\n 25 - Quindio\n 26 - Risaralda\n 27 - San andres y providencia\n 28 - Santander\n 29 - Sucre\n 30 - Tolima \n 31 - Vaupes \n 32 - Vichada");

while (op !== "1" && op !== "2" && op !== "3" && op !== "4" && op !== "5" && op !== "6" && op !== "7" && op !== "8" && op !== "9" && op !== "10" && op !== "11" && op !== "12" && op !== "13" && op !== "14" && op !== "15" && op !== "16" && op !== "17" && op !== "18" && op !== "19" && op !== "20" && op !== "21" && op !== "22" && op !== "23" && op !== "24" && op !== "25" && op !== "26" && op !== "27" && op !== "28" && op !== "29" && op !== "30" && op !== "31" && op !== "32" && op !== "33" ) {
    
    alert("Favor ingresar una opcion valida de 1 a 5")
    op = prompt ("Escoge del 1 al 33: \n 1 - Amazonas \n 2 - Antioquia \n 3 - Arauca \n 4 - Valle del cauca\n 5 - Atlantico \n 6 - Bolivar \n 7 - Boyaca \n 8 - Caldas \n 9 - Caquetá \n 10 - Casanare \n 11 - Cauca \n 12 - Cesar \n 13 - Choco \n 14 - Cordoba\n 15 - Cundinamarca\n 16 - Guainia\n 17 - Guaviare\n 18 - Huila\n 19 - Guajira\n 20 - Magdalena\n 21 - Meta\n 22 - Nariño\n 23 - Norte de santander\n 24 - Putumayo\n 25 - Quindio\n 26 - Risaralda\n 27 - San andres y providencia\n 28 - Santander\n 29 - Sucre\n 30 - Tolima \n 31 - Vaupes \n 32 - Vichada");
    
}

if (op === "33") {
    return alert("Operacion cancelada");
}

    let resultado = ""; // null - undefine . NaN

   if (op === "1") {
       resultado = "Leticia";  
   }
   if (op === "2") {
    resultado = "Medellin";  
   }
    if (op === "3") {
        resultado = "Arauca";  
    }
        if (op === "4") {
            resultado = "Cali";  
        }
            if (op === "5") {
                resultado = "Barranquilla";  
            }
                if (op === "6") {
                    resultado = "Castagena de indias";  
                }
                    if (op === "7") {
                        resultado = "Tunja";  
                    }
                        if (op === "8") {
                            resultado = "Manizales";  
                        }
                            if (op === "9") {
                                resultado = "Florencia";  
                            }
                                if (op === "10") {
                                    resultado = "Yopal";  
                                }
                                    if (op === "11") {
                                        resultado = "Popayan";  
                                    }
                                        if (op === "12") {
                                            resultado = "Valledupar";  
                                        }
                                            if (op === "13") {
                                                resultado = "Quibdo";  
                                            }
                                                if (op === "14") {
                                                    resultado = "Monteria ";  
                                                }
                                                    if (op === "15") {
                                                        resultado = "Bogota";  
                                                    }
                                                        if (op === "16") {
                                                            resultado = "Inirida";  
                                                        }
                                                            if (op === "17") {
                                                                resultado = "San jose del guaviare";  
                                                            }
                                                                if (op === "18") {
                                                                    resultado = "Neiva";  
                                                                }
                                                                    if (op === "19") {
                                                                        resultado = "Riohacha";  
                                                                    }
                                                                        if (op === "20") {
                                                                            resultado = "Santa marta";  
                                                                        }
                                                                            if (op === "21") {
                                                                                resultado = "Villavicencio";  
                                                                            }
                                                                                if (op === "22") {
                                                                                    resultado = "San juan de pasto";  
                                                                                }
                                                                                    if (op === "23") {
                                                                                        resultado = "San jose de cucuta";  
                                                                                    }
                                                                                        if (op === "24") {
                                                                                            resultado = "Mocoa";  
                                                                                        }
                                                                                            if (op === "25") {
                                                                                                resultado = "Armenia";  
                                                                                            }
                                                                                                if (op === "26") {
                                                                                                    resultado = "Pereira";  
                                                                                                }
                                                                                                    if (op === "27") {
                                                                                                        resultado = "San andres";  
                                                                                                    }
                                                                                                        if (op === "28") {
                                                                                                            resultado = "Bucaramanga";  
                                                                                                        }
                                                                                                            if (op === "29") {
                                                                                                                resultado = "Sincelejo";  
                                                                                                            }
                                                                                                                if (op === "30") {
                                                                                                                    resultado = "Ibague";  
                                                                                                                }
                                                                                                                       if (op === "31") {
                                                                                                                        resultado = "Mitu";  
                                                                                                                       }
                                                                                                                        if (op === "32") {
                                                                                                                            resultado = "Puerto carreño";  
                                                                                                                        }

   alert("La capital es: " + resultado)

}
                                                            
op.onclick = function (){
    operaciones();
 }