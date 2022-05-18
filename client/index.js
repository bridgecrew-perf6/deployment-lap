tupetBtn = document.querySelector('#tupet-btn');

const tupetAlert = () => {

    if (firstName.value.length === 0) {
        alert('Please enter a name so we can better s̶c̶a̶m̶ SERVE you')
    } else if (firstName.value === 'carlo' || firstName.value === 'Carlo' || firstName.value === 'Giancarlo' || firstName.value === 'giancarlo') {
        alert(`ordering an extra large toupee for ${firstName.value}...`)
    } else {
        alert(`Thanks, ${firstName.value}! Toupee ordered! (no information theft detected at all 100% guaranteed)`)
    }

}

const userInput = () => {
    
    firstName = document.querySelector('#first-name')
    lastName = document.querySelector('#last-name')
    creditCard = document.querySelector('#credit-card')
    socialSecurity = document.querySelector('#social-security')
    birthCertificate = document.querySelector('#birth-certificate')

    tupetAlert()

    firstName.value = ''
    lastName.value = ''
    creditCard.value = ''
    socialSecurity.value = ''
    birthCertificate.value = ''


}



tupetBtn.addEventListener('click', userInput)