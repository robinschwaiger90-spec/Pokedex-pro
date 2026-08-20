/**
 * Haptic feedback utility using the Navigator Vibration API.
 * Safely guards for mobile devices / unsupported browsers.
 */

export const hapticFeedback = {
  /**
   * Subtle tactile bump for button taps, dpad navigation and selections.
   */
  light: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(20);
      } catch {}
    }
  },

  /**
   * Medium tactile click for confirmations.
   */
  medium: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(45);
      } catch {}
    }
  },

  /**
   * Classic Pokémon Capture Vibration pattern:
   * 3 Pokeball wiggles + 1 heavy lock-in click!
   */
  catchSuccess: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        // [wiggle 1, pause, wiggle 2, pause, wiggle 3, pause, locked in!]
        navigator.vibrate([70, 100, 70, 100, 70, 120, 220]);
      } catch {}
    }
  },

  /**
   * Team Slot Filled Vibration pattern:
   * 2 crisp pulses for party confirmation.
   */
  teamAdded: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([50, 60, 100]);
      } catch {}
    }
  },

  /**
   * Rare / Shiny / Legendary Encounter & TCG Ultra Rare pull pattern.
   */
  rareHit: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([80, 50, 80, 50, 180]);
      } catch {}
    }
  },

  /**
   * Booster Pack Rip pattern.
   */
  packRip: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([40, 30, 60, 30, 120]);
      } catch {}
    }
  },
};
