    import React, { useState, useEffect } from 'react';
    import { IUser } from '../types'

    const UserList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/users/');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data: IUser[] = await response.json();
            setUsers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
        <h1>User List</h1>
        <ul>
        {users.map(user => (
            <li key={user.username}>
                {user.username} ({user.gold})({user.available_time}) ({user.preferred_attraction_type_id})({user.is_admin})
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default UserList;
