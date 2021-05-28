import React, { useSelector } from "react";
import DeviationForm from "../auth/DeviationForm";
import "./DeviationSubmitPage.css";

const DeviationSubmitPage = () => {
  return (
    <div className="page">
      <div className="submit-container">
        <DeviationForm />
      </div>
    </div>
  );
};

export default DeviationSubmitPage;
