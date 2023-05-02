const userName = document.querySelector('.input_text').value
const displayProfile = document.querySelector('.display')

// adding an eventlistener to the submition button
document.querySelector('.summit').addEventListener('click', getUserName)

// get user name function 
function getUserName(e) {
  let useName = document.querySelector('.input_text').value
  let url = `https://api.github.com/users/${useName}`

  // fetching data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {

      // dispay fetched datas in the DOM
      document.querySelector(".my_profile").innerHTML = `
      <div class="information-box">
        <div>
          <a href="https://github.com/${data.login}" target="_blank">
            <img src="${data.avatar_url}" alt="profile picture"/>
          </a>
        </div>
        <div class="information">
          <h2><a href="https://github.com/${data.login}" target="_blank"> ${data.login}</a></h2>
          <p><a href="https://github.com/${data.login}?tab=repositories" target="_blank"> Reposatories: ${data.public_repos}</a></p>
        </div>
      </div>
      `
    })
    .catch((err) => {
      // document.querySelector('#display').innerHTML = `Profile not found. error: ${err}`
      console.log("Profile not found", err)
    })
    e.preventDefault()
}




























