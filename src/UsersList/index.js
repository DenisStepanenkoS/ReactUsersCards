import UserListItem from "./UserListItem/index";
import styles from "./css/styles.module.css";
import UserListItemStyles from "./UserListItem/css/styles.module.css";

function UsersList({UsersInfo, setUsersInfo}){
    
    let currentTarget = null;
    let previousTarget = null;   
    
    function removeUser(user){
        const updateUsersInfo = UsersInfo.filter(userInfo => userInfo.id !== user.id);
        setUsersInfo(updateUsersInfo);
    }

    const elementSelected = (e) => {
        
        
        if(!e.target.closest('.'+UserListItemStyles.UserListItem))
            return 0;
        
        currentTarget = e.target.closest('.'+UserListItemStyles.UserListItem);
        currentTarget.classList.add(styles.elementSelected);

        if(previousTarget !== null && previousTarget !== currentTarget)
            previousTarget.classList.remove(styles.elementSelected);
        previousTarget = currentTarget;
        
    }
        
    return(
        <div onClick={elementSelected} className = {styles.UserList}>
            {UsersInfo.map((user)=>(<UserListItem user={user} removeUser={removeUser} key={user.id}/>))}
        </div>
    );
}


export default UsersList;