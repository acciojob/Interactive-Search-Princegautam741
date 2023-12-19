function activateSearch() {
    var searchContainer = document.getElementById('searchContainer');
    var searchInput = document.getElementById('searchInput');

    // Add the 'active' class to the search container
    searchContainer.classList.add('active');

    // Set focus on the search input
    searchInput.focus();
}
