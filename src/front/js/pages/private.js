import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";


const Private = () => {

    const { store, actions } = useContext(Context);

 
        return (

            <div className="container d-flex w-5 flex-wrap" style={{ height: '500px', width: '100%' }}>
                <div className="row border rounded p-3 bg-light">
                    <div className="col d-flex flex-column">
                    <h2 className="text-dark">Your private area</h2>
                        <ul className="clients-list">
                            <li className="d-flex align-items-center mb-3">
                                <img src="https://picsum.photos/500/300" alt="Client img" className="rounded mr-3" />
                                <div className="d-flex flex-column">
                                    <h3 className="text-secondary">Name</h3>
                                    <p>Client description</p>
                                </div>
                            </li>                            
                            <li className="d-flex align-items-center mb-3">
                                <img src="https://picsum.photos/500/300" alt="Client img" className="rounded mr-3" />
                                <div className="d-flex flex-column">
                                    <h3 className="text-secondary">Email</h3>
                                    <p>email@example.com</p>
                                </div>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <img src="https://picsum.photos/500/300" alt="Client img" className="rounded mr-3" />
                                <div className="d-flex flex-column">
                                    <h3 className="text-secondary">Lastname</h3>
                                    <p>Client description</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Private