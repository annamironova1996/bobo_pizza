import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ModalWindowRegister = ({ registerOpen, onClick }) => {
    return (
        <section className={registerOpen ? 'overlayVisible' : 'overlay'}>
            <div
                className="modal-window"
                onClick={onClick}
            >
                <div className="modal-window__card">
                    <h2>Зарегистрироваться</h2>
                    <form className="modal-window__form">
                        <label>Имя</label>
                        <input
                            className="transparent-btn"
                            placeholder="Имя"
                        />
                        <label>Номер телефона</label>
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

export default ModalWindowRegister;
