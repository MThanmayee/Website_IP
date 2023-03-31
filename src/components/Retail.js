import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Retail = () => {
    return (
      <>
      <section class="services section bg-gray">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title">
					<h2><a href="/Home">Mavvex</a> Retail</h2>
					<p><a href="/Home">Mavvex</a> makes it easy to stay on top of your Life Style.
					No late tasks.Easy data collection.</p>
				</div> 
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="service-block shadow">
	<i class="ti-dashboard"></i>
	<h3>Customer churn model</h3>
	<p>Predicting and reducing user churn rate with targeted recommendations and offers is a 
		common strategy of retail companies as retaining customers is a key concern for them. </p>
</div>
				<div class="service-block shadow">
	<i class="ti-headphone-alt"></i>
	<h3>Predictive sale analytics</h3>
	<p>Retail businesses usually forecast their revenue goals by predicting when users are most likely to buy a certain product. 
		Such predictive analytics can boost a business multifold such as stock optimization and 
		resource management can be effectively done by predicting user sentiment for a certain period of time. </p>
</div>
			</div>
			<div class="col-lg-4 m-auto">
				<div class="app-preview">
					<img style={{ width: 350, height: 500 }} src="images/retail.jpg" alt="iphone"/>				
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
	<h3>Recommendation systems that actually work</h3>
	<p>Advanced clustering algorithms power recommendation systems and need huge volumes of user data for profiling. 
		A recommendation system also 
		requires AI models to be properly fine-tuned and capture complex correlations between different user profiles.</p>
</div>
			</div>
		</div>
	</div>
</section>
      </>
    )
}
export default Retail