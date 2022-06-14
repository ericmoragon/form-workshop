import React, { useState } from "react";
import styled from "styled-components";
import FormFirst from "./FormFirst";
import FormSecond from "./FormSecond";
import {
  Container,
  ErrorText,
  Result,
  ResultContainer,
  StyledHeader,
} from "../SimpleForm";
import "react-datepicker/dist/react-datepicker.css";

const SuccessText = styled.p`
  color: #ec5990;
  font-size: 18px;
  font-weight: bold;
`;

const MultiStepForm = () => {
  const [formData, setFormData] = useState({});
  const [formStep, setFormStep] = useState(0);

  const handleNextStep = () => {
    setFormStep((cur) => cur + 1);
  };

  console.log(formData);

  return (
    <Container>
      <StyledHeader>MultiStep Form</StyledHeader>
      <ErrorText>Step {formStep + 1} of 3</ErrorText>
      {formStep === 0 && (
        <FormFirst handleNextStep={handleNextStep} setFormData={setFormData} />
      )}
      {formStep === 1 && (
        <FormSecond handleNextStep={handleNextStep} setFormData={setFormData} />
      )}
      {formStep === 2 && (
        <>
          <SuccessText>✅ Form successfully submitted!</SuccessText>
          <ResultContainer>
            <label>Data sent</label>
            <Result>{JSON.stringify(formData, null, 2)}</Result>
          </ResultContainer>
        </>
      )}
    </Container>
  );
};

export { MultiStepForm };
