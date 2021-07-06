import { useEffect } from 'react'

// function to create event using useEffect
const useWindowEvent = (event: any, callback: any, capture: boolean) => {
  useEffect(() => {
    window.addEventListener(event, callback, { passive: capture })
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

// call useWindowEvent to create needed event and export
export const useGlobalMouseUp = (callback: Function) => {
  return useWindowEvent('mouseup', callback, true)
}

export const useGlobalScroll = (callback: Function) => {
  return useWindowEvent('scroll', callback, true)
}
