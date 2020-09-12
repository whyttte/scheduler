import { useState } from 'react'

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace) {
    setMode(newMode);
    if (replace) {
      setHistory(prev => [prev[0]]);
    }
    setHistory(prev => [...prev, newMode]);
  }
  
  // Set a previous mode and removes the last one from the history
  const back = function () {
    history.pop();
    if (history.length > 0) {
      const prevMode = history[history.length - 1]
      setMode(prevMode);
    }
  }
  return {mode, transition, back}
}