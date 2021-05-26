const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function(){
  sidebar.classList.toggle('show-sidebar');
});

closeButton.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
});