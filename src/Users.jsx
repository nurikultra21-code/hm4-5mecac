import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Твой URL запроса
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <img 
          src="ССЫЛКА_НА_ЛОАДЕР_ИЗ_ЗАДАНИЯ" 
          alt="Загрузка..." 
        />
      </div>
    );
  }

  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;