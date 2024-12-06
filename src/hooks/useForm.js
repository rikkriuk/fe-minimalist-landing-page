import React, { useState } from "react";

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleChange,
  };
};

export default useForm;
