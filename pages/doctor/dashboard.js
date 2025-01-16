// Load data from localStorage and update charts
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from localStorage
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const secretaries = JSON.parse(localStorage.getItem("secretaries")) || [];
    const reports = JSON.parse(localStorage.getItem("reports")) || [];
  
    // Prepare data for Patients Pie Chart
    const maleCount = patients.filter(p => p.gender.toLowerCase() === "male").length;
    const femaleCount = patients.filter(p => p.gender.toLowerCase() === "female").length;
    
  
    // Patients Pie Chart
    new Chart(document.getElementById("patientsPieChart"), {
      type: "pie",
      data: {
        labels: ["Male", "Female"],
        datasets: [
          {
            data: [maleCount, femaleCount],
            backgroundColor: ["#3498db", "#e74c3c"]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Total Patients by Gender"
          }
        }
      }
    });
  
    // Prepare data for Appointments Bar Chart
    const approvedCount = appointments.filter(app => app.status === "Approved").length;
    const rejectedCount = appointments.filter(app => app.status === "Rejected").length;
    const pendingCount = appointments.filter(app => app.status === "Pending").length;
  
    // Appointments Bar Chart
    new Chart(document.getElementById("appointmentsBarChart"), {
      type: "bar",
      data: {
        labels: ["Approved", "Rejected", "Pending"],
        datasets: [
          {
            label: "Appointments",
            data: [approvedCount, rejectedCount, pendingCount],
            backgroundColor: ["#27ae60", "#e74c3c", "#f1c40f"]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Upcoming Appointments Status"
          }
        }
      }
    });
  
    // Prepare data for Secretary Column Chart
    const nurseCount = secretaries.filter(sec => sec.role === "nurse").length;
    const receptionistCount = secretaries.filter(sec => sec.role === "receptionist").length;
    const securityOfficerCount = secretaries.filter(sec => sec.role === "security officer").length;
  
    // Secretary Column Chart
    new Chart(document.getElementById("secretaryColumnChart"), {
      type: "bar",
      data: {
        labels: ["Nurse", "Receptionist", "Security Officer"],
        datasets: [
          {
            label: "Secretaries",
            data: [nurseCount, receptionistCount, securityOfficerCount],
            backgroundColor: ["#8e44ad", "#3498db", "#e67e22"]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Manage Secretaries by Role"
          }
        },
        indexAxis: "y" // Display bars as columns
      }
    });
  
    // Prepare data for Reports Line Chart
    const reportNumbers = reports.map((report, index) => ({ x: index + 1, y: report.number }));
  
    // Reports Line Chart
    new Chart(document.getElementById("reportsLineChart"), {
      type: "line",
      data: {
        datasets: [
          {
            label: "Reports",
            data: reportNumbers,
            borderColor: "#2ecc71",
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Reports Overview"
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Report Number"
            }
          },
          y: {
            title: {
              display: true,
              text: "Value"
            }
          }
        }
      }
    });
  });
  
  // Load Reports Line Chart
function loadReportsLineChart() {
    const reports = JSON.parse(localStorage.getItem("reports")) || [];
  
    // Extract data for the chart
    const dates = reports.map(report => report.date); // Extract report dates
    const counts = reports.map((_, idx) => idx + 1);  // Use the index as the count
  
    const ctx = document.getElementById("reportsLineChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Reports Over Time",
            data: counts,
            borderColor: "#2ecc71",
            fill: false,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          },
          title: {
            display: true,
            text: "Reports Overview (Line Chart)"
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date"
            }
          },
          y: {
            title: {
              display: true,
              text: "Report Count"
            }
          }
        }
      }
    });
  }
  
  // Call both loadReports and loadReportsLineChart
  document.addEventListener("DOMContentLoaded", () => {
    loadReports();
    loadReportsLineChart();
  });
  