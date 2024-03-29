import { useRef, useState } from "react";

export const useBoolean = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    toggle: () => setValue((oldValue) => !oldValue),
    on: () => setValue(true),
    off: () => setValue(false),
  });

  return [value, updateValue.current];
};
