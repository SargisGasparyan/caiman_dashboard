export function isEmail(mail) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
}

export function isNumber(val) {
  return /^[0-9]+$/.test(val);
}

export function isValidPhone(val) {
  return /^\d{1,12}$/.test(val);
}

export const validation = {
  id: val => isNumber(val),
  username: () => true,
  f_name: () => true,
  l_name: () => true,
  gender: () => true,
  e_mail: () => true,
  phone: () => true,
  additionalPhone: () => true,
  currency: () => true,
  regResources: () => true,
  // phoneNumber: val => isValidPhone(val),
  phoneNumber: () => true,
  minBalance: val => isNumber(val),
  maxBalance: val => isNumber(val),
  maxBonus: val => isNumber(val),
  minBonus: val => isNumber(val),
  password: () => true,
};
