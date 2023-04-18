import React from 'react'
import './home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Home = () => {
    return (
        <>
		
<section class="section gradient-banner">

	
	<div class="container">
		<div class="row align-items-center">
			<div class="col-md-6 order-2 order-md-1 text-center text-md-left">
				<h1 class="text-white font-weight-bold mb-4">AI synthetic data that is faster, safer and fairer</h1>
				<p class="text-white mb-5">Transform your production data into privacy-preserving and highly realistic synthetic data. 
                    Share, access and build with data safely across teams, businesses, and international borders.</p>
			</div>
			<div class="col-md-6 text-center order-1 order-md-2">
				<img class="img-fluid" src="images/abc.jpg" alt="ai_image_1"/>
			</div>
		</div>
	</div>
</section>

<section class="section pt-0 position-relative pull-top">
	
				
	<div class="container">
		<div class="rounded shadow p-5 bg-white">
			<div class="row">
                <div class="col-lg-3 col-md-6 mt-5 mt-md-0 text-center">
					<i class="ti-alarm-clock text-primary"></i>
					<h3 class="mt-4 text-capitalize h4">Faster data,faster innovation</h3>
					<p class="regular text-muted">Speed up and unlock access to sensitive data in days instead of months by reducing data compliance bureaucracy.</p>
				</div>
				<div class="col-lg-3 col-md-6 mt-5 mt-md-0 text-center">
					<i class="ti-world text-primary"></i>
					<h3 class="mt-4 text-capitalize h4">Safer data with privacy by design</h3>
					<p class="regular text-muted">Eliminate privacy risk of using or 
                        sharing sensitive data by replacing it with synthetic data that is legally compliant to data protection laws.</p>
				</div>
				<div class="col-lg-3 col-md-6 mt-5 mt-md-0 text-center">
					<i class="ti-shine text-primary"></i>
					<h3 class="mt-4 text-capitalize h4">Fairer data,fairer AI</h3>
					<p class="regular text-muted">Identify and remove bias &imbalances in your data
                          that leads to unethical AI models that breaks data protection laws and damages your brand's reputation.</p>
				</div>
				<div class="col-lg-3 col-md-12 mt-5 mt-lg-0 text-center">
					<i class="ti-thought text-primary"></i>
					<h3 class="mt-4 text-capitalize h4">Anonymised data with maximum utility</h3>
					<p class="regular text-muted">Use privacy-preserving synthetic data that 
                        preserves the structure and correlations of your original data instead of heavily anonymised data with huge information loss.</p>
				</div>
			</div>
		</div>
	
	
	</div>
</section>
<div class="hero">
<section class="feature section pt-0">

			<div class="cube"></div>
			<div class="cube"></div>
			<div class="cube"></div>
			
			
	<div class="container">
		<div class="row">
			<div class="col-lg-6 ml-auto justify-content-center">
			<div class="image-content">
			<img class="img-fluid" src="images/AIP.jpg" alt="iphone"/>
				</div>
			</div>
			
			<div class="col-lg-6 mr-auto align-self-center">
			<div class="cube"></div>
			<div class="cube"></div>
			<div class="cube"></div>
				<div class="feature-content">
				
					<h2>How is <a
							href="/Home">Mavvex</a> Trained?</h2>
					
					<p class="desc">Limitless Data Enhancement</p>
				</div>
            
				<div class="testimonial">
					<p>
						Out-of-the-box features to enhance your data including imbalance correction, bias reduction,
                         10x data augmentation for rare cases and intelligent filling of missing values in your original dataset
					</p>
					</div>
			</div>
		</div>
	</div>
	
	
</section>
</div>
<section class="service section bg-gray">
	<div class="container-fluid p-0">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title">
					<h2>An AI based consultancy and product development enterprise</h2>
					<p><a href="/Home">Mavvex</a> offer services to build deep 
                        technology based products for a variety of domains including healthcare, agriculture and af.</p>
				</div>
			</div>
		</div>
		<div class="row no-gutters">
			<div class="col-lg-6 align-self-center">
				
				<div class="service-thumb left">
					<img class="img-fluid" src="images/AIwork.jpg" alt="ai_image_3"/>
				</div>
			</div>
			<div class="col-lg-5 mr-auto align-self-center">
				<div class="service-box">
					<div class="row align-items-center">
						<div class="col-md-6 col-xs-12">
							
							<div class="service-item">
							
								<i class="ti-bookmark"></i>
								
								<h3>Real User Data</h3>
								
								<p>Upload and preview a dataset from your computer or any connected database</p>
							</div>
						</div>
						<div class="col-md-6 col-xs-12">
							
							<div class="service-item">
							
								<i class="ti-pulse"></i>
								
								<h3>Synthetic Data Engine</h3>
								
								<p>Generate highly representative synthetic data that retains the same 
                                    insights as your original data using state-of-the-art AI generative models</p>
							</div>
						</div>
						<div class="col-md-6 col-xs-12">
							
							<div class="service-item">
								
								<i class="ti-bar-chart"></i>
								
								<h3>Differentially Private Learning</h3>
							
								<p>Get proven privacy guarantees backed by mathematical proofs using 
                                    Differential Privacy to enhance the protection of every individual training record</p>
							</div>
						</div>
						<div class="col-md-6 col-xs-12">
							<div class="service-item">
								<i class="ti-panel"></i>
								<h3>Rigorous Quality Assurance</h3>
								<p>Measure the quality of the synthetic data using rigorous data utility and 
                                    data privacy metrics for audit and compliance</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="Customers">

        <div class="container text-center py-5">
            <h1 class="display-4 text-black animated slideInDown mb-3">Customers</h1>
        </div>
		
{/* <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="fact-item bg-light rounded text-center h-100 p-5">
                        <i class="fa fa-certificate fa-4x text-primary mb-4"></i>
                        <h5 class="mb-3">Years Experience</h5>
                        <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="fact-item bg-light rounded text-center h-100 p-5">
                        <i class="fa fa-users-cog fa-4x text-primary mb-4"></i>
                        <h5 class="mb-3">Team Members</h5>
                        <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="fact-item bg-light rounded text-center h-100 p-5">
                        <i class="fa fa-users fa-4x text-primary mb-4"></i>
                        <h5 class="mb-3">Satisfied Clients</h5>
                        <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="fact-item bg-light rounded text-center h-100 p-5">
                        <i class="fa fa-check fa-4x text-primary mb-4"></i>
                        <h5 class="mb-3">Projects Done</h5>
                        <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

	<div class="hero">
		<div class="cube"></div>
		<div class="cube"></div>
		<div class="cube"></div>
	
	<div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="h-100">
                        <h1 class="display-6 mb-4">Why People Trust Us? Learn About Us!</h1>
                        <p class="mb-4">At Mavvex, we are challenging the notion that data sharing and privacy protection are mutually exclusive. Masters of our craft, relentless executors, and unconventional thinkers - we are building a data and privacy ops platform using state-of-the-art AI generative models with privacy-preserving technologies to help enterprises unlock their data assets without any privacy risks.</p>
                        <div class="row g-4">
                            {/* <div class="col-12">
                                <div class="skill">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">Digital Marketing</p>
                                        <p class="mb-2">85%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="skill">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">SEO & Backlinks</p>
                                        <p class="mb-2">90%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="skill">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">Design & Development</p>
                                        <p class="mb-2">95%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>*/}
                        </div> 
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="img-border">
                        <img class="img-fluid" src="images/ai_5.jpg" alt="Responsive image" width="600px"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
</section>

        </>
    )}
    export default Home