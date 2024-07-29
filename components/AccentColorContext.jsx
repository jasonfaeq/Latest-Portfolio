"use client";
import React, { createContext, useState, useContext } from "react";

const AccentColorContext = createContext();

export const useAccentColor = () => useContext(AccentColorContext);

export const AccentColorProvider = ({ children }) => {
  const [accentColor, setAccentColor] = useState("text-accent");

  const toggleAccentColor = () => {
    setAccentColor((prevColor) =>
      prevColor === "text-accent" ? "text-accentalt" : "text-accent"
    );
  };

  return (
    <AccentColorContext.Provider value={{ accentColor, toggleAccentColor }}>
      {children}
    </AccentColorContext.Provider>
  );
};
