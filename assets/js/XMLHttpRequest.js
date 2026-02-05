document.addEventListener('DOMContentLoaded', pageLoader)

export function pageLoader() {

    /**
     * XMLHttpRequest – это встроенный в браузер объект,
     * который даёт возможность делать HTTP-запросы к серверу
     * без перезагрузки страницы.
     *
     * XMLHttpRequest имеет два режима работы:
     *  * синхронный
     *  * асинхронный.
    *? Асинхронный:
    *   Чтобы сделать запрос, нам нужно выполнить три шага:
    *       1) Создать XMLHttpRequest.
    *       2) Инициализировать его.
    *   Вызов open, не открывает соединение.
    *   Он лишь конфигурирует запрос,
    *   но непосредственно отсылается запрос только лишь после вызова send.
    *       3) Послать запрос.
    *       4) Слушать события на xhr, чтобы получить ответ.
    *           Три наиболее используемых события:
    *             load – происходит, когда получен какой-либо ответ, включая ответы с HTTP-ошибкой, например 404.
    *             error – когда запрос не может быть выполнен, например, нет соединения или невалидный URL.
    *             progress – происходит периодически во время загрузки ответа, сообщает о прогрессе.
    *
    * XMLHttpRequest умеет как указывать свои заголовки в запросе, так и читать присланные в ответ.
    * Если заголовок определён, то его нельзя снять.
    * Повторные вызовы лишь добавляют информацию к заголовку
    */

    // 1. Создаём новый XMLHttpRequest-объект
    // let xhr = new XMLHttpRequest(); // у конструктора нет аргументов

    /**
     * Чтобы добавить к URL параметры, вида ?name=value,
     * и корректно закодировать их,
     * можно использовать объект URL:
     */
    // let url = new URL('https://google.com/search');
    // url.searchParams.set('q', 'test me!');

    // 2. Настраиваем его: GET-запрос по URL /article/.../load
    // xhr.open(method, URL, /*[async, user, password]*/)

    // Тип ответа
    // xhr.responseType = ''; // (по умолчанию) – строка
    // xhr.responseType = 'text'; // строка
    // xhr.responseType = 'arraybuffer'; // ArrayBuffer (для бинарных данных)
    // xhr.responseType = 'blob'; // Blob (для бинарных данных)
    // xhr.responseType = 'document'; // XML-документ (может использовать XPath и другие XML-методы)
    // xhr.responseType = 'json'; // JSON (парсится автоматически)

    // Состояния запроса
    // xhr.readyState


    // Для работы с HTTP-заголовками есть 3 метода:
    // xhr.setRequestHeader('Content-Type', 'application/json'); // отменить setRequestHeader невозможно.
    //
    // Возвращает значение заголовка ответа name (кроме Set-Cookie и Set-Cookie2)
    // xhr.getResponseHeader('Content-Type')
    //
    // Возвращает все заголовки ответа, кроме Set-Cookie и Set-Cookie2.
    // getAllResponseHeaders() //

    // 3. Этот метод устанавливает соединение и отсылает запрос к серверу.
    // xhr.send(/*[body]*/)

    // Отмена запроса
    // xhr.abort();

    // 4. Этот код сработает после того, как мы получим ответ сервера
    // xhr.onload = function() {
    //     if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    //         alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    //     } else { // если всё прошло гладко, выводим результат
    //         alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
    //     }
    // };

    // xhr.onprogress = function(event) {
    //     if (event.lengthComputable) {
    //         alert(`Получено ${event.loaded} из ${event.total} байт`);
    //     } else {
    //         alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
    //     }
    // };

    // xhr.onerror = function() {
    // alert("Запрос не удался");
    // };


    let url = './api.phpsad';

    // Заполним FormData данными из формы
    let formData = new FormData(document.forms[0]);

    // отправим данные
    let xhr = new XMLHttpRequest();


    xhr.open("POST", url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(formData);

    xhr.onload = (e) => {
        if(xhr.readyState !== 4 && xhr.status !== 200) {
            throw e;
        } else {
            console.log("GOOD");
        }
    };


}