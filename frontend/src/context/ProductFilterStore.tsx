// TagContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type TagContextType = {
  selectedTag: string;
  handleTagClick: (tag: string) => void;
};

const TagContext = createContext<TagContextType | undefined>(undefined);

type TagProviderProps = {
  children: ReactNode;
};

export function TagProvider({ children }: TagProviderProps) {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <TagContext.Provider value={{ selectedTag, handleTagClick }}>
      {children}
    </TagContext.Provider>
  );
}

export function useTagContext() {
  const context = useContext(TagContext);
  if (!context) {
    throw new Error("useTagContext must be used within a TagProvider");
  }
  return context;
}
