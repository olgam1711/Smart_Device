'use sctrict'

var contentsButton = document.querySelector('.contents__button')
var contactsButton = document.querySelector('.contacts__button')
var contents = document.querySelector('.contents')
var contacts = document.querySelector('.contacts')

contentsButton.addEventListener('click', function (evt) {
  contents.classList.toggle('contents--closed')
  console.log(123)
})

contactsButton.addEventListener('click', function (evt) {
  contacts.classList.toggle('contacts--closed')
  console.log(123)
})
