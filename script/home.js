// const button = document.querySelector('.toggle-nav')
// const outDashboard = document.querySelector('.outer-dashboard-container')
// const ul = document.querySelector('.dashboard-nav')


// button.addEventListener('click', () => {
//     outDashboard.classList.toggle('hide-nav')
//     ul.style.display = 'none'
    
// });

/* CODE FOR CREATING THE DEFAULT CHART */



        const ctx = document.getElementById('myChart').getContext('2d');
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Dataset 1',
                data: [1, 20, 15, 30, 10, 2, 30, 15, 40, 20],
                borderColor: 'black',
                borderWidth: 2,
                fill: false,
            }]
        };

        const options = {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5
                    }
                }
            }
        };

        const myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });