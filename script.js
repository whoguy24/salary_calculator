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

function createEmployee () {

    let newFirstName = '';
    let newLastName = '';
    let newID = '';
    let newTitle = '';
    let newSalary = '';

    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        ID: newID,
        title: newTitle,
        salary: newSalary
    }

    employees.push(newEmployee);

    renderEmployeeTable(employees);




}