const Welcome = () => {
    return (
        <div className="flex justify-center">
            <section className="h-[calc(100svh-64px)] w-full py-16">
                <div className="pb-8">
                    <div className="pb-24">
                        <p className="pl-[0.125rem] font-bold">Тут талант встречает возможность!</p>
                        <p className="text-4xl pb-3">Freelance — это место идей, где одни её&nbsp;предлагают, а&nbsp;другие&nbsp;реализуют.</p>
                    </div>

                    <p className="text-2xl flex justify-center">Ты здесь, чтобы воплотить задумку в жизнь или помочь другим её исполнить?</p>
                </div>
                <div className="flex justify-center gap-24">
                    <button className="border-slate-400 border-2 rounded-lg p-3">Воплощать что-то в жизнь!</button>
                    <button className="border-slate-400 border-2 rounded-lg p-3">Помогать другим воплощением</button>
                </div>
            </section>
        </div>
    );
}

export default Welcome;