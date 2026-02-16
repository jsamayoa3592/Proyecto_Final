var precio_base = 2000;

var edad_18 = 0.1;
var edad_25 = 0.2;
var edad_50 = 0.3;

var casado_18 = 0.1;
var casado_25 = 0.2;
var casado_50 = 0.3;

var hijos_recargo = 0.2;

var recargo_total = 0;
var precio_final = 0;

var nombre = prompt(Ingrese su nombre, por favor);
var edad = prompt(¿Cuantos años tiene Ingrese solamente números);

var edad_numero = parseInt(edad);

if (isNaN(edad_numero)  edad_numero  18) {
    alert(No se puede realizar la cotización, debe ser mayor de edad.);
} else {

    var casado = prompt(¿Está casado actualmente (sino));
    var edad_conyuge_numero = 0;

    if (casado == si  casado == SI) {
        var edad_conyuge = prompt(¿Qué edad tiene su esposoa Ingrese solamente números);
        edad_conyuge_numero = parseInt(edad_conyuge);

        if (isNaN(edad_conyuge_numero)  edad_conyuge_numero  0) {
            edad_conyuge_numero = 0;
        }
    }

    var hijos = prompt(¿Tiene hijos o hijas (sino));
    var cantidad_hijos_numero = 0;

    if (hijos == si  hijos == SI) {
        var cantidad_hijos = prompt(¿Cuántos hijos o hijas tiene Ingrese solamente números);
        cantidad_hijos_numero = parseInt(cantidad_hijos);

        if (isNaN(cantidad_hijos_numero)  cantidad_hijos_numero  0) {
            cantidad_hijos_numero = 0;
        }
    }

    if (edad_numero = 18 && edad_numero  25) {
        recargo_total = recargo_total + (precio_base  edad_18);
    } else if (edad_numero = 25 && edad_numero  50) {
        recargo_total = recargo_total + (precio_base  edad_25);
    } else if (edad_numero = 50) {
        recargo_total = recargo_total + (precio_base  edad_50);
    }

    if (casado == si  casado == SI) {

        if (edad_conyuge_numero = 18 && edad_conyuge_numero  25) {
            recargo_total = recargo_total + (precio_base  casado_18);
        } else if (edad_conyuge_numero = 25 && edad_conyuge_numero  50) {
            recargo_total = recargo_total + (precio_base  casado_25);
        } else if (edad_conyuge_numero = 50) {
            recargo_total = recargo_total + (precio_base  casado_50);
        }
    }

    if (cantidad_hijos_numero  0) {
        recargo_total = recargo_total + (precio_base  hijos_recargo  cantidad_hijos_numero);
    }

    precio_final = precio_base + recargo_total;

    alert(Para el asegurado  + nombre);
    alert(El recargo total será de  + recargo_total);
    alert(El precio final será de  + precio_final);
}
