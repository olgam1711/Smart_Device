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
var modalCallback = document.querySelector('.modal-callback')
var modalClose = document.querySelector('.modal-callback__cross-button')

callback.addEventListener('click', function (evt) {
  evt.preventDefault()
  modalCallback.classList.add('modal-callback--open')
})

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault()
  modalCallback.classList.remove('modal-callback--open')
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault()
    if (modalCallback.classList.contains('modal-callback--open')) {
      modalCallback.classList.remove('modal-callback--open')
    }
  }
})
