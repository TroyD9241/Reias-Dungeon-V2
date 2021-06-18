import React, { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import './SearchModal.css'
Modal.setAppElement(document.getElementById("root"));

const SearchModal = ({ search, setSearch }) => {
    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearch = async (e) => {
        e.preventDefault();
        history.push(`/search/${searchTerm}`);
        setSearch(false)
        setSearchTerm("");
    };
    return (
        <Modal
            isOpen={search}
            onRequestClose={() => setSearch(false)}
            contentLabel="search"
            className="search-inner"
            overlayClassName="search-outer"
        >
            <div className='search-top'>
                <div className='search-top-header'>
                    <div>
                        Search DeviantArt
                    </div>
                </div>
                <i className="fal fa-times" onClick={() => setSearch(false)}></i>
            </div>
            <form className='search-form' onSubmit={handleSearch}>
                <input className='search-input'
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>

        </Modal>
    );
};

export default SearchModal;
