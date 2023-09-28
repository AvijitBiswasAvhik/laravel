import React from "react";
import "../assets/css/productview/ProductView.css";
import { useParams } from "react-router-dom";

export default function ProductView() {
    const { category } = useParams();
    console.log(category);
    return (
        <div className="product-view-container text-center">
            <div className="containert">
                <div className="row mt-5">
                    <div className="col-12">
                        <h1 className="product-view-title text-center">
                            {category && category}
                        </h1>
                        <div className="divider"></div>
                    </div>
                    <div className="col-12">
                        <div className="filter-dropdown">
                            <label htmlFor="sortBy">Sort by</label>
                            <select name="" id="sortBy" className="filter-dropdown-select">
                                <option value="manual">Featured</option>
                                <option value="best-selling">Best selling</option>
                                <option value="title-ascending">Alphabetically, Z-A</option>
                                <option value="price-ascending">Price, low to high</option>
                                <option value="price-descending">Price, high to low</option>
                                <option value="created-ascending">Date, old to new</option>
                                <option value="created-descending">Date, new to old</option>
                            </select>
                        </div>
                    </div>
                    <div className="divider mt-3"></div>
                    <div className="col-12">
                        <ul className="product-view-category">
                            <li className="product-category">ALL</li>
                            <li className="product-category">SHIRT</li>
                            <li className="product-category">SWEATER</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="product-view-section">
                <div className="product-view">item 1</div>
                <div className="product-view">item 2</div>
                <div className="product-view">item 3</div>
                <div className="product-view">item 4</div>
                <div className="product-view">item 5</div>
                <div className="product-view">item 6</div>
                <div className="product-view">item 7</div>
                <div className="product-view">item 8</div>
                <div className="product-view">item 9</div>
            </div>
        </div>
    );
}
