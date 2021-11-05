$(document).ready(onReady);

let employees = [
    /*
    {
        firstName: 'Warren',
        lastName: 'OBrien',
        ID: 5,
        title: 'Developer',
        salary: 2456
    }
    */
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

function deleteEmployee() {
    let employeeID = $(this).parent().parent().attr('id');
    for (let employee of employees) {
        if (employee.id = employeeID) {
            employees.splice(employee)  
        }
    }
    $(this).parent().parent().remove();  
}