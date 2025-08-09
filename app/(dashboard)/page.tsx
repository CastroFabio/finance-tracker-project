"use client";

import { useGetAccounts } from "@/providers/accounts/api/use-get-accounts";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { data: accounts, isLoading } = useGetAccounts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {accounts?.map((account) => (
          <div key={account.id}>{account.name}</div>
        ))}
        <UserButton afterSwitchSessionUrl="/" />;
      </div>
    </>
  );
}
