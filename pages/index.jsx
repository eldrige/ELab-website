import useDemoModal from "@/components/modal/DemoModal";
import useWindowSize from "@/hooks/useWindowSize";
import useScrollbar from "@/hooks/useScrollbar";
import useElementSize from "@/hooks/useElementSize";
import useLockedScroll from "@/hooks/useLockedScroll";
import useWindowLocation from "@/hooks/useWindowLocation";
import useIsMounted from "@/hooks/useIsMounted";
import MetaData from "@/components/MetaData";
import HeaderBasic from "@/components/HeaderBasic";
import Button from "@/components/Button";
import TranslateInOut from "@/components/gsap/TranslateInOut";
import ShuffleTextInOut from "@/components/gsap/ShuffleTextInOut";
import RotateInOut3D from "@/components/gsap/RotateInOut3D";
import { useState } from "react";

const TEAM = [
    {
        name: "Chibundu Precious Mozia",
        bio: "lorem ipsum dolor amett....",
        image: "static/mozia.jpeg",
    },
    {
        name: "Apoh Prince Eldrige",
        bio: "lorem ipsum dolor amett....",
        image: "static/apoh-eldrige.jpeg",
    },
    {
        name: "Linda Clovis",
        bio: "lorem ipsum dolor amett....",
        image: "static/linda.jpeg",
    },
];

export default function Home() {
    const { DemoModal, setModal } = useDemoModal();
    const [activeMember, setActiveMember] = useState("");
    const [sectionRef, size] = useElementSize();

    return (
        <>
            <MetaData />
            <HeaderBasic
                title="Dreamville"
                wysiwyg="A comprehensive presentation of dreamville's e-lab challenges."
                button={{
                    label: "Powered by Dreamville",
                    href: "",
                    isExternal: true,
                    // externalHref: "https://nextjs.org/",
                    anchor: "",
                    onClick: "",
                    className: "c-btn",
                }}
            />
            <section className="c-flexSection u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#components">
                        <h2 id="components">Challenges</h2>
                    </ShuffleTextInOut>
                    <TranslateInOut overflowHidden delay={0.4} y="100%">
                        <div className="o-wysiwyg">
                            <p>
                                Find below the links to all of the challenges
                                dreamville took part of.
                            </p>
                        </div>
                    </TranslateInOut>
                    <div className="c-flexSection__row">
                        <div className="c-flexSection__item">
                            <DemoModal
                                title={activeMember.name}
                                content={activeMember.bio}
                            />
                            <TranslateInOut
                                delay={0.25}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <Button
                                    label="Challenge One"
                                    onClick={() => setModal(true)}
                                    className="c-btn"
                                />
                            </TranslateInOut>
                        </div>
                        <div className="c-flexSection__item">
                            <TranslateInOut
                                delay={0.45}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <Button
                                    label="Challenge Two"
                                    href="/gsap"
                                    className="c-btn"
                                />
                            </TranslateInOut>
                        </div>
                        <div className="c-flexSection__item">
                            <TranslateInOut
                                delay={0.65}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <Button
                                    label="Challenge Three"
                                    href="/accordion"
                                    className="c-btn"
                                />
                            </TranslateInOut>
                        </div>
                        <div className="c-flexSection__item">
                            <TranslateInOut
                                delay={0.85}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <Button
                                    label="Challenge Four"
                                    href="/form"
                                    className="c-btn"
                                />
                            </TranslateInOut>
                        </div>
                        <div className="c-flexSection__item">
                            <TranslateInOut
                                delay={1.05}
                                y="100%"
                                start="-100% bottom"
                                end="top top"
                                watch
                            >
                                <Button
                                    label="Challenge Five"
                                    href="/upload"
                                    className="c-btn"
                                />
                            </TranslateInOut>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="c-gridSection u-spacing--responsive--bottom"
                ref={sectionRef}
            >
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#hooks" watch>
                        <h2 id="hooks">Dreamville Team</h2>
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
                            <p>(Click on any team member to learn more ... )</p>
                        </div>
                    </TranslateInOut>
                    <div className="c-gridSection__row">
                        {TEAM?.map((member, index) => (
                            <RotateInOut3D
                                key={index}
                                durationIn={1 + Math.random()}
                                y="265px"
                                start="-265px 90%"
                                end="-265px top"
                                watch
                            >
                                <div
                                    style={{ cursor: "pointer" }}
                                    className="c-gridSection__item"
                                    onClick={() => {
                                        setActiveMember(member);
                                        setModal(true);
                                    }}
                                >
                                    <img src={member.image} />

                                    {/* <h3 className="h5">useWindowSize</h3>
                                <div className="o-wysiwyg">
                                    <p>Width: {windowSize.width}</p>
                                    <p>Height: {windowSize.height}</p>
                                    <p>isMobile: {String(isMobile)}</p>
                                    <p>isDesktop: {String(isDesktop)}</p>
                                </div> */}
                                </div>
                            </RotateInOut3D>
                        ))}

                        {/* <RotateInOut3D
                            durationIn={1 + Math.random()}
                            y="265px"
                            start="-265px 90%"
                            end="-265px top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <h3 className="h5">useLockedScroll</h3>
                                <div className="o-wysiwyg">
                                    <p>Locked: {String(locked)}</p>
                                    <Button
                                        label={
                                            locked
                                                ? "Unlock scroll"
                                                : "Lock scroll"
                                        }
                                        onClick={() => setLocked(!locked)}
                                        className="c-btn"
                                    />
                                </div>
                            </div>
                        </RotateInOut3D>
                        <RotateInOut3D
                            durationIn={1 + Math.random()}
                            y="265px"
                            start="-265px 90%"
                            end="-265px top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <h3 className="h5">useWindowLocation</h3>
                                <div className="o-wysiwyg">
                                    <p>currentURL: {currentURL}</p>
                                </div>
                            </div>
                        </RotateInOut3D>
                        <RotateInOut3D
                            durationIn={1 + Math.random()}
                            y="265px"
                            start="-265px 90%"
                            end="-265px top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <h3 className="h5">useIsMounted</h3>
                                <div className="o-wysiwyg">
                                    <p>isMounted: {String(isMounted())}</p>
                                </div>
                            </div>
                        </RotateInOut3D> */}
                    </div>
                </div>
            </section>
        </>
    );
}
