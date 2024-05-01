import styles from "./page.module.css";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Avatar from "../../../public/Assets/avatar-8.png";
import Profiles from "./profile";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Image
        src={Avatar}
        alt=""
        width={30}
        height={30}
        className="rounded-full "
      />
      <div className={styles.name}>
        <p>Michael Kabanda</p>
      </div>
      <Profiles />
    </div>
  );
};

export default Profile;
