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

var list = [
  {
    // Subject Relatives
    // #1
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
  {
    // #7
    s0: '<p class="trial-stimulus">_______ | ____ | ______ | _______ | _____</p>',
    s1: '<p class="trial-stimulus">The dog | ____ | ______ | _______ | _____</p>',
    s2: '<p class="trial-stimulus">_______ | that | ______ | _______ | _____</p>',
    s3: '<p class="trial-stimulus">_______ | ____ | pushes | _______ | _____</p>',
    s4: '<p class="trial-stimulus">_______ | ____ | ______ | the cat | _____</p>',
    s5: '<p class="trial-stimulus">_______ | ____ | ______ | _______ | cries</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 0,
    item_number: 7,
  },
  {
    // #8
    s0: '<p class="trial-stimulus">_______ | ____ | ____ | _______ | ______</p>',
    s1: '<p class="trial-stimulus">The cat | ____ | ____ | _______ | ______</p>',
    s2: '<p class="trial-stimulus">_______ | that | ____ | _______ | ______</p>',
    s3: '<p class="trial-stimulus">_______ | ____ | hugs | _______ | ______</p>',
    s4: '<p class="trial-stimulus">_______ | ____ | ____ | the dog | ______</p>',
    s5: '<p class="trial-stimulus">_______ | ____ | ____ | _______ | smiles</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 1,
    item_number: 8,
  },
  {
    // #1
    s0: '<p class="trial-stimulus">__________ | ____ | _____ | __________ | ____</p>',
    s1: '<p class="trial-stimulus">The horses | ____ | _____ | __________ | ____</p>',
    s2: '<p class="trial-stimulus">__________ | that | _____ | __________ | ____</p>',
    s3: '<p class="trial-stimulus">__________ | ____ | chase | __________ | ____</p>',
    s4: '<p class="trial-stimulus">__________ | ____ | _____ | the zebras | ____</p>',
    s5: '<p class="trial-stimulus">__________ | ____ | _____ | __________ | fall</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "pp",
    question: false,
    correct_answer: 1,
    item_number: 1,
  },
  {
    // #4
    s0: '<p class="trial-stimulus">__________ | ____ | ______ | __________ | ___</p>',
    s1: '<p class="trial-stimulus">The zebras | ____ | ______ | __________ | ___</p>',
    s2: '<p class="trial-stimulus">__________ | that | ______ | __________ | ___</p>',
    s3: '<p class="trial-stimulus">__________ | ____ | follow | __________ | ___</p>',
    s4: '<p class="trial-stimulus">__________ | ____ | ______ | the horses | ___</p>',
    s5: '<p class="trial-stimulus">__________ | ____ | ______ | __________ | run</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "pp",
    question: false,
    correct_answer: 1,
    item_number: 4,
  },
  {
    // #7
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
    item_number: 7,
  },
  {
    // #8
    s0: '<p class="trial-stimulus">________ | ____ | ___ | ________ | _____</p>',
    s1: '<p class="trial-stimulus">The cats | ____ | ___ | ________ | _____</p>',
    s2: '<p class="trial-stimulus">________ | that | ___ | ________ | _____</p>',
    s3: '<p class="trial-stimulus">________ | ____ | hug | ________ | _____</p>',
    s4: '<p class="trial-stimulus">________ | ____ | ___ | the dogs | _____</p>',
    s5: '<p class="trial-stimulus">________ | ____ | ___ | ________ | smile</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "pp",
    question: false,
    correct_answer: 1,
    item_number: 8,
  },
  {
    // #1
    s0: '<p class="trial-stimulus">__________ | ____ | _____ | _________ | ____</p>',
    s1: '<p class="trial-stimulus">The horses | ____ | _____ | _________ | ____</p>',
    s2: '<p class="trial-stimulus">__________ | that | _____ | _________ | ____</p>',
    s3: '<p class="trial-stimulus">__________ | ____ | chase | _________ | ____</p>',
    s4: '<p class="trial-stimulus">__________ | ____ | _____ | the zebra | ____</p>',
    s5: '<p class="trial-stimulus">__________ | ____ | _____ | _________ | fall</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "ps",
    question: false,
    correct_answer: 1,
    item_number: 1,
  },
  {
    // #4
    s0: '<p class="trial-stimulus">__________ | ____ | ______ | _________ | ___</p>',
    s1: '<p class="trial-stimulus">The zebras | ____ | ______ | _________ | ___</p>',
    s2: '<p class="trial-stimulus">__________ | that | ______ | _________ | ___</p>',
    s3: '<p class="trial-stimulus">__________ | ____ | follow | _________ | ___</p>',
    s4: '<p class="trial-stimulus">__________ | ____ | ______ | the horse | ___</p>',
    s5: '<p class="trial-stimulus">__________ | ____ | ______ | _________ | run</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "ps",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Who runs?</h2>
      <div>
        <div class='container'>
          <h2 class='trial-question-answer'>The horse</h2>
          <h2 class='trial-question-key'>F</h2>
        </div>
        <div class='container'>
          <h2 class='trial-question-answer'>The zebras</h2>
          <h2 class='trial-question-key'>J</h2>
        </div>
      </div>
    </div>`,
    correct_answer: "j",
    item_number: 4,
  },
  {
    // #7
    s0: '<p class="trial-stimulus">________ | ____ | ____ | _______ | ___</p>',
    s1: '<p class="trial-stimulus">The dogs | ____ | ____ | _______ | ___</p>',
    s2: '<p class="trial-stimulus">________ | that | ____ | _______ | ___</p>',
    s3: '<p class="trial-stimulus">________ | ____ | push | _______ | ___</p>',
    s4: '<p class="trial-stimulus">________ | ____ | ____ | the cat | ___</p>',
    s5: '<p class="trial-stimulus">________ | ____ | ____ | _______ | cry</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "ps",
    question: false,
    correct_answer: 0,
    item_number: 7,
  },
  {
    // #8
    s0: '<p class="trial-stimulus">________ | ____ | ___ | _______ | _____</p>',
    s1: '<p class="trial-stimulus">The cats | ____ | ___ | _______ | _____</p>',
    s2: '<p class="trial-stimulus">________ | that | ___ | _______ | _____</p>',
    s3: '<p class="trial-stimulus">________ | ____ | hug | _______ | _____</p>',
    s4: '<p class="trial-stimulus">________ | ____ | ___ | the dog | _____</p>',
    s5: '<p class="trial-stimulus">________ | ____ | ___ | _______ | smile</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "ps",
    question: false,
    correct_answer: 1,
    item_number: 8,
  },
  {
    // #1
    s0: '<p class="trial-stimulus">_________ | ____ | ______ | __________ | _____</p>',
    s1: '<p class="trial-stimulus">The horse | ____ | ______ | __________ | _____</p>',
    s2: '<p class="trial-stimulus">_________ | that | ______ | __________ | _____</p>',
    s3: '<p class="trial-stimulus">_________ | ____ | chases | __________ | _____</p>',
    s4: '<p class="trial-stimulus">_________ | ____ | ______ | the zebras | _____</p>',
    s5: '<p class="trial-stimulus">_________ | ____ | ______ | __________ | falls</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "sp",
    question: false,
    correct_answer: 1,
    item_number: 1,
  },
  {
    // #4
    s0: '<p class="trial-stimulus">_________ | ____ | _______ | __________ | ____</p>',
    s1: '<p class="trial-stimulus">The zebra | ____ | _______ | __________ | ____</p>',
    s2: '<p class="trial-stimulus">_________ | that | _______ | __________ | ____</p>',
    s3: '<p class="trial-stimulus">_________ | ____ | follows | __________ | ____</p>',
    s4: '<p class="trial-stimulus">_________ | ____ | _______ | the horses | ____</p>',
    s5: '<p class="trial-stimulus">_________ | ____ | _______ | __________ | runs</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "sp",
    question: false,
    correct_answer: 1,
    item_number: 4,
  },
  {
    // #7
    s0: '<p class="trial-stimulus">_______ | ____ | ______ | ________ | _____</p>',
    s1: '<p class="trial-stimulus">The dog | ____ | ______ | ________ | _____</p>',
    s2: '<p class="trial-stimulus">_______ | that | ______ | ________ | _____</p>',
    s3: '<p class="trial-stimulus">_______ | ____ | pushes | ________ | _____</p>',
    s4: '<p class="trial-stimulus">_______ | ____ | ______ | the cats | _____</p>',
    s5: '<p class="trial-stimulus">_______ | ____ | ______ | ________ | cries</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "sp",
    question: false,
    correct_answer: 0,
    item_number: 7,
  },
  {
    // #8
    s0: '<p class="trial-stimulus">_______ | ____ | ____ | ________ | ______</p>',
    s1: '<p class="trial-stimulus">The cat | ____ | ____ | ________ | ______</p>',
    s2: '<p class="trial-stimulus">_______ | that | ____ | ________ | ______</p>',
    s3: '<p class="trial-stimulus">_______ | ____ | hugs | ________ | ______</p>',
    s4: '<p class="trial-stimulus">_______ | ____ | ____ | the dogs | ______</p>',
    s5: '<p class="trial-stimulus">_______ | ____ | ____ | ________ | smiles</p>',
    item_type: "exp_item",
    clause_type: "sr",
    number: "sp",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Who smiles?</h2>
      <div>
        <div class='container'>
          <h2 class='trial-question-answer'>The cat</h2>
          <h2 class='trial-question-key'>F</h2>
        </div>
        <div class='container'>
          <h2 class='trial-question-answer'>The dogs</h2>
          <h2 class='trial-question-key'>J</h2>
        </div>
      </div>
    </div>`,
    correct_answer: "f",
    item_number: 8,
  },
  {
    // Object Relatives
    // #1
    s0: '<p class="trial-stimulus">_________ | ____ | _________ | ______ | _____</p>',
    s1: '<p class="trial-stimulus">The horse | ____ | _________ | ______ | _____</p>',
    s2: '<p class="trial-stimulus">_________ | that | _________ | ______ | _____</p>',
    s3: '<p class="trial-stimulus">_________ | ____ | the zebra | ______ | _____</p>',
    s4: '<p class="trial-stimulus">_________ | ____ | _________ | chases | _____</p>',
    s5: '<p class="trial-stimulus">_________ | ____ | _________ | ______ | falls</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "ss",
    question: false,
    correct_answer: 1,
    item_number: 1,
  },
  {
    // #4
    s0: '<p class="trial-stimulus">_________ | ____ | _________ | _______ | ____</p>',
    s1: '<p class="trial-stimulus">The zebra | ____ | _________ | _______ | ____</p>',
    s2: '<p class="trial-stimulus">_________ | that | _________ | _______ | ____</p>',
    s3: '<p class="trial-stimulus">_________ | ____ | the horse | _______ | ____</p>',
    s4: '<p class="trial-stimulus">_________ | ____ | _________ | follows | ____</p>',
    s5: '<p class="trial-stimulus">_________ | ____ | _________ | _______ | runs</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "ss",
    question: false,
    correct_answer: 1,
    item_number: 4,
  },
  {
    // #7
    s0: '<p class="trial-stimulus">_______ | ____ | _______ | ______ | _____</p>',
    s1: '<p class="trial-stimulus">The dog | ____ | _______ | ______ | _____</p>',
    s2: '<p class="trial-stimulus">_______ | that | _______ | ______ | _____</p>',
    s3: '<p class="trial-stimulus">_______ | ____ | the cat | ______ | _____</p>',
    s4: '<p class="trial-stimulus">_______ | ____ | _______ | pushes | _____</p>',
    s5: '<p class="trial-stimulus">_______ | ____ | _______ | ______ | cries</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "ss",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Who cries?</h2>
      <div>
        <div class='container'>
          <h2 class='trial-question-answer'>The dog</h2>
          <h2 class='trial-question-key'>F</h2>
        </div>
        <div class='container'>
          <h2 class='trial-question-answer'>The cat</h2>
          <h2 class='trial-question-key'>J</h2>
        </div>
      </div>
    </div>`,
    correct_answer: "f",
    item_number: 7,
  },
  {
    // #8
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
    item_number: 8,
  },
  {
    // #1
    s0: '<p class="trial-stimulus">__________ | ____ | __________ | _____ | ____</p>',
    s1: '<p class="trial-stimulus">The horses | ____ | __________ | _____ | ____</p>',
    s2: '<p class="trial-stimulus">__________ | that | __________ | _____ | ____</p>',
    s3: '<p class="trial-stimulus">__________ | ____ | the zebras | _____ | ____</p>',
    s4: '<p class="trial-stimulus">__________ | ____ | __________ | chase | ____</p>',
    s5: '<p class="trial-stimulus">__________ | ____ | __________ | _____ | fall</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "pp",
    question: `<div class='container trial-question'>
    <h2 class='trial-question-header'>Who falls?</h2>
    <div>
      <div class='container'>
        <h2 class='trial-question-answer'>The zebras</h2>
        <h2 class='trial-question-key'>F</h2>
      </div>
      <div class='container'>
        <h2 class='trial-question-answer'>The horses</h2>
        <h2 class='trial-question-key'>J</h2>
      </div>
    </div>
  </div>`,
    correct_answer: "j",
    item_number: 1,
  },
  {
    // #4
    s0: '<p class="trial-stimulus">__________ | ____ | __________ | ______ | ___</p>',
    s1: '<p class="trial-stimulus">The zebras | ____ | __________ | ______ | ___</p>',
    s2: '<p class="trial-stimulus">__________ | that | __________ | ______ | ___</p>',
    s3: '<p class="trial-stimulus">__________ | ____ | the horses | ______ | ___</p>',
    s4: '<p class="trial-stimulus">__________ | ____ | __________ | follow | ___</p>',
    s5: '<p class="trial-stimulus">__________ | ____ | __________ | ______ | run</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "pp",
    question: false,
    correct_answer: 1,
    item_number: 4,
  },
  {
    // #7
    s0: '<p class="trial-stimulus">________ | ____ | ________ | ____ | ___</p>',
    s1: '<p class="trial-stimulus">The dogs | ____ | ________ | ____ | ___</p>',
    s2: '<p class="trial-stimulus">________ | that | ________ | ____ | ___</p>',
    s3: '<p class="trial-stimulus">________ | ____ | the cats | ____ | ___</p>',
    s4: '<p class="trial-stimulus">________ | ____ | ________ | push | ___</p>',
    s5: '<p class="trial-stimulus">________ | ____ | ________ | ____ | cry</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "pp",
    question: false,
    correct_answer: 0,
    item_number: 7,
  },
  {
    // #8
    s0: '<p class="trial-stimulus">________ | ____ | ________ | ___ | _____</p>',
    s1: '<p class="trial-stimulus">The cats | ____ | ________ | ___ | _____</p>',
    s2: '<p class="trial-stimulus">________ | that | ________ | ___ | _____</p>',
    s3: '<p class="trial-stimulus">________ | ____ | the dogs | ___ | _____</p>',
    s4: '<p class="trial-stimulus">________ | ____ | ________ | hug | _____</p>',
    s5: '<p class="trial-stimulus">________ | ____ | ________ | ___ | smile</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "pp",
    question: false,
    correct_answer: 1,
    item_number: 8,
  },
  {
    // #1
    s0: '<p class="trial-stimulus">__________ | ____ | _________ | ______ | ____</p>',
    s1: '<p class="trial-stimulus">The horses | ____ | _________ | ______ | ____</p>',
    s2: '<p class="trial-stimulus">__________ | that | _________ | ______ | ____</p>',
    s3: '<p class="trial-stimulus">__________ | ____ | the zebra | ______ | ____</p>',
    s4: '<p class="trial-stimulus">__________ | ____ | _________ | chases | ____</p>',
    s5: '<p class="trial-stimulus">__________ | ____ | _________ | ______ | fall</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "ps",
    question: false,
    correct_answer: 1,
    item_number: 1,
  },
  {
    // #4
    s0: '<p class="trial-stimulus">__________ | ____ | _________ | _______ | ___</p>',
    s1: '<p class="trial-stimulus">The zebras | ____ | _________ | _______ | ___</p>',
    s2: '<p class="trial-stimulus">__________ | that | _________ | _______ | ___</p>',
    s3: '<p class="trial-stimulus">__________ | ____ | the horse | _______ | ___</p>',
    s4: '<p class="trial-stimulus">__________ | ____ | _________ | follows | ___</p>',
    s5: '<p class="trial-stimulus">__________ | ____ | _________ | _______ | run</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "ps",
    question: false,
    correct_answer: 1,
    item_number: 4,
  },
  {
    // #7
    s0: '<p class="trial-stimulus">________ | ____ | _______ | ______ | ___</p>',
    s1: '<p class="trial-stimulus">The dogs | ____ | _______ | ______ | ___</p>',
    s2: '<p class="trial-stimulus">________ | that | _______ | ______ | ___</p>',
    s3: '<p class="trial-stimulus">________ | ____ | the cat | ______ | ___</p>',
    s4: '<p class="trial-stimulus">________ | ____ | _______ | pushes | ___</p>',
    s5: '<p class="trial-stimulus">________ | ____ | _______ | ______ | cry</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "ps",
    question: false,
    correct_answer: 0,
    item_number: 7,
  },
  {
    // #8
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
    item_number: 8,
  },
  {
    // #1
    s0: '<p class="trial-stimulus">_________ | ____ | __________ | _____ | _____</p>',
    s1: '<p class="trial-stimulus">The horse | ____ | __________ | _____ | _____</p>',
    s2: '<p class="trial-stimulus">_________ | that | __________ | _____ | _____</p>',
    s3: '<p class="trial-stimulus">_________ | ____ | the zebras | _____ | _____</p>',
    s4: '<p class="trial-stimulus">_________ | ____ | __________ | chase | _____</p>',
    s5: '<p class="trial-stimulus">_________ | ____ | __________ | _____ | falls</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "sp",
    question: false,
    correct_answer: 1,
    item_number: 1,
  },
  {
    // #4
    s0: '<p class="trial-stimulus">_________ | ____ | __________ | ______ | ____</p>',
    s1: '<p class="trial-stimulus">The zebra | ____ | __________ | ______ | ____</p>',
    s2: '<p class="trial-stimulus">_________ | that | __________ | ______ | ____</p>',
    s3: '<p class="trial-stimulus">_________ | ____ | the horses | ______ | ____</p>',
    s4: '<p class="trial-stimulus">_________ | ____ | __________ | follow | ____</p>',
    s5: '<p class="trial-stimulus">_________ | ____ | __________ | ______ | runs</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "sp",
    question: `<div class='container trial-question'>
     <h2 class='trial-question-header'>Who runs?</h2>
      <div>
        <div class='container'>
          <h2 class='trial-question-answer'>The horses</h2>
          <h2 class='trial-question-key'>F</h2>
        </div>
        <div class='container'>
          <h2 class='trial-question-answer'>The zebra</h2>
          <h2 class='trial-question-key'>J</h2>
        </div>
      </div>
    </div>`,
    correct_answer: "j",
    item_number: 4,
  },
  {
    // #7
    s0: '<p class="trial-stimulus">_______ | ____ | ________ | ____ | _____</p>',
    s1: '<p class="trial-stimulus">The dog | ____ | ________ | ____ | _____</p>',
    s2: '<p class="trial-stimulus">_______ | that | ________ | ____ | _____</p>',
    s3: '<p class="trial-stimulus">_______ | ____ | the cats | ____ | _____</p>',
    s4: '<p class="trial-stimulus">_______ | ____ | ________ | push | _____</p>',
    s5: '<p class="trial-stimulus">_______ | ____ | ________ | ____ | cries</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "sp",
    question: false,
    correct_answer: 0,
    item_number: 7,
  },
  {
    // #8
    s0: '<p class="trial-stimulus">_______ | ____ | ________ | ___ | ______</p>',
    s1: '<p class="trial-stimulus">The cat | ____ | ________ | ___ | ______</p>',
    s2: '<p class="trial-stimulus">_______ | that | ________ | ___ | ______</p>',
    s3: '<p class="trial-stimulus">_______ | ____ | the dogs | ___ | ______</p>',
    s4: '<p class="trial-stimulus">_______ | ____ | ________ | hug | ______</p>',
    s5: '<p class="trial-stimulus">_______ | ____ | ________ | ___ | smiles</p>',
    item_type: "exp_item",
    clause_type: "or",
    number: "sp",
    question: false,
    correct_answer: 1,
    item_number: 8,
  },

  // Fillers
  // Subject Relatives
  {
    // #1
    s0: '<p class="trial-stimulus">________ | ___ | _______ | _______ | _____</p>',
    s1: '<p class="trial-stimulus">The chef | ___ | _______ | _______ | _____</p>',
    s2: '<p class="trial-stimulus">________ | who | _______ | _______ | _____</p>',
    s3: '<p class="trial-stimulus">________ | ___ | carries | _______ | _____</p>',
    s4: '<p class="trial-stimulus">________ | ___ | _______ | the box | _____</p>',
    s5: '<p class="trial-stimulus">________ | ___ | _______ | _______ | falls</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 1,
    item_number: 1,
  },
  {
    // #2
    s0: '<p class="trial-stimulus">________ | ___ | _____ | _______ | _____</p>',
    s1: '<p class="trial-stimulus">The chef | ___ | _____ | _______ | _____</p>',
    s2: '<p class="trial-stimulus">________ | who | _____ | _______ | _____</p>',
    s3: '<p class="trial-stimulus">________ | ___ | grabs | _______ | _____</p>',
    s4: '<p class="trial-stimulus">________ | ___ | _____ | the box | _____</p>',
    s5: '<p class="trial-stimulus">________ | ___ | _____ | _______ | jumps</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Does the chef scream?</h2>
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
    correct_answer: "f",
    item_number: 2,
  },
  {
    // #3
    s0: '<p class="trial-stimulus">________ | ___ | _____ | _______ | ______</p>',
    s1: '<p class="trial-stimulus">The chef | ___ | _____ | _______ | ______</p>',
    s2: '<p class="trial-stimulus">________ | who | _____ | _______ | ______</p>',
    s3: '<p class="trial-stimulus">________ | ___ | opens | _______ | ______</p>',
    s4: '<p class="trial-stimulus">________ | ___ | _____ | the box | ______</p>',
    s5: '<p class="trial-stimulus">________ | ___ | _____ | _______ | smiles</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 1,
    item_number: 3,
  },
  {
    // #4
    s0: '<p class="trial-stimulus">________ | ___ | ______ | _______ | _______</p>',
    s1: '<p class="trial-stimulus">The chef | ___ | ______ | _______ | _______</p>',
    s2: '<p class="trial-stimulus">________ | who | ______ | _______ | _______</p>',
    s3: '<p class="trial-stimulus">________ | ___ | throws | _______ | _______</p>',
    s4: '<p class="trial-stimulus">________ | ___ | ______ | the box | _______</p>',
    s5: '<p class="trial-stimulus">________ | ___ | ______ | _______ | screams</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 0,
    item_number: 4,
  },
  {
    // #5
    s0: '<p class="trial-stimulus">________ | ___ | _____ | _______ | _____</p>',
    s1: '<p class="trial-stimulus">The chef | ___ | _____ | _______ | _____</p>',
    s2: '<p class="trial-stimulus">________ | who | _____ | _______ | _____</p>',
    s3: '<p class="trial-stimulus">________ | ___ | kicks | _______ | _____</p>',
    s4: '<p class="trial-stimulus">________ | ___ | _____ | the box | _____</p>',
    s5: '<p class="trial-stimulus">________ | ___ | _____ | _______ | cries</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: `<div class='container trial-question'>
    <h2 class='trial-question-header'>Does the chef cry?</h2>
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
    item_number: 5,
  },
  {
    // #6
    s0: '<p class="trial-stimulus">__________ | ___ | _____ | __________ | _____</p>',
    s1: '<p class="trial-stimulus">The singer | ___ | _____ | __________ | _____</p>',
    s2: '<p class="trial-stimulus">__________ | who | _____ | __________ | _____</p>',
    s3: '<p class="trial-stimulus">__________ | ___ | plays | __________ | _____</p>',
    s4: '<p class="trial-stimulus">__________ | ___ | _____ | the guitar | _____</p>',
    s5: '<p class="trial-stimulus">__________ | ___ | _____ | __________ | sings</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 0,
    item_number: 6,
  },
  {
    // #7
    s0: '<p class="trial-stimulus">__________ | ___ | _____ | __________ | _____</p>',
    s1: '<p class="trial-stimulus">The singer | ___ | _____ | __________ | _____</p>',
    s2: '<p class="trial-stimulus">__________ | who | _____ | __________ | _____</p>',
    s3: '<p class="trial-stimulus">__________ | ___ | grabs | __________ | _____</p>',
    s4: '<p class="trial-stimulus">__________ | ___ | _____ | the guitar | _____</p>',
    s5: '<p class="trial-stimulus">__________ | ___ | _____ | __________ | cries</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 1,
    item_number: 7,
  },
  {
    // #8
    s0: '<p class="trial-stimulus">__________ | ___ | _______ | __________ | _____</p>',
    s1: '<p class="trial-stimulus">The singer | ___ | _______ | __________ | _____</p>',
    s2: '<p class="trial-stimulus">__________ | who | _______ | __________ | _____</p>',
    s3: '<p class="trial-stimulus">__________ | ___ | smashes | __________ | _____</p>',
    s4: '<p class="trial-stimulus">__________ | ___ | _______ | the guitar | _____</p>',
    s5: '<p class="trial-stimulus">__________ | ___ | _______ | __________ | cries</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 0,
    item_number: 8,
  },
  {
    // #9
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
    item_number: 9,
  },
  {
    // #10
    s0: '<p class="trial-stimulus">__________ | ___ | ______ | __________ | _______</p>',
    s1: '<p class="trial-stimulus">The singer | ___ | ______ | __________ | _______</p>',
    s2: '<p class="trial-stimulus">__________ | who | ______ | __________ | _______</p>',
    s3: '<p class="trial-stimulus">__________ | ___ | stores | __________ | _______</p>',
    s4: '<p class="trial-stimulus">__________ | ___ | ______ | the guitar | _______</p>',
    s5: '<p class="trial-stimulus">__________ | ___ | ______ | __________ | murmurs</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 0,
    item_number: 10,
  },
  {
    // #11
    s0: '<p class="trial-stimulus">_________ | ___ | ______ | __________ | ______</p>',
    s1: '<p class="trial-stimulus">The woman | ___ | ______ | __________ | ______</p>',
    s2: '<p class="trial-stimulus">_________ | who | ______ | __________ | ______</p>',
    s3: '<p class="trial-stimulus">_________ | ___ | writes | __________ | ______</p>',
    s4: '<p class="trial-stimulus">_________ | ___ | ______ | the letter | ______</p>',
    s5: '<p class="trial-stimulus">_________ | ___ | ______ | __________ | smiles</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 1,
    item_number: 11,
  },
  {
    // #12
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
    item_number: 12,
  },
  {
    // #13
    s0: '<p class="trial-stimulus">_________ | ___ | _____ | __________ | ______</p>',
    s1: '<p class="trial-stimulus">The woman | ___ | _____ | __________ | ______</p>',
    s2: '<p class="trial-stimulus">_________ | who | _____ | __________ | ______</p>',
    s3: '<p class="trial-stimulus">_________ | ___ | burns | __________ | ______</p>',
    s4: '<p class="trial-stimulus">_________ | ___ | _____ | the letter | ______</p>',
    s5: '<p class="trial-stimulus">_________ | ___ | _____ | __________ | leaves</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Does the woman leave?</h2>
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
    item_number: 13,
  },
  {
    // #14
    s0: '<p class="trial-stimulus">_________ | ___ | ______ | __________ | _______</p>',
    s1: '<p class="trial-stimulus">The woman | ___ | ______ | __________ | _______</p>',
    s2: '<p class="trial-stimulus">_________ | who | ______ | __________ | _______</p>',
    s3: '<p class="trial-stimulus">_________ | ___ | throws | __________ | _______</p>',
    s4: '<p class="trial-stimulus">_________ | ___ | ______ | the letter | _______</p>',
    s5: '<p class="trial-stimulus">_________ | ___ | ______ | __________ | screams</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: false,
    correct_answer: 0,
    item_number: 14,
  },
  {
    // #15
    s0: '<p class="trial-stimulus">_________ | ___ | ______ | __________ | _______</p>',
    s1: '<p class="trial-stimulus">The woman | ___ | ______ | __________ | _______</p>',
    s2: '<p class="trial-stimulus">_________ | who | ______ | __________ | _______</p>',
    s3: '<p class="trial-stimulus">_________ | ___ | stores | __________ | _______</p>',
    s4: '<p class="trial-stimulus">_________ | ___ | ______ | the letter | _______</p>',
    s5: '<p class="trial-stimulus">_________ | ___ | ______ | __________ | murmurs</p>',
    item_type: "fill_item",
    clause_type: "sr",
    number: "ss",
    question: `<div class='container trial-question'>
      <h2 class='trial-question-header'>Does the woman murmur?</h2>
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
    item_number: 15,
  },
];