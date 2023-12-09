import Layout from "@/components/Layout";
import Dream from "./Dream";
import Main from "./Main";
import Logs from "./Logs";
const HomePage = () => {
  return (
    <Layout layoutNoOverflow noRegistration footerHide>
      <Main />
      <Dream />
      <Logs />
    </Layout>
  );
};

export default HomePage;
