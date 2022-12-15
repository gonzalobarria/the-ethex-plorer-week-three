import { useEffect } from 'react';
import Link from 'next/link';
import useAddress from '../hooks/blocks/use-address';

export default function LatestAddressTransactions({ address }) {
  const { transactions, getLastestTransactionsAddress } = useAddress();

  useEffect(() => {
    const fetchData = async () => {
      if (address) await getLastestTransactionsAddress(address);
    };

    fetchData();
  }, [address]);

  const Item = ({ title, children }) => (
    <div className="flex lg:flex-row flex-col md:py-3 text-sm">
      <div className="font-bold pr-1">{title}:</div>
      <div className='truncate'>{children}</div>
    </div>
  );

  return (
    transactions && (
      <div className="border rounded border-gray-400  mx-5 drop-shadow-xl bg-white text-sm ">
        <div className=" border-b border-gray-400 p-2">
          <div className="text-lg font-bold">Latest Address Transactions</div>
        </div>

        <div className="overflow-y-auto h-96">
          {transactions?.map((trx, i, a) => (
            <div
              key={`${trx.blockNum}-${trx.hash}-${i}`}
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 p-2  hover:bg-gray-50 ${
                i !== a.length - 1 ? 'border-b border-gray-400' : ''
              }`}
            >
              <Item title="Txn Hash">
                <Link href={`/tx/${trx.hash}`}>{trx.hash.slice(0, 14)}...</Link>
              </Item>
              <Item title="Block">
                <Link href={`/block/${trx.blockNum}`}>{trx.blockNum}</Link>
              </Item>
              <Item title="From">{trx.from.slice(0, 14)}...</Item>

              <Item title="To">
                <Link href={`/address/${trx.to}`}>
                  {trx.to.slice(0, 14)}...
                </Link>
              </Item>
              <Item title="Value">{trx.value} Ether</Item>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
