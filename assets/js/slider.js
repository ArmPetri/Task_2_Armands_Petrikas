const reviewArray = [
  {
    name: 'Ken Ludden',
    title: 'Director, Margot Fonteyn Academy of Ballet',
    review: 'For it is Juris work that is the light the human race needs so badly these days. His vision is inspired and talent is beyond measure.'
  },
  {
    name: 'George Baron',
    title: 'CEO, Boston Theater',
    review: 'For it is Juris work that is the light the human race needs so badly these days. His vision is inspired and talent is beyond measure.'
  },
  {
    name: 'Tim Kennedy',
    title: 'Dancer, Margot Fonteyn Academy of Ballet',
    review: 'For it is Juris work that is the light the human race needs so badly these days. His vision is inspired and talent is beyond measure.'
  },
]

const reviews = document.querySelector('.reviews')
const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')

const textWrapper = document.createElement('div')
textWrapper.setAttribute('class', 'text-wrapper')

const reviewerName = document.createElement('h3')

const reviewerTitle = document.createElement('p')
reviewerTitle.setAttribute('class', 'Text2')

const review = document.createElement('p')
review.setAttribute('class', 'Text1')

textWrapper.append(reviewerName)
textWrapper.append(reviewerTitle)
textWrapper.append(review)
reviews.prepend(textWrapper)

let currentReview = 0

//   let generateReview = () => {
reviewerName.innerHTML = reviewArray[currentReview].name
reviewerTitle.innerHTML = reviewArray[currentReview].title
review.innerHTML = reviewArray[currentReview].review
//   }

  leftArrow.addEventListener('click', () => {
    if(currentReview === 0){
      currentReview = reviewArray.length
    } else {
      currentReview = reviewArray.length - 1
    }
  })

  rightArrow.addEventListener('click', () => {
    if(currentReview === reviewArray.length){
      currentReview = 0
    } else {
      currentReview = reviewArray.length + 1
    }
  })

  // let generateReview = () => {
   
  // }

// generateReview(currentReview)