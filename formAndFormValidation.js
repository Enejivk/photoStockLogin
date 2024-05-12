const confirmPasswordContainer = document.querySelector('.confirmPasswordContainer')
const confirmPasswordInput = document.getElementById('confirm-password');
const businessNameInput = document.getElementById('business-name');
const showPasswordIcons = document.querySelectorAll('.eye-icon');
const passwordInputs = document.querySelectorAll('.password');
const passwordInput = document.getElementById('password');
const websiteInput = document.getElementById('website');
const submitButton = document.getElementById('signin');
const emailInput = document.getElementById('email');



/* SHOW AND HID PASSWORD INCLUDING CONFIRM PASSWORD */
for(let i = 0; i < passwordInputs.length; i++){
    showPasswordIcons[i].addEventListener('click', (even) => {
        even.currentTarget.classList.toggle('fa-eye');
        const typeAttr = passwordInputs[i].getAttribute('type')
        if(typeAttr === 'password') {
            passwordInputs[i].setAttribute('type', 'text')
        } else {
            passwordInputs[i].setAttribute('type', 'password')   
        }
    })
}

const checkLengthInput = (input, inputType) => {
    if (input.length <= 10) {
        return `Your ${inputType} Should Be At Least 10 Characters.`
    }
    if(input.length > 50){
        return `Your ${inputType} Should not be More than 50 characters`
    }
}

/* CHECKING FOR VALID NAME AND VALID BUSINESS NAME */
const isValidName = (str) => {
    const regex = /^[a-zA-Z0-9\s\-'.]+$/;
    return regex.test(str)
}

/* CHECKING FOR VALID WEBSITE */
const isValidWebsite = (website) => {
    const regex = /^(?!\.)(?:[a-z0-9\-]{1,63})(?:\.[a-z]{2,63})*?\.(com)$(?::\d{2,5})?(?:[/?#]\S*)?$/;
    return regex.test(website)
}

/* CHECKING FOR PASSWORD MATCH */
const checkPasswordMatch = (password, confirmPassword) => {
    if(password !== confirmPassword ){
        return true
    }
}

const displayPasswordError = () => {
    /* removing the previous error message */

    const existingElement = confirmPasswordContainer.nextElementSibling
    if(existingElement && existingElement.classList.contains('password-error')){
        existingElement.remove()
    }
    if(checkPasswordMatch(passwordInput.value.trim(), confirmPasswordInput.value.trim())){
        const errorMessage =   `<p class='error password-error'>Both Passwords Must Match</p>`
        confirmPasswordContainer.insertAdjacentHTML('afterend', errorMessage);
        return true
    }
}

/* DISPLAY ERROR FOR WRONG WEBSITE */
const displayWebsiteError = () => {

    /* removing the previous error message */
    const existingElement = websiteInput.nextElementSibling
    if(existingElement && existingElement.classList.contains('website-error')){
        existingElement.remove()
    }
    const website = websiteInput.value.trim()
    if(!isValidWebsite(website)){
        const errorMessage =   `<p class='error website-error'>Kindly Enter A Valid Website Address.</p>`;
        websiteInput.insertAdjacentHTML('afterend', errorMessage)
        return true
    }
}
const displayBusinessError = () => {
    const existingElement = businessNameInput.nextElementSibling
    if(existingElement && existingElement.classList.contains('businessName-error')){
        existingElement.remove()
    }
    const businessNameError = checkLengthInput(businessNameInput.value.trim(), 'Business Name')
    if(businessNameError){
        const errorMessage =   `<p class='error businessName-error'>${businessNameError}</p>`
        businessNameInput.insertAdjacentHTML('afterend', errorMessage);
        return true
    }
}

const validateForm = (event) => {
    
    let isWebsiteError, isBusinessNameError, isConfirmPasswordError
    if(websiteInput.value.trim()){
        isWebsiteError = displayWebsiteError()
    }
    if(businessNameInput.value.trim()){
        isBusinessNameError = displayBusinessError()
    }
    if(passwordInput.value.trim(), confirmPasswordInput.value.trim()){
        isConfirmPasswordError = displayPasswordError()
    }
    if(isBusinessNameError || isWebsiteError || isConfirmPasswordError){
        event.preventDefault()
    }
}

submitButton.addEventListener('click', validateForm)