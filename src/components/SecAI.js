import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const SecAI = () => {
    return (
      <>
      <section class="services section bg-gray">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title">
					<h2><a href="/Home">Mavvex</a> Security and Privacy in AI</h2>
					<p><a href="/Home">Mavvex</a> makes it easy to stay on top of your Life Style.
					No late tasks.Easy data collection.</p>
				</div> 
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="service-block shadow">
	<i class="ti-dashboard"></i>
	<h3>Robust anomaly detection</h3>
	<p>Anomaly detection algorithms are used to identify network defects. Due to lack of good-quality data, 
		the accuracy of such algorithms is severely affected.We offer improved training for 
		predictive AI models by automatically classifying the different types of anomalies and synthesising new data accordingly. </p>
</div>
				<div class="service-block shadow">
	<i class="ti-headphone-alt"></i>
	<h3>Impressive Support</h3>
	<p>Synthetic data is generated using a combination of data processing pipelines 
		and AI deep generative models such as GANs and autoencoders applied to tabular data.</p>
</div>
			</div>
			<div class="col-lg-4 m-auto">
				<div class="app-preview">
					<img style={{ width: 350, height: 450 }} src="images/secpAI.jpg" alt="iphone"/>				
				</div>
			</div>
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="service-block shadow">
	<i class="ti-ruler-pencil"></i>
	<h3>Data monetisation</h3>
	<p>Data is the new currency and the value of information assets is becoming more lucrative with time. 
		Mavvex generates synthetic data that is as-good-as real data, 
		has the same statistical and business value, and is not traceable back to the real users.</p>
</div>
				
				<div class="service-block shadow">
	
	<i class="ti-stats-up"></i>
	<h3>Performance Marketing</h3>
	<p>Synthetic data is generated using a combination of data processing 
		pipelines and AI deep generative models such as GANs and autoencoders applied to tabular data.</p>
</div>
			</div>
		</div>
	</div>
</section>
      </>
    )
}
export default SecAI