import { title } from "@/src/components/primitives";

export default function Login() {
    return (

        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
                <span className={title()}>Bem-vindo à&nbsp;</span>
            </div>
        </section>

    )
}