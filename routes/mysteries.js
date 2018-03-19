var express = require('express');
var router = express.Router();

/* GET mysteries listing. */
router.get('/', function(req, res, next) {
  const mysteries = [
    {
      id: 1,
      name: "A Study in Scarlet",
      year: "1988",
      culprit: "Mr Jefferson Hope",
      quote: "There’s the scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it."
    },
    {
      id: 2,
      name: "The Sign of the Four",
      year: "1890",
      culprit: "Jonathan Small",
      quote: "His name, I have every reason to believe, is Jonathan Small. He is a poorly educated man, small, active, with his right leg off, and wearing a wooden stump which is worn away on the inner side."
    },
    {
      id: 3,
      name: "The Hound of the Baskervilles",
      year: "1902",
      culprit: "Mr Stapleton",
      quote: "Dr. Mortimer looked strangely at us for an instant, and his voice sank almost to a whisper as he answered: 'Mr Holmes, they were the footprints of a gigantic hound!'",
    },
    {
      id: 4,
      name: "The Valley of Fear",
      year: "1915",
      culprit: "Professor Moriarty",
      quote: "The old wheel turns, and the same spoke comes up. It's all been done before, and will be again."
    },
    {
      id: 5,
      name: "A Scandal in Bohemia",
      year: "1890",
      culprit: "Irene Adler",
      quote: "Would she not have made an admirable queen? Is it not a pity she was not on my level?"
    },
  ]
  res.json(mysteries);
});

module.exports = router;
