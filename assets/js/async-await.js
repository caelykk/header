document.addEventListener('DOMContentLoaded', pageLoader)

export async function pageLoader() {

    // Вариант 1. С помощью FormData

    let url = `./api.php`;

    const formdata = document.querySelector('#formdata');

    formdata.addEventListener('submit', async e => {
        e.preventDefault();

        let formdata = new FormData(formdata);

        let response = await fetch(url, {
            method: "POST",
            body: formdata
        });

        const result = await response.json();
        console.log(result)
    });



}
