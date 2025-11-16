import { User } from '@/types/user';

interface UserRowProps {
  user: User;
}

const getGenderBadgeClass = (gender: string) => {
  switch (gender) {
    case 'male': return 'gender-male';
    case 'female': return 'gender-female';
    default: return 'gender-other';
  }
};

export default function UserRow({ user }: UserRowProps) {
  return (
    <tr>
      <td>
        <span className="user-avatar-small">
          {user.firstName[0]}{user.lastName[0]}
        </span>
        {user.firstName} {user.lastName}
      </td>
      <td>
        {new Date(user.dateOfBirth).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </td>
      <td>
        <span className={`gender-badge ${getGenderBadgeClass(user.gender)}`}>
          {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
        </span>
      </td>
    </tr>
  );
}