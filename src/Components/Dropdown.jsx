export default function Dropdown({ sort, setSort,isOpen,setIsOpen,menuRef }) {
    return (
        <>
            <button onClick={() => setIsOpen((prev) => !prev)} className="bg-white relative border border-gray-700 rounded-full px-4 py-2 shadow-sm" ref={menuRef}>
                <div className="flex items-center gap-2">
                    <h3>Sort by</h3>
                    <div className="text-gray-600">{sort}</div>
                    <div>
                        {!isOpen && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        )}
                        {isOpen && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>

                        )}

                    </div>
                </div>

                {isOpen && (
                    <div className="flex flex-col justify-between absolute top-12 right-13 z-10 bg-white divide-y divide-gray-100 rounded-xl drop-shadow-md shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
                        <button value="Popular" onClick={(ev) => { setSort(ev.target.value) }} className="flex block px-4 py-1 hover:bg-gray-100 hover:rounded-xl">Popular</button>
                        <button value="A-Z" onClick={(ev) => { setSort(ev.target.value) }} className="flex block px-4 py-1 hover:bg-gray-100 hover:rounded-xl">A-Z</button>
                        <button value="Recent" onClick={(ev) => { setSort(ev.target.value) }} className="flex block px-4 py-1 hover:bg-gray-100 hover:rounded-xl">Recent</button>
                    </div>
                )}
            </button>
        </>
    )
}