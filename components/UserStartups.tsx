import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startups: StartupTypeCard[] = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  if (!startups || startups.length === 0) {
    return <p className="no-result">No posts yet</p>;
  }

  return (
    <>
      {startups.map((startup) => (
        <StartupCard key={startup._id} post={startup} />
      ))}
    </>
  );
};

export default UserStartups;
