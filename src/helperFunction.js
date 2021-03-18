export const IsValidMail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isValidPhoneNumber = (number) => {
  if (/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(number)) {
    return true;
  }
  return false;
};

export const phoneStringToNumber = (string) => {
  return Number(string.replace(/\D/g, ""));
};

export const isEmptyFields = (detailsObj) =>
  Object.values(detailsObj).some((x) => x === "");
