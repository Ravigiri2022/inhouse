function calculateAmount() {
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const ratePerMinute = 2; // Example rate per minute
  
    if (startTime && endTime) {
      const start = new Date(startTime);
      const end = new Date(endTime);
  
      // Calculate the time difference in milliseconds
      const timeDifference = end - start;
  
      if (timeDifference > 0) {
        // Convert the time difference to minutes
        const timeDifferenceInMinutes = timeDifference / (1000 * 60);
  
        // Calculate the total amount
        const totalAmount = timeDifferenceInMinutes * ratePerMinute;
  
        alert(`Total Amount: ₹${totalAmount.toFixed(2)}`);
      } else {
        alert('End time must be after start time.');
      }
    } else {
      alert('Please enter both start time and end time.');
    }
  }
  