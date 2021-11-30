
let numeroPagina;
let numeroCapitulo = 1;

let capituloUno = 47;
let capituloDos = 43;
let capituloTres = 41;
let capituloOcho = 37;
let capituloOnce = 16;
let capituloDoce = 15;
let capituloTrece = 19;
let capituloCatorce = 25;
let capituloQuince = 30;

let capituloRandom;

let capituloUnoEstado = true;
let capituloDosEstado = false;
let capituloTresEstado = false;
let capituloOchoEstado = false;
let capituloOnceEstado = false;
let capituloDoceEstado = false;
let capituloTreceEstado = false;
let capituloCatorceEstado = false;
let capituloQuinceEstado = false;


function setup() {
var cnv = createCanvas(windowWidth - 10, windowHeight * 0.75);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, 10);
  
  select('div').position(0, windowHeight * 0.80);
  select('p').position(0, windowHeight * 0.96);

  imageMode(CENTER);

  numeroPagina = 0;

    siguiente();
  
}

function draw() {

}

function siguiente() {
    

    // AJUSTE DE VENTANA / TAMAÑO
    ///////////////////////////////
    let x;
    let y;

    if (windowWidth > 500) { 
        x = 1980 / 3;
        y = 1680 / 3;
     }
     else {
         x = 1980 / 6;
         y = 1680 / 6;
     }

     /////////////////////////////


     if (capituloUnoEstado == true) {
        numeroCapitulo = 1;
         numeroPagina++
         if (numeroPagina > capituloUno) {
            capituloRandom = parseInt(random(0, 7));
            capituloUnoEstado = false;
            
         }
     }

     if (capituloRandom == 0) {
        numeroCapitulo = 2;
        numeroPagina++
        if (numeroPagina > capituloDos) {
            capituloRandom = parseInt(random(0, 7));
            capituloDosEstado = false;
            numeroPagina = 1;
        }
    }

    if (capituloRandom == 1) {
        numeroCapitulo = 3;
        numeroPagina++
        if (numeroPagina > capituloTres) {
            capituloRandom = parseInt(random(0, 7));
            capituloTresEstado = false;
            numeroPagina = 1;
        }
    }

    if (capituloRandom == 2) {
        numeroCapitulo = 8;
        numeroPagina++
        if (numeroPagina > capituloOcho) {
            capituloRandom = parseInt(random(0, 7));
            capituloOchoEstado = false;
            numeroPagina = 1;
        }
    }

    if (capituloRandom == 3) {
        numeroCapitulo = 11;
        numeroPagina++
        if (numeroPagina > capituloOnce) {
            capituloRandom = parseInt(random(0, 7));
            capituloOnceEstado = false;
            numeroPagina = 0;
        }
    }

    if (capituloRandom == 4) {
        numeroCapitulo = 12;
        numeroPagina++
        if (numeroPagina > capituloDoce) {
            capituloRandom = parseInt(random(0, 7));
            capituloDoceEstado = false;
            numeroPagina = 0;
        }
    }

    if (capituloRandom == 5) {
        numeroCapitulo = 13;
        numeroPagina++
        if (numeroPagina > capituloTrece) {
            capituloRandom = parseInt(random(0, 7));
            capituloTreceEstado = false;
            numeroPagina = 0;
        }
    }

    if (capituloRandom == 6) {
        numeroCapitulo = 14;
        numeroPagina++
        if (numeroPagina > capituloCatorce) {
            capituloRandom = parseInt(random(0, 7));
            capituloCatorceEstado = false;
            numeroPagina = 1;
        }
    }

    if (capituloRandom == 7) {
        numeroCapitulo = 15;
        numeroPagina++
        if (numeroPagina > capituloQuince) {
            capituloRandom = parseInt(random(0, 7));
            capituloQuinceEstado = false;
            numeroPagina = 0;
        }
    }

    /*
    loadImage("images/cap_" + numeroCapitulo + "/c_" + numeroCapitulo + "_" + numeroPagina + ".gif", img => {
        image(img, windowWidth / 2,  windowHeight * 0.4, x, y);
      });
    */

    document.getElementById("imagenPrincipal").src = "images/cap_" + numeroCapitulo + "/c_" + numeroCapitulo + "_" + numeroPagina + ".gif";

    console.log("Capitulo: " + numeroCapitulo + " Página: " + numeroPagina + " Random: " + capituloRandom);
}
    

function final() {

    if (capituloUnoEstado == true) {
            numeroPagina = capituloUno;
    }

    if (capituloRandom = 0) {
           numeroPagina = capituloDos;
   }

   if (capituloRandom = 1) {
           numeroPagina = capituloTres;
   }

   if (capituloRandom = 2) {
           numeroPagina = capituloOcho;
   }

   if (capituloRandom = 3) {
           numeroPagina = capituloOnce;
   }

   if (capituloRandom = 4) {
           numeroPagina = capituloDoce;
   }

   if (capituloRandom = 5) {
           numeroPagina = capituloTrece;
   }

   if (capituloRandom = 6) {
           numeroPagina = capituloCatorce;
   }

   if (capituloRandom = 7) {
           numeroPagina = capituloQuince;
   }

   console.log("Capitulo: " + numeroCapitulo + " Página: " + numeroPagina + " Random: " + capituloRandom);

}
