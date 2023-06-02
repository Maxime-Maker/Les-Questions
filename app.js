const open = document.querySelectorAll('.btn');

open.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const container = btn.parentElement.parentElement;
    container.classList.toggle('show-text');
  });
});
