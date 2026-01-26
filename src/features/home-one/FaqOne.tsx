import { motion } from 'framer-motion'
import FaqOneImg1 from '../../assets/images/resources/faq-one-img-1.jpg';
import TextAnimation from '../../components/elements/TextAnimation';
import CounterUp from '../../components/elements/CounterUp';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import { useState } from 'react';

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
}
const faqData: FaqItem[] = [
    {
        id: 1,
        question: "How do you handle returns or exchanges?",
        answer: `We help businesses bring ideas to life in the digital world designing &
            implementing the technology tools that they need to win. We help
            business bring ideas to life in the digital wor`,
    },
    {
        id: 2,
        question: "What does business consulting do?",
        answer: `We help businesses bring ideas to life in the digital world designing &
            implementing the technology tools that they need to win. We help
            business bring ideas to life in the digital wor`,
    },
    {
        id: 3,
        question: "Can I cancel a shipment after it's been booked?",
        answer: `We help businesses bring ideas to life in the digital world designing &
            implementing the technology tools that they need to win. We help
            business bring ideas to life in the digital wor`,
    },
    {
        id: 4,
        question: "Can you assist with customs clearance procedures?",
        answer: `We help businesses bring ideas to life in the digital world designing &
            implementing the technology tools that they need to win. We help
            business bring ideas to life in the digital wor`,
    },
    {
        id: 5,
        question: "What is your delivery policy?",
        answer: `We help businesses bring ideas to life in the digital world designing &
            implementing the technology tools that they need to win. We help
            business bring ideas to life in the digital wor`,
    },
];
export default function FaqOne() {
    const [activeFaq, setActiveFaq] = useState<number>(2)
    return (
        <>
            {/*Faq One Start */}
            <section className="faq-one">
                <div className="faq-one__shape-1"></div>
                <div className="faq-one__shape-2"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="faq-one__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-1">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                        <h6 className="section-title__tagline">Our Faqs</h6>
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-2">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                    </div>
                                    <h3 className="section-title__title">
                                        <TextAnimation animationStyle="style2">
                                            Frequently Asking <span>Any Question</span>
                                        </TextAnimation>
                                    </h3>
                                </div>
                                <div className="faq-one__img-box">
                                    <div className="faq-one__img">
                                        <img src={FaqOneImg1} />
                                    </div>
                                    <div className="faq-one__experience-box">
                                        <div className="faq-one__experience-year">
                                            <h2  ><CounterUp ending={55} /></h2>
                                        </div>
                                        <p className="faq-one__experience-text">Year of <br /> experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="faq-one__right">
                                <div className="accrodion-grp faq-one-accrodion" >
                                    {
                                        faqData.map((item: FaqItem) => (
                                            <div className={`accrodion ${activeFaq === item.id ? 'active' : ''}`} key={item.id}>
                                                <FadeInAdvanced
                                                    variant={'fadeInRight'}
                                                    delay={100}
                                                    duration={1500}
                                                    className={``}
                                                >
                                                    <div className="accrodion-title" onClick={() => setActiveFaq(item?.id)}>
                                                        <h4>{item?.question}</h4>
                                                    </div>
                                                    <motion.div
                                                        initial={{ y: -40, opacity: 0 }}
                                                        whileInView={{ y: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.5,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.05 }}

                                                        className="accrodion-content" style={{ display: `${activeFaq === item.id ? 'block' : 'none'}` }}>
                                                        <div className="inner">
                                                            <p>{item?.answer}</p>
                                                        </div>{/* /.inner */}
                                                    </motion.div>
                                                </FadeInAdvanced>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Faq One End */}
        </>

    );
}
