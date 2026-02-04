document.addEventListener('DOMContentLoaded', pageLoader)

// При использовании async/await добавить async перед function(или после export)
export async function pageLoader() {

    let url = `https://api.github.com/repos/caelykk/header/commits`;

    /** Запрос на сервер с помощью async/await
     * let response = await fetch(url);
     * let commits = await response.json(); // читаем ответ в формате JSON
     * console.log(commits[0]);
    */

    // console.log(users);

    fetch(url)
        .then(response => {
            console.log("response: ", response);
            console.log("response.headers: ", response.headers);
            return response.json()
        })
        .then(commits => console.log(commits[0].author.login))
        .catch(error => console.log(error))
}
