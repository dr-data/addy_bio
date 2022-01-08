import type { NextPage } from "next";
import { CenteredColumn } from "@components/Layouts";
import { routes } from "@config/routes";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <div>
      <CenteredColumn className="z-10 p-4 pt-12">
        <NextSeo
          title={routes.home.seo.title}
          description={routes.home.seo.description}
          openGraph={routes.home.seo.openGraph}
        />
      </CenteredColumn>
    </div>
  );
};

export default Home;
