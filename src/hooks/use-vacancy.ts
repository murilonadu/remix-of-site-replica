import { useState, useEffect } from "react";
import { vacancyStore } from "@/lib/vacancyStore";

export function useVacancy() {
  const [remaining, setRemaining] = useState(vacancyStore.getRemaining);

  useEffect(() => {
    return vacancyStore.subscribe(setRemaining);
  }, []);

  const filled = 10 - remaining;
  const percent = (filled / 10) * 100;

  return { remaining, filled, percent };
}
