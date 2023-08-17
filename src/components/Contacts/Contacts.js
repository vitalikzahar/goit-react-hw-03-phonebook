import { Delete } from './Contacts.styled';

export const Contacts = ({ filterUsers, onDelete }) => {
  return (
    <div>
      <ul>
        {filterUsers.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.number}
            <Delete onClick={() => onDelete(contact.id)}>Delete</Delete>
          </li>
        ))}
      </ul>
    </div>
  );
};
