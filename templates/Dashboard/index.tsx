import styles from "./dashboard.module.sass";
import Layout from "@/components/Layout";
import Description from "@/components/Description";
import ToolContext from "context/toolContext";
import { useContext } from "react";
import Logs from "./Logs";
import Dream from "./Dream";
const Dashboard = () => {
  const {
    userOwnedTokens,
    setUserOwnedTokens,
    watchListTokens,
    setWatchListTokens,
  } = useContext(ToolContext);
  return (
    <Layout layoutNoOverflow footerHide noRegistration>
      <Description
        image="/images/cute-planet-large.jpg"
        title="The Explorer"
        date="Minted on Aug 18, 2022"
        tags={userOwnedTokens}
        content="Tradetune is your personalized ally for day-to-day trading in the fast-paced crypto world. This intelligent assistant keeps you informed by sending timely alerts whenever there's a sudden price change in tokens you own or those you're keeping a close watch on. It also provides stop loss features to minimize your losses according to the user configration. Stay ahead of the market with real-time notifications, allowing you to make informed decisions and navigate the exciting world of trading with confidence. Tradetune is your go-to companion for staying on top of your crypto portfolio effortlessly."
      >
        <></>
      </Description>
      <Description
        image="/images/cute-planet-large.jpg"
        title="The Explorer"
        date="Minted on Aug 18, 2022"
        tags={watchListTokens}
        addTags={true}
        content=""
      >
        <></>
      </Description>
      <Logs type="highlights" />
      <Dream />
      <Logs type="stoploss" />
    </Layout>
  );
};

export default Dashboard;
