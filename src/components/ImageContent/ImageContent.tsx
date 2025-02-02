import { useState } from "react"
import { deleteImage } from "../../services/imageService"
import { Image } from "../../types"
import styles from "./ImageContent.module.css"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
type ImageContentProps = {
    image: Image
}


export default function ImageContent({ image }: ImageContentProps) {

    const [isDeleting, setDeleting] = useState(false);
    const navigate = useNavigate();
    const handleClick = async (imageId: Image['id']) => {
        setDeleting(true);
        const response = await deleteImage(imageId)
        setDeleting(false);

        if (response?.success) {
            toast.success('Imagen subida con exito')
            navigate('/virtual/welcome')
        } else {
            toast.error(response?.error)
        }
    }

    return (
        <div className={styles.container_image}>
            <div className={styles.container_text}>
                <div className={styles.cont_text}>
                    <h3>{image.titulo}</h3>
                    <p>{image.descripcion}</p>
                </div>
                <button onClick={() => handleClick(image.id)} className={styles.button} disabled={isDeleting}>X</button>
            </div>
            {isDeleting && <p className={styles.deleting}>Eliminando...</p>}
            <div className={styles.cont_img}>
                <img src={image.url} alt={image.titulo} />
            </div>
        </div>

    )
}