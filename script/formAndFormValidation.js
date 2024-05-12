/* GETTING ALL THE HTML ELEMENT I WILL BE NEEDING FOR THE VALIDATION */

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


/**
 * This function checks length of an input value
 * @param {string} input - this is the actual value of the input field
 * @param {string} inputType - This is the input field that is calling the function
 * @returns If there is any error it returns it
 */

const checkLengthInput = (input, inputType) => {
    if (input.length <= 10) {
        return `Your ${inputType} Should Be At Least 10 Characters.`
    }
    if(input.length > 50){
        return `Your ${inputType} Should not be More than 50 characters`
    }
}


/**
 * It check for a valid name
 * @param {string} str - String containing the name to be check
 * @returns it return true it contains characters, numbers, and selected
 * else it return false
 */

const isValidName = (str) => {
    const regex = /^[a-zA-Z0-9\s\-'.]+$/;
    return regex.test(str)
}


/**
 * It uses regular expression to check if the string is a valid website
 * @param {string} website - website to be checked
 * @returns it returns true if is a valid websit
 */

const isValidWebsite = (website) => {
    const regex = /^(?!\.)(?:[a-z0-9\-]{1,63})(?:\.[a-z]{2,63})*?\.(com)$(?::\d{2,5})?(?:[/?#]\S*)?$/;
    return regex.test(website)
}



/**
 * checkPasswordMatch - check if password and confirm password match
 * @param {string} password - password variable
 * @param {string} confirmPassword - confirm password variable
 * @returns It return true if is not match else false
 */
const checkPasswordMatch = (password, confirmPassword) => {
    if(password !== confirmPassword ){
        return true
    }
}



/**
 * displayPasswordError - It display any password error
 * @returns It return true if it display any error 
 */

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


/**
 * isPlayWebsiteError - It display any website name error
 * @returns It return true if it display any error
 */

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


/**
 * validateForm - validateForm call all the function and check if there is an error
 * if there is error it stop the form from submitting else it submit the form and move to the next page
 * @param {HTML} event - This is the element that triggered the event
 */

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