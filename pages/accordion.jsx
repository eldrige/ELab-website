import MetaData from "../components/MetaData";
import HeaderBasic from "../components/HeaderBasic";
import Accordion from "../components/accordion/Accordion";
import AccordionItem from "../components/accordion/AccordionItem";
import ShuffleTextInOut from "../components/gsap/ShuffleTextInOut";
import TranslateInOut from "../components/gsap/TranslateInOut";

const solution = [
    {
        header: "How will this address the needs of the unemployed Nigerians",
        content:
            "Our Mobile Farming School will provide comprehensive agricultural training and education tailored to the local context and specific challenges faced by farmers in rural Nigeria. This will include topics such as sustainable farming practices, crop selection, pest management, and efficient use of resources. The Agripreneurship Hub program will provide mentoring, access to capital, and business development support to aspiring agripreneurs, enabling them to establish successful agricultural enterprises.",
    },
    {
        header: "What tools will you use to enhance productivity",
        content:
            "Our AgriHub Solution will leverage modern technological tools and innovations to enhance agricultural productivity and efficiency. This will include the use of mobile applications for real-time access to market information, weather forecasts, and agricultural best practices. We will also incorporate precision farming techniques, such as soil testing and data-driven crop management, to optimize resource utilization. Additionally, we plan to establish a digital platform that connects farmers with suppliers, buyers, and financial institutions, facilitating seamless transactions and market linkages.",
    },
    {
        header: "How sustainable is the solution?",
        content:
            "Our solution aims to create sustainable employment opportunities by equipping farmers and agripreneurs with the necessary skills and resources to thrive in the agriculture sector. By providing comprehensive training and mentorship, we empower individuals to adopt modern and sustainable farming practices that enhance productivity and profitability. Additionally, our focus on entrepreneurship and business development enables farmers to establish viable agricultural enterprises that can adapt to changing market conditions. By fostering a supportive community and leveraging technology, we aim to create a network of resilient and self-sustaining agricultural businesses that continue to generate employment opportunities in the long run.",
    },
];

export default function AccordionPage() {
    const items = [
        {
            header: "Why choose unemployment as a grand challenge?",
            content:
                "Based on the personal experience of one of our members, who hails from Nigeria and has witnessed the unemployment struggles faced by their own parents, we are driven to address this pressing issue",
        },
        {
            header: "Why choose agriculture as a grand opportunity?",
            content:
                "Agriculture is well-suited for addressing unemployment in Nigeria due to abundant arable land, diverse agricultural practices, high population and food demand, economic significance, potential for agribusiness, and the capacity to provide sustainable livelihoods. By leveraging these factors, agriculture offers employment opportunities, fosters economic growth, and contributes to food security, making it an ideal solution to combat unemployment and improve livelihoods in Nigeria.",
        },
    ];

    return (
        <>
            <MetaData title="Accordion" />
            <HeaderBasic title="Grand Challenge / Grand Opportunity" />
            <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#usage">
                        <h2 id="usage">Problem statement</h2>
                    </ShuffleTextInOut>
                    <TranslateInOut overflowHidden delay={0.4} y="100%">
                        <div className="o-wysiwyg">
                            <p>
                                In Nigeria, where the total number of unemployed
                                people stands at 6.3 million according to
                                Statista, there is a pressing need to address
                                this issue and provide sustainable income
                                opportunities. Our initiative aims to leverage
                                the potential of agriculture by providing
                                training in livestock and cash crop farming to
                                individuals aged 20 to 60. By equipping them
                                with the necessary skills, we empower unemployed
                                individuals to earn a living and improve their
                                livelihoods through agricultural practices.
                            </p>
                        </div>
                    </TranslateInOut>
                    <Accordion>
                        {items.map(({ header, content }, i) => (
                            <AccordionItem
                                header={header}
                                headingClassName="h6"
                                id={i}
                                key={i}
                                delay={items.length / 10 + i / 10}
                                delayOut={items.length / 10 - i / 10}
                            >
                                <div className="o-wysiwyg">
                                    <p>{content}</p>
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#multiple" watch>
                        <h2 id="multiple">Mission statement</h2>
                    </ShuffleTextInOut>
                    <TranslateInOut
                        overflowHidden
                        delay={0.4}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch
                    >
                        <div className="o-wysiwyg">
                            <p>
                                Our mission is to drive sustainable job creation
                                in Lagos, Nigeria, by promoting innovation,
                                skill development, and entrepreneurship in the
                                agricultural sector. Through strategic
                                partnerships and active community engagement, we
                                aim to unlock the full potential of agriculture,
                                harnessing its power to generate meaningful
                                employment, foster economic growth, and uplift
                                livelihoods throughout the region.
                            </p>
                        </div>
                    </TranslateInOut>
                    <Accordion allowMultiple>
                        {items.map(({ header, content }, i) => (
                            <AccordionItem
                                header={header}
                                headingClassName="h6"
                                id={i}
                                key={i}
                                delay={0.3}
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <div className="o-wysiwyg">
                                    <p>{content}</p>
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#expanded" watch>
                        <h2 id="expanded">Solution</h2>
                    </ShuffleTextInOut>
                    <TranslateInOut
                        overflowHidden
                        delay={0.4}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch
                    >
                        <div className="o-wysiwyg">
                            <p>
                                Our AgriHub Solution is a pioneering venture
                                that will revolutionize agricultural development
                                in rural Nigeria by establishing a Mobile
                                Farming School and{" "}
                                <strong>Agripreneurship Hub program</strong>.
                                Our integrated approach combines education,
                                technology, community engagement, and
                                entrepreneurship to empower farmers and create
                                sustainable employment opportunities in the
                                agriculture sector.
                            </p>
                        </div>
                    </TranslateInOut>
                    <Accordion>
                        {solution.map(({ header, content }, i) => (
                            <AccordionItem
                                header={header}
                                headingClassName="h6"
                                id={i}
                                key={i}
                                initialExpanded={i === 0 ? true : false}
                                delay={0.3}
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <div className="o-wysiwyg">
                                    <p>{content}</p>
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    );
}
