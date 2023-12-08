import Layout from "@/components/Layout";
import Dream from "./Dream";
import Creativity from "./Creativity";
const HomePage = () => {
  return (
    <Layout layoutNoOverflow noRegistration>
      <Dream />
      <Creativity />
    </Layout>
  );
};

export default HomePage;
