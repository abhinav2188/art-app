import { alertMsgs } from "./alertMsgs";

export const isEmailValid = (inputText) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return inputText.match(mailformat);
};

export const isPresent = (inputText) => {
  return inputText !== "" && !!inputText;
};

export const isPasswordValid = (inputText) => {
  var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  return inputText.match(paswd);
};

export const isMobileValid = (inputText) => {
  var phoneno = /^\d{10}$/;
  return inputText.match(phoneno);
};

export const primaryEmailValidation = (fieldName, value, setError) => {
  if (!isPresent(value)) {
    setError(fieldName, alertMsgs.requiredField);
    return alertMsgs.requiredField;
  } else if (!isEmailValid(value)) {
    setError(fieldName, alertMsgs.invalidEmail);
    return alertMsgs.invalidEmail;
  } else {
    setError(fieldName, "");
  }
};

export const passwordValidation = (fieldName, value, setError) => {
  if (!isPresent(value)) {
    setError(fieldName, alertMsgs.requiredField);
    return alertMsgs.requiredField;
  } else if (!isPasswordValid(value)) {
    setError(fieldName, alertMsgs.invalidPassword);
    return alertMsgs.invalidPassword;
  } else {
    setError(fieldName, "");
  }
};

export const requiredValidation = (fieldName, value, setError) => {
  if (!isPresent(value)) {
    setError(fieldName, alertMsgs.requiredField);
    return alertMsgs.requiredField;
  } else {
    setError(fieldName, "");
  }
};

export const requiredMobileValidation = (fieldName, value, setError) => {
  if (!isPresent(value)) {
    setError(fieldName, alertMsgs.requiredField);
    return alertMsgs.requiredField;
  } else if (!isMobileValid(value)) {
    setError(fieldName, alertMsgs.invalidMobile);
    return alertMsgs.invalidMobile;
  } else {
    setError(fieldName, "");
  }
};

export const emailValidation = (fieldName, value, setError) => {
  if (isPresent(value)) {
    if (!isEmailValid(value)) {
      setError(fieldName, alertMsgs.invalidEmail);
      return alertMsgs.invalidEmail;
    }
  }
  setError(fieldName, "");
};


export const mobileValidation = (fieldName, value, setError) => {
  if (isPresent(value)) {
    if (!isMobileValid(value)) {
      setError(fieldName, alertMsgs.invalidMobile);
      return alertMsgs.invalidMobile;
    }
  }
  setError(fieldName, "");
};

export const meetingDetailsValidation = (fieldName, value, setError) => {
  if (!isPresent(value)) {
    setError(fieldName, alertMsgs.requiredField);
    return alertMsgs.requiredField;
  } else if (value.length > 4000) {
    setError(fieldName, alertMsgs.invalidMeetingDetails);
    return alertMsgs.invalidMeetingDetails;
  } else {
    setError(fieldName, "");
  }
}