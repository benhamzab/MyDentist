// Initialize materials in localStorage if not present
const fixedMaterials = [
  "Fluoride Gel and Varnish",
  "Unnamed Material",
  "Dental Sealants",
  "Composite Resins",
  "Bonding Agents",
  "Dental Amalgam",
  "Disposable Gloves",
  "Surface Disinfectants",
  "Sterilization Pouches",
  "Alginate Impression Material",
  "Silicone-Based Impression Material",
  "Impression Trays",
  "Lidocaine Cartridges",
  "Topical Anesthetic Gel",
  "Dental Syringes",
  "Digital Scanners",
  "Milling Machines",
  "Design Software",
  "Temporary Crown Materials",
  "Dental Cements",
  "Crown Molds and Kits",
];

if (!localStorage.getItem("materials")) {
  const initialMaterials = fixedMaterials.map((item, index) => ({
    id: index + 1,
    name: item,
    quantity: 0, // Default quantity
    stockStatus: "Out of Stock", // Default stock status
  }));
  localStorage.setItem("materials", JSON.stringify(initialMaterials));
}

// Load materials and populate the table
function loadMaterials() {
  const materialsTable = document.getElementById("materialsTable").querySelector("tbody");
  materialsTable.innerHTML = ""; // Clear existing rows

  const materials = JSON.parse(localStorage.getItem("materials")) || [];
  materials.forEach(material => {
    const row = `
      <tr>
        <td>${material.id}</td>
        <td>${material.name}</td>
        <td>${material.quantity}</td>
        <td>${material.stockStatus}</td>
        <td>
          <button class="btn-edit" onclick="editMaterial(${material.id})"><i class="fas fa-edit"></i> Edit</button>
          <button class="btn-delete" onclick="deleteMaterial(${material.id})"><i class="fas fa-trash"></i> Delete</button>
        </td>
      </tr>
    `;
    materialsTable.innerHTML += row;
  });
}

// Edit an existing material
function editMaterial(id) {
  const materials = JSON.parse(localStorage.getItem("materials")) || [];
  const materialIndex = materials.findIndex(material => material.id === id);

  if (materialIndex === -1) {
    alert("Material not found!");
    return;
  }

  const material = materials[materialIndex];
  const newQuantity = prompt(`Enter new quantity for "${material.name}":`, material.quantity);
  const newStockStatus = prompt(`Enter new stock status (In Stock, Low Stock, Out of Stock):`, material.stockStatus);

  if (newQuantity !== null && newStockStatus !== null) {
    material.quantity = parseInt(newQuantity, 10);
    material.stockStatus = newStockStatus;
    localStorage.setItem("materials", JSON.stringify(materials));
    alert(`"${material.name}" updated successfully!`);
    loadMaterials();
  }
}

// Delete a material
function deleteMaterial(id) {
  const materials = JSON.parse(localStorage.getItem("materials")) || [];
  const updatedMaterials = materials.filter(material => material.id !== id);

  if (updatedMaterials.length === materials.length) {
    alert("Material not found!");
    return;
  }

  localStorage.setItem("materials", JSON.stringify(updatedMaterials));
  alert("Material deleted successfully!");
  loadMaterials();
}

// Load materials on page load
document.addEventListener("DOMContentLoaded", loadMaterials);
