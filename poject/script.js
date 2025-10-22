// создаем массив с уже зарегистрироваными пользователями
const registeredUsers = [
    { login: 'Natalya1', password: 'natalya' },
    { login: 'Natalya2', password: 'natalya' },
    { login: 'Natalya3', password: 'natalya' },
    { login: 'Natalya4', password: 'natalya' },
];

const loginInput = document.getElementById('login'),
    passwordInput = document.getElementById('password'),
    knop = document.getElementById('knop'),
    loginError = document.getElementById('loginError'),
    passwordError = document.getElementById('passwordError'),
    welcomeUsername = document.getElementById('welcomeUsername'),
    welcomeMessage = document.getElementById('welcomeMessage'),
    successMessage = document.getElementById('successMessage');

// потом задаем чтобы логин содержал только /^[a-zA-Z0-9]{3,20}$/; через функцию
function validateLogin(login) {
    const loginRegex = /^[a-zA-Z0-9]{3,20}$/;
    return loginRegex.test(login);
}

// также задаем для пароля через функцию
function validatePassword(password) {
    if (password.length < 8) return false;
    return true;

}

// делаем что при при клике на кнопку входило и очишало ошибки
knop.addEventListener('click', () => {
    //очистка ошибок
    loginError.textContent = '';
    passwordError.textContent = '';



    if (welcomeMessage) welcomeMessage.style.display = 'none'; // убирает элемент display = 'none'
    if (successMessage) successMessage.style.display = 'none';

    const login = loginInput.value.trim();
    const password = passwordInput.value;

    // делаем проверки логина, пароля если все проверки проходит впускаем дальше
    try {
        if (!validateLogin(login)) {
            throw new Error('Логин должен содержать только цифры и буквы и не менее 3-20 символовю')
        }
        if (!validatePassword(password)) {
            throw new Error('Пароль должен быть не менее 8 символовю')
        }
        // проверка существует ли пользователь который у нас в массиве
        let loginExists = registeredUsers.some(user => user.login === login); // метод some позволяет пролверить, хотя бы один элемент массива условию
        // есле условие some выполняет и оно находит то выполняется условие
        if (loginExists) {
            throw new Error('Пользователь с таким именем уже существует.')
        }
        // если все проверки прошли регистрируем пользователя в массив
        registeredUsers.push({ login, password });
        // показываем сообщение об успехе
        if (welcomeUsername) welcomeUsername.textContent = alert(`Добро пожаловать ${login}`);
        if (successMessage) successMessage.textContent = block;
        // делаем очистку полей спомощью value
        loginInput.value = '';
        passwordInput.value = '';
    } catch (error) {
        if (error.message.includes('Логин')) {
            loginError.textContent = error.message;
        } else if (error.message.includes('Пароль')) {
            passwordError.textContent = error.message;
        } else if (error.message.includes('Пользователь')) {
            loginError.textContent = error.message;
        } else {
            console.error(error);
        }
    }

})


// Что здесь происходит:

// catch (error) — ловит ошибку, если она возникла внутри try блока. Переменная error содержит объект ошибки.

// error.message — это текст ошибки, который мы передали через throw new Error('текст ошибки').

// Проверка содержимого сообщения об ошибке:

// Если сообщение содержит слово 'Логин' — значит проблема с логином (например, неверный формат). Тогда ошибка выводится в элемент с id loginError — рядом с полем логина.

// Если сообщение содержит слово 'Пароль' — ошибка связана с паролем. Тогда ошибка выводится в элемент с id passwordError.

// Если сообщение содержит 'Пользователь' — ошибка связана с тем, что пользователь с таким логином уже существует. В этом случае ошибка тоже показывается рядом с логином (loginError).

// Если ошибка не содержит ни одного из этих слов, то она выводится в консоль браузера с помощью console.error(error) — для разработчика, чтобы он мог увидеть неожиданные ошибки.