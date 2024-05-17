const button = document.querySelector('.toggle-nav')
const outDashboard = document.querySelector('.outer-dashboard-container')

button.addEventListener('click', () => {
    outDashboard.classList.toggle('hide-nav')
    
})
