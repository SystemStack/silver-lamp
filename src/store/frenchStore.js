import { distance } from "./jaroWinkler";
import french from "./french.json";

const randomIndex = () => Math.floor(Math.random() * french.length);

export const frenchStore = {
  byId: (idx) => french[idx],
  semiRandomIndex: (contains = (_idx) => false) => {
    let newIdx = randomIndex();
    while (
      french[newIdx].english === french[newIdx].french ||
      contains(newIdx)
    ) {
      newIdx = randomIndex();
    }
    return newIdx;
  },
  highEnough: (idx, userInput) => {
    const obj = french[idx].english;
    let result = false;
    if (obj !== undefined) {
      const english = obj.split(/[,;]+/);
      userInput = userInput.trim();
      for (let e of english) {
        e = e.trim();
        if (distance(e, userInput) > 0.97) {
          result = true;
        }
      }
    }
    return result;
  },
};