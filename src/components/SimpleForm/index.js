import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export const Container = styled.div`
  background: #f3f4f7;
  padding: 60px;
  border-radius: 12px;
  width: 500px;
  height: fit-content;
  margin-top: 40px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  font-family: "Helvetica Neue", helvetica, arial, sans-serif;
`;

export const StyledHeader = styled.h2`
  margin-bottom: 12px;
  color: hotpink;
  font-size: 40px;
  margin-top: 0;
`;

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #0e101c;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const StyledLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 6px;
  margin-top: 20px;
  color: #0e101c;
  font-size: 18px;
  font-weight: bold;
`;

export const StyledSubmit = styled.button`
  background: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 12px;
  margin-bottom: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: #bf1650;
  font-size: 16px;
`;

export const ResultContainer = styled.div`
  font-family: "Helvetica Neue", helvetica, arial, sans-serif;
  margin-top: 40px;
  color: #9092a1;
`;

export const Result = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid lightgrey;
  padding: 12px;
  margin-top: 4px;
`;

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
    website: yup.string().url(),
  })
  .required();

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Container>
      <StyledHeader>Simple Form</StyledHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput type="text" {...register("firstName")} />
          <ErrorText>{errors.firstName?.message}</ErrorText>
        </div>
        <div>
          <StyledLabel>Last Name</StyledLabel>
          <StyledInput type="text" {...register("lastName")} />
        </div>
        <div>
          <StyledLabel>Age</StyledLabel>
          <StyledInput {...register("age")} />
          <ErrorText>{errors.age?.message}</ErrorText>
        </div>
        <div>
          <StyledLabel>Website</StyledLabel>
          <StyledInput {...register("website")} />
          <ErrorText>{errors.website?.message}</ErrorText>
        </div>

        <StyledSubmit type="submit">Submit</StyledSubmit>
      </StyledForm>
      <ResultContainer>
        <label>Data sent</label>
        <Result>{JSON.stringify(formData, null, 2)}</Result>
      </ResultContainer>
    </Container>
  );
};

export { SimpleForm };
