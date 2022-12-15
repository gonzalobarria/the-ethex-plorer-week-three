import { useEffect } from 'react';
import { Utils } from 'alchemy-sdk';
import Link from 'next/link';
import useBlock from '../hooks/blocks/use-block';

export default function LatestTransactions({ block }) {
  const { blockWithTransactions, getBlockWithTransactions } = useBlock();

  useEffect(() => {
    const fetchData = async () => {
      await getBlockWithTransactions(block);
    };

    fetchData();
  }, []);

  return (
    <div className="border rounded border-gray-400  mx-5 drop-shadow-xl bg-white text-sm ">
      <div className=" border-b border-gray-400 p-2">
        <div className="text-lg font-bold">Latest Transactions</div>
      </div>

      <div className="overflow-y-auto h-96">
        {blockWithTransactions?.transactions?.map((t, i, a) => (
          <div
            key={t.transactionIndex}
            className={`grid md:grid-cols-3 gap-2 md:gap-4 p-2  hover:bg-gray-50 ${
              i !== a.length - 1 ? 'border-b border-gray-400' : ''
            }`}
          >
            <div>
              Tx: <Link href={`/tx/${t.hash}`}>{t.hash.slice(0, 14)}...</Link>
            </div>
            <div>
              <div>
                From:{' '}
                <Link href={`/address/${t.from}`}>
                  {t.from.slice(0, 19)}...
                </Link>
              </div>
              {t.to && (
                <div>
                  To:{' '}
                  <Link href={`/address/${t.to}`}>{t.to.slice(0, 19)}...</Link>{' '}
                </div>
              )}
            </div>
            <div className="w-full md:text-right flex md:justify-end h-fit ">
              <div className="bg-slate-200 rounded-l-lg px-3 py-1 w-full md:w-3/5 ">
                {parseFloat(parseFloat(Utils.formatEther(t.value)).toFixed(5))}{' '}
                eth
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
