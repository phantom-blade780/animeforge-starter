function enhancePrompt() {
  const prompt = document.getElementById("prompt").value;
  const enhanced = prompt + " in the style of Studio Ghibli and Makoto Shinkai, with soft lighting and dramatic clouds";
  document.getElementById("enhancedPrompt").innerText = "Enhanced Prompt: " + enhanced;
  // Here, you would normally send this to an AI API — will be connected later
}
