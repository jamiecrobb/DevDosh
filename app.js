let ctx = document.getElementById('myChart');
let ctx2 = document.getElementById('myChart2');
let ctx3 = document.getElementById('myChart3');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Food', 'Rent', 'Utilities', 'Clothes', 'Gifts', 'Travel', 'Misc.'],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 2, 3, 5],
            backgroundColor: [
                '#7400B8',
                '#6930C3',
                '#5E60CE',
                '#4EA8DE',
                '#48BFE3',
                '#64DFDF',
                '#80FFDB'
            ],
            borderColor: [
                '#7400B8',
                '#6930C3',
                '#5E60CE',
                '#4EA8DE',
                '#48BFE3',
                '#64DFDF',
                '#80FFDB'
            ],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Rent', 'Utilities', 'Clothes', 'Gifts', 'Travel', 'Misc.'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 5],
            backgroundColor: [
                '#7400B8',
                '#6930C3',
                '#5E60CE',
                '#4EA8DE',
                '#48BFE3',
                '#64DFDF',
                '#80FFDB'
            ],

            borderWidth: 0.5
        }]
    },

    options: {
        maintainAspectRatio: false,
        responsive: true,
        // scales: {
        //     // yAxes: [{
        //     //     ticks: {
        //     //         beginAtZero: true
        //     //     }
        //     // }]
        // }
    }
});




const postMethodRegister = () => {
    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/expenses',
            data: {
                user_id: ''
            }
        })
        .then((response) => {



            let parentList = '<ul>'
            var taskList = response.data
            for (let i = 0; i < 10; i++) {
                if (typeof taskList[i] == "undefined") {
                    break;
                }
                parentList += '<li>' + taskList[i].description + " " + `(£${taskList[i].value})` + '</li>';

            }

            parentList += '</ul>';
            document.getElementById('expenses').innerHTML = parentList;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}


postMethodRegister();
