import { useEffect } from 'react';
import LatestBlocks from '../components/LatestBlocks';
import LatestTransactions from '../components/LatestTransactions';
import TopbarSearch from '../components/TopbarSearch';
import useBlock from '../hooks/blocks/use-block';

export default function Home() {
  const { blockNumber, getBlockNumber } = useBlock();

  useEffect(() => {
    const fetchData = async () => {
      await getBlockNumber();
    };

    fetchData();
  }, []);

  return (
    <>
      <TopbarSearch />
      {blockNumber && (
        <div className="max-w-7xl mx-auto mt-10">
          <div className="grid lg:grid-cols-2">
            <LatestTransactions block={blockNumber} />
            <LatestBlocks block={blockNumber} />
          </div>
        </div>
      )}
    </>
  );
}
