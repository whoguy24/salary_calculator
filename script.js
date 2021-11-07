$(document).ready(onReady);

let employees = [
    {
        firstName: 'Warren',
        lastName: 'OBrien',
        ID: 5,
        title: 'Developer',
        salary: 2456
    },
    {
        firstName: 'Gary',
        lastName: 'Jones',
        ID: 6,
        title: 'Developer',
        salary: 2186
    },
    {
        firstName: 'Marty',
        lastName: 'Brooks',
        ID: 7,
        title: 'Developer',
        salary: 1645
    }
];

function onReady() {
    console.log('jQuery loaded successfully.');
    renderEmployeeTable(employees);
    $('#button-add-employee').on('click', createEmployee)
    $('#employee-table-data').on('click', '.button-delete', deleteEmployee)
}

function renderEmployeeTable (employeeData) {
    $('#employee-table-data').empty();
    for (let employee of employeeData) {
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

function createEmployee () {
    let newEmployee = retrieveInputData()
    newEmployee.ID = Number(newEmployee.ID);
    newEmployee.salary = Number(newEmployee.salary);
    employees.push(newEmployee);
    renderEmployeeTable(employees);
}

function clearInputFields () {
    $('#field-firstName').val(''),
    $('#field-lastName').val(''),
    $('#field-ID').val(''),
    $('#field-title').val(''),
    $('#field-salary').val('')
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