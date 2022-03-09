import React from 'react';

const Description = () => {
    return (
        <div className="Descripton">
            <h5 className='description_sub_heading'>DELIVERY OPTIONS <span className='product_description_icons'><i class="fas fa-truck"></i></span></h5>
            <ul className="list-categoty">
                <li>100% Original Products</li>
                <li>Pay on delivery might be available</li>
                <li>Easy 15 days returns and exchanges</li>
                <li>Try & Buy might be available</li>
            </ul>

            <h5 className='description_sub_heading'>BEST OFFERS <span className='product_description_icons'><i class="fas fa-tag"></i></span></h5>
            <h5 className='description_sub_heading'>Best Price: <span>Rs. 1057</span></h5>
            <ul className="list-categoty">
                <li>Coupon Discount: Rs. 202 off (check cart for final savings)</li>
                <li>Applicable on: Orders above Rs. 2499 (only on first purchase)</li>
                <li>Coupon code: <b>MYNTRA400</b></li>
            </ul>
            <p className="list-categoty"><a href="" className='description_link'>View Eligible Products</a></p>
            <br />
            <h5 className='description_sub_heading'>10% Instant Savings on Citi Credit and Debit Cards</h5>
            <ul className="list-categoty">
                <li>Min spend Rs 3,000; Max discount Rs 1,000. TCA</li>
                <li>Min spend Rs 3,000; Max discount Rs 1,000. TCA</li>
            </ul>
            <p className="list-categoty"><a href="" className='description_link'>View Eligible Products</a></p>
            <br />
            <h5 className='description_sub_heading'>EMI option available</h5>
            <ul className="list-categoty">
                <li>EMI starting from Rs.59/month</li>
            </ul>


            <hr className="divider mb-0 mt-0" />
            <br />

            <h5 className='description_sub_heading'>PRODUCT DETAILS <span className='product_description_icons'><i class="fas fa-wallet"></i></span></h5>
            <p className="list-categoty">Grey and Black colourblocked jacket, has a hooded, 3 pockets, zip closure, long sleeves, straight hem, and polyester lining</p>

            <h5 className='description_sub_heading'>Size & Fit</h5>
            <p className="list-categoty">The model (height 6') is wearing a size M</p>
            <h5 className='description_sub_heading'>Material & Care</h5>
            <p className="list-categoty">Material: Polyester Machine: Wash</p>

            <br />
            <h5 className='description_sub_heading'>Specifications</h5>
            <div className="row">
                <div className="col-5">
                    <table class="table">

                        <tbody>
                            <tr>

                                <td className="category-td"><span className="cat-td-prop">Long Sleeves</span> <span className="cat-td-name">Sleeve Length</span></td>
                            </tr>
                            <tr>
                                <td className="category-td">Hooded <span className="cat-td-name">Collar</span></td>
                            </tr>
                            <tr>
                                <td className="category-td">Zip <span className="cat-td-name">Features</span></td>
                            </tr>
                            <tr>
                                <td className="category-td">3 <span className="cat-td-name">Closure</span></td>
                            </tr>
                            <tr>
                                <td className="category-td">Casual <span className="cat-td-name">Occasion</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td className="category-td">Padded Jacket <span className="cat-td-name">Type</span></td>
                            </tr>
                            <tr>
                                <td className="category-td">Colourblocked <span className="cat-td-name">Print or Pattern Type</span></td>
                            </tr>
                            <tr>
                                <td className="category-td">Regular <span className="cat-td-name">Length</span></td>
                            </tr>
                            <tr>
                                <td className="category-td">Polyester <span className="cat-td-name">Lining Fabric</span></td>
                            </tr>
                            <tr>
                                <td className="category-td">Straight <span className="cat-td-name">Hemline</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br />


            <h5 className='description_sub_heading'>Complete The Look</h5>
            <p className="list-categoty">This fashionable grey jacket will elevate your overall style. This jacket from Campus Sutra can be worn with distressed denims and a modern tee for a laid-back brunch outfit.</p>



        </div>
    );
}

export default Description;
