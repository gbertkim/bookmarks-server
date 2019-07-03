
const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Search website',
    rating: 5 },
  { id: uuid(),
    title: 'twitter',
    url: 'https://www.twitter.com',
    description: 'Social news feed',
    rating: 4 },
  { id: uuid(),
    title: 'Youtube',
    url: 'https://www.youtube.com',
    description: 'Videos',
    rating: 5 },
]

module.exports = { bookmarks }