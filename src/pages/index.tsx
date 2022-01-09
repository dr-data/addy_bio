import type { NextPage } from "next";
import { CenteredColumn } from "@components/Layouts";
import { routes } from "@config/routes";
import { NextSeo } from "next-seo";
import { Navigation } from "@components/Navigation"
const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <CenteredColumn className="z-10 p-4 pt-12">
        <NextSeo
          title={routes.home.seo.title}
          description={routes.home.seo.description}
          openGraph={routes.home.seo.openGraph}
        />

        <div>
          <h1 className="font-font-extrabold text-6xl"> Share all your web3 wallets in a bio link. </h1>
        </div>
      </CenteredColumn>
    </div>
  );
};

export default Home;
