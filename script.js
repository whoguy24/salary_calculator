$(document).ready(onReady);

let employees = [
    {
        firstName: 'Warren',
        lastName: 'OBrien',
        ID: 4324,
        title: 'Software Intern',
        salary: 10
    }
];

function onReady() {
    console.log('jQuery loaded successfully.');
    renderEmployeeTable(employees);
    $('#button-add-employee').on('click', createEmployee)
}

function renderEmployeeTable (employeeData) {
    $('#employee-table-data').empty();
    for (let employee of employeeData) {
        $('#employee-table-data').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.ID}</td>
                <td>${employee.title}</td>
                <td>${employee.salary}</td>
            </tr>
        `);
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

function createEmployee () {
    let newEmployee = retrieveInputData()
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