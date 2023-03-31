import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  const Blog = () => {
    return (
      <>
<section class="section page-title">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 m-auto">
				
				<h1>Blog</h1>
				<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders.</p>
			</div>
		</div>
	</div>
</section>
<section class="section featured-article">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<article class="featured">
					
					<div class="image">
						<a href="blog-single.html"><img class="img-fluid" src="images/feature/featured-article.jpg" alt="featured-article"/></a>
					</div>
					
					<div class="content">
						
						<h2><a href="blog-single.html">Introducing New Features</a></h2>
						
						<ul class="list-inline post-tag">
							<li class="list-inline-item">
								<img class="img-fluid" src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
							</li>
							<li class="list-inline-item">
								<a href="#">Thomas Johnson</a>
							</li>
							<li class="list-inline-item">
								August 8, 2017
							</li>
						</ul>
						<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders.</p>
						<a class="btn btn-main-sm" href="blog-single.html">Read more</a>
					</div>
				</article>
			</div>
		</div>
	</div>
</section>

<section class="post-grid section pt-0">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-6">
				
<article class="post-sm">

	<div class="post-thumb">
		<a href="blog-single.html"><img class="w-100" src="images/blog/post-01.jpg" alt="Post-Image"/></a>		
	</div>
	<div class="post-title">
		<h3><a href="blog-single.html">Innovation distinguishes between a leader and a follower.</a></h3>
	</div>
	
	<div class="post-meta">
		<ul class="list-inline post-tag">
			<li class="list-inline-item">
				<img src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
			</li>
			<li class="list-inline-item">
				<a href="#">Thomas Johnson</a>
			</li>
			<li class="list-inline-item">
				August 8, 2017
			</li>
		</ul>
	</div>

	<div class="post-details">
		<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders. </p>
	</div>
</article>
			</div>
			<div class="col-lg-4 col-md-6">
				
<article class="post-sm">
	
	<div class="post-thumb">
		<a href="blog-single.html"><img class="w-100" src="images/blog/post-02.jpg" alt="Post-Image"/></a>		
	</div>
	
	<div class="post-title">
		<h3><a href="blog-single.html">Design is not just what it looks like and feels like. Design is how it works.</a></h3>
	</div>
	
	<div class="post-meta">
		<ul class="list-inline post-tag">
			<li class="list-inline-item">
				<img src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
			</li>
			<li class="list-inline-item">
				<a href="#">Thomas Johnson</a>
			</li>
			<li class="list-inline-item">
				August 8, 2017
			</li>
		</ul>
	</div>

	<div class="post-details">
		<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders.</p>
	</div>
</article>
			</div>
			<div class="col-lg-4 col-md-6">
				
<article class="post-sm">
	
	<div class="post-thumb">
		<a href="blog-single.html"><img class="w-100" src="images/blog/post-03.jpg" alt="Post-Image"/></a>		
	</div>
	
	<div class="post-title">
		<h3><a href="blog-single.html">Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders.</a></h3>
	</div>
	
	<div class="post-meta">
		<ul class="list-inline post-tag">
			<li class="list-inline-item">
				<img src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
			</li>
			<li class="list-inline-item">
				<a href="#">Thomas Johnson</a>
			</li>
			<li class="list-inline-item">
				August 8, 2017
			</li>
		</ul>
	</div>
	
	<div class="post-details">
		<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders. </p>
	</div>
</article>
			</div>
			<div class="col-lg-4 col-md-6">
				
<article class="post-sm">
	
	<div class="post-thumb">
		<a href="blog-single.html"><img class="w-100" src="images/blog/post-01.jpg" alt="Post-Image"/></a>		
	</div>
	
	<div class="post-title">
		<h3><a href="blog-single.html">Innovation distinguishes between a leader and a follower.</a></h3>
	</div>
	
	<div class="post-meta">
		<ul class="list-inline post-tag">
			<li class="list-inline-item">
				<img src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
			</li>
			<li class="list-inline-item">
				<a href="#">Thomas Johnson</a>
			</li>
			<li class="list-inline-item">
				August 8, 2017
			</li>
		</ul>
	</div>
	
	<div class="post-details">
		<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders. </p>
	</div>
</article>
			</div>
			<div class="col-lg-4 col-md-6">
				
<article class="post-sm">
	
	<div class="post-thumb">
		<a href="blog-single.html"><img class="w-100" src="images/blog/post-02.jpg" alt="Post-Image"/></a>		
	</div>
	
	<div class="post-title">
		<h3><a href="blog-single.html">Design is not just what it looks like and feels like. Design is how it works.</a></h3>
	</div>
	
	<div class="post-meta">
		<ul class="list-inline post-tag">
			<li class="list-inline-item">
				<img src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
			</li>
			<li class="list-inline-item">
				<a href="#">Thomas Johnson</a>
			</li>
			<li class="list-inline-item">
				August 8, 2017
			</li>
		</ul>
	</div>
	
	<div class="post-details">
		<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders. </p>
	</div>
</article>
			</div>
			<div class="col-lg-4 col-md-6">
				
<article class="post-sm">
	
	<div class="post-thumb">
		<a href="blog-single.html"><img class="w-100" src="images/blog/post-03.jpg" alt="Post-Image"/>
            </a>		
	</div>

	<div class="post-title">
		<h3><a href="blog-single.html">Design is not just what it looks like and feels like. Design is how it works.</a></h3>
	</div>
	
	<div class="post-meta">
		<ul class="list-inline post-tag">
			<li class="list-inline-item">
				<img src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
			</li>
			<li class="list-inline-item">
				<a href="#">Thomas Johnson</a>
			</li>
			<li class="list-inline-item">
				August 8, 2017
			</li>
		</ul>
	</div>

	<div class="post-details">
		<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders. </p>
	</div>
</article>
			</div>
			<div class="col-12">
				
<div class="cta-community shadow">
	<div class="row align-items-center">
		<div class="col-lg-9 text-center text-lg-left">
			<div class="content">
				
				<h2>Ready To Join Our Community?</h2>
				
				<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders. </p>
			</div>
		</div>
		<div class="col-lg-3 text-center text-lg-right mt-4 mt-lg-0">
			<div class="action-button">
				
				<a href="/ContactUs" class="btn btn-main-sm">Join now</a>
			</div>
		</div>
	</div>
</div>
			</div>
			<div class="col-lg-4 col-md-6">
				
<article class="post-sm">
	
	<div class="post-thumb">
		<a href="blog-single.html"><img class="w-100" src="images/blog/post-01.jpg" alt="Post-Image"/></a>		
	</div>
	
	<div class="post-title">
		<h3><a href="blog-single.html">Innovation distinguishes between a leader and a follower.</a></h3>
	</div>
	
	<div class="post-meta">
		<ul class="list-inline post-tag">
			<li class="list-inline-item">
				<img src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
			</li>
			<li class="list-inline-item">
				<a href="#">Thomas Johnson</a>
			</li>
			<li class="list-inline-item">
				August 8, 2017
			</li>
		</ul>
	</div>
	
	<div class="post-details">
		<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders.</p>
	</div>
</article>
			</div>
			<div class="col-lg-4 col-md-6">
				
<article class="post-sm">
	
	<div class="post-thumb">
		<a href="blog-single.html"><img class="w-100" src="images/blog/post-02.jpg" alt="Post-Image"/></a>		
	</div>
	
	<div class="post-title">
		<h3><a href="blog-single.html">Design is not just what it looks like and feels like. Design is how it works.</a></h3>
	</div>
	
	<div class="post-meta">
		<ul class="list-inline post-tag">
			<li class="list-inline-item">
				<img src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
			</li>
			<li class="list-inline-item">
				<a href="#">Thomas Johnson</a>
			</li>
			<li class="list-inline-item">
				August 8, 2017
			</li>
		</ul>
	</div>
	
	<div class="post-details">
		<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders. </p>
	</div>
</article>
			</div>
			<div class="col-lg-4 col-md-6">
				
<article class="post-sm">
	
	<div class="post-thumb">
		<a href="blog-single.html"><img class="w-100" src="images/blog/post-03.jpg" alt="Post-Image"/></a>		
	</div>
	
	<div class="post-title">
		<h3><a href="blog-single.html">Design is not just what it looks like and feels like. Design is how it works.</a></h3>
	</div>
	
	<div class="post-meta">
		<ul class="list-inline post-tag">
			<li class="list-inline-item">
				<img src="images/testimonial/feature-testimonial-thumb.jpg" alt="author-thumb"/>
			</li>
			<li class="list-inline-item">
				<a href="#">Thomas Johnson</a>
			</li>
			<li class="list-inline-item">
				August 8, 2017
			</li>
		</ul>
	</div>
	
	<div class="post-details">
		<p>Transform your production data into privacy-preserving and highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders. </p>
	</div>
</article>
			</div>
			<div class="col-12">
				
				<nav class="pagination-nav">
				  <ul class="pagination">
				    <li class="page-item active"><a class="page-link" href="#">1</a></li>
				    <li class="page-item"><a class="page-link" href="#">2</a></li>
				    <li class="page-item"><a class="page-link" href="#">3</a></li>
				    <li class="page-item">
				      <a class="page-link" href="#" aria-label="Next">
				        <span aria-hidden="true"><i class="ti-angle-right"></i></span>
				        <span class="sr-only">Next</span>
				      </a>
				    </li>
				  </ul>
				</nav>
			</div>
		</div>
	</div>
</section>

      </>
    )
  }
  export default Blog