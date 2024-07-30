    import React, { useState, useEffect } from 'react';
    import { IUser } from './types';

    const UserList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3001/users/getUsers', {
            method: 'GET'
            });
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
            const data: IUser[] = await response.json();
            setUsers(data);
            } else {
            const text = await response.text();
            throw new Error(`Unexpected response format: ${text}`);
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };

        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                {user.username} ({user.gold}) ({user.available_time}) ({user.preferred_attraction_type_id}) ({user.is_admin})
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default UserList;
