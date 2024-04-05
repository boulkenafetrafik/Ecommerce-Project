// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import '../styles/signup.css'
import { main } from "@popperjs/core";

function SignUP(){
    const[values,setValues]=useState({
      firstname:"",
      lastname:"",
      gender:"",
      birthday:"",
      adress:"",
      email:"",
      password:"",
    
    });
    const handleChange=(e)=>{
      const newObj = {...values,[e.target.name]: e.target.value}
      setValues(newObj);
    }
    const handleSubmit=(e)=>{

      e.preventDefault();
      console.log(values);
    }

    return(
   <main className="login-section padding-tb section-bg">
     <section className="container">
    <div className="content">

      <div className="form">

         <h3>Lets Get you started</h3>

         <form action="" onSubmit={handleSubmit}>
            <div className="inputBx">
            <input type="text" name="firstname" onChange={handleChange} required />
            <label htmlFor="" className="form-label">First Name</label> 

         </div>
            <div className="inputBx">
            <input type="text" name="lastname" onChange={handleChange} required />
            <label htmlFor="" className="form-label">Last Name</label>
         </div>

         <div className="inputBx">
            <input type="text" name="gender" onChange={handleChange} required />
            <label htmlFor="" className="form-label">Your Gender</label> 
         </div>
            
         <div className="inputBx">
            <input type="date" name="birthday" onChange={handleChange} required />
            <label htmlFor="" className="form-label">Birthday</label> 
         </div>
        
          
         <div className="inputBx">
            <input type="text" name="adress" onChange={handleChange} required />
            <label htmlFor="" className="form-label">Adresse</label>
         </div>
          
         <div className="inputBx">
            <input type="email"  name="email" onChange={handleChange} required />
            <label htmlFor="" className="form-label">Email</label>
         </div>
         
         <div className="inputBx">
            <input type="password" name="password" onChange={handleChange} required />
            <label htmlFor="" className="form-label">Password</label>
         </div>

         <div className="inputBx">
         <label htmlFor="" className="select-label">What is your role:
          <select onChange={handleChange}>
          <option value="admin">Admin</option>
          <option value="vendeur">Vendeur</option>
          <option value="acheteur">Acheteur</option>
        </select>
        </label>
           
         </div>
         <div className="inputBx">
            <input type="submit" value="Sign Up"/>
         </div>
         <div className="inputBx">
            <p>Already a user? <a href="/login">Login</a></p>
         </div>
         </form>

      </div>
    </div>

</section>
   </main>
        
    )
}

export default SignUP




// import React, { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// import '../styles/signup.css'

// const title = "Register Now";
// const socialTitle = "Register With Social Media";
// const btnText = "Get Started Now";

// let socialList = [
//   {
//     link: "#",
//     iconName: "icofont-facebook",
//     className: "facebook",
//   },
//   {
//     link: "#",
//     iconName: "icofont-twitter",
//     className: "twitter",
//   },
//   {
//     link: "#",
//     iconName: "icofont-linkedin",
//     className: "linkedin",
//   },
//   {
//     link: "#",
//     iconName: "icofont-instagram",
//     className: "instagram",
//   },
//   {
//     link: "#",
//     iconName: "icofont-pinterest",
//     className: "pinterest",
//   },
// ];

// const Signup = () => {
//   const [errorMessage, setErrorMessage] = useState("");

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   return (
//     <div>
//       <div className="login-section padding-tb section-bg">
//         <div className="container">
//           <div className="account-wrapper">
//             <h3 className="title">{title}</h3>
//             <form className="account-form" >
//               <div className="form-group inputBx">
//                 <input type="text" name="name" placeholder="User Name" />
//               </div>
//               <div className="form-group">
//                 <input type="email" name="email" placeholder="Email" />
//               </div>
//               <div className="form-group">
//                 <input type="password" name="password" placeholder="Password" />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                 />
//               </div>
//               {/* showing error message */}
//               <div>
//                 {errorMessage && (
//                   <div className="error-message text-danger">
//                     {errorMessage}
//                   </div>
//                 )}
//               </div>
//               <div className="form-group">
//                 <button className="lab-btn">
//                   <span>{btnText}</span>
//                 </button>
//               </div>
//             </form>
//             <div className="account-bottom">
//               <span className="d-block cate pt-10">
//                 Are you a member? <Link to="/login">Login</Link>
//               </span>
//               <span className="or">
//                 <span>or</span>
//               </span>

//               <h5 className="subtitle">{socialTitle}</h5>
//               <ul className="lab-ul social-icons justify-content-center">
//                 <li>
//                   <button className="github">
//                     <i className="icofont-github"></i>
//                   </button>
//                 </li>
//                 <li>
//                   <a href="/" className="facebook">
//                     <i className="icofont-facebook"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/" className="twitter">
//                     <i className="icofont-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/" className="linkedin">
//                     <i className="icofont-linkedin"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/" className="instagram">
//                     <i className="icofont-instagram"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

