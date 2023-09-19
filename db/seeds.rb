greetings = [
  'Greetings',
  'Hey!',
  'What\'s up',
  'How you holdin up?',
  'Hello there!'
]

greetings.each do |text|
  Greeting.create(text: text)
end
