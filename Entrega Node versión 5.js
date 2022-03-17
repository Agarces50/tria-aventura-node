const readlineSync = require("readline-sync");

const historia = [
  {
    text: "Érase una vez Uga, la tortugaCaramba, todo me sale mal!, se lamentaba constantemente Uga, la tortuga. Y no era para menos: siempre llegaba tarde, era la última en terminar sus tareas, casi nunca ganaba premios por su rapidez y, para colmo era una dormilona. una gran ciutat, on tots els habitants vinen a buscar-se una mica de llum. Vols seguir? ",
    si: 1,
    no: 4,
  },
  {
    text: "¡Esto tiene que cambiar!, se propuso un buen día, harta de que sus compañeros del bosque le recriminaran por su poco esfuerzo. Y optó por no hacer nada, ni siquiera tareas tan sencillas como amontonar las hojitas secas caídas de los árboles en otoño o quitar las piedrecitas del camino a la charca.Para qué preocuparme en hacerlo si luego mis compañeros lo terminarán más rápido? Mejor me dedico a jugar y a descansar",
    si: 2,
    no: 3,
  },
  {
    text: "“No es una gran idea”, dijo una hormiguita. “Lo que verdaderamente cuenta no es hacer el trabajo en tiempo récord, lo importante es hacerlo lo mejor que sepas, pues siempre te quedarás con la satisfacción de haberlo conseguido. No todos los trabajos necesitan de obreros rápidos. Hay labores que requieren más tiempo y esfuerzo. Si no lo intentas, nunca sabrás lo que eres capaz de hacer y siempre te quedarás con la duda de qué hubiera sucedido si lo hubieras intentado alguna vez. Es mejor intentarlo y no conseguirlo, que no hacerlo y vivir siempre con la espina clavada. La constancia y la perseverancia son buenas aliadas para conseguir lo que nos proponemos, por eso te aconsejo que lo intentes. Podrías sorprenderte de lo que eres capaz",
    si: 0,
    no: 2,
  },
  {
    text: "Hormiguita, tienes razón! Esas palabras son lo que necesitaba: alguien que me ayudara a comprender el valor del esfuerzo, prometo que lo intentaré Así, Uga, la tortuga, empezó a esforzarse en sus quehaceres. Se sentía feliz consigo misma pues cada día lograba lo que se proponía, aunque fuera poco, ya que era consciente de que había hecho todo lo posible por conseguirlo.He encontrado mi felicidad: lo que importa no es marcarse metas grandes e imposibles, sino acabar todas las pequeñas tareas que contribuyen a objetivos mayores”.",
    si: 3,
    no: 4,
  },
  {
    text: "Espero que haya gustado , te invito a seguir conociendo los cuentos infantiles y sus moralejas que nos harán crecer a niños y mayores!",
    si: -1,
    no: -1,
  },
];
let paginaActual = 0;

while (paginaActual >= 0) {
  console.log(llegirPagina());
  let opcio = demanaOpcio();
  paginaActual = seguentPagina(opcio);
}

function llegirPagina() {
  return historia[paginaActual].text;
}

function demanaOpcio() {
  let resposta = readlineSync.question(` (si/no) `);
  if (resposta === "si") return true;
  return false;
}

function seguentPagina(opcio) {
  if (opcio) return historia[paginaActual].si;
  else return historia[paginaActual].no;
}
