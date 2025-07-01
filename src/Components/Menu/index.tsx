import { ReturnButton } from "./ReturnButton/ReturnButton";
import { EnterButton } from "./EnterButton/EnterButton";
import type { SpringValue } from "@react-spring/core";

export default function Menu({ state, setState, loaded, open }: { state: { open: boolean; project: string | null }; setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>; loaded: boolean; open: SpringValue<number> }) {
  return (
    <>
      {state.project && state.open && (
        <ReturnButton
          onClick={() => {
            setState((prev) => ({
              ...prev,
              project: null, // Reset project when returning to menu
            }));
          }}
        />
      )}
      {!state.open && loaded && (
        <EnterButton
          open={open}
          onClick={() => {
            setState((prev) => ({
              ...prev,
              open: true,
              project: null, // Reset project when opening the menu
            }));
          }}
        />
      )}
    </>
  );
}
