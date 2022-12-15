import { useState } from 'react';
import alchemy from '../../helpers/Alchemy';
import { getBlockArray } from '../../helpers/Utils';

function useBlock() {
  const [blockNumber, setBlockNumber] = useState();
  const [blockWithTransactions, setBlockWithTransactions] = useState([]);
  const [blocks, setBlocks] = useState([]);

  const getBlockNumber = async () => {
    const lastBlock = await alchemy.core.getBlockNumber();
    setBlockNumber(lastBlock);
    return lastBlock;
  };

  const getBlock = async (block) =>
    await alchemy.core.getBlock(parseInt(block));

  const getBlockWithTransactions = async ({ block }) => {
    const blockWT = await alchemy.core.getBlockWithTransactions(block);

    blockWT.transactions.sort(
      (a, b) => b.transactionIndex - a.transactionIndex
    );

    setBlockWithTransactions(blockWT);
  };

  const getLatestBlocks = async (block) => {
    setBlocks(
      await Promise.all(
        getBlockArray(block).map(async (block) => await getBlock(block))
      )
    );
  };

  return {
    getBlock,
    blockNumber,
    getBlockNumber,
    blockWithTransactions,
    getBlockWithTransactions,
    blocks,
    getLatestBlocks,
  };
}

export default useBlock;
