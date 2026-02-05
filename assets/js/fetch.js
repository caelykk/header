document.addEventListener('DOMContentLoaded', pageLoader)

// При использовании async/await добавить async перед function(или после export)
export async function pageLoader() {

    let url = `./api.php`;

    const formdata = document.querySelector('#formdata');

    console.log(formdata);

    formdata.addEventListener('submit', e => {
        e.preventDefault();
        console.log(formdata);

        let data = new Map();

        fetch(url, {
            method: "POST",
            body: new FormData(formdata)
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log(error))
    });
}
