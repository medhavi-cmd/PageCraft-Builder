import { createContext, useContext, useEffect, useState } from "react";

const BlockContext = createContext();

export const BlockProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);

  // Restore the last editing session on first load.
  useEffect(() => {
    const saved = localStorage.getItem("blocks");
    if (saved) setBlocks(JSON.parse(saved));
  }, []);

  // Persist every block change automatically.
  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

  return (
    <BlockContext.Provider value={{ blocks, setBlocks }}>
      {children}
    </BlockContext.Provider>
  );
};

export const useBlocks = () => useContext(BlockContext);