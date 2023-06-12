export class Question {
  static create(question) {
    return fetch('https://yermaka-47016-default-rtdb.firebaseio.com/questions.json', {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-type':
          'application/json'
      }
    }).then(response => response.json())
      .then(response => {
        console.log(response)
      })
  }
}