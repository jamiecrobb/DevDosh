var food = 0;
var rent = 0;
var utilities = 0;
var clothes = 0;
var gifts = 0;
var travel = 0;
var misc = 0;

const retrieveToken = () => {
    if (!localStorage.getItem('token')) {
        alert('You need to login in!');
    }

    return localStorage.getItem('token');
}

const retrieveUserId = () => {
    if (!localStorage.getItem('token')) {
        alert('You should login in to have your own data');
        return 0;
    }
    return localStorage.getItem('user_id');
}

const register = () => {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/users/register',
            data: {
                name: name.value,
                email: email.value,
                password: password.value
            }
        })
        .then((result) => {
            console.log(result);
            window.location.href = '/login.html';
            document.getElementById('email').value = email.value;
        })
        .catch((error) => {
            console.log(error);
        });
}

const login = () => {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/users/login',
            data: {
                email: email.value,
                password: password.value
            }
        })
        .then((result) => {
            console.log(result);
            localStorage.setItem('token', result.data.user.token);
            localStorage.setItem('user_id', result.data.user.id);
            window.location.href = '/index.html';
        })
        .catch((error) => {
            console.log(error);
        })
}

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    window.location.href = '/login.html';
}

const calculateCategories = () => {

    const user_id = retrieveUserId();

    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/expenses',
            data: {
                user_id: user_id
            }
        })
        .then((response) => {
            let dataPulled = response.data;

            for (let i = 0; i < dataPulled.length; i++) {

                switch (dataPulled[i].category) {
                    case "food":
                        food += parseInt(dataPulled[i].value);
                        break;
                    case "rent":
                        rent += parseInt(dataPulled[i].value);
                        break;
                    case "utilities":
                        utilities += parseInt(dataPulled[i].value);
                        break;
                    case "clothes":
                        clothes += parseInt(dataPulled[i].value);
                        break;
                    case "gifts":
                        gifts += parseInt(dataPulled[i].value);
                        break;
                    case "travel":
                        travel += parseInt(dataPulled[i].value);
                        break;
                    case "misc":
                        misc += parseInt(dataPulled[i].value);
                        break;
                }
            }
            calculateDoughnutChart();
            calculateTableChart();

        })
        .catch((error) => {
            console.log(error);
        });
}


let ctx = document.getElementById('myChart');
let ctx2 = document.getElementById('myChart2');
let ctx3 = document.getElementById('myChart3');

const calculateDoughnutChart = () => {
    var myChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Food', 'Rent', 'Utilities', 'Clothes', 'Gifts', 'Travel', 'Misc.'],
            datasets: [{
                label: '# of Votes',
                data: [food, rent, utilities, clothes, gifts, travel, misc],
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
}

const calculateTableChart = () => {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Food', 'Rent', 'Utilities', 'Clothes', 'Gifts', 'Travel', 'Misc.'],
            datasets: [{
                label: '',
                data: [food, rent, utilities, clothes, gifts, travel, misc],
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
}

const postMethodRegister = () => {

    const user_id = retrieveUserId();

    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/expenses',
            data: {
                user_id: user_id
            }
        })
        .then((response) => {
            let parentList = '<ul>'
            var expenseList = response.data
            for (let i = 0; i < 10; i++) {
                if (typeof expenseList[i] == "undefined") {
                    break;
                }
                parentList += '<li>' + expenseList[i].name + " " + `(£${expenseList[i].value})` + '</li>';

            }

            parentList += '</ul>';
            document.getElementById('expenses').innerHTML = parentList;
            calculateCategories();
        })
        .catch((error) => {
            console.log(error);
        });
}

const postExpenses = () => {
    var money = document.getElementById("sum");
    var item = document.getElementById("item");
    var type = document.getElementById("category");

    const user_id = retrieveUserId();
    if (user_id === 0) {
        alert('You need to log in if you want to track expenses!');
        return;
    }

    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/expenses/add',
            data: {
                user_id: user_id,
                value: money.value,
                name: item.value,
                category: type.value
            }
        })
        .then((response) => {
            postMethodRegister();
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}