'use client';

import { useState } from 'react';
import UserSearchModal from '@/components/UserSearchModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <button 
        className="open-modal-btn" 
        onClick={() => setIsModalOpen(true)}
      >
        Open User Search Modal
      </button>
      
      <UserSearchModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}