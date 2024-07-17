const stories = [
    "https://images.unsplash.com/photo-1702976513671-971beb66baf8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721048149858-139c52892fc9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721048166150-3b2bb2ca3431?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1651216906766-c2bd982db00d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

const currStory = document.getElementById('currStory')
const storyContainer = document.getElementById('stories')
const loader = document.getElementById('loader')

const displayStories = () => {


    stories.forEach((story, index) => {
        const div = document.createElement('div')
        div.classList.add('story')
        div.innerHTML = `
     <img src=${story} alt=""> 
    `
        storyContainer.appendChild(div)

        div.addEventListener('click',()=>{
          
            currStory.src = story
            
            currStory.style.opacity = 1
          
        })
    })
}


displayStories()