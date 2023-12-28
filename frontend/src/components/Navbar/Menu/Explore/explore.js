import React, { useState } from "react";
import "./explore.css";
import Data from "../../../../Database/Product.json";
import { Link } from "react-router-dom";

const ExploreMedicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
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
        <input
          type=""
          className="search-input"
          placeholder="Search for a medicine..."
          onChange={handleSearch}
        />
      </div>

      <section className="explore-section">
        {Data.product
          .filter((medicine) =>
            medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((medicine) => (
            <div
              className="medicine-card"
              key={medicine.id}
              onClick={() => openModal(medicine)}
            >
              <img src={medicine.img} alt={medicine.name} />
              <h2>{medicine.name}</h2>
              <p>{medicine.description}</p>
            </div>
          ))}
        {selectedMedicine && (
          <div className="modal">
            <div className="left-right">
              <div className="left">
                <>{selectedMedicine.name}</>
                <img
                  className="selectedMedicine-img"
                  src={selectedMedicine.img}
                  alt={selectedMedicine.name}
                />
              </div>
              <div className="right">
                <p>
                  <b>Uses:</b> {selectedMedicine.title}
                </p>
                <p>
                  <b>Subjects of use: </b>
                  {selectedMedicine.object}
                </p>
                <p>
                  <b>Form: </b>
                  {selectedMedicine.formality}
                </p>
                <p>
                  <b>Trademark: </b>
                  {selectedMedicine.trademark}
                </p>
                <p>
                  <b>Where production: </b>
                  {selectedMedicine.made}
                </p>
                <p>
                  <b>Ingredient: </b> {selectedMedicine.ingredient}
                </p>
                <p>
                  <b>Nominate: </b>
                  {selectedMedicine.allocate}
                </p>
                <div className="Container-price-button">
                  <h1 className="product-item-detail-price">
                    Price: ${selectedMedicine.price}
                  </h1>
                </div>
                <Link to="/shop" type="button" className="product-button">
                  Go to shop
                </Link>
              </div>
              <span className="close" onClick={() => setSelectedMedicine(null)}>
                &#10006;
              </span>
            </div>
          </div>
        )}
      </section>

      {/* {selectedMedicine && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedMedicine.name}</h2>
            <img src={selectedMedicine.image} alt={selectedMedicine.name} />
            <p>{selectedMedicine.description}</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ExploreMedicine;
