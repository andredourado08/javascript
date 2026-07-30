function caregar(){
    var msg = window.document.getElementById('mmsg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas` 
}