import React, { useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import Modal from 'react-modal';

const RiskGauge = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const riskLevel = 50; // Replace with the actual risk calculation

  return (
    <div className="risk-gauge">
      <div className="gauge-background">
        <ReactSpeedometer
          value={riskLevel}
          minValue={0}
          maxValue={100}
          segments={3}
          needleColor={riskLevel <= 33 ? '#00FF00' : riskLevel <= 66 ? '#FFFF00' : '#FF0000'}
          startColor="#00FF00"
          endColor="#FF0000"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
          ringWidth={50}
          width={300}
          height={200}
          textColor="rgba(255, 255, 255, 0)"
        />
        <div className="neon-text">RISK</div>
        <div className="label low">Low</div>
        <div className="label medium">Medium</div>
        <div className="label high">High</div>
      </div>
      <button onClick={openModal} className="details-button">
        Details
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Risk Details"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Risk Details</h2>
        <p>
          The current risk level is Medium. This level is determined based on the volatility and performance of the stocks in your portfolio. To improve your risk profile, consider diversifying your investments, avoiding highly volatile stocks, and regularly reviewing your portfolio to make necessary adjustments.
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>

      <style jsx>{`
        .risk-gauge {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .gauge-background {
          background-color: #222;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
          width: 300px;
        }
        .neon-text {
          position: absolute;
          bottom: 50px;
          color: #fff;
          font-size: 1.5rem;
          text-shadow: 0 0 5px #fff, 0 0 10px #fff
        }
        .label {
          position: absolute;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
        }
        .low {
          bottom: 20px;
          left: 40px;
          color: #00FF00;
        }
        .medium {
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: #FFFF00;
        }
        .high {
          bottom: 20px;
          right: 40px;
          color: #FF0000;
        }
        .details-button {
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
          text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #007bff, 0 0 30px #007bff, 0 0 40px #007bff, 0 0 55px #007bff, 0 0 75px #007bff;
        }
        .details-button:hover {
          background-color: #0056b3;
        }
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 20px;
          border-radius: 8px;
          outline: none;
          width: 300px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default RiskGauge;
