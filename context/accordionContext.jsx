import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const AccordionContext = createContext({
    items: null,
    setItem: () => {},
    deleteItem: () => {},
    toggle: () => {}
});

const updateItem = (id, expanded, timeline, latestItems, setItems) => {
    const itemsMap = new Map(latestItems.current);

    itemsMap.set(id, {expanded, timeline});
    setItems(itemsMap);
    latestItems.current = itemsMap;
};

const updateHeightTransition = (timeline) => {
    timeline.current.reversed(!timeline.current.reversed()).then(() => {
        ScrollTrigger.refresh(true);
    });
}

export function AccordionContextProvider({ children, allowMultiple }) {
    const [items, setItems] = useState(new Map());
    const latestItems = useRef(items);

    const setItem = useCallback((id, expanded, timeline) => {
        updateItem(id, expanded, timeline, latestItems, setItems);
        if (expanded) updateHeightTransition(timeline);
    }, [setItems]);

    const deleteItem = useCallback((id) => {
        const newItemsMap = new Map(latestItems.current);

        if (newItemsMap.delete(id)) {
            setItems(newItemsMap);
            latestItems.current = newItemsMap;
            return true;
        }
        return false;
    }, []);

    const toggle = (id, expanded, timeline) => {
        const itemObj = latestItems.current.get(id);

        if (!itemObj) {
            process.env.NODE_ENV !== 'production' &&
            console.error(`[AccordionItem] invalid key: ${key}`);
            return;
        }

        if (typeof expanded !== 'boolean') expanded = !itemObj.expanded;

        if (expanded) {
            updateItem(id, expanded, timeline, latestItems, setItems);
            updateHeightTransition(timeline);
            !allowMultiple &&
            latestItems.current.forEach(({ expanded, timeline }, _id) => _id !== id && expanded && toggle(_id, false, timeline));
        } else {
            updateItem(id, expanded, timeline, latestItems, setItems);
            updateHeightTransition(timeline);
        }
    };

    return (
        <AccordionContext.Provider
            value={{
                items,
                setItem,
                deleteItem,
                toggle
            }}
        >
            {children}
        </AccordionContext.Provider>
    );
};

export function useAccordionContext() {
    const context = useContext(AccordionContext);

    if (process.env.NODE_ENV !== 'production' && !context.items)
        throw new Error(
            'AccordionItem must be used within an Accordion'
        );

    return context;
}

export default function useAccordionItem({ id, timeline, initialExpanded }) {
    const {
        items,
        setItem,
        deleteItem,
        toggle
    } = useAccordionContext();

    const currentItem = items.get(id);
    const initialState = initialExpanded ? initialExpanded : false;

    useEffect(() => {
        setItem(id, initialState, timeline);
        return () => deleteItem(id);
    }, [setItem, deleteItem, id]);

    return {
        expanded: currentItem ? currentItem.expanded : false,
        toggle: (expanded) => toggle(id, expanded, timeline)
    };
}