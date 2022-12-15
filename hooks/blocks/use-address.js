import { Utils, fromHex } from 'alchemy-sdk';
import { useState } from 'react';
import alchemy from '../../helpers/Alchemy';
import { CAT_ASSET } from '../../helpers/contants';

function useAddress() {
  const [balance, setBalance] = useState();
  const [transactions, setTransactions] = useState();

  const getBalance = async (address) => {
    let blnc = await alchemy.core.getBalance(address, 'latest');
    blnc = Utils.formatEther(blnc);
    setBalance(blnc);
    return blnc;
  };

  const getLastestTransactionsAddress = async (fromAddress) => {
    let trxs = await alchemy.core.getAssetTransfers({
      fromBlock: '0x0',
      fromAddress,
      category: CAT_ASSET,
    });

    trxs = trxs?.transfers
      ?.map((t) => ({
        ...t,
        blockNum: parseInt(t.blockNum),
      }))
      .sort((a, b) => b.blockNum - a.blockNum)
      .slice(0, 25);

    setTransactions(trxs);
  };

  return {
    balance,
    getBalance,
    transactions,
    getLastestTransactionsAddress,
  };
}

export default useAddress;
