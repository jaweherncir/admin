import React from 'react'

import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function DasbordAdmin() {
  const [ nbrAdmin, setNumAdmin ] = useState([]);
  const [ nbrUser, setNumUser ] = useState([]);
  const [ nbrContact, setNumContact ] = useState([]);
  const [ nbrFacture, setNumFacture ] = useState([]);
  //satstique contact
  const [ nbrContactJ, setNumContactJ ] = useState([]);
  const [ nbrContactM, setNumContactM ] = useState([]);
  const [ nbrContactS, setNumContactS ] = useState([]);
  const [ nbrContactA, setNumContactA ] = useState([]);
  let id = useParams();
//statstique admin
const [ nbrAdminJ, setNumAdminJ ] = useState([]);
const [ nbrAdminM, setNumAdminM ] = useState([]);
const [ nbrAdminS, setNumAdminS ] = useState([]);
const [ nbrAdminA, setNumAdminA ] = useState([]);
 //statstique cleint
const [ nbrclientJ, setNumClientJ ] = useState([]);
const [ nbrclientM, setNumClientM ] = useState([]);
const [ nbrclientS, setNumClientS ] = useState([]);
const [ nbrclientA, setNumClientA ] = useState([]); 
 //statstique facture
 const [ nbrFactureJ, setNumFactureJ ] = useState([]);
 const [ nbrFactureM, setNumFactureM ] = useState([]);
 const [ nbrFactureS, setNumFactureS ] = useState([]);
 const [ nbrFactureA, setNumFactureA ] = useState([]);
 //statstique estimation
 const [ nbrEstimJ, setNumEstimJ ] = useState([]);
 const [ nbrEstimM, setNumEstimM ] = useState([]);
 const [ nbrEstimS, setNumEstimS ] = useState([]);
 const [ nbrEstimA, setNumEstimA ] = useState([]);
const fetchNumFacture = async () => {
  
  const response = await fetch(
  
    `${process.env.REACT_APP_API_URL}api/admin/countFacture`,{mode:'cors'});
  
     const data = await response.json();
     //console.log({data})
     //use only 3 sample data
     setNumFacture( data)
     console.log(nbrFacture)
      } 
 const fetchNumAdmin = async () => {
const response = await fetch(
    
      `${process.env.REACT_APP_API_URL}api/admin/countAdmin`,{mode:'cors'});
    
       const data = await response.json();
       //console.log({data})
       //use only 3 sample data
       setNumAdmin( data)
       console.log(nbrAdmin)
        } 
  const fetchNumUser = async () => {
  
          const response = await fetch(
          
            `${process.env.REACT_APP_API_URL}api/admin/countUser`,{mode:'cors'});
          
             const data = await response.json();
             //console.log({data})
             //use only 3 sample data
             setNumUser( data)
             console.log(nbrUser)
              } 
const fetchNumContact = async () => {
  
                const response = await fetch(
                
                  `${process.env.REACT_APP_API_URL}api/admin/countContact`,{mode:'cors'});
                
                   const data = await response.json();
                   //console.log({data})
                   //use only 3 sample data
                   setNumContact( data)
                   console.log(nbrContact)
                    } 
//count contact 
const fetchNumContactJ = async () => {
  
  const response = await fetch(
  
    `${process.env.REACT_APP_API_URL}api/admin/countContactByJour`,{mode:'cors'});
  
     const data = await response.json();
     //console.log({data})
     //use only 3 sample data
     setNumContactJ( data)
     console.log(nbrContactJ)
      } 
const fetchNumContactS = async () => {
  
        const response = await fetch(
        
          `${process.env.REACT_APP_API_URL}api/admin/countContactBySemaine`,{mode:'cors'});
        
           const data = await response.json();
           //console.log({data})
           //use only 3 sample data
           setNumContactS( data)
           console.log(nbrContactS)
            }  
const fetchNumContactM = async () => {
  
              const response = await fetch(
              
                `${process.env.REACT_APP_API_URL}api/admin/countContactByMonth`,{mode:'cors'});
              
                 const data = await response.json();
                 //console.log({data})
                 //use only 3 sample data
                 setNumContactM( data)
                 console.log(nbrContactM)
                  }    
const fetchNumContactA = async () => {
  
                    const response = await fetch(
                    
                      `${process.env.REACT_APP_API_URL}api/admin/countContactByYear`,{mode:'cors'});
                    
                       const data = await response.json();
                       //console.log({data})
                       //use only 3 sample data
                       setNumContactA( data)
                       console.log(nbrContactA)
                        }  
                        
          //api statstique admin              
const fetchNumAdminJ = async () => {
  
            const response = await fetch(
            
              `${process.env.REACT_APP_API_URL}api/admin/countAdminByJour`,{mode:'cors'});
            
               const data = await response.json();
               //console.log({data})
               //use only 3 sample data
               setNumAdminJ( data)
               console.log(nbrAdminJ)
                } 
const fetchNumAdminS = async () => {
            
                  const response = await fetch(
                  
                    `${process.env.REACT_APP_API_URL}api/admin/countAdminBySemaine`,{mode:'cors'});
                  
                     const data = await response.json();
                     //console.log({data})
                     //use only 3 sample data
                     setNumAdminS( data)
                     console.log(nbrAdminS)
                      }  
const fetchNumAdminM = async () => {
            
                        const response = await fetch(
                        
                          `${process.env.REACT_APP_API_URL}api/admin/countAdminByMonth`,{mode:'cors'});
                        
                           const data = await response.json();
                           //console.log({data})
                           //use only 3 sample data
                           setNumAdminM( data)
                           console.log(nbrAdminM)
                            }    
const fetchNumAdminA = async () => {
            
                              const response = await fetch(
                              
                                `${process.env.REACT_APP_API_URL}api/admin/countAdminByYear`,{mode:'cors'});
                              
                                 const data = await response.json();
                                 //console.log({data})
                                 //use only 3 sample data
                                 setNumAdminA( data)
                                 console.log(nbrAdminA)
                                  }                          
          //api statstique client              
const fetchNumClientJ = async () => {
  
            const response = await fetch(
            
              `${process.env.REACT_APP_API_URL}api/admin/countClientByJour`,{mode:'cors'});
            
               const data = await response.json();
               //console.log({data})
               //use only 3 sample data
               setNumClientJ( data)
               console.log(nbrclientJ)
                } 
const fetchNumClientS = async () => {
            
                  const response = await fetch(
                  
                    `${process.env.REACT_APP_API_URL}api/admin/countClientBySemaine`,{mode:'cors'});
                  
                     const data = await response.json();
                     //console.log({data})
                     //use only 3 sample data
                     setNumClientS( data)
                     console.log(nbrclientS)
                      }  
const fetchNumClientM = async () => {
            
                        const response = await fetch(
                        
                          `${process.env.REACT_APP_API_URL}api/admin/countClientByMonth`,{mode:'cors'});
                        
                           const data = await response.json();
                           //console.log({data})
                           //use only 3 sample data
                           setNumClientM( data)
                           console.log(nbrclientM)
                            }    
const fetchNumClientA = async () => {
            
                              const response = await fetch(
                              
                                `${process.env.REACT_APP_API_URL}api/admin/countClientByYear`,{mode:'cors'});
                              
                                 const data = await response.json();
                                 //console.log({data})
                                 //use only 3 sample data
                                 setNumClientA( data)
                                 console.log(nbrclientA)
                                  }   
          //api statstique facture              
const fetchNumFactureJ = async () => {
  
            const response = await fetch(
            
              `${process.env.REACT_APP_API_URL}api/admin/countFactureByJour`,{mode:'cors'});
            
               const data = await response.json();
               //console.log({data})
               //use only 3 sample data
               setNumFactureJ( data)
               console.log(nbrFactureJ)
                } 
const fetchNumFactureS = async () => {
            
                  const response = await fetch(
                  
                    `${process.env.REACT_APP_API_URL}api/admin/countFactureBySemaine`,{mode:'cors'});
                  
                     const data = await response.json();
                     //console.log({data})
                     //use only 3 sample data
                     setNumFactureS( data)
                     console.log(nbrFactureS)
                      }  
const fetchNumFactureM = async () => {
            
                        const response = await fetch(
                        
                          `${process.env.REACT_APP_API_URL}api/admin/countFactureByMonth`,{mode:'cors'});
                        
                           const data = await response.json();
                           //console.log({data})
                           //use only 3 sample data
                           setNumFactureM( data)
                           console.log(nbrFactureM)
                            }    
const fetchNumFactureA = async () => {
            
                              const response = await fetch(
                              
                                `${process.env.REACT_APP_API_URL}api/admin/countFactureByYear`,{mode:'cors'});
                              
                                 const data = await response.json();
                                 //console.log({data})
                                 //use only 3 sample data
                                 setNumFactureA( data)
                                 console.log(nbrFactureA)}
   //api statstique estime              
           const fetchNumEstimeJ = async () => {
  
            const response = await fetch(
            
              `${process.env.REACT_APP_API_URL}api/admin/countEstimateByJour`,{mode:'cors'});
            
               const data = await response.json();
               //console.log({data})
               //use only 3 sample data
               setNumEstimJ( data)
               console.log(nbrEstimJ)
                } 
          const fetchNumEstimeS = async () => {
            
                  const response = await fetch(
                  
                    `${process.env.REACT_APP_API_URL}api/admin/countEstimateBySemaine`,{mode:'cors'});
                  
                     const data = await response.json();
                     //console.log({data})
                     //use only 3 sample data
                     setNumEstimS( data)
                     console.log(nbrEstimS)
                      }  
          const fetchNumEstimeM = async () => {
            
                        const response = await fetch(
                        
                          `${process.env.REACT_APP_API_URL}api/admin/countEstimateByMonth`,{mode:'cors'});
                        
                           const data = await response.json();
                           //console.log({data})
                           //use only 3 sample data
                           setNumEstimM( data)
                           console.log(nbrEstimM)
                            }    
          const fetchNumEstimA = async () => {
            
                              const response = await fetch(
                              
                                `${process.env.REACT_APP_API_URL}api/admin/countEstimateByYear`,{mode:'cors'});
                              
                                 const data = await response.json();
                                 //console.log({data})
                                 //use only 3 sample data
                                 setNumEstimA( data)
                                 console.log(nbrEstimA)
                                  }                                 
  useEffect(() => {
     //statstique estime
     fetchNumEstimA()
     fetchNumEstimeM()
     fetchNumEstimeS()
     fetchNumEstimeJ()
    //statstique facture
    fetchNumFactureA()
    fetchNumFactureM()
    fetchNumFactureS()
    fetchNumFactureJ()
    //numbr all
    fetchNumFacture()
    fetchNumContact()
    fetchNumUser()
    fetchNumAdmin()
    //contact
    fetchNumContactJ()
    fetchNumContactS()
    fetchNumContactM()
    fetchNumContactA()
    //admin
    fetchNumAdminJ()  
    fetchNumAdminS() 
    fetchNumAdminM()
    fetchNumAdminA()
    //client
    fetchNumClientA()
    fetchNumClientM()
    fetchNumClientS()
    fetchNumClientJ()
       }, []);
  return (
    <div class="g-sidenav-show  bg-gray-100">
      
      <div>
  <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
      <a className="navbar-brand m-0" href="DasbordAdmin " target="_blank">
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





  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    {/* Navbar */}
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Accueil</a></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
          </ol>
          <h6 className="font-weight-bolder mb-0">Dashboard</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
             
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a className="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank">On Ligne </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a href="/" className="nav-link text-body font-weight-bold px-0">
                <i className="fa fa-user me-sm-1" />
                <span className="d-sm-inline d-none">Déconexion</span>
              </a>
            </li>
        
        
          </ul>
        </div>
      </div>
    </nav>
      {/* End Navbar */}
      <div className="container-fluid py-4">
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Nombres des facture</p>
                    <h5 className="font-weight-bolder mb-0">
                   {nbrFacture}
                      
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Nombres Clients</p>
                    <h5 className="font-weight-bolder mb-0">
                      {nbrUser}
                     
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Nombres Admin</p>
                    <h5 className="font-weight-bolder mb-0">
                    {nbrAdmin}
                      
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Nombre Réclamations</p>
                    <h5 className="font-weight-bolder mb-0">
                     {nbrContact}
                      
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-cart text-lg opacity-10" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



       
      <div className="row mt-4" style={{marginLeft:'10%'}}>
      <div className="col-lg-5">
          <div className="card h-100 p-3">
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100" style={{backgroundImage: 'url("../assets/img/shapes/reclamation-850.jpg")'}}>
              <span className="mask bg-gradient-dark" />
              <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 className="text-white font-weight-bolder mb-4 pt-2">Statstique Reclamation</h5>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Reclamations Par Jour:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrContactJ}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Reclamations Par Semaine:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrContactS}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Reclamations Par Mois:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrContactM}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Reclamations Par Année:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrContactA}</h5></td>
                </tr>
              </div>
            </div>
          </div>
        </div> 

       <div className="col-lg-5">
          <div className="card h-100 p-3">
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100" style={{backgroundImage: 'url("../assets/img/ivancik.jpg")'}}>
              <span className="mask bg-gradient-dark" />
              <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 className="text-white font-weight-bolder mb-4 pt-2">Statstique Administartion</h5>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Reclamations Par Jour:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrAdminJ}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Reclamations Par Semaine:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrAdminS}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Reclamations Par Mois:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrAdminM}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Reclamations Par Année:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrAdminA}</h5></td>
                </tr>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card h-100 p-3">
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100" style={{backgroundImage: 'url("../assets/img/shapes/téléchargement.jpeg")'}}>
              <span className="mask bg-gradient-dark" />
              <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 className="text-white font-weight-bolder mb-4 pt-2">Statstique Clients</h5>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Client Par Jour:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrclientJ}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Client Par Semaine:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrclientS}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Client Par Mois:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrclientM}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Client Par Année:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrclientA}</h5></td>
                </tr>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card h-100 p-3">
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100" style={{backgroundImage: 'url("../assets/img/shapes/facture.jpg")'}}>
              <span className="mask bg-gradient-dark" />
              <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 className="text-white font-weight-bolder mb-4 pt-2">Statstique Facture</h5>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Facture Par Jour:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrFactureJ}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Facture Par Semaine:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrFactureS}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Facture Par Mois:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrFactureM}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber Facture Par Année:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrFactureA}</h5></td>
                </tr>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card h-100 p-3">
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100" style={{backgroundImage: 'url("../assets/img/shapes/facture.jpg")'}}>
              <span className="mask bg-gradient-dark" />
              <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 className="text-white font-weight-bolder mb-4 pt-2">Statstique Devices</h5>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber device Par Jour:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrEstimJ}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber device Par Semaine:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrEstimS}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber device Par Mois:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrEstimM}</h5></td>
                </tr>
                <tr>
                      <td>
                      <p className="mb-1 pt-2 text-bold">Nomber device Par Année:</p>
                      </td>
                      <td> <h5 className="text-white" >{nbrAdminA}</h5></td>
                </tr>
              </div>
            </div>
          </div>
        </div>
      </div>
    





      
      <footer className="footer pt-3  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
         
            </div>
            <div className="col-lg-6">
          
            </div>
          </div>
        </div>
      </footer>
    </div>

  </main>

</div>
    
    
    
    
    
    
        </div>
  )
}
