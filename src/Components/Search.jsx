export default function Search({searchQuery,setSearchQuery}) {
    return (
        <div className='relative flex items-center'>
            <input
                type="text"
                className="bg-white border border-gray-700 rounded-full pl-10 pr-4 py-2"
                placeholder="Search Templates"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}

            />
            <div className='absolute top-3 left-3 text-gray-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </div>
        </div>
    );
}