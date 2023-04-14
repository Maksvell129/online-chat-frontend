import './Users.css';

const UsersList = ({ onClose }) => (
  <div className={'modalContainer'}>
    <div className="close-users-btn">
      <button onClick={onClose} className="close-users-bnt-style"><img width={12} src="images/close.png"/></button>
    </div>
      <div className="abel-normal-black-16px">
          <dl>
              <dd>Bebra</dd>
              <dd>Bebra</dd>
              <dd>Bebra</dd>
              <dd>Bebra</dd>
          </dl>
      </div>
  </div>
);

export default UsersList;