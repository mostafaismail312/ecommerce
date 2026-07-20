import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import homeBg from "../../assets/Home-bg.jpg"
export default function HomeSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination,]}
            loop={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}

        >
            
            <SwiperSlide style={{ backgroundImage: `url('${homeBg}') `, backgroundSize: "cover" }}>
                <div className="overLay text-white py-40 bg-gradient-to-r from-primary-600/75 to-primary-400/40 ">
                    <div className="container  space-y-4" >
                        <h2 className=' text-3xl font-bold space-y-4 ' >Elevate Your Style</h2>
                        <p>Shop the newest collections for men, women,<br /> and kids—all in one place.</p>

                        <div className="flex space-x-3">
                            <div className="btn hover:bg-gray-200   bg-white text-primary-600 border border-white p-3 rounded">shop now</div>
                            <div className="btn hover:bg-primary-600 transition border border-amber-600 text-white p-3 rounded ">viwe details</div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url('${homeBg}') `, backgroundSize: "cover" }}>
                <div className="overLay text-white py-40 bg-gradient-to-r from-primary-600/75 to-primary-400/40 ">
                    <div className="container  space-y-4" >
                        <h2 className=' text-3xl font-bold space-y-4 ' >Elevate Your Style</h2>
                        <p>Shop the newest collections for men, women,<br /> and kids—all in one place.</p>

                        <div className="flex space-x-3">
                            <div className="btn hover:bg-gray-200   bg-white text-primary-600 border border-white p-3 rounded">shop now</div>
                            <div className="btn hover:bg-primary-600 transition border border-amber-600 text-white p-3 rounded ">viwe details</div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url('${homeBg}') `, backgroundSize: "cover" }}>
                <div className="overLay text-white py-40 bg-gradient-to-r from-primary-600/75 to-primary-400/40 ">
                    <div className="container  space-y-4" >
                        <h2 className=' text-3xl font-bold space-y-4 ' >Elevate Your Style</h2>
                        <p>Shop the newest collections for men, women,<br /> and kids—all in one place.</p>

                        <div className="flex space-x-3">
                            <div className="btn  cursor-pointer hover:bg-gray-200   bg-white text-primary-600 border border-white p-3 rounded">shop now</div>
                            <div className="btn cursor-pointer hover:bg-primary-600 transition border border-amber-600 text-white p-3 rounded ">viwe details</div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>

        </Swiper>
    )
}
