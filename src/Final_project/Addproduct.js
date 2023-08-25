import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Addproduct() {
  const data = JSON.parse(localStorage.getItem("productsPage"));

  const location = useLocation();
  const state = location.state;

  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [units, setUnits] = useState();
  const [select, setSelect] = useState("");
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  let product = data.products;
  let Categories = data.categories;

  // console.log(Categories)

  useEffect(() => {
    if (state.status === true) {
      const productdetail = product[state.index];
      setName(productdetail.name);
      setSelect(`${productdetail.category}`);
      setMessage(productdetail.description);
      setDate(productdetail.expireDate);
      setUnits(productdetail.stock);
    }
  }, []);

  // console.log(state)
  function Handlesubmit(e) {
    let newData = {
      category: `${select}`,
      description: `${message}`,
      expireDate: `${date}`,
      name: `${name}`,
      stock: `${units}`,
      unitSold: "1,200",
    };

    {
      state.status === true
       ? product.splice(state.index, 1, newData)
        : product.push(newData);
    }
    data.products = product;
    e.preventDefault();
    localStorage.setItem("productsPage", JSON.stringify(data));
    navigate("/Product");
  }

  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div className="col-8 ">
          <div className="product-background p-5 ">
            <h4 className="mb-4">
              {state.status === true ? "Update" : "Add"} Product
            </h4>
            <form onSubmit={Handlesubmit}>
              <div className="row  d-flex justify-content-between">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group ">
                    <label for="name">Product Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="form-control validate"
                      required
                    />
                  </div>
                  <div className="form-group ">
                    <label for="des">Description </label>
                    <textarea
                      type="text"
                      rows={5}
                      cols={48}
                      className="textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group ">
                    <label for="des">Category </label>
                    <select
                      onChange={(e) => setSelect(e.target.value)}
                      value={select}
                      className="custom-select"
                      required
                    >
                      <option value="">Select account</option>
                      {Categories.map((val, ind) => {
                        return (
                          <option value={`${val}`} key={ind}>
                            {val}
                          </option>
                        );
                      })}

                     {  //    <option value="New Arrival">New Arrival</option>
                    //                         <option value="Latest Fashion">Latest Fashion</option>
                    //                         <option value="Christmas Special">Christmas Special</option>
                    //                         <option value="Trending">Trending</option>
                    //                         <option value="New Year Special">New Year Special</option> 
                     }
                    </select>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <label for="date">Expiry Date</label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        className="form-control validate"
                        required
                      />
                    </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <label for="units">Units in Stock</label>
                      <input
                        id="units"
                        name="units"
                        type="number"
                        onChange={(e) => setUnits(e.target.value)}
                        value={units}
                        className="form-control validate"
                        required
                      />
                    
                    </div>
                  
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="tm-product-img-dummy mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                    </svg>
                  </div>
                  <div className="button  upload-button">
                    <input
                      type="button"
                      className="btn btn-block mx-auto"
                      value="UPLOAD PRODUCT IMAGE"
                      onclick
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="button">
                    <button className="btn btn-block text-uppercase">
                      {state.status === true ? "Update" : "Add"} Product Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
