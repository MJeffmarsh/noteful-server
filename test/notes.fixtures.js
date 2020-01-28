function makeNotesArray() {
  return [
    {
      id: 1,
      title: 'First test note!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      date_modified: '2029-01-22T16:28:32.615Z',
      folder: 1
    },
    {
      id: 2,
      title: 'Second test note!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      date_modified: '2029-01-22T16:28:32.615Z',
      folder: 1
    },
    {
      id: 3,
      title: 'Third test note!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      date_modified: '2029-01-22T16:28:32.615Z',
      folder: 1
    }
  ];
}

function makeMaliciousNote() {
  return {
    maliciousNote: {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      folder: 1
    },
    expectedNote: {
      id: 911,
      title:
        'Naughty naughty very naughty &lt;script&gt;alert("xss");&lt;/script&gt;',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
      folder: 1
    }
  };
}

module.exports = {
  makeNotesArray,
  makeMaliciousNote
};
