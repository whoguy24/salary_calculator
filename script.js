$(document).ready(onReady);

let employees = [
    {
        firstName: 'Warren',
        lastName: 'OBrien',
        ID: 1645,
        title: 'Developer',
        salary: 5000
    },
    {
        firstName: 'Gary',
        lastName: 'Jones',
        ID: 2185,
        title: 'Developer',
        salary: 2000
    },
    {
        firstName: 'Marty',
        lastName: 'Brooks',
        ID: 2685,
        title: 'Developer',
        salary: 5000
    },
    {
        firstName: 'John',
        lastName: 'Sanders',
        ID: 2184,
        title: 'Developer',
        salary: 5000
    },
    {
        firstName: 'Lisa',
        lastName: 'Morrison',
        ID: 2198,
        title: 'Developer',
        salary: 2000
    }
];

function onReady() {
    console.log('jQuery loaded successfully.');
    renderEmployeeTable(employees);
    $('#button-add-employee').on('click', createEmployee)
    $('#employee-table-data').on('click', '.button-delete', deleteEmployee)
}

function renderEmployeeTable (employees) {
    $('#employee-table-data').empty();
    for (let employee of employees) {
        $('#employee-table-data').append(`
            <tr id="${employee.ID}">
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.ID}</td>
                <td>${employee.title}</td>
                <td>${employee.salary}</td>
                <td><button class="button-delete">Delete</button></td>
            </tr>
        `);
    }
    let totalMonthly = calculateTotalSalary();
    $('#total-monthly').text('');
    $('#total-monthly').text(totalMonthly);
    if (totalMonthly >= 20000) {
        $('#total-monthly').addClass('total-monthly-red')
    } else {
        $('#total-monthly').removeClass('total-monthly-red')
    }
}

function retrieveInputData () {
    let newEmployee = {
        firstName: $('#field-firstName').val(),
        lastName: $('#field-lastName').val(),
        ID: $('#field-ID').val(),
        title: $('#field-title').val(),
        salary: $('#field-salary').val()
    }
    clearInputFields();
    return newEmployee;
}

function clearInputFields () {
    $('#field-firstName').val(''),
    $('#field-lastName').val(''),
    $('#field-ID').val(''),
    $('#field-title').val(''),
    $('#field-salary').val('')
}

function createEmployee () {
    let newEmployee = retrieveInputData()
    newEmployee.ID = Number(newEmployee.ID);
    newEmployee.salary = Number(newEmployee.salary);
    employees.push(newEmployee);
    renderEmployeeTable(employees);
}

function deleteEmployee() {
    let employeeID = $(this).parent().parent().attr('id');
    employeeID = Number(employeeID);
    $(this).parent().parent().remove();  
    let index = employees.findIndex(function (employee) {
        return employee.ID === employeeID;
    });
    employees.splice(index, 1);
    renderEmployeeTable(employees);
}

function calculateTotalSalary () {
    let sum = 0
    for (let employee of employees) {
        sum += employee.salary
    }
    return sum;
}