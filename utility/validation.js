export const validateInput = (input, type) => {
  let validation = { isValid: true, message: '' };

  if (input.length === 0) {
    validation.isValid = false;
    validation.message = `can't be empty`;
    return validation;
  }

  switch (type) {
    case 'name': {
      if (!/^[a-zA-Z0-9_ ]*$/.test(input)) {
        validation.isValid = false;
        validation.message = 'invalid characters';
      }
      break;
    }
    case 'message': {
      if (!/^[a-zA-Z0-9_.,()#@:;/?!£$%&'"` ]*$/.test(input)) {
        validation.isValid = false;
        validation.message = 'invalid characters';
      }
      break;
    }

    case 'email': {
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
        validation.isValid = false;
        validation.message = 'invalid email';
      }
      break;
    }

    default: {
      validation.isValid = false;
      validation.message = 'input not recognized';
      break;
    }
  }
  return validation;
};
