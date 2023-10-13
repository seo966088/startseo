function makeBacklinks() {
    const domain = document.getElementById('domain').value;
    const websites = document.getElementById('websites').value.split('\n').filter(Boolean);

    document.getElementById('resultTable').innerHTML = '';

    fetch('backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain, websites }),
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(result => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            cell1.textContent = result.website;
            cell2.textContent = result.isSuccess ? 'Success' : 'Failed';
            cell2.style.color = result.isSuccess ? 'green' : 'red';
            row.appendChild(cell1);
            row.appendChild(cell2);
            document.getElementById('resultTable').appendChild(row);
        });
    })
    .catch(error => console.error(error));
}
