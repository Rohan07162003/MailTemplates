import Image3 from '../Images/image3.jpg'
export default function NewService() {
    return (
        <div class="w-48 bg-white border border-gray-200 rounded-lg ">
            <div className="flex">
                <img class="w-48" src={Image3} alt="" />
            </div>
            <div class="pt-3 px-4 pb-2">
                <h3 class="text-md font-poppins font-semibold  text-gray-900">New Product/Service Announcement</h3>
            </div>
        </div>
    );
}