import { useState } from 'react';
import alchemy from '../../helpers/Alchemy';

function useTransaction() {
  const [transaction, setTransaction] = useState();

  const getTransactionReceipt = async (trxID) => {
    const trx = await alchemy.core.getTransactionReceipt(trxID);
    setTransaction(trx);
    return trx;
  };

  return {
    transaction,
    getTransactionReceipt,
  };
}

export default useTransaction;
