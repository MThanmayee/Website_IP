import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Publication = () => {
    return (
      <>
      <section class="section page-title">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 m-auto">
				
				<h1>Publications</h1>
				
				<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders.</p>
			</div>
		</div>
	</div>
</section>
<section class="privacy section pt-0">
	<div class="container">
		<div class="row">
			<div class="col-lg-3">
				<nav class="privacy-nav">
					<ul>
						<li><AnchorLink class="nav-link scrollTo" href="#userLicense" className="scrollTo">Publication1</AnchorLink></li>
						<li><AnchorLink class="nav-link scrollTo" href="#disclaimer" className="scrollTo">Publication2</AnchorLink></li>
						<li><AnchorLink class="nav-link scrollTo" href="#limitations" className="scrollTo">Publication3</AnchorLink></li>
						<li><AnchorLink class="nav-link scrollTo" href="#governigLaw" className="scrollTo">Publication4</AnchorLink></li>
					</ul>
				</nav>
			</div>
			<div class="col-lg-9">
				<div class="block">
					
					<div id="userLicense" class="policy-item">
						<div class="title">
							<h3>Publication1</h3>
						</div>
						<div class="policy-details">
							<p>Speed up and unlock access to sensitive data in days instead of months by reducing data compliance bureaucracy.</p>
							<p>Eliminate privacy risk of using or sharing sensitive data by replacing it with synthetic data that is legally compliant to data protection laws.</p>
						</div>
					</div>
				
					<div id="disclaimer" class="policy-item">
						<div class="title">
							<h3>Publication2</h3>
						</div>
						<div class="policy-details">
							<p>Eliminate privacy risk of using or sharing sensitive data by replacing it with synthetic data that is legally compliant to data protection laws.Identify and remove bias & imbalances in your data that leads to unethical AI models that breaks data protection laws and damages your brand's reputation.</p>
						</div>
					</div>
					
					<div id="limitations" class="policy-item">
						<div class="title">
							<h3>Publication3</h3>
						</div>
						<div class="policy-details">
							<p>Identify and remove bias & imbalances in your data that leads to unethical AI models that breaks data protection laws and damages your brand's reputation.Speed up and unlock access to sensitive data in days instead of months by reducing data compliance bureaucracy.</p>
						</div>
					</div>
					
					<div id="governigLaw" class="policy-item">
						<div class="title">
							<h3>Publication4</h3>
						</div>
						<div class="policy-details">
							<p>Use privacy-preserving synthetic data that preserves the structure and correlations of your original data instead of heavily anonymised data with huge information loss.</p>
							<p>Identify and remove bias & imbalances in your data that leads to unethical AI models that breaks data protection laws and damages your brand's reputation.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
      </>
    )
}
export default Publication