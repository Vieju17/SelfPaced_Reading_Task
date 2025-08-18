var listA = []

var list = [
  {
    // Subject Relatives
    // #1
    list: 'listA',
    s0: '<p class="trial-stimulus">_________ | ____ | ______ | _________ | _____</p>',
    s1: '<p class="trial-stimulus">The horse | ____ | ______ | _________ | _____</p>',
    s2: '<p class="trial-stimulus">_________ | that | ______ | _________ | _____</p>',
    s3: '<p class="trial-stimulus">_________ | ____ | chases | _________ | _____</p>',
    s4: '<p class="trial-stimulus">_________ | ____ | ______ | the zebra | _____</p>',
    s5: '<p class="trial-stimulus">_________ | ____ | ______ | _________ | falls</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "ss",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Who falls?</h2>
      <div>
        <div class='container'>
          <h2 class='trial-question-answer'>The zebra</h2>
          <h2 class='trial-question-key'>F</h2>
        </div>
        <div class='container'>
          <h2 class='trial-question-answer'>The horse</h2>
          <h2 class='trial-question-key'>J</h2>
        </div>
      </div>
    </div>`,
    correct_answer: "j",
    item_number: 1,
  },
  {
    // #4
    list: 'listB',
    s0: '<p class="trial-stimulus">_________ | ____ | _______ | _________ | ____</p>',
    s1: '<p class="trial-stimulus">The zebra | ____ | _______ | _________ | ____</p>',
    s2: '<p class="trial-stimulus">_________ | that | _______ | _________ | ____</p>',
    s3: '<p class="trial-stimulus">_________ | ____ | follows | _________ | ____</p>',
    s4: '<p class="trial-stimulus">_________ | ____ | _______ | the horse | ____</p>',
    s5: '<p class="trial-stimulus">_________ | ____ | _______ | _________ | runs</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 1,
    item_number: 4,
  },
];