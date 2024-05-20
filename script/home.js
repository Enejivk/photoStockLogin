

/* CODE FOR CREATING THE DEFAULT CHART */
document.addEventListener('DOMContentLoaded', (event) => {
    var canvas = document.getElementById('myChart');
    var ctx = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0,0,0,157)');
    gradient.addColorStop(0.47, 'rgba(0,0,0,1)');
    gradient.addColorStop(0.8, 'rgba(157,157,157,90)');
    gradient.addColorStop(1, 'rgba(254,254,254,1)');

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label:  " ",
                data: [2, 11, 3, 13, 2, 30, 40, 10, 20, 5],
                fill: true,
                backgroundColor: [
                  gradient,
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ],
              hoverBorderWidth: 10,

                borderColor: 'black',
                borderWidth: 3
            }]
        },
        options: {
            // responsive: false,
            maintainAspectRatio: false,
            plugins: {
              legend : {
                labels : {
                  boxWidth : 0
                }
              }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        lineWidth: 2 // Adjust the thickness of the x-axis scale line
                    }
                },
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 50,
                    grid: {
                        display: false
                    },
                    ticks: {
                        stepSize: 10,
                        callback: function(value, index, values) {
                            return '₦' + value + 'k';
                        },
                        color: 'rgba(0, 0, 0, 0.8)',
                        font: {
                            size: 14,
                            family: 'Arial',
                        },
                        lineWidth: 2 // Adjust the thickness of the y-axis scale line
                    }
                }
            }
        }
    });
});















document.addEventListener('DOMContentLoaded', (event) => {
    var canvas = document.getElementById('secondChart');
    var ctx = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0,0,0,157)');
    gradient.addColorStop(0.47, 'rgba(0,0,0,1)');
    gradient.addColorStop(0.8, 'rgba(157,157,157,90)');
    gradient.addColorStop(1, 'rgba(254,254,254,1)');

    var months = [];
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Total Sales', 'Pending Clearance', 'Available Balance'],
            datasets: [{
                label:  " ",
                data: [20, 60, 30],
                fill: true,
                backgroundColor: [
                'rgb(150, 149, 149)',
                'black',
                'rgb(83, 47, 47)',
              ],
              hoverBorderWidth: 10,

                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            plugins: {
              display: false,
              legend: {
                position: 'bottom',
                align: 'left',
                labels: {
                  usePointStyle: true,
                  pointStyle: 'circle',
                  boxWidth: 20,
                }
              }
            },
            scales: {
            }
        }
    });
});


// const button = document.querySelector('.toggle-nav')
// const outDashboard = document.querySelector('.outer-dashboard-container')
// const ul = document.querySelector('.dashboard-nav')


// button.addEventListener('click', () => {
//     outDashboard.classList.toggle('hide-nav')
//     ul.style.display = 'none'

// });