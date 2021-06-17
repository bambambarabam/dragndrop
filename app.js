const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', dragDrop);
}

function dragStart(evt) {
    evt.target.classList.add('hold')
    setTimeout(() => {
        evt.target.classList.add('hide')
    })
}

function dragEnd(evt) {
    evt.target.className = 'item';
}

function dragOver(evt) {
    evt.preventDefault()
}

function dragEnter(evt) {
    evt.target.classList.add('hovered')
}

function dragLeave(evt) {
    evt.target.classList.remove('hovered')
}

function dragDrop(evt) {
    evt.target.classList.remove('hovered')
    evt.target.append(item)
}