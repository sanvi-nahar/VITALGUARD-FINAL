document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username") || "User";
    const greetingEl = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greeting = "Hello";
  
    if (hour >= 5 && hour < 12) greeting = "Good Morning";
    else if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
    else if (hour >= 17 && hour < 21) greeting = "Good Evening";
  
    greetingEl.textContent = `${greeting}, ${username}!`;
  
    const data = JSON.parse(localStorage.getItem("vitalguard_data")) || {
      vitals: {
        heartRate: "72 bpm",
        respiration: "16 breaths/min",
        bloodPressure: "120/80 mmHg",
        temperature: "98.6°F",
        stressLevel: "Low"
      },
      activity: {
        steps: "4320",
        sleep: "6.5 hrs",
        calories: "210 kcal"
      },
      lifestyle: {
        meal: "12:30 PM",
        hydration: "In 20 min",
        stretch: "3:00 PM"
      },
      insights: [
        "Heart rate improved by 5%",
        "You moved more than yesterday!"
      ],
      history: {
        medication: "10 April",
        visit: "22 March"
      },
      checkups: {
        nextAppointment: "18 April",
        location: "Apollo Clinic, Indore"
      }
    };
  
    document.getElementById("heart-rate").textContent = data.vitals.heartRate;
    document.getElementById("respiration").textContent = data.vitals.respiration;
    document.getElementById("blood-pressure").textContent = data.vitals.bloodPressure;
    document.getElementById("temperature").textContent = data.vitals.temperature;
    document.getElementById("stress-level").textContent = data.vitals.stressLevel;
  
    document.getElementById("steps").textContent = data.activity.steps;
    document.getElementById("sleep").textContent = data.activity.sleep;
    document.getElementById("calories").textContent = data.activity.calories;
  
    document.getElementById("meal-time").textContent = data.lifestyle.meal;
    document.getElementById("hydration").textContent = data.lifestyle.hydration;
    document.getElementById("stretch-break").textContent = data.lifestyle.stretch;
  
    const insightsList = document.getElementById("insights-list");
    insightsList.innerHTML = "";
    data.insights.forEach(insight => {
      const li = document.createElement("li");
      li.textContent = insight;
      insightsList.appendChild(li);
    });
  
    document.getElementById("last-medication").textContent = data.history.medication;
    document.getElementById("last-visit").textContent = data.history.visit;
  
    document.getElementById("next-appointment").textContent = data.checkups.nextAppointment;
    document.getElementById("appointment-location").textContent = data.checkups.location;
  
    document.getElementById("sos-button").addEventListener("click", () => {
      alert("SOS Activated! Emergency services have been notified.");
      document.getElementById("sos-button").classList.add("active");
    });
  
    // Date Picker Event
    document.getElementById("date-picker").addEventListener("change", (e) => {
      const selectedDate = e.target.value;
      console.log("Selected date:", selectedDate);
      // Future integration: Fetch backend data based on selected date
    });
  
    // Refresh Button Event
    document.getElementById("refresh-btn").addEventListener("click", () => {
      console.log("Refreshing data...");
      // Future integration: Refresh data from backend
    });
  });
  function toggleCheckups() {
    var moreCheckups = document.getElementById('more-checkups');
    if (moreCheckups.style.display === 'none') {
      moreCheckups.style.display = 'block';
    } else {
      moreCheckups.style.display = 'none';
    }
  }  
