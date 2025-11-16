export interface User {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
}

export interface SearchFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
}