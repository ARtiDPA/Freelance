import "./styles/header.css"

export default function Header() {
    return (
        <header className="sticky top-0 bg-slate-300">
            <div className="max-w-screen-xl flex items-center gap-3 py-3 px-5 mx-auto">
                <div className="flex">
                    <a href="/" className="text-2xl pb-1">
                        Freelance
                    </a>
                </div>
                <div className="flex ml-auto gap-5">
                    <a href="/reg" className="hover:underline">Регистрация</a>
                    <a href="/auth" className="hover:underline">Вход</a>
                </div>
            </div>
        </header>
    );
}