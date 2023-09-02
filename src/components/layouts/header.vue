<template>
  <span>
    <header>
      <div class="header-area header-transparent">
        <div class="main-header">
          <div class="header-top d-none d-sm-block">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div
                    class="d-flex justify-content-between flex-wrap align-items-center"
                  >
                    <div class="header-info-left">
                      <ul>
                        <li>+8802-4896 3197</li>
                        <li>
                          <a href="" class="__cf_email__">
                            corporationcandid@gmail.com
                          </a>
                        </li>
                        <li>Sun - Fri (10AM - 7PM)</li>
                      </ul>
                    </div>
                    <div class="header-info-right d-none d-md-block">
                      <ul class="header-social">
                        <li>
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-youtube"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-bottom header-sticky">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-2 col-lg-2">
                  <div class="logo">
                    <a href=""
                      ><img :src="'front-end/img/logo/Candid Logo.png'" alt
                    /></a>
                  </div>
                </div>
                <div class="col-xl-10 col-lg-10">
                  <div class="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="about">About</router-link></li>

                        <li>
                          <router-link to="/">Products</router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="transformer-oil"
                                >Transformer Oil</router-link
                              >
                            </li>
                            <li><a href="">Liquid Paraffin </a></li>
                            <li><a href="">Wood Polish</a></li>
                            <li><a href="">Glycerine </a></li>
                            <li><a href="">Sorbitol </a></li>
                            <li><a href="">Methylene Chloride </a></li>
                            <li><a href="">Lubricants</a></li>
                            <li><a href="">Grease </a></li>
                            <li><a href="">Mulch Film</a></li>
                            <li><a href="">Vegetable for Export </a></li>
                            <li><a href=""> Fish for Export</a></li>
                          </ul>
                        </li>

                        <li>
                          <router-link to="/">Business</router-link>
                          <ul class="submenu">
                            <li><a href="">Import</a></li>
                            <li><a href="">Export</a></li>
                            <li><a href="">Wood Polish Manufacturing</a></li>
                            <li><a href="">Petroleum Products.</a></li>
                            <li><a href="">Industrial Lubricants</a></li>
                            <li><a href="">Agricultural Products</a></li>
                            <li>
                              <a href="">Fish and Vegetable Processing</a>
                            </li>
                            <li><a href="">Shipping Line Business </a></li>
                            <li><a href="">Freight Forwarder </a></li>
                            <li>
                              <a href="">Clearing and Forwarding Agent (C&F)</a>
                            </li>
                            <li><a href="">Logistics Support.</a></li>
                          </ul>
                        </li>

                        <li>
                          <router-link to="/">Our Concern</router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="candid-oil-bangladesh-opdc"
                                >Candid Oil Bangladesh OPC.</router-link
                              >
                            </li>
                            <li>
                              <router-link to="candid-wood-polish-industries"
                                >Candid Wood Polish Industries</router-link
                              >
                            </li>
                            <li>
                              <router-link to="candid-corporation"
                                >Candid Corporation
                              </router-link>
                            </li>
                            <li>
                              <router-link to="candid-corporation-bangladesh"
                                >Candid Corporation Bangladesh
                              </router-link>
                            </li>
                            <li>
                              <router-link to="rubicon-multi-product-industry"
                                >Rubicon Multi Product Industry</router-link
                              >
                            </li>
                            <li>
                              <router-link to="rubicon-petrolium"
                                >Rubicon Petroleum</router-link
                              >
                            </li>
                            <li>
                              <router-link to="rubicon-corporation"
                                >Rubicon Corporation
                              </router-link>
                            </li>
                            <li>
                              <router-link to="rubicon-agri-support"
                                >Rubicon AgriSupport
                              </router-link>
                            </li>
                            <li>
                              <router-link to="commitment-shipping-line"
                                >Commitment Shipping Line
                              </router-link>
                            </li>
                            <li>
                              <router-link to="commitment-international"
                                >Commitment International
                              </router-link>
                            </li>
                            <li>
                              <router-link to="nexus-logistics">
                                Nexus Logistics</router-link
                              >
                            </li>
                          </ul>
                        </li>

                        <li><router-link to="career">Careers</router-link></li>
                        <li><router-link to="contact">Contact</router-link></li>
                        <li>
                          <div class="nav-search search-switch">
                            <i class="ti-search"></i>
                          </div>
                        </li>
                        <li>
                          <div class="header-right-btn f-right ml-15">
                            <router-link to="/" class="header-btn"
                              >Get Free Quote</router-link
                            >
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div class="col-12">
                  <div class="mobile-device-menu">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <div class="container-fluid">
                        <router-link to="/" class="navbar-brand">
                        	<img :src="'front-end/img/logo/Candid Logo.png'"/>
                        </router-link>
                        <button
                          class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent2"
                          aria-controls="navbarSupportedContent2"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="navbar-toggler-icon">
                          	 <i class="fa fa-bars"></i>
                          </span>
                        </button>
                        <div
                          class="collapse navbar-collapse"
                          id="navbarSupportedContent2"
                        >
                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link
                              >
                            </li>
                            <li class="nav-item">
                              <router-link to="/about" class="nav-link">About</router-link>
                            </li>
                            <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                              </a>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="dropdown-item">
                                    <router-link to="/transformer-oil">Transformer Oil</router-link>
                                </li>
	                            <li class="dropdown-item"><a href="">Liquid Paraffin </a></li>
	                            <li class="dropdown-item"><a href="">Wood Polish</a></li>
	                            <li class="dropdown-item"><a href="">Glycerine </a></li>
	                            <li class="dropdown-item"><a href="">Sorbitol </a></li>
	                            <li class="dropdown-item"><a href="">Methylene Chloride </a></li>
	                            <li class="dropdown-item"><a href="">Lubricants</a></li>
	                            <li class="dropdown-item"><a href="">Grease </a></li>
	                            <li class="dropdown-item"><a href="">Mulch Film</a></li>
	                            <li class="dropdown-item"><a href="">Vegetable for Export </a></li>
	                            <li class="dropdown-item"><a href=""> Fish for Export</a></li>
                              </ul>
                            </li>

                             <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Business
                              </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="dropdown-item"><a href="">Import</a></li>
                            <li class="dropdown-item"><a href="">Export</a></li>
                            <li class="dropdown-item"><a href="">Wood Polish Manufacturing</a></li>
                            <li class="dropdown-item"><a href="">Petroleum Products.</a></li>
                            <li class="dropdown-item"><a href="">Industrial Lubricants</a></li>
                            <li class="dropdown-item"><a href="">Agricultural Products</a></li>
                            <li class="dropdown-item">
                              <a href="">Fish and Vegetable Processing</a>
                            </li>
                            <li class="dropdown-item"><a href="">Shipping Line Business </a></li>
                            <li class="dropdown-item"><a href="">Freight Forwarder </a></li>
                            <li class="dropdown-item">
                              <a href="">Clearing and Forwarding Agent (C&F)</a>
                            </li>
                            <li class="dropdown-item"><a href="">Logistics Support.</a></li>
                          </ul>
                        </li>

                        <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Our Concern
                              </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="dropdown-item">
                              <router-link to="candid-oil-bangladesh-opdc"
                                >Candid Oil Bangladesh OPC.</router-link
                              >
                            </li>
                            <li class="dropdown-item">
                              <router-link to="candid-wood-polish-industries"
                                >Candid Wood Polish Industries</router-link
                              >
                            </li>
                            <li class="dropdown-item">
                              <router-link to="candid-corporation"
                                >Candid Corporation
                              </router-link>
                            </li>
                            <li class="dropdown-item">
                              <router-link to="candid-corporation-bangladesh"
                                >Candid Corporation Bangladesh
                              </router-link>
                            </li>
                            <li class="dropdown-item">
                              <router-link to="rubicon-multi-product-industry"
                                >Rubicon Multi Product Industry</router-link
                              >
                            </li>
                            <li class="dropdown-item">
                              <router-link to="rubicon-petrolium"
                                >Rubicon Petroleum</router-link
                              >
                            </li>
                            <li class="dropdown-item">
                              <router-link to="rubicon-corporation"
                                >Rubicon Corporation
                              </router-link>
                            </li>
                            <li class="dropdown-item">
                              <router-link to="rubicon-agri-support"
                                >Rubicon AgriSupport
                              </router-link>
                            </li>
                            <li class="dropdown-item">
                              <router-link to="commitment-shipping-line"
                                >Commitment Shipping Line
                              </router-link>
                            </li>
                            <li class="dropdown-item">
                              <router-link to="commitment-international"
                                >Commitment International
                              </router-link>
                            </li>
                            <li class="dropdown-item">
                              <router-link to="nexus-logistics">
                                Nexus Logistics</router-link
                              >
                            </li>
                          </ul>
                        </li>

                          <li class="nav-item">
                              <router-link to="/career" class="nav-link">Careers</router-link>
                            </li>

                              <li class="nav-item">
                              <router-link to="/contact" class="nav-link">Contact</router-link>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </span>
</template>


<script setup>
   $(document).on('click', '.navbar-nav>li>a, .navbar-brand, .dropdown-menu>a, .dropdown-item>a', function (e) {
      if ( $(e.target).is('a') && $(e.target).attr('class') != 'nav-link dropdown-toggle' ) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  
</script>

<style scoped>
.mobile-device-menu{
	display: none;
}
.mobile-device-menu ul li a {
  color: #000;
}

@media only screen and (min-width:320px) and (max-width:575px){
	.mobile-device-menu{
	   display: block;
    }
    .mobile-device-menu a img{
    	width:150px;
    }
    .navbar-toggler {
    	padding: 5px 15px;
		background: transparent;
		border: 1px solid rgba(0,0,0,.2);
		color: #000;
    }
    .logo a img{
    	display: none;
    }
}
</style>
