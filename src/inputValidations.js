const alertMsgs = {
  invalidEmail: "Not a valid email format!",
  requiredField: "Required field!",
  invalidPassword:
    "7 to 15 characters containing at least one numeric digit and a special character!",
};

export const isEmailValid = (inputText) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return inputText.match(mailformat);
};

export const isPresent = (inputText) => {
  return inputText !== "" && !!inputText;
};

export const isPasswordValid = (inputText) => {
  var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  return inputtxt.value.match(passw);
};

export const primaryEmailValidation = (fieldName, value, setError) => {
  if (!isPresent(value)) {
    setError(fieldName, alertMsgs.requiredField);
    return;
  } else if (!isEmailValid(value)) {
    setError(fieldName, alertMsgs.invalidEmail);
  }
};

export const passwordValidation = (fieldName, value, setError) => {
  if (!isPasswordValid(value)) {
    setError(fieldName, alertMsgs.invalidPassword);
    return;
  }
};
