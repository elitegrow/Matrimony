import React from 'react'
import {Link} from 'react-router-dom'
import Aside from '../Aside/Aside'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { MdPostAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import Smallicon from '../../Components/heart-icon.png'


const Payment = () => {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
    <Aside />
    <div class="layout-page">
            <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached
            align-items-center bg-navbar-theme" id="layout-navbar">
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <Link class="nav-item nav-link px-0 me-xl-4" to="javascript:void(0)">
                        <i class="bx bx-menu bx-sm"></i>
                    </Link>
                </div>
                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <ol class="breadcrumb breadcrumb-style2 mb-0">
                    <li><MdManageHistory  class="bx bx-user me-2"/></li>
<li class="breadcrumb-item " style={{padding: '2px 10px'}}>  Manage Membership Plan </li>
                    </ol>
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                        <GrUserAdmin class="bx bx-user me-2" /><span class="align-middle">Administrator</span>
                                                    </li>
                                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <Link class="nav-link dropdown-toggle hide-arrow" to="javascript:void(0);"
                                data-bs-toggle="dropdown">
                                <div class="avatar avatar-online">
                                    <img src={Smallicon} alt class="w-px-40 h-auto rounded-circle" />
                                </div>
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar avatar-online">
                                                    <img src={Smallicon} alt="" class="w-px-40 h-auto rounded-circle"/>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <span class="fw-semibold d-block mt-2">Admin</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/Sitesettings">
                                        <IoMdSettings class="bx bx-cog me-2" />
                                        <span class="align-middle">Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                                                        <Link class="dropdown-item" href="/Signin">
                                    
                                        <LuLogOut class="bx bx-power-off me-2" />
                                        <span class="align-middle">Log Out</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
                    {/* <!-- Toast with Placements --> */}
                    <div class="row  justify-content-between">
<div class="col-md-2">
            <a href="/Paymentadd" class="fw-bold mb-4 btn btn-info"><IoMdAdd class="bx bx-plus-circle" /> Add New</a>
        </div>

<div class="col-md-4">
            <div class="search-container">
        <input type="text" class="search-box form-control" id="searchText" placeholder="Search"/>
        <button class="search-button btn btn-info searchMainBtn" id="commonSearch"><FaSearch class="bx bx-search-alt-2" /></button>
    </div>
        </div>
</div>

    {/* <!-- Basic Layout --> */}
    <div class="card">
        <h5 class="card-header">Membership Plan</h5>
        <div class="table-responsive text-nowrap" id="resultData"><table class="table">
    <caption class="d-none">&nbsp;&nbsp; Result Data</caption>
    <thead>
        <tr class="text-nowrap">
            <th scope="col">Plan Name</th>
            <th scope="col">Plan Amount</th>
            <th scope="col">Plan Validity</th>
            <th scope="col">Plan Description</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
         <tr>            
            <td>Basic</td>
            <td>10</td>
            <td>30 Days</td>
            <td>Lorem 1500s</td>
            <td><a href="/religion/edit/15"><MdModeEdit class="bx bxs-edit"/> Edit</a> /
<a href="/religion/edit/15"> <MdDelete class="bx bxs-edit" />Delete</a></td>
           
        </tr>
        <tr>            
            <td>Sliver</td>
            <td>2500</td>
            <td>60 Days</td>
            <td>Lorem 1500s</td>
            <td><a href="/religion/edit/15"><MdModeEdit class="bx bxs-edit"/> Edit</a> /
<a href="/religion/edit/15"> <MdDelete class="bx bxs-edit" />Delete</a></td>
           
        </tr>
        <tr>            
            <td>Gold</td>
            <td>3000</td>
            <td>120 Days</td>
            <td>Lorem 1500s</td>
            <td><a href="/religion/edit/15"><MdModeEdit class="bx bxs-edit"/> Edit</a> /
<a href="/religion/edit/15"> <MdDelete class="bx bxs-edit" />Delete</a></td>
        </tr>
                
          
            </tbody>
</table>
</div>
        
    </div>
</div>
<input type="hidden" name="_token" value="QmQajZaby0jhK1w27Zi2q032b38lFxQusYolpel3" /><input type="hidden" name="ajaxRequestUrl" id="ajaxRequestUrl" value="https://gloriousmatrimonial.com/admin/success-story/getAjaxPaginationData"/>
<input type="hidden" name="changeStatusUrl" id="changeStatusUrl" value="https://gloriousmatrimonial.com/admin/success-story/changeStatus"/>
<input type="hidden" name="page" id="page" value="1"/>
<footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            <a href="https://gloriousmatrimonial.com/admin/dashboard" class="footer-link">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</a>
                        </div>
                    </div>
                </footer>
                <div class="content-backdrop fade"></div>
            </div>
    </div>
 </div>
 </div> 
    </>
  )
}

export default Payment