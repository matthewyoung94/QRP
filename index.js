function showDescription(id) {
  const descriptions = document.querySelectorAll(".description");
  descriptions.forEach((desc) => desc.classList.remove("active"));

  const selectedDescription = document.getElementById(id);
  if (selectedDescription) {
    selectedDescription.classList.add("active");
  }
}

window.showDescription = showDescription;

function showTooltip(id, event) {
  var tooltip = document.getElementById("tooltip");

  switch (id) {
    case "contamination":
      tooltip.innerHTML =
        "Explore contamination risks in AI training and evaluation.";
      break;
    case "cherrypicking":
      tooltip.innerHTML =
        "Learn about cherrypicking and bias in evaluation benchmarks.";
      break;
    case "misreporting":
      tooltip.innerHTML =
        "Examine common misreporting practices in AI research, including result manipulation and misleading claims.";
      break;
    case "amplifiers":
      tooltip.innerHTML =
        "Understand how amplifiers like inductive smuggling and label noise can distort model evaluations.";
      break;
  }

  tooltip.style.display = "block";
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const pageX = event.pageX;
  const pageY = event.pageY;
  tooltip.style.left = `${pageX - tooltipWidth / 2}px`;
  tooltip.style.top = `${pageY - tooltipHeight - 10}px`;
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}

function toggleAttribution() {
  const details = document.getElementById("attribution-details");
  details.style.display = details.style.display === "none" ? "block" : "none";
}
