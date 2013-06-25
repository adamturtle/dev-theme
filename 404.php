<?php get_header(); ?>
			
			<div id="content" class="clearfix row-fluid">
			
				<div id="main" class="span12 clearfix" role="main">

					<article id="post-not-found" class="clearfix">
						
						<header>

							<h1><?php _e("Page not found","bonestheme"); ?></h1>
															
						</header> <!-- end article header -->
					
						<section class="post_content">
							
							<p><?php _e("Sorry, the page you were looking for cannot be found.","bonestheme"); ?></p>

							<div class="row-fluid">
								<div class="span12">
									<?php get_search_form(); ?>
								</div>
							</div>
					
						</section> <!-- end article section -->
						
						<footer>
							
						</footer> <!-- end article footer -->
					
					</article> <!-- end article -->
			
				</div> <!-- end #main -->
    
			</div> <!-- end #content -->

<?php get_footer(); ?>