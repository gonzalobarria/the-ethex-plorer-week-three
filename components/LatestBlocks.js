import { useEffect } from 'react';
import Link from 'next/link';
import useBlock from '../hooks/blocks/use-block';

export default function LatestBlocks({ block }) {
  const { blocks, getLatestBlocks } = useBlock();

  useEffect(() => {
    const fetchData = async () => {
      await getLatestBlocks(block);
    };

    fetchData();
  }, []);

  return (
    <div className="border rounded border-gray-400  mx-5 drop-shadow-xl bg-white text-sm ">
      <div className=" border-b border-gray-400 p-2">
        <div className="text-lg font-bold">Latest Blocks</div>
      </div>
      <div className="overflow-y-auto h-96">
        {blocks?.map((block, i, a) => (
          <div
            key={block.number}
            className={`grid md:grid-cols-3 gap-2 md:gap-4 p-2  hover:bg-gray-50 ${
              i !== a.length - 1 ? 'border-b border-gray-400' : ''
            }`}
          >
            <div>
              Bk: <Link href={`/block/${block.number}`}>{block.number}</Link>
            </div>
            <div>
              Fee Recipient:{' '}
              <Link href={`/address/${block.miner}`}>
                {block.miner.slice(0, 14)}...
              </Link>
            </div>

            <div className="w-full md:text-right flex md:justify-end h-fit ">
              <div className="bg-slate-200 rounded-l-lg px-3 py-1 w-full md:w-3/5 ">
                {block.transactions.length} txns
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
