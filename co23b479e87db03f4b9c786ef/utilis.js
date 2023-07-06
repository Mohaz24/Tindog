const content = document.getElementById('main')
function renderLikedDogPosts(dogsData) {
  content.innerHTML = `<h2 class="liked-title">Here is your matches🔥</h2>`
  const newDogsArr = dogsData.map((dog) => {
    const { name, avatar } = dog
    return `
      <section class="liked-card">
          <img class="liked-photos" src="${avatar}" />
          <h4>${name}</h4>
        <section>
          `
  }).join('')
  return document.body.innerHTML += newDogsArr
}


function renderDislikeDogPosts() {
  return content.innerHTML = `
     <div class="disliked-cards">
        <h2>No matches like posts🫤</h2>
        <img class="gif" src="./images/giphy-gif.png" />
      </div>
  `
}


export { renderLikedDogPosts, renderDislikeDogPosts }