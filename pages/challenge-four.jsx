import MetaData from "../components/MetaData";
import HeaderBasic from "../components/HeaderBasic";
import FadeInOut from "../components/gsap/FadeInOut";
import TranslateInOut from "../components/gsap/TranslateInOut";
import ScaleInOut from "../components/gsap/ScaleInOut";
import RotateInOut from "../components/gsap/RotateInOut";
import RotateInOut3D from "../components/gsap/RotateInOut3D";
import ImplodeExplodeInOut from "../components/gsap/ImplodeExplodeInOut";
import ShuffleTextInOut from "../components/gsap/ShuffleTextInOut";

export default function ChallengeOne() {
    return (
        <>
            <MetaData title="Challenge four" />
            <HeaderBasic title="Challenge four" wysiwyg="Hunt for Treasure" />

            <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#gsap-usage">
                        <h2 id="gsap-usage">Description</h2>
                    </ShuffleTextInOut>
                    <TranslateInOut delay={0.4} y="100%">
                        <div className="o-wysiwyg">
                            <p>
                                For challenge 04, we were instructed to find a
                                project/start-up company/institution that falls
                                in line with our GCGO. After searching via
                                LinkedIn we came across Umurava, which is a tech
                                startup in the Talent Management and Ed-tech
                                spaces with a mission to build Africa's Large
                                Workforce specialised in Digital Economy
                                Careers. This falls in line with our Grand
                                Challenge(GO) which is unemployment. Umurava
                                serves as the bridge between graduating and
                                getting a job. We were able to interview Vivens
                                Uwizeyimana is the Chief Executive Officer of
                                Umurava .
                            </p>
                        </div>
                    </TranslateInOut>
                </div>
            </div>
            <div className="c-gridSection">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#animations" watch>
                        <h2 id="animations">Gallery</h2>
                    </ShuffleTextInOut>
                    <div className="c-gridSection__row">
                        <TranslateInOut
                            durationIn={1.5}
                            delay={0.4}
                            y="100%"
                            start="-100% bottom"
                            end="top top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <div className="o-wysiwyg">
                                    <img src="/static/dream-one.jpeg" />
                                </div>
                            </div>
                        </TranslateInOut>
                        <ScaleInOut
                            durationIn={1}
                            delay={0.4}
                            ease="elastic.out"
                            watch
                        >
                            <div
                                className="c-gridSection__item"
                                style={{ display: "flex" }}
                            >
                                <div className="o-wysiwyg">
                                    <img src="/static/dream-two.jpeg" />
                                </div>
                            </div>
                        </ScaleInOut>
                        <ScaleInOut
                            durationIn={1}
                            delay={0.4}
                            ease="elastic.out"
                            watch
                        >
                            <div
                                className="c-gridSection__item"
                                style={{ display: "flex" }}
                            >
                                <div className="o-wysiwyg">
                                    <img src="/static/dream-three.jpeg" />
                                </div>
                            </div>
                        </ScaleInOut>
                        <TranslateInOut
                            durationIn={1.5}
                            delay={0.4}
                            y="100%"
                            start="-100% bottom"
                            end="top top"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <div className="o-wysiwyg">
                                    <img src="/static/dream-four.jpeg" />
                                </div>
                            </div>
                        </TranslateInOut>
                        <FadeInOut
                            durationIn={1.5}
                            delay={0.4}
                            ease="slow"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <div className="o-wysiwyg">
                                    <img src="/static/dream.jpeg" />
                                </div>
                            </div>
                        </FadeInOut>
                        <FadeInOut
                            durationIn={1.5}
                            delay={0.4}
                            ease="slow"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <div className="o-wysiwyg">
                                    <img src="/static/dream-six.jpeg" />
                                </div>
                            </div>
                        </FadeInOut>
                    </div>
                </div>
                <div
                    className="o-container--small"
                    style={{ marginTop: "4rem" }}
                >
                    <ShuffleTextInOut delay={0.3} target="#animations" watch>
                        <h2 id="animations">Video</h2>
                    </ShuffleTextInOut>
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/bXFCOolRSQY?si=Ek2Mn7LMCfi4SAJe"
                            title="Dreamville's challenge four"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="u-spacing--responsive--bottom"></div>
        </>
    );
}
