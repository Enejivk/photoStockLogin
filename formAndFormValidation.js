const showPasswordIcons = document.querySelectorAll('.eye-icon')
const passwordInputs = document.querySelectorAll('.password')

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

