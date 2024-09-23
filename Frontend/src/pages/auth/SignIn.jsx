import "./styles/index.css"

export default function SignIn() {
    let passwordView = (e) => {
        e.preventDefault()
        
        let password = document.getElementById("password")
        
        if (password.getAttribute("type") === "password") {
            password.setAttribute("type", "text")
        } else {
            password.setAttribute("type", "password")
        }
    }

    let auth = (login, password) => {
        let data = {
            login: login,
            password: password
        }
        console.log(JSON.stringify(data))
    }

    return (
        <div className="h-[calc(100svh-64px)] items-center flex justify-center">
            <div className="w-[360px] max-w-full flex flex-col gap-3 px-9">
                <h1 className="text-4xl font-bold text-center">Вход</h1>
                <form action="" autoComplete="off" className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="login" className="items-center flex justify-between">Логин
                            <input
                                required
                                type="text"
                                className="w-40 border-2 px-px valid:border-green-400 rounded-lg invalid:border-red-300"
                                id="login"
                                minLength={8}
                                maxLength={100}
                                pattern="\w+"
                            />
                        </label>
                        <label htmlFor="password" className="items-center relative flex justify-between">Пароль
                            <input
                                required
                                type="password"
                                className="max-w-40 border-2 px-px rounded-lg valid:border-green-400 invalid:border-red-300"
                                id="password"
                                minLength={8}
                                maxLength={100}
                                pattern="(?=.*[0-9])(?=.*[!@#$%^&?*_+=])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&?*_+=]{8,100}"
                            />
                            <div className="passwordView" onClick={passwordView}></div>
                        </label>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="justify-center items-center flex gap-2">
                            <div className="flex items-center flex-col gap-1">
                                <a href="/SignUp" className="text-sm text-blue-600 hover:text-blue-800">Нет аккаунта?</a>
                                <a href="#!" className="text-sm text-blue-600 hover:text-blue-800 font-bold">Забыли пароль?</a>
                            </div>
                            <button type="button" onClick={auth} id="registerButton" className="border-4 rounded-lg py-2 px-4">Войти</button>
                        </div>
                        <div className="">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}