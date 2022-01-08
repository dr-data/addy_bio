import { CenteredColumn } from "@components/Layouts";
import type { NextPage } from "next";
import { routes } from "@config/routes";
import { NextSeo } from "next-seo";

const Privacy: NextPage = () => {
  return (
    <CenteredColumn>
      <NextSeo
        title={routes.privacy.seo.title}
        description={routes.privacy.seo.description}
        openGraph={routes.privacy.seo.openGraph}
      />
      <div className="px-4 pt-8 sm:pt-18 pb-4">
        <header>
          <h1 className="text-2xl font-bold"> Privacy Policy </h1>
          <p className="text-gray-600"> Work in progress. </p>
        </header>
      </div>
    </CenteredColumn>
  );
};

export default Privacy;
