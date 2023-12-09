import Layout from "@/components/Layout";
import Dream from "./Dream";
import Main from "./Main";
import Logs from "./Logs";
import { query1 } from "context/airstack";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    console.log("query1");
    query1();
  }, []);
  return (
    <Layout layoutNoOverflow noRegistration footerHide>
      <Main />
      <Dream />
      <Logs />
    </Layout>
  );
};

export default HomePage;
