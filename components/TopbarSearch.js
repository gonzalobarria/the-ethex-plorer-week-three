import Link from 'next/link';
import SearchBar from './SearchBar';

export default function TopbarSearch() {
  return (
    <div className="border-b border-gray-400 py-4 md:py-0">
      <div className="h-24 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-2">
        <div className="w-full md:w-96 font-alfa text-3xl text-center mb-2">
          <Link href="/">The X-plorer</Link>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
