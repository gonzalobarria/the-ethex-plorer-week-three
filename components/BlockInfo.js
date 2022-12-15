import { Utils } from 'alchemy-sdk';
import Link from 'next/link';
import { getGasTarget, getPercentage } from '../helpers/Utils';
import Item from './Item';

export default function BlockInfo({ block }) {
  return (
    block && (
      <div className="border rounded border-gray-400  mx-5 drop-shadow-xl bg-white text-sm px-3">
        <Item title="Block Height">
          <div className="flex flex-row">
            {block.number}
            <div className="inline-flex pl-2">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded-l">
                <Link
                  href={`/block/${block.number - 1}`}
                  className="text-black"
                >
                  Prev
                </Link>
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded-r">
                <Link
                  href={`/block/${block.number + 1}`}
                  className="text-black"
                >
                  Next
                </Link>
              </button>
            </div>
          </div>
        </Item>
        <Item title="Fee Recipient">
          <Link href={`/address/${block.miner}`}>
            {String(block.miner).toLowerCase()}
          </Link>
        </Item>
        <Item title="Base Fee Per Gas">
          {Utils.formatEther(block.baseFeePerGas ?? 0)} Ether (
          {Utils.formatUnits(block.baseFeePerGas ?? 0, 'gwei')} Gwei)
        </Item>
        <Item title="Gas Used">
          {Utils.formatUnits(block.gasUsed, 'wei')} ({getPercentage(block)}%){' '}
          {getGasTarget(block)}% Gas Target
        </Item>
        <Item title="Gas Limit">
          {Utils.formatUnits(block.gasLimit, 'wei')}
        </Item>
        <Item title="Hash">{String(block.hash).toLowerCase()}</Item>
        <Item title="Parent Hash" noBorder>
          {block.parentHash}
        </Item>
      </div>
    )
  );
}
