var portfolioFilters = document.querySelectorAll('#portfolio-flters li[data-filter]');
var selectedFilter = '*'; // Default filter

// Menonaktifkan filter sebelum interaksi "OK"
function disablePortfolioFilters() {
  portfolioFilters.forEach(function(filter) {
    filter.classList.add('disabled');
    filter.style.pointerEvents = 'none';
  });
}

// Mengaktifkan filter setelah interaksi "OK"
function enablePortfolioFilters() {
  portfolioFilters.forEach(function(filter) {
    filter.classList.remove('disabled');
    filter.style.pointerEvents = 'auto';
  });
}

// Memanggil fungsi untuk menonaktifkan filter pada awal
disablePortfolioFilters();

document.addEventListener('DOMContentLoaded', function() {
  // Kode peringatan seperti sebelumnya...
  
  var okButton = document.querySelector('.warning-content button');

  okButton.addEventListener('click', function() {
    // Menampilkan konten utama setelah interaksi "OK"
    var content = document.getElementById('portfolio');
    content.style.display = 'block';
  
    // Aktifkan filter portofolio
    enablePortfolioFilters();
  
    // Terapkan filter portofolio yang sudah dipilih pada peringatan
    applyPortfolioFilter(selectedFilter);
    
    // Otomatis mengklik tombol "All" pada filter
    var allFilter = document.querySelector('#portfolio-flters li[data-filter="*"]');
    allFilter.click();
  });
});

// Apply the portfolio filter based on the selected category
function applyPortfolioFilter(filter) {
  var portfolioItems = document.querySelectorAll('.portfolio-item');

  // Loop through each portfolio item and apply filter
  portfolioItems.forEach(function(item) {
    if (filter === '*' || item.classList.contains(filter.replace('.', ''))) {
      item.style.display = 'block'; // Show the matching item
    } else {
      item.style.display = 'none'; // Hide the non-matching item
    }
  });
}

// Filter click event listener
document.addEventListener('click', function(event) {
  if (event.target && event.target.matches('#portfolio-flters li[data-filter]')) {
    var filter = event.target.getAttribute('data-filter');
    selectedFilter = filter; // Update the selected filter
    applyPortfolioFilter(filter);
  }
});
