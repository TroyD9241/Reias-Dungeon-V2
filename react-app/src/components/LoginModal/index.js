import React from "react";
import "./LoginModal.css";
import Modal from "react-modal";
import LoginForm from "../auth/LoginForm";
import src from "../../images/transparentlogo.png";

Modal.setAppElement(document.getElementById("root"));

const LoginModal = ({ login, setLogin }) => {
  return (
    <>
      <Modal
        isOpen={login}
        onRequestClose={() => setLogin(false)}
        contentLabel="Login"
        className="modal-shell"
        overlayClassName="modal-outer"
      >
        <div className="modal-left">
          <div className="modal-image-shell">
            <img className="modal-logo-image" src={src} alt="logo"></img>
          </div>
          <div className="modal-large-text">
            JOIN THE LARGEST ART COMMUNITY IN THE WORLD
          </div>
          <div className="modal-sub-text">
            Explore and discover art, become a better artist, connect with others over
            mutual hobbies, or buy and sell work – you can do it all here.
          </div>
          <div className="modal-artist-by">
            ART BY <div className="modal-artist-name"> endprocess83</div>
          </div>
        </div>

        <div className="modal-right">
          <div className="modal-close">
            <i className="fas fa-times" onClick={() => setLogin(false)}></i>
          </div>
          <div className="modal-form-header">
            Log In <div className="modal-form-header-subtext">Become a deviant.</div>
          </div>
          <LoginForm setLogin={setLogin} />
          <div className="modal-tos">
            By clicking Log In, I confirm that I have read and agree to the DeviantArt
            Terms of Service, Privacy Policy, and to receive emails and updates.
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
