window.addEventListener('load', function() {
  var warningContainer = document.createElement('div');
  warningContainer.className = 'warning-container';

  var warningContent = document.createElement('div');
  warningContent.className = 'warning-content';

  var warningHeading = document.createElement('h2');
  warningHeading.innerText = 'Warning';

  var warningMessage = document.createElement('p');
  warningMessage.innerText = 'Halaman ini sedang lagi penambahan portfolio project dari pekerjaan-pekerjaan sebelumnya, jika ingin memastikan bisa hubungi linkedin.';

  var okButton = document.createElement('button');
  okButton.innerText = 'OK';
  okButton.addEventListener('click', function() {
    warningContainer.style.display = 'none';
    var aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  warningContent.appendChild(warningHeading);
  warningContent.appendChild(warningMessage);
  warningContent.appendChild(okButton);
  warningContainer.appendChild(warningContent);

  document.body.appendChild(warningContainer);

  warningContainer.style.display = 'block';
});
