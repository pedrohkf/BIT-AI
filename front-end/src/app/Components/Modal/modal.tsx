import react, { useState } from "react";
import styles from "./modal.module.css";

import Form from "./form";

export default function page() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        isOpen ? (
            <div className={styles.container}>
                <div className={styles.modal}>
                    <div className={styles.img} style={{
                        backgroundImage: `url('https://images.pexels.com/photos/8954114/pexels-photo-8954114.jpeg')`
                    }}>
                        <div className={styles.filterOpacity}>
                            <h2>Fique por dentro</h2>
                        </div>
                    </div>
                    <p>Receba as melhores noticias por email</p>
                    <Form />
                </div>
            </div>
        ) : (
            <>
            </>
        )
    );
}