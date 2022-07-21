// Dynamic Grid 
let gridContainer = document.querySelector('#video-grid')

let videoArray = [
{
    name: "Sofija Āboliņa",
    poster: "./assets/img/grid-image-1.png"
  },
{
  name: "Emīlija Balode",
  poster: "./assets/img/grid-image-2.png"
},
{
  name: "Alise Bērziņa",
  poster: "./assets/img/grid-image-3.png"
},
{
  name: "Anna Celmiņa",
  poster: "./assets/img/grid-image-4.png"
},
{
  name: "Arta Balode",	
  poster: "./assets/img/grid-image-5.png"
},
{
  name: "Marta Dambe",
  poster: "./assets/img/grid-image-6.png"
},
{
  name: "Amēlija Dukure",
  poster: "./assets/img/grid-image-7.png"
},
{
  name: "Paula Eglīte",
  poster: "./assets/img/grid-image-8.png"
},
{
  name: "Emma Elksne",
  poster: "./assets/img/grid-image-9.png"
},
{
  name: "Elizabete Gaile",
  poster: "./assets/img/grid-image-10.png"
},
{
  name: "Dārta Greste",	
  poster: "./assets/img/grid-image-11.png"
},
{
  name: "Estere Grūbe",	
  poster: "./assets/img/grid-image-12.png"
},
{
  name: "Elza Indriksone",	
  poster: "./assets/img/grid-image-13.png"
},
{
  name: "Viktorija Jaunzeme",	
  poster: "./assets/img/grid-image-14.png"
},
{
  name: "Katrīna Jurjāne",	
  poster: "./assets/img/grid-image-15.png"
},
{
  name: "Mia Kalna",	
  poster: "./assets/img/grid-image-16.png"
},
{
  name: "Marija Kalniņa",	
  poster: "./assets/img/grid-image-17.png"
},
]

videoArray.length = videoArray.length + 82;

for(i = 0; i < videoArray.length; i++) {
  let imageDiv = document.createElement('div')
  imageDiv.setAttribute('class', "eachVideo");
  
  let imageOverlay = document.createElement('div')
  imageOverlay.setAttribute('class', "img-overlay");

  let name = document.createElement('h3')
  let nameInVideo = document.createElement('h3')

  let num = document.createElement('h2')
  num.setAttribute('class', 'image-num')
  num.innerHTML = i +1

  let img = document.createElement('img');

  if(videoArray[i] !== undefined) {
    img.src = videoArray[i].poster
    img.setAttribute('class', 'image')

    imageDiv.append(img)
    imageDiv.append(imageOverlay)
    
    name.setAttribute('class', 'name')
    name.innerHTML = videoArray[i].name

    nameInVideo.setAttribute('class', 'name-in-video')
    nameInVideo.innerHTML = videoArray[i].name

    let videoOverlay = document.createElement('div')
    videoOverlay.setAttribute('class', 'video-overlay')

    let videoTag = document.createElement('VIDEO')
    videoTag.setAttribute('class', 'video-tag')
    videoTag.poster = "../../assets/img/video-poster.png";
    videoTag.setAttribute("width", "912");
    videoTag.setAttribute("height", "511");

    let x = document.createElement('img')
    x.setAttribute('class', "close-button")
    x.setAttribute('src', "./assets/img/x.png")

    x.addEventListener('click', () => {
      videoOverlay.remove()
      document.body.classList.remove('overlay-body')
    })


    let playButton = document.createElement('img')
    playButton.setAttribute('class', "play-button")
    playButton.setAttribute('src', "./assets/img/Vector.svg")


    imageDiv.addEventListener('click', () => {

      
      videoOverlay.append(x)
      videoOverlay.append(playButton)
      videoOverlay.append(videoTag)
      videoOverlay.append(nameInVideo)
      gridContainer.append(videoOverlay)
  
      document.body.classList.add('overlay-body')

    })
  } else if (videoArray[i] === undefined) {
    img.src = "../../assets/img/image-grid-background.png";
    img.setAttribute('class', 'image2')

    imageOverlay.opacity = 1;

    name.setAttribute('class', 'name2')  
    name.innerHTML = 'Jauns stāsts tiks pievienots drīzumā'
  }

  imageDiv.append(img)
  imageDiv.append(name)
  imageDiv.append(num)
  gridContainer.append(imageDiv)
}