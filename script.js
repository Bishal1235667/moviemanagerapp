
    const form = document.getElementById('movie-form');
    const list = document.getElementById('movie-list');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const year = document.getElementById('year').value;
      const genre = document.getElementById('genre').value;
      const watched = document.getElementById('watched').checked;

      const li = document.createElement('li');
      li.textContent = `${title} (${year}) - ${genre} ${watched ? '[Watched]' : ''}`;

      list.appendChild(li);

      form.reset();
    });
  