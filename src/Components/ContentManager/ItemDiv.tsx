import { type FC, type ReactNode } from "react";

interface ItemDivProps {
  children: ReactNode;
  className?: string;
}

export const ItemDiv: FC<ItemDivProps> = ({ children, className = "project-text" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
