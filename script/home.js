const button = document.querySelector('.toggle-nav')
const outDashboard = document.querySelector('.outer-dashboard-container')
const ul = document.querySelector('.dashboard-nav')


button.addEventListener('click', () => {
    outDashboard.classList.toggle('hide-nav')
    ul.style.display = 'none'
    
})
