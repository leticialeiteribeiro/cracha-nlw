const LinksSocialMedia = {
  github: 'leticialeiteribeiro',
  youtube: 'https://youtube.com/channel/UCsLfnTey9N5S548bi5d_Pwg',
  facebook: 'leticia.leiteribeiro',
  instagram: 'leticialeiteribeiro',
  twitter: 'OzEscolaNautica'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

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
