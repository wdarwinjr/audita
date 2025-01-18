"use client"
import React, { useState } from 'react';
import "@/src/styles/popup.css";
import LoginForm from "@/src/components/login-form2";

function Popup( { children } ) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={togglePopup}>Login</button>
            {isOpen && (
                <div className="popup">
                    {/* <div className="popup-content">
                        {children}
                        <button onClick={togglePopup}>Fechar</button>
                    </div> */}
                    <LoginForm/>
                </div>
            )}
        </>
    );
}

export default Popup;