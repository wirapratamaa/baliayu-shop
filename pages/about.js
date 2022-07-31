import AchievmentCard from "../components/Achievment";
import Layout from "../components/Layout";
import Stories from "../components/Stories";
import VisiMission from "../components/VisiMission";
import { achievement } from "../data/achievementData";

const About = () => {
  return (
    <Layout title="About Page">
      <div className="flex flex-col px-10">
        <Stories />

        <div className="text-green-600 text-4xl text-center my-10">
          Vision & Mission
        </div>
        <VisiMission />
        <div className="text-green-600 text-4xl text-center my-10">
          Our Achievement
        </div>
        <div className="flex flex-wrap flex-1 ">
          {achievement?.map((item, i) => (
            <div
              key={i}
              className="flex justify-center md:w-1/2 lg:w-1/3 w-full"
            >
              <AchievmentCard src={item?.src} detail={item.description} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
