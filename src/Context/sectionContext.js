import React, { createContext, useState } from "react";

export const SectionContext = createContext();

const SectionProvider = ({ children }) => {
    const [section, setSection] = useState("home");

    const sectionContext = {
        section,
        setSection,
    };

    return (
        <SectionContext.Provider value={sectionContext}>
            {children}
        </SectionContext.Provider>
    );
};

export default SectionProvider;