export const validate = (data, rules) => {
  let errors = {}
  let errorFlags = {}
  let hasErrors = false;
  Object.keys(data).forEach((key, index, value) => {
    let rule = rules[key]; 
    errorFlags = {...errorFlags, [key] : false}
    let allowed = ['required', 'minLength', 'maxLength']
    Object.keys(rule).forEach((ruleKey) => {
      if (!allowed.includes(ruleKey)) {
        throw new Error(`${ruleKey} is not a matching rule type.`)
      }
      switch (ruleKey) {
        case 'required':
          if (data[key].length === 0) {
            hasErrors = true;
            errors = { ...errors, [key]: `${key} required.` }
            errorFlags = {...errorFlags, [key] : true}
          }
          break;
        case 'minLength':
          if (data[key].length < rule[ruleKey]) {
            hasErrors = true;
            errors = { ...errors, [key]: `${key} is too short.` }
            errorFlags = {...errorFlags, [key] : true}
          }
          break;
        case 'maxLength':
          if (data[key].length > rule[ruleKey]) {
            hasErrors = true;
            errors = { ...errors, [key]: `${key} is too long.` }
            errorFlags = {...errorFlags, [key] : true}
          }
          break;
        default: 
          throw new Error(`${ruleKey} is not a matching rule type.`)
      }
    })
  })
  return [hasErrors, errors, errorFlags];
}
