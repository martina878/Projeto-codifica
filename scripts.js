preload();
function preload(){
    let membros = [];
    membros = loadJSON("/.membros.json");
}
document.write(membros[1].nome);


function Popular()
{
    let fatorPixelPorcento = gerarCssTeste();       //funcao que cria div de teste para calcular o fator tela(px)/tela(%)
    let nMembros = 10;
    for(let i=1; i<=nMembros; i++)
    {
        let id = i;
        let raio = gerarRaio();
        let pos = gerarPos(membros);

        



        membros[i] = new Membro(id, raio, pos);
    }

    
}
class Membro
{
    constructor(id, img, raio, pos)
    {
        this.id = id;
        this.img = img;
        this.raio = raio;
        this.pos=  pos;
        this.cssId = gerarCss();
        this.posPx = this.posPx = {x: this.pos.x *fatorPixelPorcento.x,y: this.pos.y * fatorPixelPorcento.y};        //converte pos que esta em % para pixels
    }
    gerarCss()
    {
        
    }
    getPos()
    {
        divElement = document.getElementById(cssId);
        let lx = divElement.offsetLeft;
        let rx = divElement.offsetRight;
        posPx = {x: lx,y: ly};
    }
    
}

function gerarRaio()
{
    raio = Math.floor(Math.random() * (150 - 100) + 100);
    return raio;
}

gerarPos(membros)
{
    let pos = gerarPosAleatorio();
    for (var i = 0; i < membros.length; i++)
    {
        if(membros[i].pos[0] ){}

    }
}
gerarPosAleatorio()
{
    pos = [Math.floor(Math.random()*100), Math.floor(Math.random()*100)];

}