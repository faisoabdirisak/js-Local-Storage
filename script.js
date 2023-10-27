// Retrieve data from local storage and display it
function display() {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        const listItem = document.createElement('div');
        listItem.innerHTML = `<p>${value}</p><button class="btn btn-danger" data-key="${key}"><i class=" p-2 bi bi-trash-fill"></i>Delete</button>`;
        dataList.appendChild(listItem);
    }
}

// Handle form submission
const dataForm = document.getElementById('data-form');
dataForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const dataInput = document.getElementById('data-input');
    const data = dataInput.value;

    if (data) {
        const key = new Date().getTime().toString();
        localStorage.setItem(key, data);
        dataInput.value = '';
        display();
    }
});

// Handle data deletion
const dataList = document.getElementById('data-list');
dataList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const key = e.target.getAttribute('data-key');
        localStorage.removeItem(key);
        display();
    }
});

// Handle clear data button
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function () {
    localStorage.clear();
    display();
});

// Initial data display
display();
