
import ServicesOne11 from "../../assets/images/services/services-one-1-1.jpg";
import ServicesOne12 from "../../assets/images/services/services-one-1-2.jpg";
import ServicesOne13 from "../../assets/images/services/services-one-1-3.jpg";
import ServicesOne14 from "../../assets/images/services/services-one-1-4.jpg";
import ServicesOne15 from "../../assets/images/services/services-one-1-5.jpg";
import ServicesOne16 from "../../assets/images/services/services-one-1-6.jpg";
import TextAnimation from '../../components/elements/TextAnimation';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

interface ServiceItem {
    id: number;
    count: string;
    title: string;
    link: string;
    image: string;
    icon: string;
}
const servicesData: ServiceItem[] = [
    {
        id: 1,
        count: "01",
        title: "International Shipping",
        link: "/international-transport",
        image: ServicesOne11,
        icon: "icon-worldwide-shipping",
    },
    {
        id: 2,
        count: "02",
        title: "Ocean Freight",
        link: "/ocean-transport",
        image: ServicesOne12,
        icon: "icon-shipment",
    },
    {
        id: 3,
        count: "03",
        title: "Rail Freight",
        link: "/track-transport",
        image: ServicesOne13,
        icon: "icon-delivery-man",
    },
    {
        id: 4,
        count: "04",
        title: "Road Freight",
        link: "/ocean-transport",
        image: ServicesOne14,
        icon: "icon-truck",
    },
    {
        id: 5,
        count: "05",
        title: "Local Truck Transport",
        link: "/track-transport",
        image: ServicesOne15,
        icon: "icon-shipment",
    },
    {
        id: 6,
        count: "06",
        title: "Fast Personal Delivery",
        link: "/personal-delivery",
        image: ServicesOne16,
        icon: "icon-delivery-man",
    },
    {
        id: 7,
        count: "01",
        title: "International Shipping",
        link: "/warehouse-facility",
        image: ServicesOne11,
        icon: "icon-worldwide-shipping",
    },
    {
        id: 8,
        count: "02",
        title: "Ocean Freight",
        link: "/ocean-transport",
        image: ServicesOne12,
        icon: "icon-shipment",
    },
    {
        id: 9,
        count: "03",
        title: "Rail Freight",
        link: "/emergency-transport",
        image: ServicesOne13,
        icon: "icon-delivery-man",
    },
];


export default function ServicesOne() {
    return (
        <>
            {/*Services One Start*/}
            <section className="services-one">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline-border"></span>
                            <div className="section-title__shape-1">
                                <i className="fas fa-plane"></i>
                            </div>
                            <h6 className="section-title__tagline">Our Services</h6>
                            <span className="section-title__tagline-border"></span>
                            <div className="section-title__shape-2">
                                <i className="fas fa-plane"></i>
                            </div>
                        </div>
                        <h3 className="section-title__title">
                            <TextAnimation animationStyle="style1">
                                Provide Efficient Logistics <br />
                                <span>Solutions Business</span>
                            </TextAnimation>
                        </h3>
                    </div>
                    <div className="services-one__carousel owl-theme owl-carousel">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 10 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                992: { slidesPerView: 3, spaceBetween: 20 },
                                1200: { slidesPerView: 4, spaceBetween: 20 },
                            }}
                        >
                            {
                                servicesData.map((service: ServiceItem) => (
                                    <SwiperSlide key={service?.id}>
                                        <div className="item">
                                            <div className="services-one__single">
                                                <div className="services-one__img-box">
                                                    <div className="services-one__img">
                                                        <img src={service?.image} alt={service?.title} />
                                                    </div>
                                                    <div className="services-one__icon">
                                                        <span className={service?.icon}></span>
                                                    </div>
                                                </div>
                                                <div className="services-one__content">
                                                    <div className="services-one__count">01</div>
                                                    <h4 className="services-one__title"><Link to={service?.link}>{service?.title}</Link></h4>
                                                    <p className="services-one__text">A logistic service provider company plays
                                                        a pivotal role in the global logistic service.</p>
                                                    <div className="services-one__btn-box">
                                                        <Link to={service?.link}>Read More <span className="icon-right-arrow"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
            {/*Services One End*/}
        </>

    );
}
