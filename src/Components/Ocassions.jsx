import Image4 from '../Images/image4.jpg'
import Image2 from '../Images/image2.jpg'
import Image1 from '../Images/image1.jpg'
export default function Ocassions() {
    return (
        <div className="p-1 pt-0 md:w-3/4 lg:w-2/3">
            <h2 className="font-semibold mb-3 text-lg">Ocassions</h2>
            <div className="grid gap-y-4 grid-cols-2 lg:grid-cols-3 mt-6 lg:mr-16">
                <div class="w-48 bg-white border border-gray-200 rounded-lg">
                    <div className="flex">
                        <img class=" w-48" src={Image1} alt="" />
                    </div>
                    <div class="pt-3 px-4 pb-8">
                        <h3 class="text-md font-poppins font-semibold tracking-tight text-gray-900">Featured Service</h3>
                    </div>
                </div>
                <div class="w-48 bg-white border border-gray-200 rounded-lg">
                    <div className="flex">
                        <img class=" w-48" src={Image2} alt="" />
                    </div>
                    <div class="pt-3 px-4 pb-8">
                        <h3 class="text-md font-poppins font-semibold tracking-tight text-gray-900">Weekly Newsletter</h3>
                    </div>
                </div>
                <div class="w-48 bg-white border border-gray-200 rounded-lg">
                    <div className="flex">
                        <img class=" w-48" src={Image4} alt="" />
                    </div>
                    <div class="pt-3 px-4 pb-8">
                        <h3 class="text-md font-poppins font-semibold tracking-tight text-gray-900">Editorial Newspaper</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}