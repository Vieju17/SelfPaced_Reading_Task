var listA = []

var listB = [
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
    item_list: "b",
    item_id: 1,
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
    item_list: "b",
    item_id: 4,
  },
];

// For Demonstration Purposes
var demo = [
  {
    // Subject Relative - No Question
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
    item_list: "demo",
    item_id: 4,
  },
  {
    // Subject Relative - Question
    s0: '<p class="trial-stimulus">________ | ____ | ____ | ________ | ___</p>',
    s1: '<p class="trial-stimulus">The dogs | ____ | ____ | ________ | ___</p>',
    s2: '<p class="trial-stimulus">________ | that | ____ | ________ | ___</p>',
    s3: '<p class="trial-stimulus">________ | ____ | push | ________ | ___</p>',
    s4: '<p class="trial-stimulus">________ | ____ | ____ | the cats | ___</p>',
    s5: '<p class="trial-stimulus">________ | ____ | ____ | ________ | cry</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "pp",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Who cries?</h2>
      <div>
        <div class='container'>
          <h2 class='trial-question-answer'>The dogs</h2>
          <h2 class='trial-question-key'>F</h2>
        </div>
        <div class='container'>
          <h2 class='trial-question-answer'>The cats</h2>
          <h2 class='trial-question-key'>J</h2>
        </div>
      </div>
    </div>`,
    correct_answer: "f",
    item_list: "demo",
    item_id: 7,
  },
  {
    // Filler - Question
    s0: '<p class="trial-stimulus">__________ | ___ | ______ | __________ | _______</p>',
    s1: '<p class="trial-stimulus">The singer | ___ | ______ | __________ | _______</p>',
    s2: '<p class="trial-stimulus">__________ | who | ______ | __________ | _______</p>',
    s3: '<p class="trial-stimulus">__________ | ___ | throws | __________ | _______</p>',
    s4: '<p class="trial-stimulus">__________ | ___ | ______ | the guitar | _______</p>',
    s5: '<p class="trial-stimulus">__________ | ___ | ______ | __________ | screams</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Does the singer scream?</h2>
      <div>
        <div class='container'>
          <h2 class='trial-question-answer'>No</h2>
          <h2 class='trial-question-key'>F</h2>
        </div>
        <div class='container'>
          <h2 class='trial-question-answer'>Yes</h2>
          <h2 class='trial-question-key'>J</h2>
        </div>
      </div>
    </div>`,
    correct_answer: "j",
    item_list: "demo",
    item_id: 9,
  },
  {
    // Object Relative - No Question
    s0: '<p class="trial-stimulus">_______ | ____ | _______ | ____ | ______</p>',
    s1: '<p class="trial-stimulus">The cat | ____ | _______ | ____ | ______</p>',
    s2: '<p class="trial-stimulus">_______ | that | _______ | ____ | ______</p>',
    s3: '<p class="trial-stimulus">_______ | ____ | the dog | ____ | ______</p>',
    s4: '<p class="trial-stimulus">_______ | ____ | _______ | hugs | ______</p>',
    s5: '<p class="trial-stimulus">_______ | ____ | _______ | ____ | smiles</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "ss",
    question: false,
    correct_answer: 1,
    item_list: "demo",
    item_id: 8,
  },
  {
    // Object Relative - Question
    s0: '<p class="trial-stimulus">________ | ____ | _______ | ____ | _____</p>',
    s1: '<p class="trial-stimulus">The cats | ____ | _______ | ____ | _____</p>',
    s2: '<p class="trial-stimulus">________ | that | _______ | ____ | _____</p>',
    s3: '<p class="trial-stimulus">________ | ____ | the dog | ____ | _____</p>',
    s4: '<p class="trial-stimulus">________ | ____ | _______ | hugs | _____</p>',
    s5: '<p class="trial-stimulus">________ | ____ | _______ | ____ | smile</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "ps",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Who smiles?</h2>
      <div>
        <div class='container'>
          <h2 class='trial-question-answer'>The dog</h2>
          <h2 class='trial-question-key'>F</h2>
        </div>
        <div class='container'>
          <h2 class='trial-question-answer'>The cats</h2>
          <h2 class='trial-question-key'>J</h2>
        </div>
      </div>
    </div>`,
    correct_answer: "j",
    item_list: "demo",
    item_id: 8,
  },
  {
    // Filler - No Question
    s0: '<p class="trial-stimulus">_________ | ___ | _____ | __________ | _______</p>',
    s1: '<p class="trial-stimulus">The woman | ___ | _____ | __________ | _______</p>',
    s2: '<p class="trial-stimulus">_________ | who | _____ | __________ | _______</p>',
    s3: '<p class="trial-stimulus">_________ | ___ | reads | __________ | _______</p>',
    s4: '<p class="trial-stimulus">_________ | ___ | _____ | the letter | _______</p>',
    s5: '<p class="trial-stimulus">_________ | ___ | _____ | __________ | screams</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 0,
    item_list: "demo",
    item_id: 12,
  },
];