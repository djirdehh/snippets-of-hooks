import React, { useState, useEffect, useRef, ReactNode } from "react";
import { MdInfo } from "react-icons/md";

import "./styles/TextPopover.css";

interface Props {
  message: string | ReactNode;
  children: ReactNode;
}

export const TextPopover = ({ message, children }: Props) => {
  const [popoverVisible, togglePopover] = useState(false);
  const wrapperRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef == null || wrapperRef.current == null) {
        return;
      }

      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        togglePopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const text = <span onClick={() => togglePopover(!popoverVisible)}>{children}</span>;

  const popover = popoverVisible ? (
    <div className="text-popover" ref={wrapperRef}>
      <MdInfo color="#3c4fe0" size={22} />
      <p>{message}</p>
    </div>
  ) : null;

  return (
    <div className="text-popover-container">
      {text}
      {popover}
    </div>
  );
};
