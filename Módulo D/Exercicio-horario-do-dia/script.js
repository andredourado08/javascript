function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas` 
    if (hora >= 0 && hora < 12) {
        //bom dia 
        img.src='fotos/foto-entardecer-250.png'
        document.body.style.background= '#FEB948'
    } else if (condition) {
        //boa tarde
        img.src='fotos/foto-estrada-250.png'
        document.body.style.background= '#FEB948'
    }else {
        //boa noite
        img.src='fotos/foto-lua-250.png'
         document.body.style.background= '#FEB948'
    }
}