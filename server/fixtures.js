if (Quotes.find().count() === 0) {
  var quotes = [
    {
      quote: '"Every man I meet is my superior in some way. In that, I learn from him."',
      author: "Dale Carnegie"
    },
    {
      quote: '"A great man shows his greatness by the way he treats little men."',
      author: "Thomas Carlyle"
    },
    {
      quote: '"Be kind, for everyone you meet is fighting a hard battle."',
      author: "Socrates"
    },
    {
      quote: '"I have never met a man so ignorant that I couldn\'t learn something from him."',
      author: "Galileo Galilei"
    },
    {
      quote: '"The only true wisdom is in knowing you know nothing."',
      author: "Socrates"
    },
    {
      quote: '"Folks are usually about as happy as they make their minds up to be."',
      author: "Abraham Lincoln"
    },
    {
      quote: '"Whatever you are, be a good one."',
      author: "Abraham Lincoln"
    },
    {
      quote: '"Do what you can, with what you have, where you are."',
      author: "Theodore Roosevelt"
    },
    {
      quote: '"It is hard to fail, but it is worse never to have tried to succeed."',
      author: "Theodore Roosevelt"
    },
    {
      quote: '"Knowing what\'s right doesn\'t mean much unless you do what\'s right."',
      author: "Theodore Roosevelt"
    },
    {
      quote: '"Do what you feel in your heart to be right – for you’ll be criticized anyway."',
      author: "Eleanor Roosevelt"
    },
    {
      quote: '"Be yourself; everyone else is already taken."',
      author: "Oscar Wilde"
    },
    {
      quote: '"Be the change that you wish to see in the world."',
      author: "Mahatma Gandhi"
    },
    {
      quote: '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
      author: "Mahatma Gandhi"
    },
    {
      quote: '"I have not failed. I\'ve just found 10,000 ways that won\'t work."',
      author: "Thomas A. Edison"
    },
    {
      quote: '"Without music, life would be a mistake."',
      author: "Friedrich Nietzsche"
    },
    {
      quote: '"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring."',
      author: "Marilyn Monroe"
    },
    {
      quote: '"I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."',
      author: "Albert Einstein"
    },
    {
      quote: '"It is never too late to be what you might have been."',
      author: "George Eliot"
    },
    {
      quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
      author: "Winston S. Churchill"
    },
    {
      quote: '"A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty."',
      author: "Winston S. Churchill"
    },
    {
      quote: '"Success is stumbling from failure to failure with no loss of enthusiasm."',
      author: "Winston S. Churchill"
    },
    {
      quote: '"You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one."',
      author: "John Lennon"
    },
    {
      quote: '"A person\'s a person, no matter how small."',
      author: "Dr. Seuss"
    },
    {
      quote: '"Peace begins with a smile.."',
      author: "Mother Teresa"
    },
    {
      quote: '"Happiness is not something ready made. It comes from your own actions."',
      author: "Dalai Lama XIV"
    },
    {
      quote: '"Don\'t cry because it\'s over, smile because it happened."',
      author: "Dr. Seuss"
    },
    {
      quote: '"For every minute you are angry you lose sixty seconds of happiness."',
      author: "Ralph Waldo Emerson"
    },
    {
      quote: '"Happiness is when what you think, what you say, and what you do are in harmony."',
      author: "Mahatma Gandhi"
    },
    {
      quote: '"Count your age by friends, not years. Count your life by smiles, not tears."',
      author: "John Lennon"
    },
  ]

  for (i = 0; i < quotes.length; i++) {
    Quotes.insert({
      content: quotes[i]
    });
  }
}
