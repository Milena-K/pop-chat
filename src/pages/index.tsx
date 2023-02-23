import { type NextPage } from "next";
import MainMenu from "~/pages/components/MainMenu";
import Inbox from "~/pages/components/Inbox";
const Home: NextPage = () => {

  return (
    <div className="flex">
      <MainMenu></MainMenu>
      <Inbox></Inbox>
    </div>
  )
};

export default Home;
