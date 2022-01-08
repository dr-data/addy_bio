import { CenteredColumn } from "@components/Layouts";
import type { NextPage, GetServerSideProps } from "next";
import { Address } from "@components/Widgets";
import { supabase } from "@config/supabaseClient";
import { NextSeo } from "next-seo";
import { Profile } from "../types";

interface Props {
  profile?: Profile;
  error?: string;
}

const IDPage: NextPage<Props> = ({ error, profile }) => {
  if (error) {
    return (
      <CenteredColumn>
        <div> {error}</div>
      </CenteredColumn>
    );
  }

  const { avatarURL, name, description, addresses } = profile!;
  return (
    <CenteredColumn className="px-4 py-12">
      <NextSeo
        title={name}
        description={description}
        openGraph={{
          images: [
            {
              url: avatarURL,
              alt: name,
            },
          ],
        }}
      />
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow shadow-blue-gray-200">
          <div className="flex items-center gap-4 p-4">
            <img className="rounded-full h-14" alt={name} src={avatarURL} />
            <header>
              <h1 className="text-base font-semibold sm:text-lg"> {name} </h1>
              <p className="text-sm text-gray-600 sm:text-base">
                {description}
              </p>
            </header>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow shadow-blue-gray-200">
          <div className="grid gap-4 p-4">
            {addresses.map((address) => (
              <Address address={address} key={address.id} />
            ))}
          </div>
        </div>
      </div>
    </CenteredColumn>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id);

  const result = data?.[0] ? data[0] : null;

  if (result) {
    const profile: Profile = {
      id: result.id,
      name: result.name,
      description: result.description,
      avatarURL: result.avatar_url,
      addresses: result.addresses,
      userId: result.user_id,
    };

    return {
      props: {
        profile,
        error: null,
      },
    };
  } else {
    return {
      props: {
        error: error ? error.message : "No profile found",
        profile: null,
      },
    };
  }
};

export default IDPage;
