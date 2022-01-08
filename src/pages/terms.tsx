import { CenteredColumn } from "@components/Layouts";
import type { NextPage } from "next";
import { routes } from "@config/routes";
import { NextSeo } from "next-seo";

const Terms: NextPage = () => {
  return (
    <CenteredColumn>
      <NextSeo
        title={routes.terms.seo.title}
        description={routes.terms.seo.description}
        openGraph={routes.terms.seo.openGraph}
      />
      <div className="px-4 pt-8 pb-4 sm:pt-18">
        <header>
          <h1 className="text-2xl font-bold"> Terms </h1>
          <p className="text-gray-600"> Work in progress. </p>
        </header>
      </div>
    </CenteredColumn>
  );
};

export default Terms;
