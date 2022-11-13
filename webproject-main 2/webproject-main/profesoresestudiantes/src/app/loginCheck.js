
const loggetdOutlinks = document.querySelector('.loggedout')
const loggedInLinks= document.querySelector('.loggedin')
console.log(loggetdOutlinks)
console.log(loggedInLinks)
export const loginCheck = user => {
    if (user) {
        loggetdOutlinks.forEach(link => link.style.display = 'none')
        loggedInLinks.forEach(link => link.style.display = 'block' )
        console.log ('Usuario se identifico')
    } else {
        loggetdOutlinks.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach(link => link.style.display = 'none' )
        console.log ('Usuario se salio')
    }
}
