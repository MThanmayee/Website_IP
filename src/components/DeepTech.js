import React from 'react'
const DeepTech = () => {
    return (
        <>
        <section class="banner">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 m-auto">
				<div class="block text-center">
					<h1>Deep Technology Product Development</h1>
					<p>Replace sensitive and low quality dummy production data, <br/>
					with highly realistic synthetic data to enable your team to iterate and innovate at speed.
					</p>
					<iframe height="480" width="500"  
src="https://www.youtube.com/embed/jrkvirglgaQ?autoplay=1">
</iframe>

					{/* <video width="320" height="240" controls="controls">
    				<source src="https://www.youtube.com/embed/jrkvirglgaQ?autoplay=1" type="video/mp4" />
  					</video> */}
					{/* <div class="video">
						<img class="img-fluid shadow" src="images/thumbs/promo-video-thumbnail.jpg" alt="video-thumbnail"/>
						<div class="video-button video-box">
							<a href="javascript:void(0)">
								<i class="ti-control-play" data-video="https://www.youtube.com/embed/jrkvirglgaQ?autoplay=1"></i>
							</a>
						</div> */}
					{/* </div> */}
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
export default DeepTech