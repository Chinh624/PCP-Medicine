
import React, { useState } from "react";
import "../Explore/explore.css";
const ExploreMedicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const medicineData = [
    { id: 1, name: "Ly", image: "medicine1.jpg", description: "Description " },
    { id: 2, name: "picture medicine", image: "medicine2.jpg", description: "Description " },
    { id: 3, name: "picture medicine", image: "medicine3.jpg", description: "Description " },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const openModal = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const closeModal = () => {
    setSelectedMedicine(null);
  };

  return (
    <div className="body-explore">
      <div className="header-explore">
        <h1>Explore Medicine - PCP Medicine </h1>
      </div>

      <div className="search-container">
        <input type="" className="search-input" placeholder="Search for a medicine..." onChange={handleSearch} />
      </div>

      <section className="explore-section">
        {medicineData
          .filter((medicine) => medicine.name.toLowerCase().includes(searchTerm))
          .map((medicine) => (
            <div className="medicine-card" key={medicine.id} onClick={() => openModal(medicine)}>
              <img src={medicine.image} alt={medicine.name} />
              <h2>{medicine.name}</h2>
              <p>{medicine.description}</p>
            </div>
          ))}
      </section>

      {selectedMedicine && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedMedicine.name}</h2>
            <img src={selectedMedicine.image} alt={selectedMedicine.name} />
            <p>{selectedMedicine.description}</p>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default ExploreMedicine;
