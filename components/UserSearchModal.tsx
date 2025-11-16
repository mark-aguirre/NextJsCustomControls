'use client';

import {useState} from 'react';
import Modal from './System/Controls/Modal';
import UserSearchForm from './UserSearchForm';
import GenericTable from './System/Controls/GenericTable';
import {User, SearchFormData} from '@/types/user';
import UserRow from "@/components/UserRow";

interface UserSearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const mockUsers: User[] = [
    {id: '1', firstName: 'John', lastName: 'Doe', dateOfBirth: '1990-05-15', gender: 'male'},
    {id: '2', firstName: 'Jane', lastName: 'Smith', dateOfBirth: '1985-08-22', gender: 'female'},
    {id: '3', firstName: 'Alex', lastName: 'Johnson', dateOfBirth: '1995-03-10', gender: 'other'},
    {id: '4', firstName: 'Michael', lastName: 'Brown', dateOfBirth: '1988-12-03', gender: 'male'},
    {id: '5', firstName: 'Sarah', lastName: 'Wilson', dateOfBirth: '1992-07-18', gender: 'female'}
];

export default function UserSearchModal({isOpen, onClose}: UserSearchModalProps) {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = async (formData: SearchFormData) => {
        setLoading(true);
        setShowResults(true);

        await new Promise(resolve => setTimeout(resolve, 800));

        const filteredUsers = mockUsers.filter(user => {
            if (formData.firstName && !user.firstName.toLowerCase().includes(formData.firstName.toLowerCase())) return false;
            if (formData.lastName && !user.lastName.toLowerCase().includes(formData.lastName.toLowerCase())) return false;
            if (formData.dateOfBirth && user.dateOfBirth !== formData.dateOfBirth) return false;
            if (formData.gender && user.gender !== formData.gender) return false;
            return true;
        });

        setUsers(filteredUsers);
        setLoading(false);
    };

    const handleClear = () => {
        setUsers([]);
        setShowResults(false);
    };

    const handleClose = () => {
        handleClear();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="User Information">
            <UserSearchForm onSearch={handleSearch} onClear={handleClear}/>
            {showResults && <GenericTable
                data={users}
                headers={['Name', 'DOB', 'Gender']}
                loading={loading}
                title="User Results"
                renderRow={(user) => <UserRow user={user}/>}
                getItemKey={(user) => user.id}
            />}
        </Modal>
    );
}