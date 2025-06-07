// Wait untill the full HTML document has been completely parsed before running any JS
document.addEventListener("DOMContentLoaded", function () {

    // Select all blocks that use the data-block-id attribute
  document.querySelectorAll('[data-block-id]').forEach(function (block) {

    // Within each block, find the toggle button using the custom data attribute 
    const toggleButton = block.querySelector('[data-toggle-button]');
    // Find the section of content that should be shown or hidden
    const content = block.querySelector('[data-toggle-content]');

    if (toggleButton && content) {   
      toggleButton.addEventListener("click", function () {
        // Check the visibility state of the content
        const isHidden = content.style.display === "none";

        // Toggle the visibility 
        // If the content is hidden, show it; if it's visible, hide it
        content.style.display = isHidden ? "block" : "none";

        // Update the text of the button to reflect the visibility state 
        toggleButton.textContent = isHidden ? "Hide" : "Show";
      });
    }
  });
});
