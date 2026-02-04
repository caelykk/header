document.addEventListener('DOMContentLoaded', pageLoader)

export async function pageLoader() {
    // formElem.onsubmit = async (e) => {
    //     e.preventDefault();
    formElem.addEventListener('submit', async e => {
        e.preventDefault()

        let response = await fetch('http://localhost:9000/api.php', {
            method: 'POST',
            body: new FormData(formElem)
        });

        let result = await response.json();
        console.log(result);
    });
};
