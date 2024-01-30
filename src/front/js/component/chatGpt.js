import React, { useContext, useState } from "react";
import axios from 'axios';
import { Context } from "../store/appContext";
import "../../styles/ChatGpt.css";

export const ChatGpt = () => {
    const [chatMensajes, setChatMensajes] = useState([]);
    const { store } = useContext(Context);

    const obtenerRecomendaciones = async () => {

        const movieNames = store.User_watchlist.map(item => item.title);

 
        const mensajes = [
            {"role": "system", "content": "You are a helpful assistant. You put movie names in bold font"},
            {"role": "user", "content": `Mis películas que guardé porque me interesan son: ${movieNames.join(', ')}. ¿Puedes darme recomendaciones similares? damelas en formato de lista y dame poca informacion de ellas con unas 6 recomendaciones me basta, si no te digo ningun titulo dime que mi watchlist esta vacía`},
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
        }
    };

    return (
        <div>
            {/* Interfaz del chat */}
            <div className="chatbox container">
                {/* Mostrar mensajes del chat aquí */}
                {chatMensajes.map((mensaje, index) => (
                    <div className="chatbox" key={index}>
                        <p className="chatMessege"><b>screenerChat dice:</b> {mensaje}</p>
                    </div>
                ))}
            </div>
            {/* Botón para obtener recomendaciones */}
            <div className="container inboxContainer">
                <div>
                    <button onClick={obtenerRecomendaciones} className="borderRecomendation">
                        <span className="btn2"><span className="getRecomendationButton">Obtener Recomendaciones</span></span>
                    </button>
                </div>
            </div>
        </div>
    );
};