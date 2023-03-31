import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const AboutUs = () => {
  return (
    <>
    <section class="section page-title">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 m-auto">
				<h1>About Mavvex</h1>
				<p>AI synthetic data that is faster, safer and fairer. Convert sensitive data into highly realistic synthetic data that has no privacy leakage risk and is fully compliant with the strictest data protection regulations.</p>
			</div>
		</div>
	 </div>
   </section>
   <section class="section about p-0">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 align-self-center">
				<div class="content text-center text-lg-left">
					
					<h2>This is our story.</h2>
					
					<p>We’re here for those who refuse to settle. Who never stop moving forwards. Who continue to search for new ideas and better experiences in everything they do.
					Because today’s hyper-connected world deserves a financial partner just as progressive.One that adapts to your needs, gives you control and constantly pushes you into new exciting spaces.</p>
				</div>
			</div>
			<div class="col-lg-6 mt-4 mt-lg-0">
				
				<div class="about-slider">
					
					<div class="item">
						<img class="w-100" src="images/about/story-slider-01.jpg" alt="slider-image"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title mb-0">
					<h2>Why we created <a href="/Home">	Mavvex</a></h2>
					<p>AI applications have led to remarkable breakthroughs in the finance industry both for businesses and their 
						customers,
						 which will only increase over time. Using generative AI models to create synthetic data, 
						 Mavvex allows you to improve data-driven processes, reduce costs with near-instant data access routines and 
						 increase revenue streams.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section create-stories pt-0">
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<div class="block">
					
					<img class="img-fluid" src="images/blog/post-01.jpg" alt="Story-Image"/>
					
					<h3>Our Story</h3>
					
					<p>AI synthetic data that is faster, safer and fairer. Convert sensitive data into highly realistic synthetic data that has no privacy leakage risk and is fully compliant with the strictest data protection regulations. </p>
				</div>
			</div>
			<div class="col-lg-6 mt-5 mt-lg-0">
				<div class="block">
					
					<img class="img-fluid" src="images/blog/post-03.jpg" alt="Story-Image"/>
					
					<h3>What we do</h3>
					
					<p>AI synthetic data that is faster, safer and fairer. Convert sensitive data into highly realistic synthetic data that has no privacy leakage risk and is fully compliant with the strictest data protection regulations.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section quotes pt-0">
	<div class="container">
		<div class="row">
			<div class="col-10 m-auto text-center">
				<div class="quote-slider">
					<div class="item mb-4">
						
						<h2>Behind every great product, there is a great mind.</h2>
						
						<cite class="ml-0">-TechCrunch</cite>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section clients bg-gray">
	<div class="container">
		<div class="row">
			<div class="col-10 m-auto text-center">
				<h3>Featured In</h3>
				<div class="client-slider">
					<div class="item mb-4">
						<img class="m-auto" src="images/clients/business-finder.png" alt="business-finder"/>
					</div>
					<div class="item mb-4">
						<img class="m-auto" src="images/clients/forbes.png" alt="forbes"/>
					</div>
					<div class="item mb-4">
						<img class="m-auto" src="images/clients/venture-beat.png" alt="venture-beat"/>
					</div>
					<div class="item mb-4">
						<img class="m-auto" src="images/clients/tech-crunch-new.png" alt="TechCrunch"/>
					</div>
					<div class="item mb-4">
						<img class="m-auto" src="images/clients/forbes.png" alt="forbes"/>
					</div>
					<div class="item mb-4">
						<img class="m-auto" src="images/clients/venture-beat.png" alt="venture-beat"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </>
  )
}
export default AboutUs