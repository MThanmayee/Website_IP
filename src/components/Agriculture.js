import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Agriculture = () => {
    return (
      <>
      <section class="services section bg-gray">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title">
					<h2><a href="/Home">Mavvex</a> Agriculture</h2>
					<p><a href="/Home">Mavvex</a> makes it easy to stay on top of your Life Style.
					No late tasks.Easy data collection.</p>
				</div> 
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="service-block shadow">
	<i class="ti-dashboard"></i>
	<h3>Lifestyle Development</h3>
	<p>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus</p>
</div>
				<div class="service-block shadow">
	<i class="ti-headphone-alt"></i>
	<h3>Impressive Support</h3>
	<p>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus</p>
</div>
			</div>
			<div class="col-lg-4 m-auto">
				<div class="app-preview">
					<img style={{ width: 350, height: 400 }} src="images/agriculture.jpg" alt="iphone"/>				
				</div>
			</div>
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="service-block shadow">
	<i class="ti-ruler-pencil"></i>
	<h3>UI/UX Design</h3>
	<p>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus</p>
</div>
				
				<div class="service-block shadow">
	
	<i class="ti-stats-up"></i>
	<h3>Performance Marketing</h3>
	<p>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus</p>
</div>
			</div>
		</div>
	</div>
</section>
      </>
    )
}
export default Agriculture