import styles from "./css/styles.module.css";
import { FaTrash } from "react-icons/fa";

function UserListItem({user, removeUser}){

    

    return(
        <div className={styles.UserListItem}>
            <img alt="userImage" className={styles.userImage} src={user.imgSrc}></img>
            <div className={styles.nameField}>
                <p className={styles.firstName}>{user.firstName}</p>
                <p className={styles.lastName}>{user.lastName}</p>
            </div>
            <FaTrash onClick={() => removeUser(user)}className={styles.trash}/>
            
        </div>
    );
}

export default UserListItem;