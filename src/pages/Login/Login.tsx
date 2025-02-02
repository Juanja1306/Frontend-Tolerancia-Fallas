import { ActionFunctionArgs, Form, redirect, useActionData } from "react-router-dom"
import ImageFormulary from "../../components/ImageFormulary/ImageFormulary"
import styles from './Login.module.css'
import { loginUser } from "../../services/userService"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import {  useEffect, useState } from "react"


export async function action({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());

    // Verifica campos vacíos
    if (Object.values(data).includes('')) {
        return { error: 'Todos los campos son obligatorios' };
    }

    try {

        const response = await loginUser(data);

        if (response?.success) {
            return redirect('/virtual/welcome');
        }

        return { error: response?.error };

    } catch (error: any) {
        return { error: error.message };
    }
}


export default function Login() {
    const [isSaving, setSaving] = useState(false);
    const actionData = useActionData() as { error?: string };

    useEffect(() => { actionData?.error && setSaving(false) }, [actionData])
    const handleSubmit = async () => setSaving(true);

    return (
        <div className={styles.background__camp}>
            <Form method="POST" onSubmit={handleSubmit}>
                <fieldset className={styles.fieldset}>
                    <div className={styles.cont__camp}>
                        <ImageFormulary />

                        <div className={styles.camp__inputs}>

                            <section className={styles.camp__text}>
                                <h3 className={styles.camp__title}>{'Ingrese su usuario'}</h3>
                            </section>

                            <div className={styles.camp}>
                                <label htmlFor="correo">Correo electrónico </label>
                                <input className={styles.camp__txt} type="email" name="email" id="email" placeholder='Ej: ejemplo@gmail.com'

                                />
                            </div>

                            <div className={styles.camp}>
                                <label htmlFor="contrasenia">Contraseña</label>
                                <input className={styles.camp__txt} type="password" name="password" id="password" placeholder='mi contraseña' />
                            </div>

                            {actionData?.error && <ErrorMessage>{actionData.error}</ErrorMessage>}

                            <div className={styles.camp + " " + styles.camp__button}>
                                <input className={styles.button} type="submit" value={isSaving ? 'Ingresando...' : 'Ingresar'} disabled={isSaving} />
                            </div>

                        </div>
                    </div>
                </fieldset>
            </Form>
        </div>
    )
}