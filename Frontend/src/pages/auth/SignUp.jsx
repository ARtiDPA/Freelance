import "./styles/index.css"
import hint from "../../shared/images/hint.png"

export default function SignUp() {
    function passwordView() {
        let password = document.getElementById("setPassword"),
        passwordAgain = document.getElementById("setPasswordAgain");
    
        if (password.getAttribute("type") === "password") {
            password.setAttribute("type", "text")
            passwordAgain.setAttribute("type", "text")
        } else {
            password.setAttribute("type", "password")
            passwordAgain.setAttribute("type", "password")
        }
    }
    
    function checkPassword() {
        let name = document.getElementById("name"),
            surname = document.getElementById("surname"),
            login = document.getElementById("login"),
            password = document.getElementById("setPassword"),
            passwordAgain = document.getElementById("setPasswordAgain");

        if (password.value !== passwordAgain.value) {
            passwordAgain.setCustomValidity("Пароли не совпадают")
            passwordAgain.reportValidity()
            return
        } else if (password.value === passwordAgain.value) {
            passwordAgain.setCustomValidity("")
        }

        registration(login.value, password.value, name.value, surname.value)
    }

    function registration(login, password, name, surname) {
        let data = {
            login: login,
            password: password,
            name: name,
            surname: surname
        }
        console.log(JSON.stringify(data))
    }

    return (
        <div className="h-[calc(100svh-64px)] items-center flex justify-center">
            <div className="w-[360px] max-w-full flex flex-col gap-4 px-9">
                <h1 className="text-4xl font-bold text-center">Регистрация</h1>
                <form name="formReg" autoComplete="off" className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="items-center flex justify-between">Имя
                            <input
                                className="max-w-40 border-2 px-px valid:border-green-400 rounded-lg invalid:border-red-300"
                                required
                                type="text"
                                id="name"
                                name="name"
                                minLength={1}
                                maxLength={100}
                                pattern="^([А-Я]{1}[а-яё]{1,100}|[A-Z]{1}[a-z]{1,100})$"
                                autoComplete="off"
                            />
                        </label>
                        <label htmlFor="surname" className="items-center flex justify-between">Фамилия
                            <input
                                className="max-w-40 border-2 px-px valid:border-green-400 rounded-lg invalid:border-red-300"
                                required
                                type="text"
                                id="surname"
                                name="surname"
                                minLength={1}
                                maxLength={100}
                                pattern="^([А-Я]{1}[а-яё]{1,100}|[A-Z]{1}[a-z]{1,100})$"
                            />
                        </label>
                        <label htmlFor="login" className="items-center flex justify-between">Логин
                            <input
                                className="w-40 border-2 px-px valid:border-green-400 rounded-lg invalid:border-red-300"
                                required
                                type="text"
                                id="login"
                                name="login"
                                minLength={8}
                                maxLength={100}
                                pattern="\w+"
                            />
                        </label>
                        <div className="relative flex flex-col gap-1">
                            <label htmlFor="setPassword" className="relative items-center flex justify-between">Пароль
                                <div className="password-hint">
                                    <img src={hint} className="opacity-75 bg-cover w-4 h-4" alt="" />
                                </div>
                                <input
                                    className="max-w-40 border-2 px-px rounded-lg valid:border-green-400 invalid:border-red-300"
                                    required
                                    type="password"
                                    id="setPassword"
                                    name="password"
                                    minLength={8}
                                    maxLength={100}
                                    pattern="(?=.*[0-9])(?=.*[!@#$%^&?*_+=])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&?*_+=]{8,100}"
                                />
                            </label>
                            <div type="button" className="passwordView" onClick={passwordView}></div>
                            <label htmlFor="setPasswordAgain" className="items-center flex justify-between">Повтор пароля
                                <input
                                    className="max-w-40 border-2 px-px rounded-lg valid:border-green-400 invalid:border-red-300"
                                    required
                                    type="password"
                                    id="setPasswordAgain"
                                    minLength={8}
                                    maxLength={100}
                                    pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,100}"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="justify-between flex">
                        <div className="flex items-center">
                            <a href="/SignIn" className="text-sm text-blue-600 hover:text-blue-800">Уже есть аккаунт?</a>
                        </div>
                        <button type="button" onClick={checkPassword} id="registerButton" className="border-4 rounded-lg p-2 px-4">Создать аккаунт</button>
                    </div>
                </form>
            </div>
        </div>
    );
}