import React from "react";
import "./Tarjetas.css";
import bot3 from "../../assets/images/bot3.png";
import SolicitarTarjeta from "./SolicitarTarjeta";
import Modal from "../sections/Modal"
import {useState} from "react"
import Mistarjetas from "./Mistarjetas";
const Tarjetas = ({currentUser, setActualizar}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="tarjetas-section">
      <img src={bot3} alt="bot" className="bot-4" />
      <div className="contenedor-info-tarjetas">
        <h2>Tarjetas</h2>
        <p>Obtén ahora tu tarjeta de crédito, de forma rápida y segura</p>
        <img
          src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
          alt="tarjetas"
        />
        <span onClick={openModal}>Solicitar nueva tarjeta ahora</span>
      </div>

      

      {(
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <SolicitarTarjeta currentUser={currentUser} setActualizar={setActualizar} onClose={closeModal}/>
        </Modal>
      )}

    </section>
  );
};

export default Tarjetas;
