import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface UserInfo {
  name: string;
  message: string;
  time: string;
  profilePic: string;
}

interface MessageProps {
  userInfo: UserInfo;
}

const Message = ({ userInfo }: MessageProps) => {
  return (
    <>
      <div className="text-gray-800 grid grid-cols-12 gap-0">
        <div className="col-span-2">
          <img className="rounded-full h-12 w-12 mx-4 my-4" src={userInfo.profilePic} />
        </div>
        <div className="col-span-10">
          <div className="grid grid-cols-12 gap-0 py-3">
            <div className="col-span-8 pl-4">
              <p className="text-lg font-bold">{userInfo.name}</p>
              <p className="text-sm">{userInfo.message}</p>
            </div>
            <div className="col-span-4 pl-6 py-2">
              <p className="text-xs text-gray-400">{userInfo.time}</p>
              <div className="pl-4">
                <FontAwesomeIcon icon={faCheck} className="fa-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;