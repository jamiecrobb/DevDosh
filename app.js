var food = 0;
var rent = 0;
var utilities = 0;
var clothes = 0;
var gifts = 0;
var travel = 0;
var misc = 0;
var doughnutChart;
var tableChart;

const garbageSvg = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="108.294px" height="122.88px" viewBox="0 0 108.294 122.88" enable-background="new 0 0 108.294 122.88" xml:space="preserve"><g><path fill="" d="M4.873,9.058h33.35V6.2V6.187c0-0.095,0.002-0.186,0.014-0.279c0.075-1.592,0.762-3.037,1.816-4.086l-0.007-0.007 c1.104-1.104,2.637-1.79,4.325-1.806l0.023,0.002V0h0.031h19.884h0.016c0.106,0,0.207,0.009,0.309,0.022 c1.583,0.084,3.019,0.76,4.064,1.81c1.102,1.104,1.786,2.635,1.803,4.315l-0.003,0.021h0.014V6.2v2.857h32.909h0.017 c0.138,0,0.268,0.014,0.401,0.034c1.182,0.106,2.254,0.625,3.034,1.41l0.004,0.007l0.005-0.007 c0.851,0.857,1.386,2.048,1.401,3.368l-0.002,0.032h0.014v0.032v10.829c0,1.472-1.195,2.665-2.667,2.665h-0.07H2.667 C1.195,27.426,0,26.233,0,24.762v-0.063V13.933v-0.014c0-0.106,0.004-0.211,0.018-0.315v-0.021 c0.089-1.207,0.624-2.304,1.422-3.098l-0.007-0.002C2.295,9.622,3.49,9.087,4.81,9.069l0.032,0.002V9.058H4.873L4.873,9.058z M77.79,49.097h-5.945v56.093h5.945V49.097L77.79,49.097z M58.46,49.097h-5.948v56.093h5.948V49.097L58.46,49.097z M39.13,49.097 h-5.946v56.093h5.946V49.097L39.13,49.097z M10.837,31.569h87.385l0.279,0.018l0.127,0.007l0.134,0.011h0.009l0.163,0.023 c1.363,0.163,2.638,0.789,3.572,1.708c1.04,1.025,1.705,2.415,1.705,3.964c0,0.098-0.009,0.193-0.019,0.286l-0.002,0.068 l-0.014,0.154l-7.393,79.335l-0.007,0.043h0.007l-0.016,0.139l-0.051,0.283l-0.002,0.005l-0.002,0.018 c-0.055,0.331-0.12,0.646-0.209,0.928l-0.007,0.022l-0.002,0.005l-0.009,0.018l-0.023,0.062l-0.004,0.021 c-0.118,0.354-0.264,0.698-0.432,1.009c-1.009,1.88-2.879,3.187-5.204,3.187H18.13l-0.247-0.014v0.003l-0.011-0.003l-0.032-0.004 c-0.46-0.023-0.889-0.091-1.288-0.202c-0.415-0.116-0.818-0.286-1.197-0.495l-0.009-0.002l-0.002,0.002 c-1.785-0.977-2.975-2.882-3.17-5.022L4.88,37.79l-0.011-0.125l-0.011-0.247l-0.004-0.116H4.849c0-1.553,0.664-2.946,1.707-3.971 c0.976-0.955,2.32-1.599,3.756-1.726l0.122-0.004v-0.007l0.3-0.013l0.104,0.002V31.569L10.837,31.569z M98.223,36.903H10.837 v-0.007l-0.116,0.004c-0.163,0.022-0.322,0.106-0.438,0.222c-0.063,0.063-0.104,0.132-0.104,0.179h-0.007l0.007,0.118l7.282,79.244 h-0.002l0.002,0.012c0.032,0.376,0.202,0.691,0.447,0.825l-0.002,0.004l0.084,0.032l0.063,0.012h0.077h72.695 c0.207,0,0.399-0.157,0.518-0.377l0.084-0.197l0.054-0.216l0.014-0.138h0.005l7.384-79.21L98.881,37.3 c0-0.045-0.041-0.111-0.103-0.172c-0.12-0.118-0.286-0.202-0.451-0.227L98.223,36.903L98.223,36.903z M98.334,36.901h-0.016H98.334 L98.334,36.901z M98.883,37.413v-0.004V37.413L98.883,37.413z M104.18,37.79l-0.002,0.018L104.18,37.79L104.18,37.79z M40.887,14.389H5.332v7.706h97.63v-7.706H67.907h-0.063c-1.472,0-2.664-1.192-2.664-2.664V6.2V6.168h0.007 c-0.007-0.22-0.106-0.433-0.259-0.585c-0.137-0.141-0.324-0.229-0.521-0.252h-0.082h-0.016H44.425h-0.031V5.325 c-0.213,0.007-0.422,0.104-0.576,0.259l-0.004-0.004l-0.007,0.004c-0.131,0.134-0.231,0.313-0.259,0.501l0.007,0.102V6.2v5.524 C43.554,13.196,42.359,14.389,40.887,14.389L40.887,14.389z"/></g></svg>';
const editSvg = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 121.96" style="enable-background:new 0 0 122.88 121.96" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M107.73,1.31c-0.96-0.89-2.06-1.37-3.29-1.3c-1.23,0-2.33,0.48-3.22,1.44l-7.27,7.54l20.36,19.67l7.33-7.68 c0.89-0.89,1.23-2.06,1.23-3.29c0-1.23-0.48-2.4-1.37-3.22L107.73,1.31L107.73,1.31L107.73,1.31z M8.35,5.09h50.2v13.04H14.58 c-0.42,0-0.81,0.18-1.09,0.46c-0.28,0.28-0.46,0.67-0.46,1.09v87.71c0,0.42,0.18,0.81,0.46,1.09c0.28,0.28,0.67,0.46,1.09,0.46 h87.71c0.42,0,0.81-0.18,1.09-0.46c0.28-0.28,0.46-0.67,0.46-1.09V65.1h13.04v48.51c0,2.31-0.95,4.38-2.46,5.89 c-1.51,1.51-3.61,2.46-5.89,2.46H8.35c-2.32,0-4.38-0.95-5.89-2.46C0.95,118,0,115.89,0,113.61V13.44c0-2.32,0.95-4.38,2.46-5.89 C3.96,6.04,6.07,5.09,8.35,5.09L8.35,5.09z M69.62,75.07c-2.67,0.89-5.42,1.71-8.09,2.61c-2.67,0.89-5.35,1.78-8.09,2.67 c-6.38,2.06-9.87,3.22-10.63,3.43c-0.75,0.21-0.27-2.74,1.3-8.91l5.07-19.4l0.42-0.43l20.02,20.02L69.62,75.07L69.62,75.07 L69.62,75.07z M57.01,47.34L88.44,14.7l20.36,19.6L77.02,67.35L57.01,47.34L57.01,47.34z"/></g></svg>'

