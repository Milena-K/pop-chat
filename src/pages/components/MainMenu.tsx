import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHouse, faCog, faUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const MainMenu = () => {
  return (
    <div className="bg-white w-28 h-screen border-r-1">
      <div className="p-2" />
      <div className="bg-orange-300 h-20 w-20 mx-4 pt-6 rounded-lg">
        <p className="text-center">LOGO</p>
      </div>
      <div className="p-2" />
      <div className="grid bg-orange-300 h-5/6 w-20 justify-center mx-4 rounded-lg">
        <div className="p-2" />
        <div className="">
          <FontAwesomeIcon className="fa-lg" icon={faHouse} />
        </div>
        <div>
          <FontAwesomeIcon className="fa-lg" icon={faUser} />
        </div>
        <div className="">
          <FontAwesomeIcon className="fa-lg" icon={faComment} />
        </div>
        <div className="row-span-5">
          <FontAwesomeIcon className="fa-lg" icon={faCog} />
        </div>
        <div className="p-2" />
        <div className="">
          <FontAwesomeIcon className="fa-lg" icon={faArrowRightFromBracket} transform={{ rotate: 180 }} />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;