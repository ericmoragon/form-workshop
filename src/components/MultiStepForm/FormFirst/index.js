import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import {
  ErrorText,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSubmit,
} from "../../SimpleForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

export const StyledSelect = styled.select`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #0e101c;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const StyledDatePicker = styled(DatePicker)`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #0e101c;
  padding: 10px 15px;
  font-size: 14px;
`;

const schema = yup
  .object({
    name: yup.string().required(),
    whenDate: yup.date().required(),
    whenTime: yup.string().required(),
    duration: yup.number().required(),
    frequency: yup.string.required,
  })
  .required();

const FormFirst = ({ handleNextStep, setFormData }) => {
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
    setFormData(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <StyledLabel>Check-in name</StyledLabel>
        <StyledInput type="text" {...register("name")} />
        <ErrorText>{errors.name?.message}</ErrorText>
      </div>
      <div>
        <StyledLabel>
          Start time
          <div>
            <Controller
              name="whenDate"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <StyledDatePicker
                  placeholderText="Select date"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  minDate={new Date()}
                  showDisabledMonthNavigation
                />
              )}
            />
            <ErrorText>{errors.whenDate?.message}</ErrorText>
            <StyledSelect {...register("whenTime")}>
              <option value="" selected disabled>
                Select
              </option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
            </StyledSelect>
            <ErrorText>{errors.whenTime?.message}</ErrorText>
            <StyledSelect {...register("duration")}>
              <option value="" selected disabled>
                Select
              </option>
              <option value={15}>15min</option>
              <option value={30}>30min</option>
              <option value={60}>1h</option>
              <option value={90}>1h30min</option>
              <option value={120}>2h</option>
            </StyledSelect>
            <ErrorText>{errors.duration?.message}</ErrorText>
          </div>
        </StyledLabel>
      </div>
      <div>
        <StyledLabel>
          How often would you like to check-in with your team?
          <StyledSelect {...register("frequency")}>
            <option value="" selected disabled>
              Select
            </option>
            <option value="none">None</option>
            <option value="weekly">Weekly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="custom">Every 3 weeks</option>
          </StyledSelect>
          <ErrorText>{errors.frequency?.message}</ErrorText>
        </StyledLabel>
      </div>
      <StyledSubmit type="submit">Next</StyledSubmit>
    </StyledForm>
  );
};

export default FormFirst;
