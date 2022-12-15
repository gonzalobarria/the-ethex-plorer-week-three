import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useBlock from '../../hooks/blocks/use-block';
import BlockInfo from '../../components/BlockInfo';
import TopbarSearch from '../../components/TopbarSearch';

export default function Block() {
  const router = useRouter();
  const { block } = router.query;
  const [blck, setBlck] = useState(null);

  const { getBlock } = useBlock();

  useEffect(() => {
    const fetchData = async () => {
      if (block) setBlck(await getBlock(block));
    };

    fetchData();
  }, [block]);

  return (
    <>
      <TopbarSearch />
      {blck && (
        <div className="max-w-7xl mx-auto mt-10">
          <div className="border rounded border-gray-400  mx-5 drop-shadow-xl bg-white text-sm p-4 mb-5">
            <div className="font-medium md:text-2xl truncate ">
              Block: {block}
            </div>
          </div>
          <BlockInfo block={blck} />
        </div>
      )}
    </>
  );
}
