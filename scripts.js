let promise = fetch("membros.json");    //recuperacao do json   -promessa fetch
    promise.then(gotData);  //recuperacao do json     -recebe dados
    promise.catch(gotErr)   ;//recuperacao do json     -recebe erro
function gotData(data)  //recuperacao do json     -recebe dador
{
     let promise2 = data.json();    //recuperacao do json       -promessa .json
     promise2.then(popular);    //recuperacao do json           -recebe dados
     promise2.catch(JsonErr);    //recuperacao do json          -recebe erro
}
function gotErr(err){ console.log(err);}    //recuperacao do json       -erro promessa fetch
function JsonErr (error){console.log(error);}   //recuperacao do json      -erro promessa .json

function popular(membrosJson){
    membros = [];
    for(var i=0; i<membrosJson.membrosLista.length; i++)
    {
        let id = i;
        let diametro = gerarDiametro();
        let pos = gerarPos( membros, diametro);
        membros[i] = new Membro(id, diametro, pos, membrosJson);
    }
for(let i = 0; i< membros.length; i++)
    {
    criarSvg(membros, i);
    }
}   
function gerarDiametro()
{
    raio = Math.floor(Math.random() * 50 + 100);
    return raio;
}
function gerarPos( membros, diametro)
{
    pos = gerarPosAleatorio();
    for(let i = 0; i<membros.length; i++)
    {
    let distancia = Math.sqrt(Math.pow((pos.x-membros[i].pos.x), 2)   +  Math.pow(  (pos.y - membros[i].pos.y),2))
    let somaRaios = diametro / 2 + membros[i].diametro / 2;
        if(distancia < somaRaios)
        {
            gerarPos(membros, diametro);
        }
    }
    return pos;
}
function criarSvg(membros, indice)
{
    for(let i = 0; i < membros.length; i++)
    {
        if(Math.random() > 0.8)
        {
            var svg = document.getElementById("svg");
            svg.innerHTML = svg.innerHTML + "<line x1="+membros[indice].pos.x+" y1="+membros[indice].pos.y+" x2="+membros[i].pos.x+" y2="+membros[i].pos.y+" stroke-dasharray=\"5,5\" style=\"stroke:rgba(100, 149, 238, 0.450);stroke-width:2\" />"
        }
    }
}
function gerarPosAleatorio()
{
    pos = {x: Math.floor(Math.random()*75+10), y: Math.floor(Math.random()*75 + 10)}
    posCorrigido =  gerarRelacaoPixelPorcentagem(pos);
    return posCorrigido;
} 
class Membro
{
    constructor(id, diametro, pos, membrosJson)
    {
        this.id = id;
        this.img = img;
        this.diametro = diametro;
        this.pos=  pos;
        var img = document.createElement('img');
        img.className = "imagemMembro";
        img.src = membrosJson.membrosLista[id].img;
        img.style.height = diametro+"px";
        img.style.width = diametro+"px";
        img.style.left = pos.x+"px";
        img.style.top = pos.y+"px";
        img.style.margin = "-"+ diametro/2  + 'px 0 0' + '-' + diametro/2 +"px";
        img.id = membrosJson.membrosLista[id].nome;
        document.getElementById('corpo').appendChild(img);
    }
    printarOi()
    {
        console.log("Oi");
    }
}
function gerarRelacaoPixelPorcentagem()
{
  let divElement = document.getElementById("corpo");
  let xPx = divElement.clientWidth;
  let yPx = divElement.clientHeight;
  let posXPx = pos.x * xPx /100;
  let posYPx = pos.y * yPx /100;
  return {x: posXPx,y: posYPx};
}

