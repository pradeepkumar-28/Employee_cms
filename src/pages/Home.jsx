import React, { useState, useEffect } from "react";
import {
  EuiSpacer,
  EuiFlexGrid,
  EuiFlexItem,
  EuiButtonIcon,
} from "@elastic/eui";
import Buttoncomponent from "../components/Button.component";
import ModalComponent from "../components/Modal.component";
import EmployeeForm from "../layout/FormLayout";
import Cardcomponent from "../components/Card.component";
import ConfrimationModal from "../components/Confrimation.modal.component";

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phoneno: "",
    department: "",
  });
  const [employeeData, setEmployeeData] = useState([]);
  const [errors, setErrors] = useState({});

  const onShowModalHandler = () => {
    setIsModalVisible(true);
    setFormData({
      name: "",
      email: "",
      gender: "",
      phoneno: "",
      department: "",
    });
  };
  const oncloseModal = () => {
    setIsModalVisible(false);
  };

  const onShowDeleteModalHandler = () => {
    setIsDeleteModalVisible(true);
  };
  const onCloseDeleteModalHandler = () => {
    setIsDeleteModalVisible(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (value) => {
    setFormData((formData) => ({ ...formData, gender: value }));
  };

  const onFormSubmitHandler = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phoneno) {
      newErrors.phoneno = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneno)) {
      newErrors.phoneno = "Invalid phone number";
    }

    if (!formData.department) {
      newErrors.department = "Please select an option";
    }
    if (!formData.gender) {
      newErrors.gender = "Please select your Gender";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsModalVisible(false);
      if (editIndex === null) {
        const data = JSON.parse(localStorage.getItem("EMPLOYEE_DATA")) || [];
        data.push(formData);
        localStorage.setItem("EMPLOYEE_DATA", JSON.stringify(data));
        setEmployeeData(data);
        setFormData({
          name: "",
          email: "",
          gender: "",
          phoneno: "",
          department: "",
        });
      } else {
        const data = JSON.parse(localStorage.getItem("EMPLOYEE_DATA"));
        data[editIndex] = formData;
        localStorage.setItem("EMPLOYEE_DATA", JSON.stringify(data));
        setEmployeeData(data);
        setFormData({
          name: "",
          email: "",
          gender: "",
          phoneno: "",
          department: "",
        });
        setEditIndex(null);
      }
    }
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("EMPLOYEE_DATA")) || [];
    setEmployeeData(storedList);
  }, [formData]);

  const onEditHandler = (index) => {
    const storedList = JSON.parse(localStorage.getItem("EMPLOYEE_DATA")) || [];
    const selectedData = storedList[index];
    setFormData(selectedData);
    setEditIndex(index);
    setIsModalVisible(true);
  };

  const onDeleteHandler = (index) => {
    setIsDeleteModalVisible(true);
    setDeleteIndex(index);
  };
  const onConfrimDeleteHandler = () => {
    const data = JSON.parse(localStorage.getItem("EMPLOYEE_DATA"));
    data?.splice(deleteIndex, 1);
    localStorage.setItem("EMPLOYEE_DATA", JSON.stringify(data));
    setEmployeeData(data);
    setIsDeleteModalVisible(false);
  };

  const onResetHandler = () => {
    setFormData({
      name: "",
      email: "",
      gender: "",
      phoneno: "",
      department: "",
    });
  };

  return (
    <React.Fragment>
      <EuiSpacer />
      <Buttoncomponent
        title="Add employee"
        onButtonClickHandler={(e) => onShowModalHandler(e)}
      />
      <ModalComponent
        isModalVisible={isModalVisible}
        oncloseModal={oncloseModal}
        title="Please Fill All details"
        body={
          <EmployeeForm
            errors={errors}
            formData={formData}
            handleInputChange={(e) => handleInputChange(e)}
            handleGenderChange={(value) => handleGenderChange(value)}
            onFormSubmitHandler={() => onFormSubmitHandler()}
            onResetHandler={() => onResetHandler()}
          />
        }
      />
      <ConfrimationModal
        isDeleteModalVisible={isDeleteModalVisible}
        onConfrimDeleteHandler={onConfrimDeleteHandler}
        onCloseDeleteModalHandler={onCloseDeleteModalHandler}
      />
      <EuiSpacer />
      <EuiFlexGrid columns={3}>
        {employeeData.map((val, index) => {
          const { name, email, gender, phoneno, department } = val;

          return (
            <EuiFlexItem key={index}>
              <Cardcomponent
                title={name}
                body={
                  <>
                    <dl>
                      <dt>Name</dt>
                      <dd>{name}</dd>
                      <dt>email</dt>
                      <dd>{email}</dd>
                      <dt>department</dt>
                      <dd>{department}</dd>
                      <dt>gender</dt>
                      <dd>{gender}</dd>
                      <dt>phoneno</dt>
                      <dd>{phoneno}</dd>
                    </dl>
                  </>
                }
                footer={
                  <>
                    <EuiButtonIcon
                      display="base"
                      iconType="documentEdit"
                      aria-label="documentEdit"
                      color="primary"
                      onClick={() => onEditHandler(index)}
                    />
                    <EuiButtonIcon
                      display="base"
                      iconType="trash"
                      aria-label="Delete"
                      color="danger"
                      onClick={() => onDeleteHandler(index)}
                    />
                  </>
                }
              />
            </EuiFlexItem>
          );
        })}
      </EuiFlexGrid>
    </React.Fragment>
  );
}

export default Home;
