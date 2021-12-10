//UC8 - Set Range For Salary Output

window.addEventListener('DOMContentLoaded', (event) => {
    salaryOutput();
});

function salaryOutput() {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;

    });
}