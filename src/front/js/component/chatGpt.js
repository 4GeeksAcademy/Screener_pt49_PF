import React, { useState } from "react";
import axios from 'axios';
import "../../styles/ChatGpt.css";

export const ChatGpt = () => {
    const [userMensaje, setUserMensaje] = useState("");
    const [chatMensajes, setChatMensajes] = useState([]);

    const enviarMensajeAOpenAI = async () => {
        try {
            const respuesta = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: "gpt-3.5-turbo",
                    messages: [
                    { role: 'system', content: 'Eres un asistente útil para ayudar a las personas a encontrar la película perfecta preguntando quién está mirando y cómo se sienten. Tu nombre es ScreenerChat.' },
                    { role: 'user', content: '' }],
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

        // Limpiar el área de entrada después de enviar el mensaje
        setUserMensaje("");
    };

    return (
        <div>
            {/* Interfaz del chat */}
            <div className="chatbox">
                {/* Mostrar mensajes del chat aquí */}
                {chatMensajes.map((mensaje, index) => (
                    <div className="chatbox">
                    <p className="chatMessege" key={index}><b>ScreenerChat dice:</b> {mensaje}</p>
                    </div>
                ))}
            </div>
            {/* Área de entrada de mensajes */}
            <div className="container inboxContainer">
                <div className="position-relative">
                <input className="inputUser" type="text" value={userMensaje} onChange={(e) => setUserMensaje(e.target.value)} />
                </div>
                <div>
                <button onClick={enviarMensajeAOpenAI} className="borderRecomendation"><span className="btn2"><span className="getRecomendationButton">Enviar</span></span></button>

                </div>
            </div>
        </div>
    );
};