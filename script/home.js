// const button = document.querySelector('.toggle-nav')
// const outDashboard = document.querySelector('.outer-dashboard-container')
// const ul = document.querySelector('.dashboard-nav')


// button.addEventListener('click', () => {
//     outDashboard.classList.toggle('hide-nav')
//     ul.style.display = 'none'
    
// });

/* CODE FOR CREATING THE DEFAULT CHART */


document.addEventListener('DOMContentLoaded', (event) => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0,0,0,1)');
    gradient.addColorStop(0.59, 'rgba(157,157,157,0)');
    gradient.addColorStop(1, 'rgba(254,254,254,1)');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 100, 0, 56, 38, 80],
                fill: true,
                backgroundColor: gradient,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 3,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        stepSize: 5,
                        callback: function(value, index, values) {
                            return '$' + value;
                        },
                        color: 'rgba(0, 0, 0, 0.8)',
                        font: {
                            size: 14,
                            family: 'Arial',
                            weight: 'bold',
                        }
                    }
                }
            }
        }
    });
});
