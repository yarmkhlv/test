function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateName(name: string) {
  const re = /^[a-zA-Zа-яА-ЯЁё\s-]+$/;
  return re.test(name);
}

function validateForm(name: string, email: string) {
  return validateName(name) && validateEmail(email);
}

export { validateForm };
