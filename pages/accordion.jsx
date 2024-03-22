import MetaData from "@/components/MetaData";
import HeaderBasic from "@/components/HeaderBasic";
import Accordion from "@/components/accordion/Accordion";
import AccordionItem from "@/components/accordion/AccordionItem";
import ShuffleTextInOut from "@/components/gsap/ShuffleTextInOut";
import TranslateInOut from "@/components/gsap/TranslateInOut";

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
            header: "Why this problem statement?",
            content:
                "Upon formation of our think-thanks we realized one of our members had a problem, her parents had not been employed for over 10 years",
        },
        {
            header: "Where does it come from?",
            content:
                "Suspendisse amet consectetur adipisicing elit. Eius consequatur quisquam voluptatem ea maxime ut est. Auctor elit sed vulputate mi sit amet. Interdum consectetur libero id faucibus. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Interdum velit laoreet id donec. At varius vel pharetra vel turpis. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Sit amet venenatis urna cursus. Volutpat ac tincidunt vitae semper quis. Id diam maecenas ultricies mi eget. Risus feugiat in ante metus dictum at. Vel fringilla est ullamcorper eget nulla facilisi. Non consectetur a erat nam at lectus urna duis. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Placerat vestibulum lectus mauris ultrices eros in. Quam nulla porttitor massa id neque. Suspendisse faucibus interdum posuere lorem ipsum. Pharetra vel turpis nunc eget lorem dolor sed viverra. Dui sapien eget mi proin. Id nibh tortor id aliquet.",
        },
        {
            header: "Why do we use it?",
            content:
                "Quisque eget luctus mi, vehicula mollis lorem amet consectetur adipisicing elit. Eius consequatur quisquam voluptatem ea maxime ut est...Lectus sit amet est placerat. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Interdum velit laoreet id donec ultrices tincidunt arcu non. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Platea dictumst quisque sagittis purus sit amet. Adipiscing tristique risus nec feugiat in. Pellentesque elit ullamcorper dignissim cras. Nunc sed id semper risus in hendrerit. Orci a scelerisque purus semper eget duis at tellus. Eget arcu dictum varius duis at consectetur. Nunc pulvinar sapien et ligula ullamcorper malesuada.",
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
                                According to statista the total number of
                                unemployed people in Nigeria totals 6.3 million.
                                We intend to use agriculture to train people
                                aged 20 to 60 to practice livesotck and cashcrop
                                farming in order to earn a living and income
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
                                Our mission is to catalyze sustainable job
                                creation through agriculture in Lagos, Nigeria,
                                by fostering innovation, skills development, and
                                entrepreneurship in the agricultural sector.
                                Through strategic partnerships and community
                                engagement, we aim to unlock the potential of
                                agriculture to provide meaningful employment
                                opportunities, drive economic growth, and
                                enhance livelihoods across the region.
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
            <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#nested" watch>
                        <h2 id="nested">Nested accordion</h2>
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
                                <strong>AccordionItem</strong> can have a nested
                                accordion
                            </p>
                        </div>
                    </TranslateInOut>
                    <Accordion>
                        {items.map(({ header }, i) => (
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
                                <Accordion>
                                    {items.map(({ header, content }, i) => (
                                        <AccordionItem
                                            header={header}
                                            headingTag={"h4"}
                                            headingClassName="h6"
                                            id={i}
                                            key={i}
                                        >
                                            <div className="o-wysiwyg">
                                                <p>{content}</p>
                                            </div>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    );
}
