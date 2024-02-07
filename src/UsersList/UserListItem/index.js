import styles from "./css/styles.module.css";
import { FaTrash } from "react-icons/fa";

function UserListItem({user}){

    function removeClick(e){
        e.target.closest('.'+styles.UserListItem).remove();
    }

    return(
        <div className={styles.UserListItem}>
            <img alt="userImage" className={styles.userImage} src={user.imgSrc}></img>
            <div className={styles.nameField}>
                <p className={styles.firstName}>{user.firstName}</p>
                <p className={styles.lastName}>{user.lastName}</p>
            </div>
            <FaTrash onClick={removeClick} className={styles.trash}/>
            
        </div>
    );
}

export default UserListItem;