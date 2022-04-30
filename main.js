const LinksSocialMedia = {
  github: 'leticialeiteribeiro',
  youtube: 'leticiaproj',
  facebook: 'leticia.leiteribeiro',
  instagram: 'leticialeiteribeiro',
  twitter: 'leticiaproj'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// i = i + 1
// i++

// ser humano 12345678910
//computador 0123456789

changeSocialMediaLinks()

//criar nova fc, trazer as inf do github
function getGitHubProfileInfos() {
  //buscando inf do usuario
  const url = `https://api.github.com/users/${LinksSocialMedia.github}` //def a url da api

  fetch(url)
    .then(response => response.json()) // errow function
    .then(data => {
      //pegar os elementos que eu quero e substituir dentro do data
      username.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url //pode ser criando n then
      UserImage.src = data.avatar_url //2parte busca os campos no api
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

//arrow function (flecha) - forma contraída da funcao
//function nomedafuncao(argumentos){}
//funcao anonima - não dá nome para a funcao
//argumento => {}
