import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);

    colorMode === "dark"
      ? document.getElementById('theRootHTML')!.dataset.theme = "dark"
      : document.getElementById('theRootHTML')!.dataset.theme = "light";
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
