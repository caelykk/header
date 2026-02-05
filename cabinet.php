<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial scale=1.0">
    <!-- <link rel="stylesheet" href="./assets/css/reset.css"> -->
    <link rel="stylesheet" href="./assets/css/cabinet.css">
    <title>Мой профиль</title>
  </head>
  <body>

    <?php require_once('./index.php');?>

    <main class="cabinet">
      <div class="container">
        <div class="cabinet-wr">
          <div class="cabinet-title">
              <h1 class="cabinet-title-h1">Мой кабинет</h1>
          </div>

          <div class="cabinet-content">
            <nav class="cabinet-nav">
              <div class="cabinet-nav-wr">
                <ul class="cabinet-nav-items">
                  <li class="cabinet-nav-item cabinet-nav-person-btn">
                    <a href="" class="cabinet-nav-item-link">
                      <div class="cabinet-nav-person-btn--icon">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.4167C2 18.1696 6.6637 22.8333 12.4167 22.8333C18.1696 22.8333 22.8333 18.1696 22.8333 12.4167C22.8333 6.6637 18.1696 2 12.4167 2C6.6637 2 2 6.6637 2 12.4167ZM4.08333 12.4167C4.08333 7.81429 7.81429 4.08333 12.4167 4.08333C17.019 4.08333 20.75 7.81429 20.75 12.4167C20.75 17.019 17.019 20.75 12.4167 20.75C7.81429 20.75 4.08333 17.019 4.08333 12.4167ZM9.29167 13.4583C9.29167 12.883 8.8253 12.4167 8.25 12.4167C7.6747 12.4167 7.20833 12.883 7.20833 13.4583C7.20833 16.3348 9.54018 18.6667 12.4167 18.6667C15.2931 18.6667 17.625 16.3348 17.625 13.4583C17.625 12.883 17.1586 12.4167 16.5833 12.4167C16.008 12.4167 15.5417 12.883 15.5417 13.4583C15.5417 15.1842 14.1426 16.5833 12.4167 16.5833C10.6908 16.5833 9.29167 15.1842 9.29167 13.4583ZM8.25 10.3333C8.8253 10.3333 9.29167 9.86696 9.29167 9.29167C9.29167 9.86696 9.75804 10.3333 10.3333 10.3333C10.9086 10.3333 11.375 9.86696 11.375 9.29167C11.375 8.14107 10.4423 7.20833 9.29167 7.20833C8.14107 7.20833 7.20833 8.14107 7.20833 9.29167C7.20833 9.86696 7.6747 10.3333 8.25 10.3333ZM15.5417 9.29167C15.5417 9.86696 15.0753 10.3333 14.5 10.3333C13.9247 10.3333 13.4583 9.86696 13.4583 9.29167C13.4583 8.14107 14.3911 7.20833 15.5417 7.20833C16.6923 7.20833 17.625 8.14107 17.625 9.29167C17.625 9.86696 17.1586 10.3333 16.5833 10.3333C16.008 10.3333 15.5417 9.86696 15.5417 9.29167Z" fill="#FC6E1D"/>
                        </svg>
                      </div>
                      <div class="cabinet-nav-person-btn--user">
                        <span class="cabinet-nav-person-btn--user-name">Марат Цаликов</span>
                        <small class="cabinet-nav-person-btn--user-status">Покупатель</small>
                      </div>
                    </a>
                  </li>
                  <li class="cabinet-nav-item active">
                    <a href="" class="cabinet-nav-item-link">
                      <span>Мой профиль</span>
                    </a>
                  </li>
                  <li class="cabinet-nav-item">
                    <a href="" class="cabinet-nav-item-link">
                      <span>Statut Club</span>
                    </a>
                  </li>
                  <li class="cabinet-nav-item">
                    <a href="" class="cabinet-nav-item-link">
                      <span>Заказы</span>
                    </a>
                  </li>
                  <li class="cabinet-nav-item">
                    <a href="" class="cabinet-nav-item-link">
                      <span>Избранные товары</span>
                    </a>
                  </li>
                  <li class="cabinet-nav-item">
                    <a href="" class="cabinet-nav-item-link">
                      <span>Отзывы о товарах</span>
                    </a>
                  </li>
                  <li class="cabinet-nav-item">
                    <a href="" class="cabinet-nav-item-link">
                      <span>Выход</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <section class="cabinet-profile">
              <div class="cabinet-profile-title">
                <h2 class="cabinet-profile-title-h2">Мой профиль</h2>
              </div>

              <nav class="cabinet-profile-nav">
                <ul class="cabinet-profile-nav-items">
                  <li class="cabinet-profile-nav-item cabinet-profile-nav-item-active">
                    <a href="" class="cabinet-profile-nav-item-link">
                      <span>Личные данные</span>
                    </a>
                  </li>
                  <li class="cabinet-profile-nav-item">
                    <a href="" class="cabinet-profile-nav-item-link">
                      <span>Адреса доставки</span>
                    </a>
                  </li>
                  <li class="cabinet-profile-nav-item">
                    <a href="" class="cabinet-profile-nav-item-link">
                      <span>Пароль</span>
                    </a>
                  </li>
                </ul>
              </nav>

              <!-- Форма профиля -->
              <form action="./api.php" id="formdata" class="cabinet-profile-form">

                <!-- Email -->
                <div class="cabinet-profile-form-email">
                  <label for="email" class="cabinet-profile-form-email--label">Email</label>
                    <input type="email" name="email" id="email" class="cabinet-profile-form-email--input">
                    <small class="cabinet-profile-form-email--error"></small>
                </div>

                <!-- Телефоны -->
                <div class="cabinet-profile-form-phones">
                  <!-- Основной телефон -->
                  <div class="cabinet-profile-form-phone1">
                    <label for="phone" class="cabinet-profile-form-phone1--label">Номер телефона</label>
                      <input type="text" id="phone" name="phone" class="cabinet-profile-form-phone1--input">
                      <small class="cabinet-profile-form-phone1--error"></small>
                  </div>
                  <!-- Дополнительный телефон -->
                  <div class="cabinet-profile-form-phone2">
                    <label for="phoneAdd" class="cabinet-profile-form-phone2--label">Дополнительный номер</label>
                      <input type="text" id="phone" name="phone" class="cabinet-profile-form-phone2--input">
                      <small class="cabinet-profile-form-phone2--error"></small>
                  </div>
                </div>

                <!-- Фамилия -->
                <div class="cabinet-profile-form-lastName">
                  <label for="lastName" class="cabinet-profile-form-lastName--label">Фамилия</label>
                    <input type="text" id="lastName" name="lastName" class="cabinet-profile-form-lastName--input">
                    <small class="cabinet-profile-form-lastName--error"></small>
                </div>

                <!-- Имя -->
                <div class="cabinet-profile-form-name">
                  <label for="name" class="cabinet-profile-form-name--label">Имя</label>
                    <input type="text" id="name" name="name" class="cabinet-profile-form-name--input">
                    <small class="cabinet-profile-form-name--error"></small>
                </div>

                <!-- Отчество -->
                <div class="cabinet-profile-form-secondName">
                  <label for="secondName" class="cabinet-profile-form-secondName--label">Отчество</label>
                    <input type="text" id="secondName" name="secondName" class="cabinet-profile-form-secondName--input">
                    <small class="cabinet-profile-form-secondName--error"></small>
                </div>

                <!-- Дата рождения -->
                <div class="cabinet-profile-form-birthday">
                  <label for="birthday" class="cabinet-profile-form-birthday--label">Дата рождения</label>
                    <input type="text" id="birthday" name="birthday" class="cabinet-profile-form-birthday--input">
                    <small class="cabinet-profile-form-birthday--error"></small>
                </div>

                <!-- Пол -->
                <div class="cabinet-profile-form-gender">
                  <label for="gender" class="cabinet-profile-form-gender--label">Пол</label>
                    <input type="text" id="gender" name="gender" class="cabinet-profile-form-gender--input">
                    <small class="cabinet-profile-form-gender--error"></small>
                </div>

                <!-- Кнопка "Сохранить" -->
                <button type="submit" id="saveBtn" name="saveBtn" class="g-button g-button--red cabinet-profile-form-saveBtn">
                Сохранить изменения
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
    <script type="module" src="./assets/js/main.js"></script>
  </body>
</html>