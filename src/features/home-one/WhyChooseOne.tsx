import { Link } from "react-router";
import TextAnimation from "../../components/elements/TextAnimation";
import FadeInAdvanced from "../../components/elements/FadeInAdvanced";
import CustomSelect from "../../components/elements/CustomSelect";
import { useState } from "react";

type PointItem = {
    id: number;
    icon: string;
    title: string;
    text: string;
};

type CheckItem = {
    id: number;
    text: string;
};

const pointsData: PointItem[] = [
    {
        id: 1,
        icon: "icon-professional-services",
        title: "Worldwide Service",
        text: "Logistic service provider company plays a pivotal role in the global",
    },
    {
        id: 2,
        icon: "icon-delivery-man1",
        title: "Delivered Safely",
        text: "Logistic service provider company plays a pivotal role in the global",
    },
];

const checkListData: CheckItem[] = [
    { id: 1, text: "Make long term business decisions" },
    { id: 2, text: "Transparent career journey and support." },
    { id: 3, text: "Provide a service we are proud of" },
    { id: 4, text: "Be a responsible member of the community" },
];

const WhyChooseOne: React.FC = () => {
    const [freight, setFreight] = useState<string>('');
    const [valueRange, setValueRange] = useState<number>(500);
    const min: number = 0;
    const max: number = 2000;
    const percentage: number = ((valueRange - min) / (max - min)) * 100;

    return (
        <section className="why-choose-one" id="contact">
            <div className="container">
                <div className="row">
                    {/* LEFT */}
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left sec-title-animation animation-style1">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-1">
                                        <i className="fas fa-plane"></i>
                                    </div>

                                    <h6 className="section-title__tagline">Why Choose us</h6>

                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-2">
                                        <i className="fas fa-plane"></i>
                                    </div>
                                </div>

                                <h3 className="section-title__title">
                                    <TextAnimation animationStyle="style1">
                                        Efficient, Safe, & Swift
                                        <span>Logistics Solution!</span>
                                    </TextAnimation>
                                </h3>
                            </div>

                            <p className="why-choose-one__text">
                                A logistic service provider company plays a pivotal role in the
                                global supply chain ecosystem by efficiently managing the movement
                                of goods from point of origin to final destination. These companies
                                offer a diverse range.
                            </p>

                            {/* POINTS */}
                            <div className="why-choose-one__point-box">
                                <ul className="why-choose-one__point">
                                    {pointsData.map((item) => (
                                        <li key={item.id}>
                                            <div className="why-choose-one__point-icon">
                                                <span className={item.icon}></span>
                                            </div>
                                            <div className="why-choose-one__point-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CHECKLIST */}
                            <div className="why-choose-one__point-two-box">
                                <ul className="why-choose-one__point-two">
                                    {checkListData.map((item) => (
                                        <li key={item.id}>
                                            <div className="icon">
                                                <span className="fas fa-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="why-choose-one__btn-box">
                                <Link to="/contact" className="thm-btn">
                                    Contact Us
                                    <span>
                                        <i className="icon-right-arrow"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-xl-6">
                        <div className="why-choose-one__right">
                            <FadeInAdvanced
                                variant="fadeInRight"
                                delay={0}
                                duration={1500}
                            >
                                <div className="why-choose-one__form-box">
                                    <div className="title-box">
                                        <h2>Request a Quote</h2>
                                    </div>

                                    <form className="contact-form-validated why-choose-one__form" onSubmit={(e) => e.preventDefault()}>
                                        <div className="row">
                                            {[
                                                { name: "name", type: "text", placeholder: "Name", icon: "icon-user" },
                                                { name: "email", type: "email", placeholder: "Email", icon: "icon-email" },
                                                { name: "phone", type: "text", placeholder: "Phone", icon: "icon-phone-call" },
                                                { name: "date", type: "date", placeholder: "Date", icon: "icon-calendar", id: "datepicker" },
                                            ].map((field, index) => (
                                                <div className="col-xl-6 col-lg-6 col-md-6" key={index}>
                                                    <div className="input-box">
                                                        <input
                                                            type={field.type}
                                                            name={field.name}
                                                            placeholder={field.placeholder}
                                                            id={field.id}
                                                        />
                                                        {
                                                            field?.type !== "date" ? <div className="icon">
                                                                <span className={field.icon}></span>
                                                            </div>
                                                                :
                                                                ""
                                                        }
                                                    </div>
                                                </div>
                                            ))}

                                            {/* DISTANCE */}
                                            <div className="col-xl-12">
                                                <div className="why-choose-one__form-distance">
                                                    <div className="title">
                                                        <p>distance(Kilo):</p>
                                                    </div>
                                                    <div className="why-choose-one__form-distance-inner">
                                                        <div className="price-ranger">
                                                            <input
                                                                type="range"
                                                                min={min}
                                                                max={max}
                                                                value={valueRange}
                                                                onChange={(e) => setValueRange(Number(e.target.value))}
                                                                style={{
                                                                    // 1. Removes default browser styling
                                                                    WebkitAppearance: 'none',
                                                                    appearance: 'none',
                                                                    width: '100%',
                                                                    height: '8px',
                                                                    borderRadius: '5px',
                                                                    outline: 'none',
                                                                    // 2. Your dynamic gradient
                                                                    background: `linear-gradient(to right, #FD5523 ${percentage}%, #ddd ${percentage}%)`
                                                                }}
                                                                // Use a className or styled-component to target the thumb handle
                                                                className="custom-range-slider"
                                                            />
                                                            <div className="ranger-min-max-block">
                                                                <span className="min">{min}</span>
                                                                <span>-</span>
                                                                <span>{valueRange}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* SELECTS */}
                                            <div className="col-xl-6 col-lg-6 col-md-6" >
                                                <div className="input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={[
                                                                { id: 1, value: 'Freight Type 01', label: 'Freight Type 01' },
                                                                { id: 2, value: 'Freight Type 02', label: 'Freight Type 02' },
                                                                { id: 3, value: 'Freight Type 03', label: 'Freight Type 03' },
                                                                { id: 4, value: 'Freight Type 04', label: 'Freight Type 04' },
                                                                { id: 5, value: 'Freight Type 05', label: 'Freight Type 05' },
                                                            ]}
                                                            value={freight}
                                                            onChange={(value) => setFreight(value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6" >
                                                <div className="input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={[
                                                                { id: 1, value: 'Freight Type 01', label: 'Freight Type 01' },
                                                                { id: 2, value: 'Freight Type 02', label: 'Freight Type 02' },
                                                                { id: 3, value: 'Freight Type 03', label: 'Freight Type 03' },
                                                                { id: 4, value: 'Freight Type 04', label: 'Freight Type 04' },
                                                                { id: 5, value: 'Freight Type 05', label: 'Freight Type 05' },
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* SUBMIT */}
                                            <div className="col-xl-12">
                                                <div className="why-choose-one__form-btn">
                                                    <button type="submit" className="thm-btn">
                                                        Contact Us
                                                        <span>
                                                            <i className="icon-right-arrow"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="result"></div>
                                    </form>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WhyChooseOne;