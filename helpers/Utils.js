import { GAS_TARGET, MAX_BLOCKS } from './contants';

export const getBlockArray = (blk) => {
  let arr = [];

  for (let i = blk; i > blk - MAX_BLOCKS; i--) {
    arr.push(i);
  }

  return arr;
};

export const getPercentage = ({ gasUsed, gasLimit }) =>
  ((gasUsed * 100) / gasLimit).toFixed(2);

export const getGasTarget = ({ gasUsed }) =>
  ((gasUsed * 100) / GAS_TARGET - 100).toFixed(0);
