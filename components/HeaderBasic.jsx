import styles from '@/styles/modules/HeaderBasic.module.scss';
import Button from './Button';
import classNames from 'classnames';
import ScaleInOut from './gsap/ScaleInOut';

export default function HeaderBasic({
    title,
    wysiwyg,
    button,
    className
}) {
    return (
        <>
            {
                title &&
                <section className={classNames('u-spacing--responsive', styles['c-headerBasic'], styles[className])}>
                    <div className="o-container">
                        <div className={classNames('u-text--center', styles['c-headerBasic__row'])}>
                            <div className="o-wysiwyg">
                                <h1>{title}</h1>
                                <p>{wysiwyg}</p>
                            </div>
                            {button &&
                                <ScaleInOut delay={1}>
                                    <Button
                                        label={button.label}
                                        href={button.href}
                                        isExternal={button.isExternal}
                                        externalHref={button.externalHref}
                                        anchor={button.anchor}
                                        onClick={button.onClick}
                                        className={button.className}
                                        wrapperClassName={styles['c-headerBasic__btn']}
                                    />
                                </ScaleInOut>
                            }
                        </div>
                    </div>
                </section>
            }
        </>
    );
}