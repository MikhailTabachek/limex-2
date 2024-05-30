import React, { useState } from 'react';
import ReactSpeedometer, { Transition } from 'react-d3-speedometer';
import Modal from 'react-modal';

interface RiskGaugeProps {
  riskLevel: number;
  title: string;
}

const RiskGauge: React.FC<RiskGaugeProps> = ({ riskLevel, title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="risk-gauge">
      <div className="gauge-background">
        <ReactSpeedometer
          value={riskLevel}
          minValue={0}
          maxValue={100}
          segments={3}
          needleColor={riskLevel <= 33 ? '#1daf17' : riskLevel <= 66 ? '#e7e70b' : '#eb3904'}
          startColor="#00FF00"
          endColor="#eb0c04"
          needleTransitionDuration={4000}
          needleTransition={Transition.easeElastic}
          ringWidth={50}
          width={300}
          height={200}
          textColor="rgba(255, 255, 255, 0)"
        />
        <div className="neon-text">{title}</div>
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
          The current risk level is {riskLevel <= 33 ? 'Low' : riskLevel <= 66 ? 'Medium' : 'High'}. This level is determined based on the volatility and performance of the stocks in your portfolio. To improve your risk profile, consider diversifying your investments, avoiding highly volatile stocks, and regularly reviewing your portfolio to make necessary adjustments.
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>

    </div>
  );
};

export default RiskGauge;
