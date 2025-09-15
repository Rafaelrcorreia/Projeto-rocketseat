function toggleMode() {
    const body = document.body
    body.classList.toggle('light')

    //if(body.classList.contains('light')){
    //    body.classList.remove ('light')
    //} else
    //   body.classList.add('light')

    const img = document.querySelector('#profile img')
    if (body.classList.contains('light')) {
        img.setAttribute('src', 'Imagens/avatar-light.png')
        img.setAttribute('alt', "Imagem de perfil-light")
    }
    else {

        img.setAttribute('src', 'Imagens/avatar.png')
        img.setAttribute('alt', "Imagem de perfil-dark")
    }

}