import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Healthcare = () => {
    return (
      <>
      <section class="services section bg-gray">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title">
					<h2><a href="/Home">Mavvex</a> Healthcare</h2>
					<p><a href="/Home">Mavvex</a> makes it easy to stay on top of your Life Style.
						No late tasks.Easy data collection.</p>
				</div> 
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="service-block shadow">
	<i class="ti-dashboard"></i>
	<h3>Instant access to patients' data</h3>
	<p>Data could be shared across different departments and organisations while preserving patient privacy, many applications can be unlocked. </p>
</div>
				<div class="service-block shadow">
	<i class="ti-headphone-alt"></i>
	<h3>Data augmentation</h3>
	<p>In medical institutes that are highly regulated, data often exists in isolated silos and is insufficient to train an AI model that can offer good accuracy.  </p>
</div>
			</div>
			<div class="col-lg-4 m-auto">
				<div class="app-preview">
					<img style={{ width: 350, height: 400 }} src="images/health.jpg" alt="iphone"/>				
				</div>
			</div>
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="service-block shadow">
	<i class="ti-ruler-pencil"></i>
	<h3>Bias Mitigation</h3>
	<p>ML models are being frequently used for diagnosis of different diseases in the clinical domain. Your Datasets can be balanced to ensure that your AI models are not trained on the wrong data.</p>
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
export default Healthcare