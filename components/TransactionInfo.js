import Link from 'next/link';
import Item from './Item';

export default function TransactionInfo({ trx }) {
  return (
    <div className="border rounded border-gray-400  mx-5 drop-shadow-xl bg-white text-sm px-3">
      <Item title="Transaction Hash">{trx.transactionHash}</Item>
      <Item title="Block">
        <Link href={`/block/${trx.blockNumber}`}>{trx.blockNumber} </Link>
        {trx.confirmations} Blocks Confirmations
      </Item>
      <Item title="From">
        <Link href={`/address/${trx.from}`}>{trx.from} </Link>
      </Item>
      <Item title="Interact With (To)">
        <Link href={`/address/${trx.to}`}>{trx.to} </Link>
      </Item>
      <Item title="Status" noBorder>
        {trx.status === 1 ? 'Success' : 'Error'}
      </Item>
    </div>
  );
}
