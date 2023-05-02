import { useContext } from 'react';
import './Users.css';
import AuthContext from '../../contexts/auth/AuthContext';

const UsersList = ({users, onClose}) => {
    
    const {authContextData} = useContext(AuthContext)
    
    return (
        <div className={'modalBg'}>
            <div className={'modalContainer'}>
                <div className="close-users-btn">
                    <button onClick={onClose} className="close-users-bnt-style">
                        <img width={10} src="images/close.png"/>
                    </button>
                </div>
                <dl className="users abel-normal-black-16px">
                    {
                        users.map((user, index) => 
                            {
                                if(authContextData.username === user)
                                    return <dd className="my-user" key={index}>{user}</dd>
                                return <dd key={index}>{user}</dd>
                            }
                        )
                    }
                </dl>
            </div>
        </div>
)};

export default UsersList;