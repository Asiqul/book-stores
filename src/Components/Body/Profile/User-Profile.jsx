import Forms from "../Pop-up/Forms";
import ProfileContext from "../../../context/profile-context";
import { useContext } from "react";

function UserProfile() {
  const { isActive } = useContext(ProfileContext);
  return (
    <div
      className={`${
        isActive === "profile" ? "flex" : "hidden"
      } flex-col w-full gap-2 px-3`}
    >
      <Forms
        id="fullname"
        label="Nama Lengkap"
        type="text"
        value="Asiqul Hakim"
        disable="true"
      />
      <Forms
        id="email"
        label="Email"
        type="email"
        value="asiqulh@gmail.com"
        disable="true"
      />
      <Forms
        id="handphone"
        label="No. Handphone"
        type="number"
        value="085264058445"
        disable="true"
      />
    </div>
  );
}

export default UserProfile;
