'use client';
import Button from "@/components/forms/button";
import { register } from "@/services/auth";
import { useFormStatus } from "react-dom";
import styles from "./register-form.module.css"
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "@/public/imgs/logo-black.png"
import Image from "next/image";

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <div className={styles.buttons}>
            {pending ? (
                <Button disabled={pending}>Enviando...</Button>
            ) : (
                <Button>Cadastrar</Button>
            )}
        </div>
    );
}

export default function RegisterForm({ onSwitch }: { onSwitch: () => void }) {
    const router = useRouter();
    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        setError(undefined);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!name) {
            setError('O campo nome é obrigatório.');
            return
        }

        if (!email) {
            setError('O campo email é obrigatório.');
            return
        }

        if (!password) {
            setError('O campo senha é obrigatório.');
            return
        }

        if (password.length < 6) {
            setError('A senha precisa ter ao menos 6 caracteres.');
            return
        }

        const result = await register(name, email, password);

        if (!result.success) {
            setError(result.message);
            return
        }

        router.push('/bit-ai/dashboard')
    }

    return (
        <form className={styles.formRegister} action={handleSubmit}>
            <div className={styles.title}>
                <Image src={logo} alt="" />
                <p>Crie sua conta e comece agora!</p>
            </div>

            <div className={styles.selection}>
                <button type="button" onClick={onSwitch}>Entrar</button>
                <button type="button" className={styles.btnActived}>Cadastrar</button>
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