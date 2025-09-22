'use client';
import Button from "@/app/Components/forms/button";
import register from "@/actions/register";
import { useFormStatus } from "react-dom";
import styles from "./register-form.module.css"
import { redirect } from "next/navigation";
import { useState } from "react";
import logo from "../../../../public/imgs/logo-black.png"
import Image from "next/image";

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <div className={styles.buttons}>
            {pending ? (
                <Button disabled={pending}>Enviando...</Button>
            ) : (
                <Button onClick={() => redirect('bit-ai/dashboard')}>Entrar</Button>
            )}
        </div>
    );
}

export default function LoginForm({ onSwitch }: { onSwitch: () => void }) {
    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!name) {
            setError('O campo nome é obrigatório.')
        }

        if (!email) {
            setError('O campo email é obrigatório.');
            return
        }

        if (!password) {
            setError('O campo senha é obrigatório.');
            return
        }

        await register(formData);

        redirect('/bit-ai/dashboard')
    }

    return (
        <form className={styles.formRegister} action={handleSubmit}>
            <div className={styles.title}>
                <Image src={logo} alt="" />
                <p>Que bom ver você de novo!</p>
            </div>

            <div className={styles.selection}>
                <button onClick={onSwitch}>Entrar</button>
                <button className={styles.btnActived}>Cadastrar</button>
            </div>

            <div className={styles.inputs}>
                <div><input type="text" name="name" placeholder="Insira seu nome" /></div>
                <div><input type="email" name="email" placeholder="Insira seu email" /></div>
                <div><input type="password" name="password" placeholder="Insira sua senha" /></div>
                <p className={styles.errorMessage}>{error}</p>
            </div>

            <FormButton />
        </form>
    )
}