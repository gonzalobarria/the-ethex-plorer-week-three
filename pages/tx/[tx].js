import { useRouter } from 'next/router';
import { useEffect } from 'react';
import TopbarSearch from '../../components/TopbarSearch';
import TransactionInfo from '../../components/TransactionInfo';
import useTransaction from '../../hooks/blocks/use-transaction';

export default function Tx() {
  const router = useRouter();
  const { tx } = router.query;

  const { transaction, getTransactionReceipt } = useTransaction();

  useEffect(() => {
    const fetchData = async () => {
      console.log(typeof tx);
      if (tx) await getTransactionReceipt(tx);
    };

    fetchData();
  }, [tx]);

  return (
    <>
      <TopbarSearch />
      {transaction && (
        <div className="max-w-7xl mx-auto mt-10">
          <div className="border rounded border-gray-400  mx-5 drop-shadow-xl bg-white text-sm p-4 mb-5">
            <div className="font-medium md:text-2xl truncate ">
              Transaction: {tx}
            </div>
          </div>
          <TransactionInfo trx={transaction} />
        </div>
      )}
    </>
  );
}
