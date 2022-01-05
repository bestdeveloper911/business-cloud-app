// Header
export const MIN_HEADER_HEIGHT = 84

// Balance
export const BALANCE_TOP = MIN_HEADER_HEIGHT
export const BALANCE_HEIGHT = 90

// Actions
export const ACTIONS_TOP = BALANCE_TOP + BALANCE_HEIGHT
export const ACTIONS_HEIGHT = 100

// Cards
export const CARDS_TOP = ACTIONS_TOP + ACTIONS_HEIGHT
export const CARDS_HEIGHT = 130

// Offset
export const ANIMATION_OFFSET = 30

// Header
export const MAX_HEADER_HEIGHT = CARDS_TOP + CARDS_HEIGHT + ANIMATION_OFFSET
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT