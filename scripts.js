

let membros = {
  membrosLista: [
    {
      nome: "Wallacy Sebastian",
      img: "./assets/m5.png",
      cargo: "algo",
      email: "wallacy@codifica.com",
      github: "github.com/wallacy",
    },
    {
      nome: "Enzo Guido",
      img: "./assets/m2.png",
      cargo: "algo",
      email: "enzo@codifica.com",
      github: "github.com/enzo",
    },
    {
      nome: "Martina Kauffmann",
      img: "./assets/m11.png",
      cargo: "algo",
      email: "martina@codifica.com",
      github: "github.com/martina",
    },
    {
      nome: "Victor Cercasin",
      img: "./assets/m8.png",
      cargo: "algo",
      email: "victor@codifica.com",
      github: "github.com/victor",
    },
    {
      nome: "João Gabriel",
      img: "./assets/m12.png",
      cargo: "algo",
      email: "joao@codifica.com",
      github: "github.com/joao",
    },
    {
      nome: "Pedro Augusto",
      img: "./assets/m4.png",
      cargo: "algo",
      email: "pedro@codifica.com",
      github: "github.com/pedro",
    },
    {
      nome: "Lucca Motta",
      img: "./assets/m6.png",
      cargo: "algo",
      email: "lucca@codifica.com",
      github: "github.com/lucca",
    },
    {
      nome: "João Alex",
      img: "./assets/m1.png",
      cargo: "algo",
      email: "joao@codifica.com",
      github: "github.com/joao",
    },
    {
      nome: "Guilherme Bertozzo",
      img: "./assets/m9.png",
      cargo: "algo",
      email: "guilherme@codifica.com",
      github: "github.com/guilherme",
    },
    {
      nome: "Arthur MP",
      img: "./assets/m10.png",
      cargo: "algo",
      email: "arthur@codifica.com",
      github: "github.com/arthur",
    },
  ],
};



class Membro {
  constructor(id, diametro, pos, membrosJson, membros) {
    this.img = img;
    this.diametro = diametro;
    this.pos = pos;
    var img = document.createElement("img");
    img.className = "imagemMembro";
    img.src = membrosJson.membrosLista[id].img;
    img.style.transitionDuration = "0.3s";
    img.style.zIndex = 1;
    img.style.height = diametro + "px";
    img.style.width = diametro + "px";
    img.style.left = pos.x + "px";
    img.style.top = pos.y + "px";
    img.style.margin =
      "-" + diametro / 2 + "px 0 0" + "-" + diametro / 2 + "px";
    img.id = membrosJson.membrosLista[id].nome;
    document.getElementById("corpo").appendChild(img);
  }
}
popular(membros);


function popular(membrosJson) {
  membros = [];
  let img = [];
  for (var i = 0; i < membrosJson.membrosLista.length; i++) {
    let id = i;
    let diametro = gerarDiametro();
    let pos = gerarPos(membros, diametro);
    membros[i] = new Membro(id, diametro, pos, membrosJson, membros);
  }
  let memoria = [];
  for (let i = 0; i < membros.length; i++) {
    criarSvg(membros, i);
    memoria[i] = document
      .getElementById(membrosJson.membrosLista[i].nome)
      .cloneNode(true);
    document
      .getElementById(membrosJson.membrosLista[i].nome)
      .addEventListener("mouseover", function () {
        mouseOver(this, membrosJson, i);
      });
    document
      .getElementById(membrosJson.membrosLista[i].nome)
      .addEventListener("mouseout", function () {
        mouseOut(this, memoria[i]);
      });
  }
}

