import React from 'react'
const DataPrivacy = () => {
    return (
        <>
        <section class="banner">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 m-auto">
				<div class="block text-center">
					<h1>Enabling Data Privacy in Machine Learning Model</h1>
					<p>AI engine screens your data for potential threats to help you make a more informed decision 
					on your most sensitive data and provide accountability to external auditors.
					</p>
					<iframe height="480" width="500"  
src="https://www.youtube.com/embed/jrkvirglgaQ?autoplay=1">
</iframe>
					{/* <div class="video">
						<img class="img-fluid shadow" src="images/thumbs/promo-video-thumbnail.jpg" alt="video-thumbnail"/>
						<div class="video-button video-box">
							<a href="javascript:void(0)">
								<i class="ti-control-play" data-video="https://www.youtube.com/embed/jrkvirglgaQ?autoplay=1"></i>
							</a>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	</div>
    <section class="app-features section">
	<div class="container">
		<div class="row">
				<div class="col-lg-4 col-md-4">
				<div class="app-feature text-center">
					<h3>Synthetic Data Engine</h3>
					<p>Generate highly representative synthetic data that retains the same insights as your original data using state-of-the-art AI generative models.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-4">
				<div class="app-feature text-center">
					<h3>Differential Private Learning</h3>
					<p>Get proven privacy guarantees backed by mathematical proofs using Differential Privacy to enhance the protection of every individual training record</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-4">
				<div class="app-feature text-center">
					<h3>Quality Assurance</h3>
					<p>Measure the quality of the synthetic data using rigorous data utility and data privacy metrics for audit and compliance.</p>
				</div>
			</div>
		</div>
	</div>
</section>
</section>

        </>
    )
}
export default DataPrivacy