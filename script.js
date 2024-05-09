const showPassword = document.querySelector('#show-password')
const passwordField = document.querySelector('#password')

/* SHOW PASSWORD */
showPassword.addEventListener('click', function(){
    this.classList.toggle('fa-eye')
    this.classList.toggle('fa-eye-slash', !this.classList.contains('fa-eye'))

    const inputType = passwordField.getAttribute('type')
    if(inputType === 'password'){
        passwordField.setAttribute('type', 'text')
    } else {
        passwordField.setAttribute('type', 'password')
    }
})