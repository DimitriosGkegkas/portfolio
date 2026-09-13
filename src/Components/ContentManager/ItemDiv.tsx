import { type FC, type ReactNode } from "react";

interface ItemDivProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export const ItemDiv: FC<ItemDivProps> = ({ children, className = "project-text", offset }) => {
  void offset;

  return (
    <div className={className}>
      {children}
    </div>
  );
};
