import React from "react";
import styles from "./About.module.css"

const About = ()=> {
    return (
        <div className={styles.Container}>
            {/* <img src="" alt="Foto del Autor">Autor - Fernando Adrogue</img> */}
            <span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quos ullam, ea distinctio facilis nisi neque ipsum porro sequi voluptates repellat libero error eligendi. Laborum corrupti nostrum voluptas atque qui.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe architecto, aut dolorem deleniti sed, perferendis, ipsum officia obcaecati minima enim! Eius, ut fugit excepturi nulla libero reiciendis fugiat deserunt.</p>
            </span>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet, veniam adipisci consequuntur doloribus laudantium, provident id eveniet est nulla inventore! Quas unde rem quos qui, explicabo perferendis porro laudantium.</div>
        </div>
    )
}

export default About