'use sctrict'

var contentsButton = document.querySelector('.contents__button')
var contactsButton = document.querySelector('.contacts__button')
var contents = document.querySelector('.contents')
var contacts = document.querySelector('.contacts')

contentsButton.addEventListener('click', function (evt) {
  contents.classList.toggle('contents--closed')
})

contactsButton.addEventListener('click', function (evt) {
  contacts.classList.toggle('contacts--closed')
})

var callback = document.querySelector('.callback__element--call')
var overlay = document.querySelector('.overlay')
var modalClose = document.querySelector('.modal-callback__cross-button')

callback.addEventListener('click', function (evt) {
  evt.preventDefault()
  overlay.classList.add('overlay--open')
})

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault()
  overlay.classList.remove('overlay--open')
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault()
    if (overlay.classList.contains('overlay--open')) {
      overlay.classList.remove('overlay--open')
    }
  }
})

overlay.addEventListener('click', function (evt) {
  if (evt.target == overlay) {
    evt.preventDefault()
    overlay.classList.remove('overlay--open')
  }
})
