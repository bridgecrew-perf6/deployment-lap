tupetBtn = document.querySelector('#tupet-btn');

const tupetAlert = () => {
    alert(`Thanks, ${firstName.value}! Tupet ordered! (no information theft detected at all 100% guaranteed)`)
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