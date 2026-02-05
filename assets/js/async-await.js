document.addEventListener('DOMContentLoaded', pageLoader)

export async function pageLoader() {

    // Вариант 1. С помощью FormData

    let url = `./api.php`;

    const formdata = document.forms[0];

    formdata.addEventListener('submit', async e => {
        e.preventDefault();

        let response = await fetch(url, {
            method: "POST",
            body: new FormData(formdata)
        });

        const result = await response.json();
        console.log(result)
    });



}
