class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    setDisLikedDogs(dislikedPosts) {
        this.hasBeenSwiped = dislikedPosts
        dislikedPosts ? document.querySelector('.icon-disliked').classList.add('reveal')
            : document.querySelector('.icon-disliked').classList.remove('reveal')
    }

    setLikedDogs(likedPosts) {
        this.hasBeenLiked = likedPosts
        likedPosts ? document.querySelector('.icon-liked').classList.add('reveal')
            : document.querySelector('.icon-liked').classList.remove('reveal')
    }

    setdogsHtml() {
        const { name, avatar, age, bio, } = this
        document.querySelector('.card-image').style.backgroundImage = `url('${avatar}')`
        return `
         <div class="badges">
            <img src="./images/badge-like.png" class="icon-liked" />
            <img src="./images/badge-nope.png" class="icon-disliked" />
            </div>
             <div class="card-content">
                    <h4 class="card-title"> ${name}, ${age} </h4>
                    <p class="card-bio">${bio} </p>
         </div>
             
        `
    }


}

export default Dog