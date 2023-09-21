import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ModalWindowLogin = ({ loginOpen, onClick }) => {
    return (
        <section className={loginOpen ? 'overlayVisible' : 'overlay'}>
            <div className="modal-window">
                <div className="modal-window__card">
                    <h2>Войти</h2>
                    <form className="modal-window__form">
                        <label>Имя</label>
                        <input
                            className="transparent-btn"
                            placeholder="Имя"
                        />
                        <label>Телефон</label>
                        <input
                            className="transparent-btn"
                            placeholder="Телефон"
                        />
                    </form>
                </div>
                <AiOutlineClose
                    onClick={onClick}
                    className="window-modal__close"
                />
            </div>
        </section>
    );
};

export default ModalWindowLogin;
