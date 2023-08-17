import React from 'react'
import { useEffect, useState } from "react";
export default function ReclamationAdmin() {
    const [ users, setUsers ] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
    
          const response = await fetch(
          
            'https://golden-indigo.herokuapp.com/api/user',{mode:'cors'});
          
             const data = await response.json();
            console.log({data})
            //use only 3 sample data
            setUsers( data )       
      }
   
    
      // Call the function
      fetchData();
   }, []);
  return (
<div class="g-sidenav-show  bg-gray-100">
      

 
      <div>
      <div>
          <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
                  <div className="sidenav-header">
                  <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
                  <a className="navbar-brand m-0" href="DasbordAdmin" target="_blank">
                      <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                      <span className="ms-1 font-weight-bold"> Dashboard Admin</span>
                  </a>
                  </div>
                  <hr className="horizontal dark mt-0" />
                  <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                  <ul className="navbar-nav">
      
                  <li className="nav-item">
                  <a className="nav-link  active" href="DasbordAdmin">
                      <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <title>shop </title>
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fillRule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(0.000000, 148.000000)">
                                  <path className="color-background opacity-6" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" />
                                  <path className="color-background" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z" />
                              </g>
                              </g>
                          </g>
                          </g>
                      </svg>
                      </div>
                      <span className="nav-link-text ms-1">Dashboard</span>
                  </a>
                  </li>
      
                  <li className="nav-item">
                  <a className="nav-link  " href="ClientAdmin">
                      <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <title>office</title>
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fillRule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                              <g id="office" transform="translate(153.000000, 2.000000)">
                                  <path className="color-background opacity-6" d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" />
                                  <path className="color-background" d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z" />
                              </g>
                              </g>
                          </g>
                          </g>
                      </svg>
                      </div>
                      <span className="nav-link-text ms-1" >Clients</span>
                  </a>
                  </li>
      
                
      
                  <li className="nav-item">
                  <a className="nav-link  " href="ReclamationAdmin">
                      <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <title>credit-card</title>
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(453.000000, 454.000000)">
                                  <path className="color-background opacity-6" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" />
                                  <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
                              </g>
                              </g>
                          </g>
                          </g>
                      </svg>
                      </div>
                      <span className="nav-link-text ms-1">Reclamations</span>
                  </a>
                  </li>
      
      
                  </ul>
                  </div>
              
          </aside>
      
      
      
      
      
      
      
      
      
      
      
        <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
          {/* Navbar */}
          <nav className="navbar navbar-main navbar-expand-lg bg-transparent shadow-none position-absolute px-4 w-100 z-index-2">
            <div className="container-fluid py-1">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 ps-2 me-sm-6 me-5">
                  <li className="breadcrumb-item text-sm"><a className="text-white opacity-5" href="javascript:;">Pages</a></li>
                  <li className="breadcrumb-item text-sm text-white active" aria-current="page">Profile</li>
                </ol>
              
              </nav>
              <div className="collapse navbar-collapse me-md-0 me-sm-4 mt-sm-0 mt-2" id="navbar">
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group">
                    
                  </div>
                </div>
                <ul className="navbar-nav justify-content-end">
                  <li className="nav-item d-flex align-items-center">
                    <a className="btn btn-outline-white btn-sm mb-0 me-3" target="_blank" >On Ligne </a>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <a href="/" className="nav-link text-white font-weight-bold px-0">
                      <i className="fa fa-user me-sm-1" />
                      <span className="d-sm-inline d-none">Déconexion</span>
                    </a>
                  </li>
               
              
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
          <div className="container-fluid">
            <div className="page-header min-height-300 border-radius-xl mt-4" style={{backgroundImage: 'url("../assets/img/curved-images/curved0.jpg")', backgroundPositionY: '50%'}}>
              <span className="mask bg-gradient-primary opacity-6" />
            </div>
            <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
              <div className="row gx-4">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img src="../assets/img/bruce-mars.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className="mb-1">
                      Jaweher ncir
                    </h5>
                    <p className="mb-0 font-weight-bold text-sm">
                      jaweherncir@gmail.com
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0">
                    <ul className="nav nav-pills nav-fill p-1 bg-transparent" role="tablist">
                  
                      <li className="nav-item">
                        <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab"  role="tab" aria-selected="false">
                          <svg className="text-dark" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>document</title>
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                              <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                  <g transform="translate(154.000000, 300.000000)">
                                    <path className="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379" />
                                    <path className="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z">
                                    </path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span className="ms-1">Réclamations Clients</span>
                        </a>
                      </li>
                    
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      
      
      
      
          <div className="container-fluid py-4">
            <div className="row">
            {
        users.map((user,key)=>
           <>
                <div className="col-12 col-xl-4">
                <div className="card h-100">
                  <div className="card-header pb-0 p-3">
                    <div className="row">
                      <div className="col-md-8 d-flex align-items-center">
                        <h6 className="mb-0">Profile Information</h6>
                      </div>
                      <div className="col-md-4 text-end">
                        <a href="javascript:;">
                          <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip"
                           data-bs-placement="top" title="Edit Profile" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <p className="text-sm">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                    </p>
                    <hr className="horizontal gray-light my-4" />
                    <ul className="list-group">
                      <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; {user.pseudo}</li>
                      <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                      <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                      <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Location:</strong> &nbsp; USA</li>
                      <li className="list-group-item border-0 ps-0 pb-0">
                      
      
      
      
      
                        
                     
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
             <br/>
             <br/>
             <br/>
             </>  
             
         
        )}
      
      
      
      
      
      
      
      
      
      
      
      
            </div>
            <footer className="footer pt-3  ">
              <div className="container-fluid">
            
              </div>
            </footer>
          </div>
        </div>
      
      </div>  
      </div>
          
          
          
          
          
          
      </div>
  )
}
