import React from "react";
import { EuiForm, EuiFormRow, EuiFlexGroup, EuiSpacer } from "@elastic/eui";
import Inputcomponent from "../components/Input.component";
import Buttoncomponent from "../components/Button.component";
import Dropdowncomponent from "../components/Dropdown.component";
import RadioButton from "../components/Radio.button.component";

const options = [
  { value: "it", text: "IT" },
  { value: "administration", text: "Administration" },
  { value: "recruiting_and_staffing", text: "Recruiting and staffing" },
];

const EmployeeForm = ({
  formData,
  handleInputChange,
  onFormSubmitHandler,
  handleGenderChange,
  onResetHandler,
  errors,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmitHandler();
  };

  return (
    <EuiForm onSubmit={handleSubmit} className="pt-3" noValidate>
      <EuiFormRow label="Name" isInvalid={!!errors.name} error={errors.name}>
        <Inputcomponent
          placeholder="Name"
          name="name"
          value={formData.name}
          handleInputChange={(e) => handleInputChange(e)}
        />
      </EuiFormRow>
      <EuiFormRow label="Email" isInvalid={!!errors.email} error={errors.email}>
        <Inputcomponent
          placeholder="Email"
          name="email"
          value={formData.email}
          handleInputChange={(e) => handleInputChange(e)}
        />
      </EuiFormRow>
      <EuiFormRow
        label="Department"
        isInvalid={!!errors.department}
        error={errors.department}
      >
        <Dropdowncomponent
          options={options}
          name="department"
          value={formData.department}
          handleInputChange={(e) => handleInputChange(e)}
        />
      </EuiFormRow>
      <EuiFormRow
        label="select gender"
        isInvalid={!!errors.gender}
        error={errors.gender}
      >
        <RadioButton
          options={[
            { id: "male", label: "Male" },
            { id: "female", label: "Female" },
            { id: "other", label: "Other" },
          ]}
          idSelected={formData.gender}
          handleGenderChange={(value) => handleGenderChange(value)}
        />
      </EuiFormRow>
      <EuiFormRow
        label="phone no "
        isInvalid={!!errors.phoneno}
        error={errors.phoneno}
      >
        <Inputcomponent
          placeholder="Phone no"
          name="phoneno"
          value={formData.phoneno}
          handleInputChange={(e) => handleInputChange(e)}
        />
      </EuiFormRow>
      <EuiSpacer />
      <EuiFlexGroup>
        <Buttoncomponent
          title="Submit"
          type="submit"
          onButtonClickHandler={(e) => handleSubmit(e)}
        />
        <Buttoncomponent
          title="Reset"
          type="button"
          onButtonClickHandler={(e) => onResetHandler(e)}
        />
      </EuiFlexGroup>
      <EuiSpacer />
    </EuiForm>
  );
};

export default EmployeeForm;