const API_URL = 'https://evening-refuge-60189.herokuapp.com';

const loadApp = () => {
    initializeCharts();
    retrieveExpenses();
}

const retrieveExpenses = () => {

    axios({
            method: 'get',
            url: `${API_URL}/expenses`,
            withCredentials: 'true',
        })
        .then((result) => {
            document.getElementById('loginout').innerHTML = 'Logout';
            calculateLatestExpenses(result.data);
            calculateCategories(result.data);
        })
        .catch((error) => {
            //console.log(error.response);
            document.getElementById('loginout').innerHTML = 'Login';
            document.getElementById('loginout').href = 'login.html';
            if (error.response.status === 401) {
                retrieveTestData();
                snackbar('Loaded test data. Log in to store your own data', '#F8C630')
            }
        })
}

const retrieveTestData = () => {
    axios({
            method: 'get',
            url: `${API_URL}/expensestd`,
        })
        .then((result) => {
            calculateLatestExpenses(result.data);
            calculateCategories(result.data);
        })
        .catch((error) => {
            console.log(error.response);
        })
}

const register = () => {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    axios({
            method: 'post',
            url: `${API_URL}/users/register`,
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
            url: `${API_URL}/users/login`,
            withCredentials: 'true',
            data: {
                email: email.value,
                password: password.value
            }
        })
        .then((result) => {
            if (result.data.message == 'Logged in successfully') {
                // trigger snackbar with success
                snackbar(result.data.message, '#28A745');
                setTimeout(function () {
                    window.location.href = 'index.html';
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

const logout = () => {

    axios({
            method: 'post',
            url: `${API_URL}/users/logout`,
            withCredentials: 'true',
        })
        .then((result) => {
            if (result.data.message == 'Logged out successfully') {
                snackbar(result.data.message, '#28A745', 3000)
                setTimeout(function () {
                    window.location.href = 'login.html';
                }, 3000);
            } else {
                // trigger snackbar with error message
                snackbar(result.data.message, '#ED4337');
            }
        })
        .catch((error) => {
            console.log(error.response);
            snackbar(error.response.data, '#ED4337');
        });
}

const calculateCategories = (data) => {

    food = 0;
    rent = 0;
    utilities = 0;
    clothes = 0;
    gifts = 0;
    travel = 0;
    misc = 0;

    for (let i = 0; i < data.length; i++) {

        switch (data[i].category) {
            case "food":
                food += parseFloat(data[i].value);
                break;
            case "rent":
                rent += parseFloat(data[i].value);
                break;
            case "utilities":
                utilities += parseFloat(data[i].value);
                break;
            case "clothes":
                clothes += parseFloat(data[i].value);
                break;
            case "gifts":
                gifts += parseFloat(data[i].value);
                break;
            case "travel":
                travel += parseFloat(data[i].value);
                break;
            case "misc":
                misc += parseFloat(data[i].value);
                break;
        }
    }

    updateChart(doughnutChart);
    updateChart(tableChart);
}


let ctx = document.getElementById('myChart');
let ctx2 = document.getElementById('myChart2');
let ctx3 = document.getElementById('myChart3');

const updateChart = (chart, data) => {

    chart.data.datasets[0].data = [food, rent, utilities, clothes, gifts, travel, misc];
    chart.update();
}

const initializeCharts = () => {
    doughnutChart = new Chart(ctx2, {
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

    tableChart = new Chart(ctx, {
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

const calculateLatestExpenses = (data) => {

    let parentList = '<ul>'    
    for (let i = data.length - 1; i >= 0; i--) {
        if (typeof data[i] == "undefined") {
            break;
        }
        parentList += '<li>' + `(£${data[i].value})` + " " + data[i].name + `<div class="editContainer"><button class="edit" onclick="editExpense(${data[i].id}, '${data[i].name}', ${data[i].value}, '${data[i].category}')">${editSvg}</button>` + `<button onclick="removeExpenses(${data[i].id})" class="remove">${garbageSvg}</button></div></li>`;

    }

    parentList += '</ul>';
    document.getElementById('expenses').innerHTML = parentList;
}



const postExpenses = () => {
    var money = document.getElementById("sum");
    var item = document.getElementById("item");
    var type = document.getElementById("category");

    axios({
            method: 'post',
            url: `${API_URL}/expenses/add`,
            withCredentials: 'true',
            data: {
                value: money.value,
                name: item.value,
                category: type.value
            }
        })
        .then((response) => {
            //console.log(response);
            retrieveExpenses();
            snackbar(response.data.message, '#28A745');
        })
        .catch((error) => {
            //console.log(error.response);         
            if (error.response.status === 401) {
                snackbar('You need to log in', '#F8C630');
            }
        });
}


const removeExpenses = (id) => {

    axios({
            method: 'post',
            url: `${API_URL}/expenses/delete`,
            withCredentials: 'true',
            data: {
                expense_id: id
            }
        })
        .then((result) => {
            snackbar(result.data.message, '#28A745');
            retrieveExpenses();
            console.log(result);
        })
        .catch((error) => {
            //console.log(error.response);
            if (error.response.status === 401) {
                snackbar('You need to log in', '#F8C630');
            }
        })
}

const snackbar = (message, color, time) => {
    // Get the snackbar DIV
    let x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.style.backgroundColor = color;
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, time ? time : 3000);
}

const editExpense = (expense_id, expense_name, expense_value, expense_category) => {
    document.getElementById('expenseModal').style.display = 'block';
    document.getElementById('editMoney').value = expense_value;
    document.getElementById('editName').value = expense_name;
    document.getElementById('editCategory').value = expense_category;
    document.getElementById('editForm').action = `javascript: saveEditExpense(${expense_id})`;
}

const saveEditExpense = (expense_id) => {
    var money = document.getElementById('editMoney').value;
    var name = document.getElementById('editName').value;
    var category = document.getElementById('editCategory').value;

    console.log(expense_id, money, name, category);
    axios({
        method: 'post',
        url: `${API_URL}/expenses/update`,
        withCredentials: 'true',
        data: {
            expense_id: expense_id,
            value: money,
            name: name,
            category: category
        }
    })
    .then((response) => {
        //console.log(response);
        retrieveExpenses();
        snackbar(response.data.message, '#28A745');
        closeEditModal();
    })
    .catch((error) => {
        //console.log(error.response);         
        if (error.response.status === 401) {
            snackbar('You need to log in', '#F8C630');
        }
    });
}

const closeEditModal = () => {
    document.getElementById('expenseModal').style.display = 'none';
    document.getElementById('editMoney').value = null;
    document.getElementById('editName').value = null;
    document.getElementById('editCategory').value = 'food';
}