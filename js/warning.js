// warning.js
document.addEventListener('DOMContentLoaded', function() {
  var warningContainer = document.createElement('div');
  warningContainer.className = 'warning-container';
  warningContainer.style.display = 'block';
  document.body.appendChild(warningContainer);

  var warningContent = document.createElement('div');
  warningContent.className = 'warning-content';
  warningContainer.appendChild(warningContent);

  var warningHeading = document.createElement('h2');
  warningHeading.innerText = 'Warning';
  warningContent.appendChild(warningHeading);

  var warningMessage = document.createElement('p');
  warningMessage.innerText = 'Halaman ini sedang dalam penambahan portfolio project dari pekerjaan-pekerjaan sebelumnya. Jika ingin memastikan, silakan hubungi melalui LinkedIn saya. Terima kasih.';
  warningContent.appendChild(warningMessage);

  var okButton = document.createElement('button');
  okButton.innerText = 'OK';
  warningContent.appendChild(okButton);

  var isFilterEnabled = false;
  var selectedFilter = '*'; // Default filter

  okButton.addEventListener('click', function() {
    warningContainer.style.display = 'none';
    isFilterEnabled = true; // Enable the portfolio filter functionality
    applyPortfolioFilter(selectedFilter); // Apply the selected filter
    var aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  okButton.addEventListener('click', function() {
    warningContainer.style.display = 'none';
    isFilterEnabled = true; // Enable the portfolio filter functionality
    applyPortfolioFilter(selectedFilter); // Apply the selected filter
    var aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  
    // Dispatch a custom event to signal that the warning has been acknowledged
    var event = new Event('warningAcknowledged');
    document.dispatchEvent(event);
  });
  
  
  
  // Apply the portfolio filter
  function applyPortfolioFilter(filter) {
    if (isFilterEnabled) {
      var portfolioItems = document.querySelectorAll('.portfolio-item');

      // Loop through each portfolio item and apply filter
      portfolioItems.forEach(function(item) {
        if (filter === '*' || item.classList.contains('filter-' + filter)) {
          item.style.display = 'block'; // Show the matching item
        } else {
          item.style.display = 'none'; // Hide the non-matching item
        }
      });
    }
  }

  // Filter click event listener
  document.addEventListener('click', function(event) {
    if (event.target && event.target.matches('#portfolio-flters ul')) {
      if (!isFilterEnabled) {
        // Jika filter belum aktif, menyimpan filter yang dipilih untuk digunakan nanti
        selectedFilter = event.target.getAttribute('data-filter');
      } else {
        // Jika filter sudah aktif, menerapkan filter portofolio yang dipilih
        var filter = event.target.getAttribute('data-filter');
        applyPortfolioFilter(filter);
      }
    }
  });
});
