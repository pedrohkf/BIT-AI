'use client';
import login from "@/actions/login";
import Button from "@/app/Components/forms/button";
import styles from "./login-form.module.css"
import { useFormStatus } from "react-dom";
import { redirect } from "next/navigation";
import { useState } from "react";
import logo from "../../../../public/imgs/logo-black.png"
import Image from "next/image";

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <div className={styles.buttons}>
            {pending ? (
                <Button disabled={pending}>Entrando...</Button>
            ) : (
                <Button>Entrar</Button>
            )}
        </div>
    );
}

export default function LoginForm({ onSwitch }: { onSwitch: () => void }) {
    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        setError(undefined);

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email) {
            setError('O campo email é obrigatório.');
            return
        }

        if (!password) {
            setError('O campo senha é obrigatório.');
            return
        }

        await login(formData);

        redirect('/bit-ai/dashboard')
    }

    return (
        <form className={styles.formLogin} action={handleSubmit}>
            <div className={styles.title}>
                <Image src={logo} alt="" />
                <p>Que bom ver você de novo!</p>
            </div>

            <div className={styles.selection}>
                <button className={styles.btnActived}>Entrar</button>
                <button onClick={onSwitch}>Cadastrar</button>
            </div>
            <div className={styles.inputs}>
                <div>
                    <input type="email" name="email" placeholder="Insira seu email"
                    />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Insira sua senha"
                    />
                </div>
                <p className={styles.errorMessage}>{error}</p>
            </div>

            <FormButton />
        </form>
    )
}