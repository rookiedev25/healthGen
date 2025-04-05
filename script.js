// script.js – Health Plan Generator with logic based on dietitian principles

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#healthForm");
  const goal = document.querySelector("#goal");
  const activity = document.querySelector("#activity");
  const details = document.querySelector("#details");
  const result = document.querySelector("#result");
  const wordCounter = document.querySelector("#wordCount");
  const MAX_WORDS = 100;

  function validateInput(input) {
    return input && input.trim().length > 0;
  }

  function countWords(text) {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word).length;
  }

  details.addEventListener("input", () => {
    const wordCount = countWords(details.value);
    wordCounter.textContent = `${wordCount}/${MAX_WORDS} words`;

    if (wordCount > MAX_WORDS) {
      wordCounter.style.color = "#e00";
    } else {
      wordCounter.style.color = "#888";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const goalVal = goal.value;
    const activityVal = activity.value;
    const detailsVal = details.value.trim();
    const wordCount = countWords(detailsVal);

    if (!validateInput(goalVal)) {
      showError(goal, "Please select a health goal.");
      return;
    }
    if (!validateInput(activityVal)) {
      showError(activity, "Please select your activity level.");
      return;
    }
    if (wordCount > MAX_WORDS) {
      showError(details, `Please limit your details to ${MAX_WORDS} words.`);
      return;
    }

    clearError(goal);
    clearError(activity);
    clearError(details);

    // Basic logic mimicking a dietitian's plan
    let plan = "";
    switch (goalVal) {
      case "weight-loss":
        plan +=
          "Low-carb, high-protein meal plan with daily cardio (30-45 mins). ";
        break;
      case "muscle-gain":
        plan +=
          "High-protein meals with complex carbs. Strength training 5x/week. ";
        break;
      case "maintain-health":
        plan +=
          "Balanced diet with portion control. Include 30 mins of moderate activity daily. ";
        break;
      default:
        plan += "Balanced nutrition plan tailored to your goals. ";
    }

    switch (activityVal) {
      case "sedentary":
        plan +=
          "Start light – 20-minute walks, stretching, and hydration awareness.";
        break;
      case "moderate":
        plan +=
          "Incorporate brisk walking, yoga, or light gym sessions 3–4x/week.";
        break;
      case "active":
        plan +=
          "Continue structured routines. Focus on sleep, recovery, and macro balance.";
        break;
    }

    if (detailsVal.length > 0) {
      plan += `\n\nNote: You mentioned - "${detailsVal}". We'll consider that in your custom plan.`;
    }

    result.innerHTML = `<h3>Your Health Plan</h3><p>${plan}</p>`;
    result.scrollIntoView({ behavior: "smooth" });
  });

  function showError(element, message) {
    element.classList.add("invalid");
    let warning = element.parentElement.querySelector(".warning");
    if (!warning) {
      warning = document.createElement("div");
      warning.className = "warning show-warning";
      element.parentElement.appendChild(warning);
    }
    warning.textContent = message;
    warning.classList.add("show-warning");
    setTimeout(() => element.classList.remove("invalid"), 600);
  }

  function clearError(element) {
    const warning = element.parentElement.querySelector(".warning");
    if (warning) warning.remove();
    element.classList.remove("invalid");
  }
});
