import Dog from './Dog.js'
import dogs from './data.js'
import { renderLikedDogPosts, renderDislikeDogPosts } from './utilis.js'
// Reusable variables including (empty card array[])
let card = []
let currentDog = 0;
let reuse = ``
let isTrue = false


// Event Listener for the doc
document.addEventListener('click', (e) => {
    if (e.target.id === 'like') {
        isTrue = true // This code checks if the button is clicked
        liked()
    } else if (e.target.id === 'delete') {
        isTrue = false
        dislike()
    }
})

// The function that creates new object or returns new array
function dog() {
    let nextCard = dogs[currentDog]
    return nextCard ? new Dog(nextCard) : postsHtml()
}

// The callback function for disliked button
function dislike() {
    if (dogs.length > 0) {
        setTimeout(() => {
            currentDog++
            posts = dog()
            render()
        }, 1000)
        //invoking the function when the image is liked
        likedPostsHtml(posts)
    }
}


// The callback function for liked button
function liked() {
    if (dogs.length > 0) {
        setTimeout(() => {
            currentDog++
            posts = dog()
            render()
        }, 1000)        
        likedPostsHtml(posts)
    } 
}

// This function checks if the post is liked or not with isTrue boolean
function likedPostsHtml(isLiked) {
    if (isTrue) {
        isLiked = isLiked.setLikedDogs(true)
        reuse = card.unshift(dogs[currentDog])
    }
    else {
        isLiked = isLiked.setDisLikedDogs(true)
    }
   
}


// This function renders liked post from card array else a message
function postsHtml() {
    return card.length > 0
        ? renderLikedDogPosts(card)
        : renderDislikeDogPosts()
    
}


// This variable creates the class obeject
let posts = new Dog(dogs[currentDog])

// Rendering the first index of the array including with class method
function render() {
  return document.querySelector('.card-image').innerHTML = posts.setdogsHtml()
}

render()