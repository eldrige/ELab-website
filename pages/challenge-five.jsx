import MetaData from "../components/MetaData";
import HeaderBasic from "../components/HeaderBasic";
import FadeInOut from "../components/gsap/FadeInOut";
import TranslateInOut from "../components/gsap/TranslateInOut";
import ScaleInOut from "../components/gsap/ScaleInOut";
import RotateInOut from "../components/gsap/RotateInOut";
import RotateInOut3D from "../components/gsap/RotateInOut3D";
import ImplodeExplodeInOut from "../components/gsap/ImplodeExplodeInOut";
import ShuffleTextInOut from "../components/gsap/ShuffleTextInOut";

export default function ChallengeFive() {
    return (
        <>
            <MetaData title="Challenge Five" />
            <HeaderBasic
                title="Challenge Five"
                wysiwyg="Launch Your Mission V2"
            />

            <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut delay={0.3} target="#gsap-usage">
                        <h2 id="gsap-usage">Description</h2>
                    </ShuffleTextInOut>
                    <TranslateInOut delay={0.4} y="100%">
                        <div className="o-wysiwyg">
                            <p>
                                For challenge 05, we were to come up with a
                                project proposal that describes the challenge we
                                are tackling, the business idea behind our
                                solution and finally the potential impact we are
                                to make
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
                                    <img src="/static/five.jpeg" />
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
                                    <img src="/static/five-one.jpeg" />
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
                                    <img src="/static/five-two.jpeg" />
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
                                    <img src="/static/five-three.jpeg" />
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
                                    <img src="/static/five-five.jpeg" />
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
                                    <img src="/static/five-six.jpeg" />
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
                            src="https://www.youtube.com/embed/WUvb-tcKES8?si=rD4dOQ6CroSdQEfc"
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
            {/* <div className="u-spacing--responsive--bottom">
                <div className="o-container--small">
                    <ShuffleTextInOut
                        delay={0.3}
                        target="#custom-animations"
                        watch
                    >
                        <h2 id="custom-animations">Custom animations</h2>
                    </ShuffleTextInOut>
                    <div className="c-rotateInOut3D">
                        <div className="o-wysiwyg">
                            <h3 className="h5">RotateInOut3D</h3>
                            <p>
                                durationIn="1 + Math.random()"
                                <br />
                                y="100px"
                                <br />
                                start="-100px bottom"
                                <br />
                                watch
                            </p>
                        </div>
                        <div className="c-rotateInOut3D__row u-spacing--responsive--bottom">
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--1" />
                            </RotateInOut3D>
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--2" />
                            </RotateInOut3D>
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--3" />
                            </RotateInOut3D>
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--4" />
                            </RotateInOut3D>
                            <RotateInOut3D
                                durationIn={1 + Math.random()}
                                y="100px"
                                start="-100px bottom"
                                watch
                            >
                                <div className="c-rotateInOut3D__item c-rotateInOut3D__item--5" />
                            </RotateInOut3D>
                        </div>
                    </div>
                    <div className="o-wysiwyg">
                        <h3 className="h5">ImplodeExplodeInOut</h3>
                        <p>
                            delay="0.5"
                            <br />
                            target="#implode-explode"
                            <br />
                            watch
                        </p>
                    </div>
                    <div className="u-spacing--responsive">
                        <ImplodeExplodeInOut
                            delay={0.5}
                            target="#implode-explode"
                            watch
                        >
                            <h2 className="u-margin--none" id="implode-explode">
                                Build complex animations and page transitions
                                with GSAP and Next.js
                            </h2>
                        </ImplodeExplodeInOut>
                    </div>
                    <div className="o-wysiwyg">
                        <h3 className="h5">ShuffleTextInOut</h3>
                        <p>
                            delay="0.3"
                            <br />
                            target="#shuffle"
                            <br />
                            watch
                        </p>
                    </div>
                    <div className="u-spacing--responsive--top">
                        <ShuffleTextInOut delay={0.3} target="#shuffle" watch>
                            <h2 className="u-margin--none" id="shuffle">
                                GreenSock
                            </h2>
                        </ShuffleTextInOut>
                    </div>
                </div>
            </div> */}
        </>
    );
}
