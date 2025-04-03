
    let plants = [
        {
          id: 1,
          name: "light yagami",
          type: "Succulent",
          svgCode: `
                    <svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
                        <!-- Pot -->
                        <rect x="30" y="110" width="40" height="30" fill="#e57373" />
                        <rect x="25" y="110" width="50" height="5" fill="#c62828" />
                        
                        <!-- Soil -->
                        <rect x="30" y="110" width="40" height="5" fill="#3e2723" />
                        
                        <!-- Plant -->
                        <ellipse cx="50" cy="90" rx="20" ry="10" fill="#66bb6a" />
                        <ellipse cx="50" cy="80" rx="15" ry="8" fill="#4caf50" />
                        <ellipse cx="50" cy="70" rx="10" ry="6" fill="#43a047" />
                        <ellipse cx="50" cy="60" rx="8" ry="5" fill="#388e3c" />
                    </svg>
                `,
          wateringInterval: 14 * 24 * 60 * 60 * 1000, // 14 days in milliseconds
          lastWatered: new Date(2023, 2, 26).getTime(), // March 26
          nextWatering:
            new Date(2023, 2, 26).getTime() + 14 * 24 * 60 * 60 * 1000,
        },
        {
          id: 2,
          name: "snakey",
          type: "Snake Plant",
          svgCode: `
                    <svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
                        <!-- Pot -->
                        <rect x="30" y="110" width="40" height="30" fill="#b87333" />
                        <rect x="25" y="110" width="50" height="5" fill="#8b4513" />
                        
                        <!-- Soil -->
                        <rect x="30" y="110" width="40" height="5" fill="#3e2723" />
                        
                        <!-- Plant Leaves -->
                        <rect x="48" y="50" width="4" height="60" fill="#2e7d32" />
                        <rect x="40" y="55" width="4" height="55" fill="#388e3c" />
                        <rect x="56" y="55" width="4" height="55" fill="#388e3c" />
                        <rect x="32" y="60" width="4" height="50" fill="#2e7d32" />
                        <rect x="64" y="60" width="4" height="50" fill="#2e7d32" />
                        
                        <!-- Leaf Highlights -->
                        <rect x="49" y="50" width="1" height="60" fill="#4caf50" />
                        <rect x="41" y="55" width="1" height="55" fill="#4caf50" />
                        <rect x="57" y="55" width="1" height="55" fill="#4caf50" />
                        <rect x="33" y="60" width="1" height="50" fill="#4caf50" />
                        <rect x="65" y="60" width="1" height="50" fill="#4caf50" />
                    </svg>
                `,
          wateringInterval: 10 * 24 * 60 * 60 * 1000, // 10 days in milliseconds
          lastWatered: new Date(2023, 2, 16).getTime(), // March 16
          nextWatering:
            new Date(2023, 2, 16).getTime() + 10 * 24 * 60 * 60 * 1000,
        },
        {
          id: 3,
          name: "obama",
          type: "Monstera",
          svgCode: `
                    <svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
                        <!-- Pot -->
                        <rect x="30" y="110" width="40" height="30" fill="#00bcd4" />
                        <rect x="25" y="110" width="50" height="5" fill="#0097a7" />
                        
                        <!-- Soil -->
                        <rect x="30" y="110" width="40" height="5" fill="#3e2723" />
                        
                        <!-- Stem -->
                        <rect x="48" y="70" width="4" height="40" fill="#33691e" />
                        
                        <!-- Leaves -->
                        <path d="M50,70 L30,50 L35,45 L50,60 L65,45 L70,50 Z" fill="#2e7d32" />
                        <path d="M50,80 L25,60 L30,55 L50,70 L70,55 L75,60 Z" fill="#388e3c" />
                        <path d="M50,90 L20,70 L25,65 L50,80 L75,65 L80,70 Z" fill="#43a047" />
                    </svg>
                `,
          wateringInterval: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
          lastWatered: new Date(2023, 2, 20).getTime(), // March 20
          nextWatering:
            new Date(2023, 2, 20).getTime() + 7 * 24 * 60 * 60 * 1000,
        },
      ];

      // Plant SVG templates
      const plantSvgTemplates = [
        // Snake Plant (default)
        `
            <svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
                <!-- Pot -->
                <rect x="30" y="110" width="40" height="30" fill="#b87333" />
                <rect x="25" y="110" width="50" height="5" fill="#8b4513" />
                
                <!-- Soil -->
                <rect x="30" y="110" width="40" height="5" fill="#3e2723" />
                
                <!-- Plant Leaves -->
                <rect x="48" y="50" width="4" height="60" fill="#2e7d32" />
                <rect x="40" y="55" width="4" height="55" fill="#388e3c" />
                <rect x="56" y="55" width="4" height="55" fill="#388e3c" />
                <rect x="32" y="60" width="4" height="50" fill="#2e7d32" />
                <rect x="64" y="60" width="4" height="50" fill="#2e7d32" />
                
                <!-- Leaf Highlights -->
                <rect x="49" y="50" width="1" height="60" fill="#4caf50" />
                <rect x="41" y="55" width="1" height="55" fill="#4caf50" />
                <rect x="57" y="55" width="1" height="55" fill="#4caf50" />
                <rect x="33" y="60" width="1" height="50" fill="#4caf50" />
                <rect x="65" y="60" width="1" height="50" fill="#4caf50" />
            </svg>
            `,
        // Succulent
        `
            <svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
                <!-- Pot -->
                <rect x="30" y="110" width="40" height="30" fill="#9c27b0" />
                <rect x="25" y="110" width="50" height="5" fill="#7b1fa2" />
                
                <!-- Soil -->
                <rect x="30" y="110" width="40" height="5" fill="#3e2723" />
                
                <!-- Plant -->
                <ellipse cx="50" cy="90" rx="20" ry="10" fill="#66bb6a" />
                <ellipse cx="50" cy="80" rx="15" ry="8" fill="#4caf50" />
                <ellipse cx="50" cy="70" rx="10" ry="6" fill="#43a047" />
                <ellipse cx="50" cy="60" rx="8" ry="5" fill="#388e3c" />
            </svg>
            `,
        // Monstera
        `
            <svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
                <!-- Pot -->
                <rect x="30" y="110" width="40" height="30" fill="#00bcd4" />
                <rect x="25" y="110" width="50" height="5" fill="#0097a7" />
                
                <!-- Soil -->
                <rect x="30" y="110" width="40" height="5" fill="#3e2723" />
                
                <!-- Stem -->
                <rect x="48" y="70" width="4" height="40" fill="#33691e" />
                
                <!-- Leaves -->
                <path d="M50,70 L30,50 L35,45 L50,60 L65,45 L70,50 Z" fill="#2e7d32" />
                <path d="M50,80 L25,60 L30,55 L50,70 L70,55 L75,60 Z" fill="#388e3c" />
                <path d="M50,90 L20,70 L25,65 L50,80 L75,65 L80,70 Z" fill="#43a047" />
            </svg>
            `,
      ];

      // Check if we have saved plants in localStorage
      const savedPlants = localStorage.getItem("plants");
      if (savedPlants) {
        plants = JSON.parse(savedPlants);
      } else {
        // Save the default plants
        localStorage.setItem("plants", JSON.stringify(plants));
      }

      let currentPlantIndex = 0;
      let currentView = "grid"; // 'grid' or 'detail'

      // DOM elements
      const plantNameElement = document.getElementById("plantName");
      const lastWateredElement = document.getElementById("lastWatered");
      const countdownElement = document.getElementById("countdown");
      const waterButton = document.getElementById("waterButton");
      const plantListElement = document.getElementById("plantList");
      const toggleFormButton = document.getElementById("toggleForm");
      const addPlantForm = document.getElementById("addPlantForm");
      const newPlantNameInput = document.getElementById("newPlantName");
      const plantTypeInput = document.getElementById("plantType");
      const wateringIntervalSelect =
        document.getElementById("wateringInterval");
      const addPlantButton = document.getElementById("addPlantButton");
      const currentPlantSvg = document.getElementById("currentPlantSvg");
      const plantGridElement = document.getElementById("plantGrid");
      const plantDetailViewElement = document.getElementById("plantDetailView");
      const gridViewBtn = document.getElementById("gridViewBtn");
      const detailViewBtn = document.getElementById("detailViewBtn");

      // Toggle view buttons
      gridViewBtn.addEventListener("click", () => {
        setView("grid");
      });

      detailViewBtn.addEventListener("click", () => {
        setView("detail");
      });

      // Set the current view
      function setView(view) {
        currentView = view;

        if (view === "grid") {
          plantGridElement.style.display = "grid";
          plantDetailViewElement.style.display = "none";
          gridViewBtn.classList.add("active");
          detailViewBtn.classList.remove("active");
        } else {
          plantGridElement.style.display = "none";
          plantDetailViewElement.style.display = "block";
          gridViewBtn.classList.remove("active");
          detailViewBtn.classList.add("active");
        }
      }

      // Toggle add plant form
      toggleFormButton.addEventListener("click", () => {
        addPlantForm.style.display =
          addPlantForm.style.display === "block" ? "none" : "block";
      });

      // Add new plant
      addPlantButton.addEventListener("click", () => {
        const name = newPlantNameInput.value.trim();
        if (!name) {
          alert("Please enter a plant name");
          return;
        }

        const type = plantTypeInput.value.trim() || "Unknown";
        const intervalDays = parseInt(wateringIntervalSelect.value);
        const intervalMs = intervalDays * 24 * 60 * 60 * 1000;
        const now = Date.now();

        // Randomly select a plant SVG template
        const randomSvgIndex = Math.floor(
          Math.random() * plantSvgTemplates.length
        );

        const newPlant = {
          id: Date.now(), // Use timestamp as ID
          name: name,
          type: type,
          svgCode: plantSvgTemplates[randomSvgIndex],
          wateringInterval: intervalMs,
          lastWatered: now,
          nextWatering: now + intervalMs,
        };

        plants.push(newPlant);
        savePlants();
        renderPlantList();
        renderPlantGrid();

        // Switch to the new plant if in detail view
        currentPlantIndex = plants.length - 1;
        updateCurrentPlant();

        // Reset form
        newPlantNameInput.value = "";
        plantTypeInput.value = "";
        addPlantForm.style.display = "none";
      });

      // Water plant from detail view
      waterButton.addEventListener("click", () => {
        waterPlant(currentPlantIndex);
      });

      // Water a plant
      function waterPlant(index) {
        const now = Date.now();
        plants[index].lastWatered = now;
        plants[index].nextWatering = now + plants[index].wateringInterval;
        savePlants();

        if (currentView === "detail") {
          updateCurrentPlant();
        }

        renderPlantGrid();
      }

      // Format time difference for display
      function formatTimeDiff(targetTime) {
        const now = Date.now();
        let diff = targetTime - now;

        // If time has passed, show 0
        if (diff < 0) {
          return "WATER NOW!";
        }

        // Convert to seconds
        diff = Math.floor(diff / 1000);

        const days = Math.floor(diff / (24 * 60 * 60));
        diff -= days * 24 * 60 * 60;

        const hours = Math.floor(diff / (60 * 60));
        diff -= hours * 60 * 60;

        const minutes = Math.floor(diff / 60);
        diff -= minutes * 60;

        const seconds = diff;

        return `WATER IN ${days}d ${hours}h ${minutes}m ${seconds}s`;
      }

      // Format days until next watering
      function formatDaysUntil(targetTime) {
        const now = Date.now();
        let diff = targetTime - now;

        // If time has passed, show "Water now!"
        if (diff < 0) {
          return "Water now!";
        }

        // Convert to days
        const days = Math.ceil(diff / (24 * 60 * 60 * 1000));
        return `${days} day${days !== 1 ? "s" : ""}`;
      }

      // Format date for display
      function formatDate(timestamp) {
        const date = new Date(timestamp);
        const month = date.toLocaleString("default", { month: "short" });
        const day = date.getDate();
        return `${month} ${day}`;
      }

      // Format "time ago" for last watered
      function timeAgo(timestamp) {
        const now = Date.now();
        const diff = now - timestamp;

        // Less than a minute
        if (diff < 60 * 1000) {
          return "just now";
        }

        // Less than an hour
        if (diff < 60 * 60 * 1000) {
          const minutes = Math.floor(diff / (60 * 1000));
          return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
        }

        // Less than a day
        if (diff < 24 * 60 * 60 * 1000) {
          const hours = Math.floor(diff / (60 * 60 * 1000));
          return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
        }

        // Days
        const days = Math.floor(diff / (24 * 60 * 60 * 1000));
        return `${days} day${days !== 1 ? "s" : ""} ago`;
      }

      // Update the current plant display
      function updateCurrentPlant() {
        const plant = plants[currentPlantIndex];

        plantNameElement.textContent = plant.name;
        lastWateredElement.textContent = `LAST WATERED ${timeAgo(
          plant.lastWatered
        )}`;
        countdownElement.textContent = formatTimeDiff(plant.nextWatering);
        currentPlantSvg.innerHTML = plant.svgCode;

        // Highlight the current plant in the list
        const plantOptions = document.querySelectorAll(".plant-option");
        plantOptions.forEach((option, index) => {
          if (index === currentPlantIndex) {
            option.classList.add("active");
          } else {
            option.classList.remove("active");
          }
        });
      }

      // Render the plant list for detail view
      function renderPlantList() {
        plantListElement.innerHTML = "";

        plants.forEach((plant, index) => {
          const plantOption = document.createElement("div");
          plantOption.className = `plant-option ${
            index === currentPlantIndex ? "active" : ""
          }`;

          const plantSvgContainer = document.createElement("div");
          plantSvgContainer.innerHTML = plant.svgCode;
          const plantSvg = plantSvgContainer.firstElementChild;
          plantSvg.setAttribute("width", "40");
          plantSvg.setAttribute("height", "60");

          const plantName = document.createElement("div");
          plantName.textContent = plant.name;
          plantName.style.fontSize = "10px";

          plantOption.appendChild(plantSvg);
          plantOption.appendChild(plantName);

          plantOption.addEventListener("click", () => {
            currentPlantIndex = index;
            updateCurrentPlant();
          });

          plantListElement.appendChild(plantOption);
        });
      }

      // Render the plant grid
      function renderPlantGrid() {
        plantGridElement.innerHTML = "";

        plants.forEach((plant, index) => {
          const plantCard = document.createElement("div");
          plantCard.className = "plant-card";

          const plantSvgContainer = document.createElement("div");
          plantSvgContainer.className = "plant-card-image";
          plantSvgContainer.innerHTML = plant.svgCode;

          const plantName = document.createElement("div");
          plantName.className = "plant-card-name";
          plantName.textContent = plant.name;

          const plantType = document.createElement("div");
          plantType.className = "plant-card-type";
          plantType.textContent = plant.type;

          const plantInfo = document.createElement("div");
          plantInfo.className = "plant-card-info";

          const lastWatered = document.createElement("div");
          lastWatered.className = "plant-card-last";
          lastWatered.innerHTML = `
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="#8a7b99"/>
                    </svg>
                    Last: ${formatDate(plant.lastWatered)}
                `;

          const daysUntil = document.createElement("div");
          daysUntil.className = "plant-card-days";
          daysUntil.innerHTML = `
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#8a7b99" stroke-width="2" fill="none"/>
                        <path d="M12 6v6l4 2" stroke="#8a7b99" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    ${formatDaysUntil(plant.nextWatering)}
                `;

          plantInfo.appendChild(lastWatered);
          plantInfo.appendChild(daysUntil);

          const plantActions = document.createElement("div");
          plantActions.className = "plant-card-actions";

          const logsButton = document.createElement("button");
          logsButton.className = "btn btn-logs";
          logsButton.innerHTML = `
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" stroke="#8a7b99" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    logs
                `;
          logsButton.addEventListener("click", (e) => {
            e.stopPropagation();
            // Show logs functionality can be added here
            alert(`Logs for ${plant.name} will be shown here`);
          });

          const waterButton = document.createElement("button");
          waterButton.className = "btn btn-water";
          waterButton.innerHTML = `
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="white"/>
                    </svg>
                    water
                `;
          waterButton.addEventListener("click", (e) => {
            e.stopPropagation();
            waterPlant(index);
          });

          plantActions.appendChild(logsButton);
          plantActions.appendChild(waterButton);

          plantCard.appendChild(plantSvgContainer);
          plantCard.appendChild(plantName);
          plantCard.appendChild(plantType);
          plantCard.appendChild(plantInfo);
          plantCard.appendChild(plantActions);

          // Make the whole card clickable to switch to detail view
          plantCard.addEventListener("click", () => {
            currentPlantIndex = index;
            updateCurrentPlant();
            setView("detail");
          });

          plantGridElement.appendChild(plantCard);
        });
      }

      // Save plants to localStorage
      function savePlants() {
        localStorage.setItem("plants", JSON.stringify(plants));
      }

      // Update countdown timer every second
      function updateCountdown() {
        if (plants.length > 0) {
          if (currentView === "detail") {
            countdownElement.textContent = formatTimeDiff(
              plants[currentPlantIndex].nextWatering
            );
            lastWateredElement.textContent = `LAST WATERED ${timeAgo(
              plants[currentPlantIndex].lastWatered
            )}`;
          }
        }
      }

      // Initialize
      renderPlantList();
      renderPlantGrid();
      updateCurrentPlant();
      setView("grid"); // Start with grid view
      setInterval(updateCountdown, 1000);

