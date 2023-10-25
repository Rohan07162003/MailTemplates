import Image1 from '../Images/image1.jpg'

export default function FeaturedService() {
    return (
        <div class="w-48 bg-white border border-gray-200 rounded-lg">
            <div className="flex">
                <img class=" w-48" src={Image1} alt="" />
            </div>
            <div class="pt-3 px-4 pb-8">
                <h3 class="text-md font-poppins font-semibold tracking-tight text-gray-900">Featured Service</h3>
            </div>
        </div>
    );
}