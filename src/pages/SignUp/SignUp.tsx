import { ActionFunctionArgs, Form, redirect, useActionData } from "react-router-dom"
import styles from './SignUp.module.css'
import ImageFormulary from "../../components/ImageFormulary/ImageFormulary"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { signUpUser } from "../../services/userService"
import { typeBloods } from "../../data"

export async function action({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())
    let error = ''

    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    }

    if (data.password !== data.confirm_password) {
        error = 'Las contraseñas no coinciden'
    }

    if (error.length) {
        return error
    }

    const response = await signUpUser(data)

    if (response) {
        return redirect('/')
    }

    return redirect('/virtual/singup')
}


export default function SignUp() {
    const error = useActionData() as string;
    return (
        <div className={styles.background__camp}>
            <Form method="POST" >
                <fieldset className={styles.fieldset}>
                    <div className={styles.cont__camp}>
                        <ImageFormulary />

                        <div className={styles.camp__inputs}>
                            <section className={styles.camp__text + " " + styles.cont__camp__title}>
                                <h3 className={styles.camp__title}>Registrarse</h3>
                            </section>

                            <div className={styles.camp}>
                                <label htmlFor="cli_nombre">Nombre </label>
                                <input className={styles.camp__txt} type="text" name="name" id="name" placeholder='Ej: Felipe'

                                />
                            </div>

                            <div className={styles.camp}>
                                <label htmlFor="cli_apellido">Apellido </label>
                                <input className={styles.camp__txt} type="text" name="lastname" id="lastname" placeholder='Ej: Sanchez' />
                            </div>

                            <div className={styles.camp}>
                                <label htmlFor="cli_direccion">Tipo de sangre </label>
                                <select className={styles.camp__txt} name="blood" id="blood">
                                    <option defaultValue={'---- Seleccione ----'} disabled>---- Seleccione ----</option>
                                    {typeBloods.map(blood => (
                                        <option key={blood} value={blood}>{blood}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.camp}>
                                <label htmlFor="correo">Correo electrónico </label>
                                <input className={styles.camp__txt} type="email" name="email" id="email" placeholder='Ej: ejemplo@gmail.com'

                                />
                            </div>

                            <div className={styles.camp}>
                                <label htmlFor="contrasenia">Contraseña</label>
                                <input className={styles.camp__txt} type="password" name="password" id="password" placeholder='mi contraseña' />
                            </div>

                            <div className={styles.camp}>
                                <label htmlFor="contrasenia">Confirmar Contraseña</label>
                                <input className={styles.camp__txt} type="password" name="confirm_password" id="confirm_password" placeholder='mi contraseña' />
                            </div>

                            {error && <ErrorMessage>{error}</ErrorMessage>}

                            <div className={styles.camp + " " + styles.camp__button}>
                                <input className={styles.button} type="submit" value={'Registrarse'} />
                            </div>

                        </div>
                    </div>
                </fieldset>
            </Form>
        </div>
    )
}