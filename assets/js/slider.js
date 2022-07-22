const reviewArray = [
  {
    name: 'Ken Ludden',
    title: 'Director, Margot Fonteyn Academy of Ballet',
    review: 'For it is Juris work that is the light the human race needs so badly these days. His vision is inspired and talent is beyond measure.'
  },
  {
    name: 'George Baron',
    title: 'CEO, Boston Theater',
    review: 'Always contributes vigorously to the efforts of the team, whether as a leader or a team member.'
  },
  {
    name: 'Tim Kennedy',
    title: 'Dancer, Margot Fonteyn Academy of Ballet',
    review: 'Sympathetically helps others to address their weaknesses. Regularly produces creative, original ideas, plans, products or methods '
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

let reviewIndex = 1
showReview(currentReview)

leftArrow.addEventListener('click', () => {
  plusReview(-1)
})

rightArrow.addEventListener('click', () => {
    plusReview(1)
})

function plusReview(n) {
  showReview(reviewIndex += n);
}

// Thumbnail image controls
function currentReview(n) {
  showReview(reviewIndex = n);
}

function showReview(n) {
  let i;
  if (n > reviewArray.length) {reviewIndex = 1}
  if (n < 1) {reviewIndex = reviewArray.length}

  reviewerName.innerHTML = reviewArray[reviewIndex-1].name
  reviewerTitle.innerHTML = reviewArray[reviewIndex-1].title
  review.innerHTML = reviewArray[reviewIndex-1].review
}

