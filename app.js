var food = 0;
var rent = 0;
var utilities = 0;
var clothes = 0;
var gifts = 0;
var travel = 0;
var misc = 0;

const retrieveUser = () => {

    const userTest = {
        user_id: 0,
    };

    if (!localStorage.getItem('user')) {
        snackbar('You should to login to store your own data!', '#FFCC00');
        return userTest;
    }

    return JSON.parse(localStorage.getItem('user'));
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
            if (result.status === 201) {
                window.location.href = 'login.html';
                document.getElementById('email').value = email.value;
            }
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
            withCredentials: 'true',
            data: {
                email: email.value,
                password: password.value
            }
        })
        .then((result) => {
            if (result.data.message == 'Logged in successfully') {
                localStorage.setItem('user', JSON.stringify(result.data.user));
                // trigger snackbar with success
                snackbar(result.data.message, '#28A745');
                setTimeout(function () {
                    //window.location.href = 'index.html';
                }, 3000);
            } else {
                // trigger snackbar with error message
                snackbar(result.data.message, '#ED4337');
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

const logout = () => {

    const user = retrieveUser();

    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/users/logout',
            withCredentials: 'true',
            data: {
                email: user.email
            }
        })
        .then((result) => {
            if (result.data.message == 'Logged out successfully') {
                localStorage.removeItem('user');
                snackbar(result.data.message, '#28A745')
                setTimeout(function () {
                    window.location.href = 'login.html';
                }, 3000);
            } else {
                // trigger snackbar with error message
                snackbar(result.data.message, '#ED4337');
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

const calculateCategories = () => {

    const user = retrieveUser();

    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/expenses',
            data: {
                user_id: user.user_id
            }
        })
        .then((response) => {
            let dataPulled = response.data;

            for (let i = 0; i < dataPulled.length; i++) {

                switch (dataPulled[i].category) {
                    case "food":
                        food += parseFloat(dataPulled[i].value);
                        break;
                    case "rent":
                        rent += parseFloat(dataPulled[i].value);
                        break;
                    case "utilities":
                        utilities += parseFloat(dataPulled[i].value);
                        break;
                    case "clothes":
                        clothes += parseFloat(dataPulled[i].value);
                        break;
                    case "gifts":
                        gifts += parseFloat(dataPulled[i].value);
                        break;
                    case "travel":
                        travel += parseFloat(dataPulled[i].value);
                        break;
                    case "misc":
                        misc += parseFloat(dataPulled[i].value);
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
            legend: {
                display: false,
            },
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

    const user = retrieveUser();

    axios({
            method: 'post',
            url: `https://evening-refuge-60189.herokuapp.com/expenses`,
            data: {
                user_id: user.user_id
            }
        })
        .then((response) => {
            let parentList = '<ul>'
            var expenseList = response.data
            for (let i = expenseList.length - 1; i >= 0; i--) {
                if (typeof expenseList[i] == "undefined") {
                    break;
                }
                parentList += '<li>' + `(£${expenseList[i].value})` + " " + expenseList[i].name + `<button onclick="removeExpenses(${expenseList[i].id})" class="remove">&#x1F5D1;</button></li>`;

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

    const user = retrieveUser();
    if (user.user_id === 0) {
        snackbar('You need to log in if you want to track expenses!', '');
        return;
    }

    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/expenses/add',
            data: {
                user_id: user.user_id,
                value: money.value,
                name: item.value,
                category: type.value
            }
        })
        .then((response) => {
            postMethodRegister();
            snackbar(response.data.message, '#28A745');
        })
        .catch((error) => {
            console.log(error);
        });
}


const removeExpenses = (id) => {

    axios({
            method: 'post',
            url: 'https://evening-refuge-60189.herokuapp.com/expenses/delete',
            data: {
                expense_id: id
            }
        })
        .then((result) => {
            snackbar(result.data.message, '#28A745');
            postMethodRegister();
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
}

const snackbar = (message, color) => {
    // Get the snackbar DIV
    let x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.style.backgroundColor = color;
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}
