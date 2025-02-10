async function main() {
  async function handleCC(event) {
    event.preventDefault();

    const url = "https://spangled-polydactyl-pound.glitch.me";
    const formData = new FormData(document.querySelector("#ccForm"));
    const text = formData.get("text");

    const box = document.querySelector("#box");

    // #loading 로딩을 추가했다가...
    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    document.querySelector("#box").appendChild(spinner);

    // document.querySelector("#box").textContent = "눌렀네용!";
    console.log(text);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          text,
        }),
        headers: {
          "Content-Type": "Application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      //   box.textContent = JSON.stringify(json);
      //   box.textContent = json.text;

      const { image, desc } = json;

      const box = document.querySelector("#box");
      box.innerHTML = "";
      const imageTag = document.createElement("img");
      imageTag.classList.add("img-fluid");
      imageTag.src = image; // image - link
      const descTag = document.createElement("p");
      descTag.textContent = desc;
      box.appendChild(imageTag);
      box.appendChild(descTag);
    } catch (error) {
      console.error("Error fetching data:", error);
      box.textContent = "Error: Could not fetch data.";
    } finally {
      // 로딩을 추가했다가 종료시 없애는...
      spinner.remove();
    }
  }

  document.querySelector("#ccForm").addEventListener("submit", handleCC);
}

document.addEventListener("DOMContentLoaded", main);
