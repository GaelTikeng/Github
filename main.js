const userName = document.querySelector('.input_text').value
const displayProfile = document.querySelector('.display')

// async function getUserName() {
//   const response = await fetch('https://docs.github.com/en/rest?apiVersion=2022-11-28')

//   try {
//     if (!response.ok) {
//       throw new Error(`Failed to fetch posts: ${response.status}`)
//     }
  
//     return response.json()
//   } catch (e) {
//     console.log(e)
//   }
// }

// function listPosts(postContainerElementId) {
//   const postContainerElement = document.getElementById('postContainerElement')

//   if (!postContainerElement) {
//     return
//   }

//   getUserName()
//     .then(posts => {})
//     .catch((e) => {
//       console.log(e)
//     })
// }

// // function postElement (post) {
// //   const anchorElement = document.createElement('a')

// // }

// const response = await fetch(`https://api.github.com/users/${useName}`)

// async function getUserName() {
//   const response = await fetch('https://api.github.com/users/mojombo')
//   const data = await response.json()
//   console.log(data)
//   // console.log(response.status)
// }
// getUserName()

document.querySelector('.summit').addEventListener('click', getUserName)

function getUserName(e) {
  let useName = document.querySelector('.input_text').value
  let url = `https://api.github.com/users/${useName}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".my_profile").innerHTML = `
      <div>
      <a href="https://github.com/${data.login}" target="_blank">
        <img 
          src="${data.avatar_url}" alt="profile picture"
        />
      </a>
    </div>
    <div class="information">
      <h2><a href="https://github.com/${data.login}" target="_blank"> ${data.login}</a></h2>
      <p>Reposatories: ${data.public_repos}</p>
    </div>
      `
      console.log(data)
    })
    .catch((err) => {
      console.log("Profile not found", err)
    })
    e.preventDefault()
}

// function lowerCase(str) {
//   return str.toLowerCase()
// }

// function capitaliseFirstletter (string) {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }



























