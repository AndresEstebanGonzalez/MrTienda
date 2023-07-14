import React from 'react'

import styles from "../styles/NavigationContent.module.scss"

export default function NavigationContent() {

    function handleClick() {
    alert("button clicked")
}

    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <h1 className={styles.title}>Centro de soporte</h1>
                <img className={styles.coverImg} src="src\assets\images\covers\soportesopoteImage.png" alt="" />
            </div>
            <div className={styles.mainBottomContainer}>
                <div className={styles.bottomContainer}>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\envio.png" alt="Envios Logo" />
                        <h2 className={styles.btnTitle}>Envios</h2>
                    </button>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\return.png" alt="Devolucion Logo" />
                        <h2 className={styles.btnTitle}>Devoluciones</h2>
                    </button>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\pago.png" alt="Pago Logo" />
                        <h2 className={styles.btnTitle}>Medios de pago</h2>
                    </button>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\comunicate.png" alt="Comunicate Logo" />
                        <h2 className={styles.btnTitle}>Comunicate con nosotros</h2>
                    </button> 
                </div>

                <div className={styles.bottomContainer}>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\envio.png" alt="Envios Logo" />
                        <h2 className={styles.btnTitle}>Envios</h2>
                    </button>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\return.png" alt="Devolucion Logo" />
                        <h2 className={styles.btnTitle}>Devoluciones</h2>
                    </button>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\pago.png" alt="Pago Logo" />
                        <h2 className={styles.btnTitle}>Medios de pago</h2>
                    </button>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\comunicate.png" alt="Comunicate Logo" />
                        <h2 className={styles.btnTitle}>Comunicate con nosotros</h2>
                    </button> 
                </div>
        
                <div className={styles.bottomContainer}>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\envio.png" alt="Envios Logo" />
                        <h2 className={styles.btnTitle}>Envios</h2>
                    </button>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\return.png" alt="Devolucion Logo" />
                        <h2 className={styles.btnTitle}>Devoluciones</h2>
                    </button>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\pago.png" alt="Pago Logo" />
                        <h2 className={styles.btnTitle}>Medios de pago</h2>
                    </button>
                    <button className={styles.soporteBtn} onClick={handleClick}>
                        <img className={styles.btnLogo} src="src\assets\images\icons\comunicate.png" alt="Comunicate Logo" />
                        <h2 className={styles.btnTitle}>Comunicate con nosotros</h2>
                    </button> 
                </div>
            </div>
        </div>
    )
}