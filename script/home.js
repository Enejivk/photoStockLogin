/** @format */

const toggleMenuButton = document.getElementById('home-toggle-button')
const overlay = document.querySelector('.overlay')


// FUNCTION TO TOGGLE THE SIDE BAR
const toggleSideBar = () => {
    const menu = document.getElementById('menu')
    menu.classList.toggle('show-menu')
    if (menu.classList.contains('show-menu')) {
        overlay.style.display = 'block'
    } else {
        overlay.style.display = 'none'
    }
}

const graphLabel = {
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'],
    days: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    year: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
}

const createLineGraph = () => {
    const ctx = document.getElementById('myChart').getContext('2d')

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: graphLabel.month,
            datasets: [
                {
                    label: '# of Votes',
                    data: [2, 11, 5, 12, 3, 40, 45, 15, 20, 3],
                    borderWidth: 1,
                    borderColor: 'black',
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10,
                        callback: function (value) {
                            return '$' + value
                        },
                    },
                    max: 60, // Moved this inside the y axis scale
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    })
}
// DOUGHNUT
const createDoughnutChar = () => {
    const ctx = document.getElementById('myDoughnutChart').getContext('2d')
    const myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Total Sales', 'Pending Clearance', 'Available Balance'],
            datasets: [
                {
                    data: [10, 20, 30],
                    backgroundColor: ['#434343', '#A0A0A0', '#000000'],
                    borderColor: ['#434343', '#A0A0A0', '#000000'],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Simple Doughnut Chart',
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                },
            },
        },
    })
}
createLineGraph()
createDoughnutChar()
toggleMenuButton.addEventListener('click', toggleSideBar)
overlay.addEventListener('click', toggleSideBar)