import { array, file, InferOutput, number, object, string } from "valibot";

//Schemas - valibot
export const LoginUserSchema = object({
    email: string(),
    contrasenia: string()
})

export const RegisterUserSchema = object({
    nombre: string(),
    apellido: string(),
    tipo_sangre: string(),
    email: string(),
    contrasenia: string()
})

export const DraftImageSchema = object({
    email: string(),
    contrasenia: string(),
    archivo: file(),
    titulo: string(),
    descripcion: string()
})
export const DraftImageSchemaForm = object({
    archivo: file(),
    titulo: string(),
    descripcion: string()
})
export const ImageSchema = object({
    id: number(),
    titulo: string(),
    descripcion: string(),
    url: string(),
    fecha_subida: string()
})

export const AllImagesSchema = object({
    imagenes: array(ImageSchema)
})

//Types
export type LoginUser = InferOutput<typeof LoginUserSchema>
export type RegisterUser = InferOutput<typeof RegisterUserSchema>
export type Image = InferOutput<typeof ImageSchema>
export type allImages = InferOutput<typeof AllImagesSchema>
export type DraftImageForm = InferOutput<typeof DraftImageSchemaForm>
export type DraftImage = InferOutput<typeof DraftImageSchema>