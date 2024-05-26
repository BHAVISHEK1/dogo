// Accordion.jsx
import { createContext, useContext, useRef, useEffect, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const AccordionContext = createContext();

export function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);
  const open = selected === value;
  const ref = useRef(null);

  return (
    <li className="border-b-2 border-black  my-5 bg-zinc-700" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex text-2xl justify-between items-center p-4 font-medium"
      >
        {trigger}
        {!open ? <FaPlus /> : <FaTimes />}
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
