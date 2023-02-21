const inputSearch = document.querySelector('#inputSearch');
const list = document.querySelector('#list');
const item = list.querySelectorAll('li');

inputSearch.addEventListener('input', (e) => {
    let inputed = e.target.value.toLowerCase();
    item.forEach((li) => {
        let text = li.textContent.toLowerCase();
        if (text.includes(inputed)){
            li.style.diplay = 'block';
        } else {
            li.style.display = 'none';
        }
    })
})