function gerarDiametro() {
  raio = Math.floor(Math.random() * 50 + 100);
  return raio;
}
function gerarPos(membros, diametro) {
  pos = gerarPosAleatorio();
  for (let i = 0; i < membros.length; i++) {
    let distancia = Math.sqrt(
      Math.pow(pos.x - membros[i].pos.x, 2) +
        Math.pow(pos.y - membros[i].pos.y, 2)
    );
    let somaRaios = diametro / 2 + membros[i].diametro / 2;
    if (distancia < somaRaios) {
      gerarPos(membros, diametro);
    }
  }
  return pos;
}
function gerarPosAleatorio() {
  pos = {
    x: Math.floor(Math.random() * 60 + 10),
    y: Math.floor(Math.random() * 75 + 15),
  };
  posCorrigido = gerarRelacaoPixelPorcentagem(pos);
  return posCorrigido;
}
function criarSvg(membros, indice) {
  for (let i = 0; i < membros.length; i++) {
    if (Math.random() > 0.8) {
      var svg = document.getElementById("svg");
      svg.innerHTML =
        svg.innerHTML +
        "<line x1=" +
        membros[indice].pos.x +
        " y1=" +
        membros[indice].pos.y +
        " x2=" +
        membros[i].pos.x +
        " y2=" +
        membros[i].pos.y +
        ' stroke-dasharray="5,5" style="stroke:rgba(100, 149, 238, 0.450);stroke-width:2" />';
    }
  }
}
function gerarRelacaoPixelPorcentagem() {
  let divElement = document.getElementById("corpo");
  let xPx = divElement.clientWidth;
  let yPx = divElement.clientHeight;
  let posXPx = (pos.x * xPx) / 100;
  let posYPx = (pos.y * yPx) / 100;
  return { x: posXPx, y: posYPx };
}
function mouseOver(img, membrosJson, i) {
  var clone = img.cloneNode(true);
  img.style.zIndex = 2;
  img.style.height = 200 + "px";
  img.style.width = 200 + "px";
  img.style.margin = "-" + 100 + "px 0 0" + "-" + 100 + "px";
  var infoBox = document.createElement("div");
  infoBox.style.display = "inline";
  infoBox.id = img.id + "Info";
  infoBox.style.color = "rgba(36, 36, 64, 0.8)";
  infoBox.style.position = "absolute";
  infoBox.style.left = img.style.left;
  infoBox.style.top = img.style.top;
  infoBox.style.marginTop = "-100px";
  infoBox.style.marginLeft = "0px";
  infoBox.style.height = "200px";
  infoBox.style.width = "300px";
  infoBox.style.backgroundColor = "#004080";
  infoBox.style.visibility = "hidden";
  infoBox.style.transitionDelay = "0.3s";
  document.getElementById("corpo").appendChild(infoBox);
  img.addEventListener("mousemove", () => {
    setTimeout(() => {
      mostrarInfoBox(infoBox, membrosJson, i);
    }, 10);
  });
  img.addEventListener("mouseout", () => {
    apagarInfoBox(infoBox);
  });
  function mostrarInfoBox(infoBox, membrosJson, i) {
    if (!infoBox.style.borderRadius) {
      infoBox.style.borderRadius = "5px";
      infoBox.style.border = "thin solid CornflowerBlue";
      infoBox.style.visibility = "visible";
      infoBox.style.display = "inline";
      infoBox.id = img.id + "Info";
      infoBox.style.position = "absolute";
      infoBox.style.left = img.style.left;
      infoBox.style.top = img.style.top;
      infoBox.style.marginTop = "-100px";
      infoBox.style.marginLeft = "0px";
      infoBox.style.height = "200px";
      infoBox.style.width = "400px";
      infoBox.style.zIndex = "1";
      infoBox.style.backgroundColor = "rgba(36, 36, 64, 0.8)";
      infoBox.style.transitionDuration = "0.3s";
      infoBox.style.fontFamily = "Geneva";
      infoBox.style.fontSize = "20px";
      infoBox.style.color = "rgba(255, 255,255,0.6)";
      let infoBoxUl = document.createElement("ul");
      infoBoxUl.innerHTML =
        "<h4>" +
        membrosJson.membrosLista[i].nome +
        "</h4>" +
        "<li>" +
        membrosJson.membrosLista[i].cargo +
        "</li>" +
        "<li>" +
        membrosJson.membrosLista[i].email +
        "</li>" +
        "<li>" +
        membrosJson.membrosLista[i].github +
        "</li>";
      infoBoxUl.style.marginLeft = "20%";
      infoBoxUl.style.listStyle = "none";
      infoBox.appendChild(infoBoxUl);
    } else {
    }
  }
  function apagarInfoBox(infoBox) {
    infoBox.remove();
  }
}
function mouseOut(img, memoria) {
  img.style.height = memoria.style.height;
  img.style.width = memoria.style.width;
  img.style.margin = memoria.style.margin;
  img.style.zIndex = memoria.style.zIndex;
}
