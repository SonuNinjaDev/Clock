const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


let serialNumber = 1;

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    if (name && number) {
        const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const snCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const numberCell = newRow.insertCell(2);

        snCell.textContent = serialNumber++;
        nameCell.textContent = name;
        numberCell.textContent = number;

        document.getElementById('dataForm').reset();
    }
});