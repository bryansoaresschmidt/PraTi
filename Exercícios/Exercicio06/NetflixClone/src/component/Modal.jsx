import React from 'react';
import styled from 'styled-components';

// Estilos do Modal
const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Para garantir que o modal fique acima de outros elementos */
`;

const ModalContainer = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
    background: red;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
`;

const Modal = ({ onClose }) => {
    return (
        <ModalBackground>
            <ModalContainer>
                <h2>Meu Modal</h2>
                <p>Este é o conteúdo do modal!</p>
                <CloseButton onClick={onClose}>Fechar</CloseButton>
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;