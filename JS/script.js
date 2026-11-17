const CAT_URL = "https://catfact.ninja/fact";
  
async function getCatFact() {
  try {
    const response = await fetch(CAT_URL);
    if (!response.ok) {
      throw new Error("Request failed");    
    }
    const data = await response.json();

    document.querySelector("#cat-text").textContent = data.fact;

    if(data.fact.length < 140) {
      document.querySelector("#cat-text").className = "short-text";
    } else {
      document.querySelector("#cat-text").className = "long-text";
    }

  } catch (error) {
    console.error("Error fetching cat fact:", error);
  }}

  getCatFact();

  document.querySelector("#fact-btn").addEventListener("click", getCatFact);