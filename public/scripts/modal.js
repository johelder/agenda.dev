const deleteButtons = document.querySelectorAll('.delete')
const backButton = document.querySelector('#modal-back')
const modal = document.querySelector('.modal')

function handleModal() {
    modal.classList.add('on')
}

deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', handleModal)
})

backButton.addEventListener('click', () => modal.classList.remove('on'))




