$(document).ready(function () {
    // On page load, focus on Employee ID field
    $('#empId').focus();

    // Handle Employee ID input
    $('#empId').on('input', function () {
        let empId = $('#empId').val();
        
        // Simulate checking ID in the database
        if (empId !== "") {
            // Check if ID exists in the database (Simulation)
            let employeeExists = checkEmployeeInDatabase(empId); // Assume a function to check

            if (!employeeExists) {
                // ID does not exist, enable Save and Reset buttons
                enableForm(true);
                $('#saveBtn').prop('disabled', false);
                $('#changeBtn').prop('disabled', true);
                $('#resetBtn').prop('disabled', false);
            } else {
                // ID exists, populate form and enable Change and Reset buttons
                populateForm(empId); // Assume a function to populate form with existing data
                enableForm(false);
                $('#saveBtn').prop('disabled', true);
                $('#changeBtn').prop('disabled', false);
                $('#resetBtn').prop('disabled', false);
            }
        } else {
            resetForm();
        }
    });

    // Handle Save button click
    $('#saveBtn').click(function () {
        if (validateForm()) {
            saveEmployeeData();
            resetForm();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Handle Change button click
    $('#changeBtn').click(function () {
        if (validateForm()) {
            updateEmployeeData();
            resetForm();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Handle Reset button click
    $('#resetBtn').click(function () {
        resetForm();
    });

    // Function to enable or disable form fields
    function enableForm(enable) {
        $('#empName, #empSalary, #empHRA, #empDA, #empDeduction').prop('disabled', !enable);
    }

    // Function to reset the form
    function resetForm() {
        $('#employeeForm')[0].reset();
        enableForm(false);
        $('#saveBtn, #changeBtn, #resetBtn').prop('disabled', true);
        $('#empId').prop('disabled', false).focus();
    }

    // Function to validate form
    function validateForm() {
        return $('#empName').val() && $('#empSalary').val() && $('#empHRA').val() &&
            $('#empDA').val() && $('#empDeduction').val();
    }

    // Function to save employee data
    function saveEmployeeData() {
        let empData = {
            id: $('#empId').val(),
            name: $('#empName').val(),
            salary: $('#empSalary').val(),
            hra: $('#empHRA').val(),
            da: $('#empDA').val(),
            deduction: $('#empDeduction').val()
        };
        console.log("Saving Data: ", empData);
        // Add logic to save data to the database
    }

    // Function to update employee data
    function updateEmployeeData() {
        let empData = {
            id: $('#empId').val(),
            name: $('#empName').val(),
            salary: $('#empSalary').val(),
            hra: $('#empHRA').val(),
            da: $('#empDA').val(),
            deduction: $('#empDeduction').val()
        };
        console.log("Updating Data: ", empData);
        // Add logic to update data in the database
    }

    // Simulated function to check if employee ID exists in the database
    function checkEmployeeInDatabase(empId) {
        // Simulate checking in database
        let existingIds = ['101', '102']; // Example existing IDs
        return existingIds.includes(empId);
    }

    // Simulated function to populate the form with existing data
    function populateForm(empId) {
        // Simulate fetching data from database
        let empData = {
            id: empId,
            name: "John Doe",
            salary: 50000,
            hra: 10000,
            da: 5000,
            deduction: 2000
        };
        $('#empName').val(empData.name);
        $('#empSalary').val(empData.salary);
        $('#empHRA').val(empData.hra);
        $('#empDA').val(empData.da);
        $('#empDeduction').val(empData.deduction);
    }
});
