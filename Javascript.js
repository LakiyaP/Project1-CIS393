function refreshDashboard() {
  const revenues = ["$4,850", "$5,120", "$4,960", "$5,430"];
  const hours = ["162 hrs", "171 hrs", "158 hrs", "176 hrs"];
  const bookings = ["27", "31", "29", "34"];
  const customers = ["68%", "72%", "70%", "74%"];

  const randomIndex = Math.floor(Math.random() * revenues.length);

  document.getElementById("weeklyRevenue").textContent = revenues[randomIndex];
  document.getElementById("laborHours").textContent = hours[randomIndex];
  document.getElementById("todayBookings").textContent = bookings[randomIndex];
  document.getElementById("returningCustomers").textContent = customers[randomIndex];
}

function updateMetrics() {
  const period = document.getElementById("timePeriod").value;

  const revenueMetric = document.getElementById("revenueMetric");
  const laborMetric = document.getElementById("laborMetric");
  const bookingMetric = document.getElementById("bookingMetric");
  const customerMetric = document.getElementById("customerMetric");

  if (period === "week") {
    revenueMetric.textContent = "$4,850";
    laborMetric.textContent = "81%";
    bookingMetric.textContent = "96";
    customerMetric.textContent = "68%";
  } else if (period === "month") {
    revenueMetric.textContent = "$19,400";
    laborMetric.textContent = "84%";
    bookingMetric.textContent = "410";
    customerMetric.textContent = "71%";
  } else if (period === "quarter") {
    revenueMetric.textContent = "$58,200";
    laborMetric.textContent = "86%";
    bookingMetric.textContent = "1,180";
    customerMetric.textContent = "74%";
  }
}

function validateLoginForm() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const loginMessage = document.getElementById("loginMessage");

  if (email === "" || password === "") {
    loginMessage.textContent = "Please enter both email and password.";
    loginMessage.style.color = "red";
    return false;
  }

  loginMessage.textContent = "Login submitted. Back-end functionality will be added later.";
  loginMessage.style.color = "green";
  return false;
}