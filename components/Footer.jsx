import styles from "../styles/modules/Footer.module.scss";
import gsap from "gsap";
import { useRef } from "react";
import { useRouter } from "next/router";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import NavItem from "./NavItem";
import classNames from "classnames";

export default function Footer() {
    const router = useRouter();
    const element = useRef();
    const from = {
        opacity: 0,
        transform: `translate(0, 100%)`,
    };

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Intro animation */
            gsap.to(element.current, {
                opacity: 1,
                y: 0,
                delay: 0.5,
                duration: 0.4,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element.current,
                    start: "-100% bottom",
                    end: "top top",
                },
            });
        }, element);
        return () => ctx.revert();
    }, [router.asPath]);

    return (
        <footer
            className={styles["c-footer"]}
            ref={element}
            style={{ ...from }}
        >
            <div className="o-container">
                <div className={styles["c-footer__row"]}>
                    <div className={styles["c-footer__list"]}>
                        <ul className="unstyled">
                            <li>
                                <NavItem
                                    href="https://www.instagram.com/dreamville_alu?igsh=aG5zZm56NDNuN2Rs"
                                    title="Instragram"
                                    className={styles["is-current-page"]}
                                />
                            </li>
                            <li>
                                <NavItem
                                    href="https://youtube.com/@Dreamville_346?si=jZvJERLoivV33yKn"
                                    title="Youtube"
                                    className={styles["is-current-page"]}
                                />
                            </li>
                        </ul>
                    </div>
                    <div
                        className={classNames(
                            "o-wysiwyg",
                            styles["c-footer__copyright"]
                        )}
                    >
                        <p>
                            &copy; {new Date().getFullYear()} Dreamville. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
