import styles from '@/styles/modules/MobileNavigation.module.scss';
import NavItem from './NavItem';
import useDelayedRender from 'use-delayed-render';
import classNames from 'classnames';
import useNavigationContext from '@/context/navigationContext';
import RotateInOut from './gsap/RotateInOut';

export default function MobileNavigation() {
    const { isOpen, toggle } = useNavigationContext();
    const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
        isOpen,
        {
          enterDelay: 200,
          exitDelay: 350
        }
    );

    return (
        <>
            <Hamburger
                isOpen={isOpen}
                toggle={toggle}
            />
            {isMenuMounted &&
                <nav
                   className={classNames(
                        styles['c-mobileNav'],
                        {[styles['is-open']]: isMenuRendered}
                   )}
                >
                    <div className={styles['c-mobileNav__scroll']}>
                        <div className={styles['c-mobileNav__container']}>
                            <div className={styles['c-mobileNav__primary']}>
                                <div className={styles['c-mobileNav__primary--list']}>
                                    <ul>
                                        <li>
                                            {/* <RotateInOut
                                                overflowHidden
                                                delay={0.4}
                                                ease="sine.out"
                                                rotate={10}
                                                y="20px"
                                                skipOutro
                                            > */}
                                                <NavItem
                                                    href="/blog"
                                                    title="Blog"
                                                    className={styles['is-current-page']}
                                                    overflowHidden
                                                    delay={0.4}
                                                    ease="sine.out"
                                                    y="20px"
                                                    rotate={10}
                                                />
                                            {/* </RotateInOut> */}
                                        </li>
                                        <li>
                                            {/* <RotateInOut
                                                overflowHidden
                                                delay={0.5}
                                                ease="sine.out"
                                                rotate={10}
                                                y="20px"
                                                skipOutro
                                            > */}
                                                <NavItem
                                                    href="/form"
                                                    title="Form"
                                                    className={styles['is-current-page']}
                                                    overflowHidden
                                                    delay={0.5}
                                                    ease="sine.out"
                                                    y="20px"
                                                    rotate={10}
                                                />
                                            {/* </RotateInOut> */}
                                        </li>
                                        <li>
                                            {/* <RotateInOut
                                                overflowHidden
                                                delay={0.6}
                                                ease="sine.out"
                                                rotate={10}
                                                y="20px"
                                                skipOutro
                                            > */}
                                                <NavItem
                                                    href="/contact"
                                                    title="Contact"
                                                    className={styles['is-current-page']}
                                                    overflowHidden
                                                    delay={0.6}
                                                    ease="sine.out"
                                                    y="20px"
                                                    rotate={10}
                                                />
                                            {/* </RotateInOut> */}
                                        </li>
                                        <li>
                                            {/* <RotateInOut
                                                overflowHidden
                                                delay={0.7}
                                                ease="sine.out"
                                                rotate={10}
                                                y="20px"
                                                skipOutro
                                            > */}
                                                <NavItem
                                                    href="/career"
                                                    title="Career"
                                                    className={styles['is-current-page']}
                                                    overflowHidden
                                                    delay={0.7}
                                                    ease="sine.out"
                                                    y="20px"
                                                    rotate={10}
                                                />
                                            {/* </RotateInOut> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}

function Hamburger({
    isOpen,
    toggle
}) {
    return (
        <button
            className={classNames(
                styles['m-hamburger'],
                {[styles['is-nav-active']]: isOpen}
            )}
            type="button"
            aria-label="Toggle menu"
            onClick={toggle}
        >
            <div className={styles['m-hamburger__lines']}>
                <span></span>
            </div>
        </button>
    );
}