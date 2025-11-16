'use client';

import { useState } from 'react';
import { SearchFormData } from '@/types/user';
import FormInput from './System/Controls/FormInput';
import RadioGroup from './System/Controls/RadioGroup';
import Button from './System/Controls/Button';

interface UserSearchFormProps {
  onSearch: (data: SearchFormData) => void;
  onClear: () => void;
}

export default function UserSearchForm({ onSearch, onClear }: UserSearchFormProps) {
  const [formData, setFormData] = useState<SearchFormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(formData);
  };

  const handleClear = () => {
    setFormData({ firstName: '', lastName: '', dateOfBirth: '', gender: '' });
    onClear();
  };

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <FormInput
          id="firstName"
          label="First Name"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={(value: string) => setFormData({ ...formData, firstName: value })}
        />
        <FormInput
          id="lastName"
          label="Last Name"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={(value: string) => setFormData({ ...formData, lastName: value })}
        />
      </div>

      <div className="form-row">
        <FormInput
          id="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(value: string) => setFormData({ ...formData, dateOfBirth: value })}
        />
        <RadioGroup
          label="Gender"
          name="gender"
          options={['male', 'female', 'other']}
          value={formData.gender}
          onChange={(value: string) => setFormData({ ...formData, gender: value })}
        />
      </div>

      <div className="button-group">
        <Button type="submit" variant="primary">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </Button>
        <Button variant="secondary" onClick={handleClear}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Clear
        </Button>
      </div>
    </form>
  );
}