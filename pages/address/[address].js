import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAddress from '../../hooks/blocks/use-address';
import LatestAddressTransactions from '../../components/LatestAddressTransactions';
import TopbarSearch from '../../components/TopbarSearch';

export default function Address() {
  const router = useRouter();
  const { address } = router.query;

  const { balance, getBalance } = useAddress();

  useEffect(() => {
    const fetchData = async () => {
      if (address) await getBalance(address);
    };

    fetchData();
  }, [address]);

  return (
    <>
      <TopbarSearch />
      {balance && (
        <div className="max-w-7xl mx-auto mt-10">
          <>
            <div className="border rounded border-gray-400  mx-5 drop-shadow-xl bg-white text-sm p-4 mb-5">
              <div className="font-medium md:text-2xl truncate ">
                Address: {address}
              </div>
              <div className="md:text-xl truncate">{balance} Ether</div>
            </div>

            <LatestAddressTransactions address={address} />
          </>
        </div>
      )}
    </>
  );
}
