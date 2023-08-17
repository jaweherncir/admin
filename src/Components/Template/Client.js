import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function Client() {
  const [ users, setUsers ] = useState([]);
  let id = useParams();
  useEffect(() => {
    const fetchData = async () => {
  
        const response = await fetch(
        
          `${process.env.REACT_APP_API_URL}api/admin/user`,{mode:'cors'});
        
           const data = await response.json();
          console.log({data})
          //use only 3 sample data
          setUsers( data )       
    }
 
  
    // Call the function
    fetchData();
 }, []);

  //deleting user
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete `)) {
      fetch(`${process.env.REACT_APP_API_URL}api/admin/user/${id}`, {
        method: "DELETE",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          window.location.reload()
        });
    } else {
    }
  };

  return (
<div class="g-sidenav-show  bg-gray-100">
      


    <div>
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
          <a className="navbar-brand m-0" href="/Dashboard " target="_blank">
            <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold"> Dashboard Admin</span>
          </a>
        </div>
        <hr className="horizontal dark mt-0" />
        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">

          <li className="nav-item">
          <a className="nav-link  active" href="Dashboard">
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
          <a className="nav-link  " href="Client">
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
          <a className="nav-link  " href="Admin">
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
            <span className="nav-link-text ms-1">Admin</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link  " href="Reclamation">
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
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
              
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                        <thead>
                        <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Nom du contact</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date création</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date modification</th>
                        
                            <th className="text-secondary opacity-7" >Modifier</th>
                            <th className="text-secondary opacity-7" >Supprimer</th>
                        </tr>
                        </thead>
                        <tbody>
        
{
  users.map((user,key)=>
  <tr>

  <td>
  <p className="text-xs font-weight-bold mb-0">User</p>
  <span className="badge badge-sm bg-gradient-secondary">{user._id}</span>

  </td>
 

  <td>
  <p className="text-xs font-weight-bold mb-0">User</p>
  <p className="text-xs text-secondary mb-0">{user.name}</p>
  </td>
  <td>
  <p className="text-xs text-secondary mb-0">{user.email}</p>

  </td>
  
  <td className="align-middle text-center text-sm">
  <span className="badge badge-sm bg-gradient-success">{user.createdAt}</span>
  </td>
  <td className="align-middle text-center">
  <span className="badge badge-sm bg-gradient-danger">{user.updatedAt}</span>
  </td>


  <td className="align-middle">
  <Link 
                            to={ `/ClientEdit/${user._id}`}
                             className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip" 
                              data-original-title="Edit user">
                          
                                Modifier
            
   </Link>
  </td>
  <td className="align-middle">
  <a href="" className="text-secondary font-weight-bold text-xs"
                            onClick={() => deleteUser(user._id, users.fname)}
                            data-toggle="tooltip" data-original-title="Edit user">
                                Supprimer
    </a>
  </td>
</tr>

  
  
  
  )
}

                      
                    
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        
        
        </div>
        </main>

    
    </div>
    
{/* Modal  delete */}
<div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content rounded-0">
      <div className="modal-body bg-3">
        <div className="px-3 to-front">
          <div className="row align-items-center">
            <div className="col text-right">
              <a href="#" className="close-btn" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><span className="icon-close2" /></span>
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 to-front">
          <div className="text-center">
            <div className="logo">
              <img src="assets/img/delete.png" alt="Image" className="img-fluid mb-4" />
            </div>
            <h3>Valider la suppression</h3>
            <p className="mb-4">ete vous sur ,de supprimer cette client!!!!!! </p>
            <form action="#" className="mb-4">
              <div className="form-group">
                
              </div>
            
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-secondary btn-block" data-dismiss="modal">Annuler</button>
                </div>
                <div className="col-6">
                  <button className="btn btn-info  btn-block">Supprimer</button>
                </div>
              </div>
            </form>
            <p className="mb-0 cancel"><small>Un client va supprimer de la plateforme </small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 {/* Modal update  */}
<div className="modal fade" id="modifier" tabIndex={-1} role="dialog"
 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content rounded-0">
      <div className="modal-body bg-3">
        <div className="px-3 to-front">
          <div className="row align-items-center">
            <div className="col text-right">
              <a href="#" className="close-btn" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><span className="icon-close2" /></span>
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 to-front">
          <div className="text-center">
            <div className="logo">
              <img src="assets/img/edit.png" alt="Image" className="img-fluid mb-4" />
            </div>
            <h3>Modifier client</h3>
          
            <form action="#" className="mb-4">
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-secondary btn-block" data-dismiss="modal">Annuler</button>
                </div>
                <div className="col-6">
                  <button className="btn btn-success  btn-block">Modifier</button>
                </div>
              </div>
            </form>
            <p className="mb-0 cancel"><small>Nouvelle client va modifier</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>   
    
  {/* Modal ajouter  */}
<div className="modal fade" id="ajouter" tabIndex={-1} role="dialog"
 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content rounded-0">
      <div className="modal-body bg-3">
        <div className="px-3 to-front">
          <div className="row align-items-center">
            <div className="col text-right">
              <a href="#" className="close-btn" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><span className="icon-close2" /></span>
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 to-front">
          <div className="text-center">
            <div className="logo">
              <img src="assets/img/add.png" alt="Image" className="img-fluid mb-4" />
            </div>
            <h3>Ajouter client</h3>
          
            <form action="#" className="mb-4">
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="form-group">
                <input type="email" className="form-control w-100 mr-3" placeholder="Enter your email address" />
                
              </div>
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-secondary btn-block" data-dismiss="modal">Annuler</button>
                </div>
                <div className="col-6">
                  <button className="btn btn-info  btn-block">Ajouter</button>
                </div>
              </div>
            </form>
            <p className="mb-0 cancel"><small>Nouvelle client va ajouter</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>    
    
</div>
  )
}
