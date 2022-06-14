import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import {
  ErrorText,
  StyledForm,
  StyledLabel,
  StyledSubmit,
} from "../../SimpleForm";
import { StyledSelect } from "../FormFirst";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const options = [
  {
    label: "Teams",
    options: [
      { label: "Product", value: "product" },
      { label: "Engineering", value: "engineering" },
      { label: "Design", value: "design" },
    ],
  },
  {
    label: "Individuals",
    options: [
      { label: "Eric", value: "eric" },
      { label: "Richard", value: "richard" },
      { label: "Simon", value: "simon" },
      { label: "Savio", value: "savio" },
      { label: "Ricarda", value: "ricarda" },
    ],
  },
];

const schema = yup
  .object({
    participants: yup.array().required(),
    goals: yup.string().required(),
  })
  .required();

const FormSecond = ({ handleNextStep, setFormData }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    handleNextStep();
    setFormData((prevState) => ({ ...prevState, ...data }));
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <StyledLabel>
          Participants
          <Controller
            name="participants"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Select
                isMulti
                {...field}
                classNamePrefix="select"
                options={options}
              />
            )}
          />
          <ErrorText>{errors.participants?.message}</ErrorText>
        </StyledLabel>
      </div>
      <div>
        <StyledLabel>
          Goals
          <StyledSelect {...register("goals")}>
            <option value="" selected disabled>
              Select
            </option>
            <option value="goal-1">
              We offer freelancers an improved toolbox without the existing
              inconsistencies
            </option>
            <option value="goal-2">
              Our use-case based content helps new and existing customers faster
              mastering OKRs
            </option>
            <option value="goal-3">
              We continue our growth journey with new exciting users which also
              keeps our investors happy
            </option>
            <option value="goal-4">
              We continue our growth journey with new exciting users which also
              keeps our investors happy
            </option>
          </StyledSelect>
          <ErrorText>{errors.goals?.message}</ErrorText>
        </StyledLabel>
      </div>
      <StyledSubmit type="submit">Submit</StyledSubmit>
    </StyledForm>
  );
};

export default FormSecond;
