import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Contact = () => {
  return (
    <>
    <section class="section page-title">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 m-auto">
				<h1>Contact Us</h1>
				<p>AI applications have led to remarkable breakthroughs in the finance industry both for businesses and their customers, which will only increase over time. Using generative AI models to create synthetic data, betterdata allows you to improve data-driven processes, reduce costs with near-instant data access routines and increase revenue streams.</p>
			</div>
		</div>
	</div>
</section>
<section class="address">
	<div class="container">
		<div class="row">
			<div class="col-lg-5 align-self-center">
				<div class="block">
					<div class="address-block text-center mb-5">
						<div class="icon">
							<i class="ti-mobile"></i>
						</div>
						<div class="details">
							<h3>(00) 789 456 7890 (USA)</h3>
							<h3>(88) 016 725 0455 (UK)</h3>
						</div>
					</div>
					<div class="address-block text-center">
						<div class="icon">
							<i class="ti-map-alt"></i>
						</div>
						<div class="details">
							<h3>36. St Michael’s St, Oxford OX1, UK</h3>
							<h3>123, Pennsylvania, USA</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-7 mt-5 mt-lg-0">
				<div class="google-map">
					<div id="map_canvas" data-latitude="51.507351" data-longitude="-0.127758"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="contact-form section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h2 class="mb-5 text-center">Drop us a mail</h2>
			</div>
			<div class="col-12">
				<form action="">
					<div class="row">
					
						<div class="col-md-6 mb-2">
							<input class="form-control main" type="text" placeholder="Name" required/>
						</div>
						<div class="col-md-6 mb-2">
							<input class="form-control main" type="email" placeholder="Your Email Address" required/>
						</div>
						<div class="col-md-12 mb-2">
							<input class="form-control main" type="text" placeholder="Subject" required/>
						</div>
						<div class="col-md-12 mb-2">
							<textarea class="form-control main" name="message" rows="10" placeholder="Your Message"></textarea>
						</div>
						<div class="col-12 text-right">
							<button class="btn btn-main-md">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

    </>
  )
}
export default Contact