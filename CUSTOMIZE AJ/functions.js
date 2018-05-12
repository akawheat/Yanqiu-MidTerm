$( document ).ready(function() {

	// For Add Class //

		// Base Color //
		$( ".btn-base-red" ).click(function() {
			$( "#base-red" ).addClass( "base-red" );
		});

		$( ".btn-base-green" ).click(function() {
			$( "#base-green" ).addClass( "base-green" );
		});

		// Linning Color //
		$( ".btn-linning-red" ).click(function() {
			$( "#linning-red" ).addClass( "linning-red" );
		});

		$( ".btn-linning-green" ).click(function() {
			$( "#linning-green" ).addClass( "linning-green" );
		});

		// Lace Color //
		$( ".btn-lace-red" ).click(function() {
			$( "#lace-red" ).addClass( "lace-red" );
		});

		$( ".btn-lace-green" ).click(function() {
			$( "#lace-green" ).addClass( "lace-green" );
		});

		// Midsole Color //
		$( ".btn-midsole-red" ).click(function() {
			$( "#midsole-red" ).addClass( "midsole-red" );
		});

		$( ".btn-midsole-green" ).click(function() {
			$( "#midsole-green" ).addClass( "midsole-green" );
		});

	// For Remove Class //

		// Base Color //
		$( ".btn-base-red" ).on( "click", function() {
	      $( "#base-green" ).removeClass( "base-green" );
	    });
	 
	    $( ".btn-base-green" ).on( "click", function() {
	      $( "#base-red" ).removeClass( "base-red" );
	    });

	    // Linning Color //
	    $( ".btn-linning-red" ).on( "click", function() {
	      $( "#linning-green" ).removeClass( "linning-green" );
	    });
	 
	    $( ".btn-linning-green" ).on( "click", function() {
	      $( "#linning-red" ).removeClass( "linning-red" );
	    });

	    // Lace Color //
	    $( ".btn-lace-red" ).on( "click", function() {
	      $( "#lace-green" ).removeClass( "lace-green" );
	    });
	 
	    $( ".btn-lace-green" ).on( "click", function() {
	      $( "#lace-red" ).removeClass( "lace-red" );
	    });

	    // Midsole Color //
	    $( ".btn-midsole-red" ).on( "click", function() {
	      $( "#midsole-green" ).removeClass( "midsole-green" );
	    });
	 
	    $( ".btn-midsole-green" ).on( "click", function() {
	      $( "#midsole-red" ).removeClass( "midsole-red" );
	    });
});