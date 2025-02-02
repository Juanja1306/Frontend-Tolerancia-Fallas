import { isAxiosError } from "axios"
import { safeParse } from "valibot"
import { AllImagesSchema, Image } from "../types"
import api from "../lib/axios";



export async function uploadImage(data: { archivo: File; titulo: string; descripcion: string }) {
  try {
    const email = localStorage.getItem('email');
    const contrasenia = localStorage.getItem('password');

    if (!email || !contrasenia) {
      throw new Error('Credenciales no encontradas');
    }

    const formData = new FormData();
    formData.append('archivo', data.archivo);
    formData.append('titulo', data.titulo);
    formData.append('descripcion', data.descripcion);
    formData.append('email', email);
    formData.append('contrasenia', contrasenia);


    const response = await api.post('/subir_imagen/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 201) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: response.data.error };
    }
  } catch (error) {
    console.error(error);
    if (isAxiosError(error) && error.response) {
      return { success: false, error: error.response.data.error };
    }
    return { success: false, error: 'Hubo un error' };
  }
}

export const getAllImages = async () => {
  try {
    const data = await api.get('/lista_imagenes/');
    const result = safeParse(AllImagesSchema, data.data)

    if (result.success) {
      return result.output
    } else {
      throw new Error('Hubo un error')
    }

  } catch (error) {
    console.log(error)
    if (isAxiosError(error) && error.response) {
      const { status, data } = error.response;
      if (status === 401 || status === 404) {
        return { success: false, error: data.error }; // Error controlado del backend
      }
    }
    throw new Error('Hubo un error')
  }
}

export const deleteImage = async (imageId: Image['id']) => {
  const email = localStorage.getItem('email');
  const contrasenia = localStorage.getItem('password');

  try {
    if (!email || !contrasenia) {
      throw new Error('Credenciales no encontradas');
    }
    const response = await api.delete('/eliminar_imagen/',  {
      data: {
        email: email,
        contrasenia: contrasenia,
        imagen_id: imageId,
      },
    });

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: response.data.error };
    }
  } catch (error) {
    console.error(error);
    if (isAxiosError(error) && error.response) {
      return { success: false, error: error.response.data.error };
    }
    return { success: false, error: 'Hubo un error' };
  }
}