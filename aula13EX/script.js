function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0  || fano.value > ano ){
        alert('verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade>= 0 && idade< 10){
                //criança
                       img.setAttribute('src' , ' fotobebem.png')
            }else if (idade >= 10 && idade <21){
                //jovem
                       img.setAttribute('src', 'fotojovemh.png')
            } else if (idade<50){
                //adulto
                img.setAttribute('src','fotoadulto.png')
            } else {
                // idoso
                img.setAttribute('src','fotoidosoh.png')
            }
            
        } else if (fsex[1].checked){
            genero = ' mulher'
            if (idade>= 0 && idade< 10){
                //criança
                img.setAttribute('src','fotobebemenina.png')
            }else if (idade >= 10 && idade <21){
                 //jovem
                 img.setAttribute('src','fotojovemm.png')
            } else if (idade<50){
                 //adulto
                 img.setAttribute('src','fotoadulta.png.')
            } else {
                 // idoso
                 img.setAttribute('src','fotoidosa.png.')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }   

    
}