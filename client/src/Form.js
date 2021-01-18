import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./index.css";
import img from "./insuarance12.png";
import { Button, Icon, TextField } from "@material-ui/core";
import TabPanel from "./TabPanel";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import AboutImg from "./About.png";
import $ from "jquery";
import axios from "axios";

const App = () => {
  var state = {
    firstname: "",
    lastname: "",
    user: "",
    password: "",
    checkBox: false,
    company: "",
    designation: "",
    phone: "",
    fnameError: "",
    lnameError: "",
    userError: "",
    passworError: "",
    checkError: "",
    companyError: "",
    designationError: "",
    phoneError: "",
  };
  var firstnameError = "Error";
  var that = this;
  const onSubmitContact = (event) => {
    event.preventDefault();
    const user = {
      firstname: state.firstname,

      lastname: state.lastname,

      email: state.user,

      company: state.company,

      designation: state.designation,

      phonenumber: state.phone,
    };
    axios.post(`http://localhost:3000/request/`,  user ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    // var http = new XMLHttpRequest();
    // //var url = "https://192.168.1.4:3000/request/";
    // var url = "https://localhost:3001/request/";
   
    // var params = "param1=param1Value&param2=param2Value";
    // http.open("POST", url, true);
    // http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // http.onreadystatechange = function () {
    //   if (http.readyState == 4 && http.status == 200) {
    //     alert(http.responseText);
    //   }
    // };
    // http.send(user);
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (event.target.name == "first-name") {
      state.firstname = value;

      document.getElementById("sfnameerrorid").innerHTML = state.fnameError =
        value.length < 3 && value.length > 0
          ? "minimum 3 characters required"
          : "";
      // }
      // document.getElementById("sfnameerrorid").innerHTML = "Errors";
    } else if (event.target.name == "last-name") {
      state.lastname = value;
      document.getElementById("slnameerrorid").innerHTML = state.lnameError =
        value.length < 3 && value.length > 0
          ? "minimum 3 characters required"
          : "";
    } else if (event.target.name == "username") {
      state.user = value;
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        )
      ) {
        document.getElementById("sUnameerrorid").innerHTML = state.userError =
          "";
      } else {
        document.getElementById("sUnameerrorid").innerHTML =
          "Please enter a valid email";
      }
    } else if (event.target.name == "password") {
      document.getElementById("sPasserrorid").innerHTML =
        value.length < 7 && value.length > 0
          ? "length of password must be between 6-16"
          : "";
    } else if (event.target.name == "terms") {
      const isChecked = event.target.checked;
      document.getElementById("sCheckerrorid").innerHTML = state.checkBox =
        isChecked == false ? "*Please accept terms & conditions" : "";
    } else if (event.target.name == "company") {
      state.company = value;
      document.getElementById("sComrrorid").innerHTML = state.companyError =
        value.length == 0 ? "Please enter company name" : "";
    } else if (event.target.name == "designation") {
      state.designation = value;
    } else if (event.target.name == "phone") {
      state.phone = value;
      document.getElementById("sPhoneerrorid").innerHTML = state.phoneError =
        value.length < 10 ? "Please enter a valid phone number" : "";
    }
  };
  const Errorr = "Errorr";

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        className="menubackColor"
      >
        <Tab className="tab1margin" label="About US" />
        <Tab label="Products" />
        <Tab label="Contact US" />
      </Tabs>
      <div>
        <html className="insTextcls">Insuarance Solutions</html>
        <img className="imgclass" height="200px" src={img}></img>
      </div>

      <TabPanel className="panelTabcls" value={value} index={0}>
        <img src={AboutImg} width="100%" height="440px"></img>
        <div className="ui raised very padded text container segment">
          <h2 className="ui header aboutheader">About Insuarance Solutions</h2>
          <p>
            Insurance is a means of protection from financial loss. It is a form
            of risk management, primarily used to hedge against the risk of a
            contingent or uncertain loss. An entity which provides insurance is
            known as an insurer, insurance company, insurance carrier or
            underwriter. A person or entity who buys insurance is known as an
            insured or as a policyholder. The insurance transaction involves the
            insured assuming a guaranteed and known relatively small loss in the
            form of payment to the insurer in exchange for the insurer's promise
            to compensate the insured in the event of a covered loss. The loss
            may or may not be financial, but it must be reducible to financial
            terms, and usually involves something in which the insured has an
            insurable interest established by ownership, possession, or
            pre-existing relationship.
          </p>
          <p>
            The insured receives a contract, called the insurance policy, which
            details the conditions and circumstances under which the insurer
            will compensate the insured. The amount of money charged by the
            insurer to the policyholder for the coverage set forth in the
            insurance policy is called the premium. If the insured experiences a
            loss which is potentially covered by the insurance policy, the
            insured submits a claim to the insurer for processing by a claims
            adjuster. The insurer may hedge its own risk by taking out
            reinsurance, whereby another insurance company agrees to carry some
            of the risks, especially if the primary insurer deems the risk too
            large for it to carry.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} className="panelTabcls" index={1}>
        <div class="ui vertical menu sidemenucls">
          <div class="item">
            <div class="header">Life Insuarance</div>
            <div class="menu">
              <a class="item">Term Plan</a>
              <a class="item">Whole Life Plan</a>
            </div>
          </div>

          <div class="item">
            <div class="header">Home Insuarance</div>
            <div class="menu">
              <a class="item">Home Shield Plan</a>
              <a class="item">Griha Suvidha Plan</a>
              <a class="item">General Long Term Home Insurance Plan</a>
              <a class="item">House Holder Insurance Plan</a>
            </div>
          </div>
          <div class="item">
            <div class="header">Support</div>
            <div class="menu">
              <a class="item">E-mail Support</a>
              <a class="item">FAQs</a>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel className="panelTabcls" value={value} index={2}>
        {/* <div class="ui positive button">Add Additional Validation</div>
        <div class="ui negative button">Remove Additional Validation</div> */}
        <form class="ui form segment formCls">
          <p class="infoTextCls">
            After successful signup we will contact you soon!
          </p>
          <div class="two fields">
            <div class="required field">
              <label required>First Name</label>
              <input
                required
                onChange={handleInputChange}
                placeholder="First Name"
                name="first-name"
              />
              <p className="errordivCls" id="sfnameerrorid"></p>
            </div>
            <div class="required field">
              <label>Last Name</label>
              <input
                required
                onChange={handleInputChange}
                placeholder="Last Name"
                name="last-name"
              />
            </div>
            <p className="lnameerrordivCls" id="slnameerrorid"></p>
          </div>
          <div className="two fields">
            <div class="required field">
              <label>Company</label>
              <input
                type="text"
                name="company"
                placeholder="company"
                onChange={handleInputChange}
              />
              <p className="errordivCls" id="sComrrorid"></p>
            </div>
            <div class="field">
              <label>Designation</label>
              <input
                type="text"
                placeholder="designation"
                name="designation"
                onChange={handleInputChange}
              />
              {/* <p className="errordivCls" id="sPasserrorid"></p> */}
            </div>
          </div>
          <div className="two fields">
            <div class="required field">
              <label>Username</label>
              <input
                onChange={handleInputChange}
                placeholder="username"
                name="username"
              />
              <p className="errordivCls" id="sUnameerrorid"></p>
            </div>
            <div class="required field">
              <label>Phone</label>
              <input
                type="tel"
                onChange={handleInputChange}
                placeholder="phone no"
                name="phone"
              />
              <p className="errordivCls" id="sPhoneerrorid"></p>
            </div>
          </div>
          <div class="inline field">
            <div class="field">
              <label>Query(Optional)</label>

              <textarea
                rows="4"
                cols="100"
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <div class="inline field required field">
            <div class="ui checkbox ">
              <input
                type="checkbox"
                name="terms"
                onChange={handleInputChange}
              />
              <label>I agree to the Terms and Conditions</label>
              <p className="errordivCls" id="sCheckerrorid"></p>
            </div>
          </div>
          {/* <div class="ui primary submit button">Submit</div> */}
          {/* <Button primary onSubmit={onSubmitContact}> */}
          <div>
            <button onClick={onSubmitContact} class="ui primary button">
              Submit
            </button>
          </div>

          {/* </Button> */}
        </form>
      </TabPanel>
    </div>
    //{" "}
    // </Paper>
  );
};

//ReactDOM.render(<App />, document.querySelector("#root"));
// }
export default App;