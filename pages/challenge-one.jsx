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
            <MetaData title="Challenge One" />
            <HeaderBasic title="Challenge one" wysiwyg="Introduction." />

            <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#gsap-usage">
                        <h2 id="gsap-usage">Description</h2>
                    </ShuffleTextInOut>
                    <TranslateInOut delay={0.4} y="100%">
                        <div className="o-wysiwyg">
                            <p>
                                For challenge 01, we were asked to make an
                                elevator pitch video introducing ourselves by
                                stating our name, country, interest and a fun
                                fact about you.
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
                        <FadeInOut
                            durationIn={1.5}
                            delay={0.4}
                            ease="slow"
                            watch
                        >
                            <div className="c-gridSection__item">
                                <div className="o-wysiwyg">
                                    <img src="/static/dreamville.jpeg" />
                                </div>
                            </div>
                        </FadeInOut>
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
                                    <img src="/static/dreamville-one.jpeg" />
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
                                    <img src="/static/dreamville-two.jpeg" />
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
                                    <img src="/static/dreamville-two.jpeg" />
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
                                    <img src="/static/dreamville-five.jpeg" />
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
                                    <img src="/static/dreamville-six.jpeg" />
                                </div>
                            </div>
                        </FadeInOut>

                        {/* <RotateInOut
                            fade={false}
                            durationIn={0.6}
                            rotateTo={360}
                            start="bottom bottom"
                            end="top top"
                            watch
                            scrub
                        >
                            <div className="c-gridSection__rotate--box" />
                        </RotateInOut> */}
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
                            src="https://www.youtube.com/embed/bsQlAgRN2VE?si=eUqqnODafWWUEMr7"
                            title="YouTube video player"
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
