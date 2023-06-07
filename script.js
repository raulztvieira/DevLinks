function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  // outro modo de fazer
  // if (html.classList.contains('dark')) {
  //   html.classList.remove('dark')
  // } else {
  //   html.classList.add('dark')
  // }

  // substituição do avatar
  // const img = document.querySelector("#profile img")
  // if (html.classList.contains('dark')) {
  //   img.setAttribute('src', './assets/avatar-dark.png')
  // } else {
  //   img.setAttribute('src', './assets/avatar.png')
  // }
}