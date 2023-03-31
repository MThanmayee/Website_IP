import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const ConvAI = () => {
    return (
      <>
      <section class="services section bg-gray">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title">
					<h2><a href="/Home">Mavvex</a> Conversational AI</h2>
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
	<p>Out-of-the-box features to enhance your data including imbalance correction, bias reduction, 
		10x data augmentation for rare cases and intelligent filling of missing values in your original dataset</p>
</div>
				<div class="service-block shadow">
	<i class="ti-headphone-alt"></i>
	<h3>Impressive Support</h3>
	<p>Out-of-the-box features to enhance your data including imbalance correction, bias reduction,
		 10x data augmentation for rare cases and intelligent filling of missing values in your original dataset</p>
</div>
			</div>
			<div class="col-lg-4 m-auto">
				<div class="app-preview">
					<img style={{ width: 350, height: 400 }} src="images/convAI.png" alt="iphone"/>				
				</div>
			</div>
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="service-block shadow">
	<i class="ti-ruler-pencil"></i>
	<h3>UI/UX Design</h3>
	<p>Our models can run on CPU alone although we recommend GPU acceleration to speed up the AI model training and generation process.
As a reference, a consumer grade GPU (e.g. Nvidia GeForce GTX 1080 Ti 11GB) takes 5 minutes to process a 10,000 row and 10 feature dataset.</p>
</div>
				
				<div class="service-block shadow">
	
	<i class="ti-stats-up"></i>
	<h3>Performance Marketing</h3>
	<p>Out-of-the-box features to enhance your data including imbalance correction, bias reduction, 
		10x data augmentation for rare cases and intelligent filling of missing values in your original dataset</p>
</div>
			</div>
		</div>
	</div>
</section>
      </>
    )
}
export default ConvAI