// FROM https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
// scroll smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// FROM https://generatepress.com/forums/topic/make-element-appear-after-scroll/
// debounce scroll eventListener
function debounceX(func, wait = 2, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
// check position 
function checkScrollPosition() {
  let windowY = window.scrollY;
  let targetY = 600; // target scroll position
  console.log(window.scrollY);
  console.log(document.body.scrollHeight);
  if (windowY < targetY || (windowY + window.innerHeight) > document.body.scrollHeight - 250) {
    watchedEL.classList.remove('is-visible');
  } else {
    watchedEL.classList.add('is-visible');
  }
  scrollPos = windowY;
}
//  add listener
const watchedEL = document.querySelector('#top-jump');
window.addEventListener('scroll', debounceX(checkScrollPosition));