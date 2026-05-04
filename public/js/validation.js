function validateLogin() {
   const username = document.getElementById("username").value.trim();
   const password = document.getElementById("password").value.trim();

   if (username === "" || password === "") {
      alert("Username and password are required.");
      return false;
   }

   return true;
}

function validateRecordForm() {
   const category = document.getElementById("category").value.trim();
   const amount = document.getElementById("amount").value.trim();
   const recordDate = document.getElementById("record_date").value;

   if (category === "") {
      alert("Category is required.");
      return false;
   }

   if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
      alert("Amount must be a valid number greater than 0.");
      return false;
   }

   if (recordDate === "") {
      alert("Date is required.");
      return false;
   }

   return true;
}
