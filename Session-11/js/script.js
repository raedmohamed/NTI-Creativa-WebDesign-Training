$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

// ////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  $('#contactForm').on('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Clear previous errors
    $('.error-message').hide();
    
    let isValid = true;

    // Validate Name
    if ($('#name').val().trim() === '') {
      $('#nameError').show();
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test($('#email').val().trim())) {
      $('#emailError').show();
      isValid = false;
    }

    // Validate Subject
    if ($('#subject').val().trim() === '') {
      $('#subjectError').show();
      isValid = false;
    }

    
    // Submit the form if valid
    if (isValid) {
      this.submit(); // Submit the form
    }
  });
});






const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show button when scrolled down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  // Scroll smoothly to top
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.image-container');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const filterValue = button.getAttribute('data-filter');
  
        // Reset all card display
        cards.forEach(card => {
          card.style.display = 'block'; // Show all cards initially
        });
  
        // Apply filter
        if (filterValue === 'all') {
          cards.forEach(card => card.style.display = 'block');
        } else {
          cards.forEach(card => {
            card.getAttribute('data-category') === filterValue ? 
            card.style.display = 'block' : 
            card.style.display = 'none';
          });
        }
  
        // Highlight the active link
        filterButtons.forEach(btn => btn.classList.remove('active-a'));
        button.classList.add('active-a');
      });
    });
  });
  

  document.getElementById('monthly-btn').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('active');
    document.getElementById('yearly-btn').classList.remove('active');

    const pricingContent = document.getElementById('pricing-content');
    pricingContent.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="pricing-card shadow-right">
                    <h2 class="title">Business</h2>
                    <p class="price">From <span>$899</span></p>
                    <ul class="features">
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                05 PSD Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                05 Wordpress Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                1000 Support Ticket</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                    </ul>
                    <button
                        class="btn-custom btn px-4 py-3 btn-lg rounded-pill bg-primary border border-2 border-primary fs-6 text-white text-uppercase">Get
                        Started Now</button>
                </div>
            </div>
            <div class="col-md-4">
            <div class="pricing-card shadow-right">
            <h2 class="title">Business</h2>
            <p class="price">From <span>$899</span></p>
            <ul class="features">
            <li>
            <strong>
            <i class="fa fa-check-circle"></i>
            05 PSD Pack</strong>
            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
            </li>
            <li>
            <strong>
            <i class="fa fa-check-circle"></i>
            05 Wordpress Pack</strong>
            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
            </li>
            <li>
            <strong>
            <i class="fa fa-check-circle"></i>
            1000 Support Ticket</strong>
            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
            </li>
            </ul>
            <button
            class="btn-custom btn px-4 py-3 btn-lg rounded-pill bg-primary border border-2 border-primary fs-6 text-white text-uppercase">Get
            Started Now</button>
            </div>
            </div>
            <div class="col-md-4">
                <div class="pricing-card selected shadow-right">
                    <h2 class="title">Business</h2>
                    <p class="price">From <span>$899</span></p>
                    <ul class="features">
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                05 PSD Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                05 Wordpress Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                1000 Support Ticket</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                    </ul>
                    <button
                        class="button-white btn-custom btn px-4 py-3 bg-transparent btn-lg rounded-pill bg-primary border border-2 border-primary fs-6 text-white text-uppercase">Get
                        Started Now</button>
                </div>
            </div>
        </div>
    `;
});


  document.getElementById('yearly-btn').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('active');
    document.getElementById('monthly-btn').classList.remove('active');

    const pricingContent = document.getElementById('pricing-content');
    pricingContent.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="pricing-card">
                    <h2 class="title">Business Yearly</h2>
                    <p class="price">From <span>$9999</span></p>
                    <ul class="features">
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                10 PSD Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                10 Wordpress Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                2000 Support Ticket</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                    </ul>
                    <button
                        class="btn-custom btn px-4 py-3 btn-lg rounded-pill bg-primary border border-2 border-primary fs-6 text-white text-uppercase">Get
                        Started Now</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="pricing-card selected">
                    <h2 class="title">Business Yearly</h2>
                    <p class="price">From <span>$9999</span></p>
                    <ul class="features">
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                10 PSD Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                10 Wordpress Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                2000 Support Ticket</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                    </ul>
                    <button
                        class="button-white btn-custom btn px-4 py-3 bg-transparent btn-lg rounded-pill bg-primary border border-2 border-primary fs-6 text-white text-uppercase">Get
                        Started Now</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="pricing-card">
                    <h2 class="title">Business Yearly</h2>
                    <p class="price">From <span>$9999</span></p>
                    <ul class="features">
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                10 PSD Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                10 Wordpress Pack</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                        <li>
                            <strong>
                                <i class="fa fa-check-circle"></i>
                                2000 Support Ticket</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula</p>
                        </li>
                    </ul>
                    <button
                        class="btn-custom btn px-4 py-3 btn-lg rounded-pill bg-primary border border-2 border-primary fs-6 text-white text-uppercase">Get
                        Started Now</button>
                </div>
            </div>
        </div>
    `;
});