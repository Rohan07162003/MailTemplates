import "../App.css"
export default function Hero() {
    return (
        <>
            <div class="w-full h-64 bg-gradient-to-b from-green-100 to-white" >
                <div className="flex flex-col px-24 py-12">
                    <h2 className='market ml-1'>MARKETPLACE</h2>
                    <div className="inner-head">
                        <span>
                            <h2 className='hero font-poppins font-semibold'>Email Templates</h2>
                            <h2 className='hero font-poppins font-semibold'>Email Sequences</h2>
                            <h2 className='hero font-poppins font-semibold'>Marketing Recipes</h2>
                        </span>

                    </div>

                    <h2 className='text-3xl lg:text-5xl font-poppins text-black'>by the community, for the community.</h2>
                    <p className='pt-4 text-gray-700'>100s of free templates to help you craft the perfect marketing journey.</p>
                </div>
            </div>
        </>
    );
}