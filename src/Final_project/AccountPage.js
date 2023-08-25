import { useState } from "react";
import { json } from "react-router-dom";
import swal from "sweetalert";

function AccountPage() {
  let data = JSON.parse(localStorage.getItem("accountsPage"));
  let [accouts, setAccount] = useState(data.Merchant);
  const [name, setName] = useState(accouts.name);
  const [email, setemail] = useState(accouts.email);
  const [password, setPassword] = useState(accouts.password);
  const [phone, setPhone] = useState(accouts.phone);
  const [value, setValue] = useState("Merchant");

  function handleselect(e) {
    if (e.target.value) {
      if (e.target.value === "Admin") {
        setAccount(data.Admin);
        setName(data.Admin.name);
        setemail(data.Admin.email);
        setPassword(data.Admin.password);
        setPhone(data.Admin.phone);
      }
      if (e.target.value === "Editor") {
        setAccount(data.Editor);
        setName(data.Editor.name);
        setemail(data.Editor.email);
        setPassword(data.Editor.password);
        setPhone(data.Editor.phone);
      }
      if (e.target.value === "Merchant") {
        setAccount(data.Merchant);
        setName(data.Merchant.name);
        setemail(data.Merchant.email);
        setPassword(data.Merchant.password);
        setPhone(data.Merchant.phone);
      }
      if (e.target.value === "Customer") {
        setAccount(data.Customer);
        setName(data.Customer.name);
        setemail(data.Customer.email);
        setPassword(data.Customer.password);
        setPhone(data.Customer.phone);
      }
      setValue(e.target.value);
    }
  }

  function handleUpdate(e) {
    e.preventDefault();
    let update = {
      email: email,
      name: name,
      password: password,
      phone: phone,
      profilePic: accouts.profilePic,
    };

    data = { ...data, [value]: update };
    localStorage.setItem("accountsPage", JSON.stringify(data));
    swal({
      title: "Good job!",
      text: "You profile is update",
      icon: "success",
      buttons: false,
      timer: 1000,
    });
  }

  return (
    <div className="container mt-5">
      <div className="select-card">
        <h2>List of Accounts</h2>
        <p>Accounts</p>
        <select
          onChange={handleselect}
          value={`${value}`}
          className="custom-select"
        >
          <option value="">Select account</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Merchant">Merchant</option>
          <option value="Customer">Customer</option>
        </select>
      </div>
      <div className=" mt-4">
        <div className="row d-flex justify-content-between">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
            <div className="avatar-container select-card">
              <h4>Change Avatar</h4>
              <div className="image-section">
                <img src={accouts.profilePic} alt="img"></img>
                <div className="hide-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </div>
              </div>
              <div className="button">
                <button type="file" className="btn">
                  UPLOAD NEW PHOTO
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8  ">
            <div className="account-stt select-card">
              <h4>Account Settings</h4>
              <form onSubmit={handleUpdate} className="row">
                <div className="form-group col-lg-6 ">
                  <label for="name">Account Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="email">Account Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control "
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="password2">Re-enter Password</label>
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control "
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6 ">
                  <label></label>
                  <div className="button">
                    <button type="submit" className="btn  text-uppercase">
                      Update Your Profile
                    </button>
                  </div>
                </div>
              </form>
              <div className="col-12  mt-2">
                <div className="button">
                  <button type="submit" className="btn text-uppercase">
                    Delete Your Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
