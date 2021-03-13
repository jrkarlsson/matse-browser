export const SNOW = { h: 0, s: 0, l: 95 }
export const CONCRETE = { h: 0, s: 0, l: 85 }
export const KHAKI = { h: 35, s: 12, l: 72 }
export const SAND = { h: 28, s: 7, l: 52 }
export const COAL = { h: 0, s: 0, l: 15 }

export const hsla = (color, a = 1) => `hsla(${color.h}, ${color.s}%, ${color.l}%, ${a})`