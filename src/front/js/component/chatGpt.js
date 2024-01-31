import React, { useContext, useState } from "react";
import axios from 'axios';
import { Context } from "../store/appContext";
import "../../styles/ChatGpt.css";

export const ChatGpt = () => {
    const [chatMensajes, setChatMensajes] = useState([]);
    const { store } = useContext(Context);
    const [loading, setLoading] = useState(false);

    const handleObtenerRecomendaciones = async () => {
        setLoading(true);
        const movieNames = store.User_watchlist.map(item => item.title);
        const mensajes = [
            {"role": "system", "content": "You are a helpful assistant for movie recomendations, use a list for recomendations, do not repeat any movie name, use code in the response like you are doing a unordered list"},
            {"role": "user", "content": `Quiero ver: ${movieNames.join(', ')}. ¿Puedes darme recomendaciones similares? en formato lista, poca informacion, con unas 3 recomendaciones me basta, no repitas los nombres de las películas que tengo en la watchlist, si no te digo ningun titulo dime que mi watchlist esta vacía`},
            {"role": "assistant", "content": `Claro, aquí tienes algunas recomendaciones basadas en las películas que mencionaste:
                <ul>
                    <li>1. <b>Amores Perros</b> - Similar en tono y estilo a "Y tu mamá también", profundizando en historias cruzadas en México.</li>
                    <li>2. <b>The Amazing Spider-Man</b> - Otra toma en el personaje de Spider-Man, con diferentes villanos y desarrollo de personajes.</li>
                    <li>3. <b>Interstellar</b> - Si disfrutaste de "2001: Una odisea del espacio", esta película ofrece una mezcla de aventura espacial y complejidad emocional.</li>
                </ul>
                Espero que encuentres estas recomendaciones interesantes.` }
        ];

        try {
            const respuesta = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: "gpt-4-0125-preview",
                    messages: mensajes,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer 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`,
                    },
                }
            );

            // Procesar la respuesta de OpenAI y actualizar el estado del chat
            setChatMensajes([...chatMensajes, respuesta.data.choices[0].message.content]);
        } catch (error) {
            console.error('Error al llamar a la API de OpenAI', error.response.data);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="mt-5">
            {loading &&           
                <div className="form-card text-center">
                    <h2 className="fs-title ">Estamos leyendo los datos de tus
                    películas guardadas<br/> para buscar las mejores recomendaciones para ti. </h2>
                    <div className="loaderBars mx-auto"></div>
                </div>  
            }
            {/* Interfaz del chat */}
            <div className="chatbox container">
                {/* Mostrar mensajes del chat aquí */}
                {chatMensajes.map((mensaje, index) => (
                    <div className="chatbox" key={index}>
                        <p className="chatMessege"><b>ScreenerChat dice:</b> {mensaje}</p>
                    </div>
                ))}
            </div>
            {/* Botón para obtener recomendaciones */}
            <div className="container inboxContainer">
                <div>
                <button onClick={handleObtenerRecomendaciones} className="borderRecomendation">
    <span className="btn2">
        <span className="getRecomendationButton">Obten recomendaciones de ScreenerAI en base a tu watchlist.</span>
    </span>
</button>
                </div>
            </div>
        </div>
    );
};