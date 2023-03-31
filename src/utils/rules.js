export const required = { value: true, message: "Dit is een verplicht veld" };
export const maxLength = (value) => ({ value, message: `Maximaal ${value} tekens` });
