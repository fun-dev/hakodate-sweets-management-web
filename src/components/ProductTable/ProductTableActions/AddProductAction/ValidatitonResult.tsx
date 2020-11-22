type Validation = {
  must?: boolean;
  numeric?: boolean;
}

type ValidationResult = {
  error: boolean;
  errorMessage: string;
}

export const getTextValidationResult = (input: string, validation: Validation): ValidationResult => {
  if (validation.must) {
    if (input.length === 0) {
      return {
        error: true,
        errorMessage: '入力は必須です。'
      }
    }
  }

  if (validation.numeric) {
    // 数値かどうかを判定
    if(!input.match(/[+-]?\d+/i)){
      return {
          error: true,
          errorMessage: '数値を入力してください。'
      }
    }
  }

  return {
    error: false,
    errorMessage: ''
  }
}

// const nameValidationResult = getTextValidationResult(state.name, { must: true });
// nameValidationResult.error, nameValidationResult.errorMessage