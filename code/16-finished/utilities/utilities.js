function darkenColor(hexColor, percent) {
  // Ensure percent is in the range [0, 100]
  percent = Math.max(0, Math.min(100, percent));

  // Convert hex to RGB
  let r = parseInt(hexColor.substring(1, 3), 16);
  let g = parseInt(hexColor.substring(3, 5), 16);
  let b = parseInt(hexColor.substring(5, 7), 16);

  // Calculate the adjustment value
  let adjust = (100 - percent) / 100;

  // Adjust and clamp each color component
  r = Math.floor(r * adjust);
  g = Math.floor(g * adjust);
  b = Math.floor(b * adjust);

  // Convert back to hex and return
  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
}

export { darkenColor };
