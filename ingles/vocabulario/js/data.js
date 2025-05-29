// Categorias de vocabulário alinhadas com o SAEB
const vocabularyData = {
    animals: [
        { word: "dog", image: "dog.jpg", audio: "dog.mp3", translation: "cachorro" },
        { word: "cat", image: "cat.jpg", audio: "cat.mp3", translation: "gato" },
        { word: "bird", image: "bird.jpg", audio: "bird.mp3", translation: "pássaro" },
        { word: "fish", image: "fish.jpg", audio: "fish.mp3", translation: "peixe" },
        { word: "lion", image: "lion.jpg", audio: "lion.mp3", translation: "leão" }
    ],
    food: [
        { word: "apple", image: "apple.jpg", audio: "apple.mp3", translation: "maçã" },
        { word: "banana", image: "banana.jpg", audio: "banana.mp3", translation: "banana" },
        { word: "bread", image: "bread.jpg", audio: "bread.mp3", translation: "pão" },
        { word: "milk", image: "milk.jpg", audio: "milk.mp3", translation: "leite" },
        { word: "water", image: "water.jpg", audio: "water.mp3", translation: "água" }
    ],
    school: [
        { word: "book", image: "book.jpg", audio: "book.mp3", translation: "livro" },
        { word: "pen", image: "pen.jpg", audio: "pen.mp3", translation: "caneta" },
        { word: "teacher", image: "teacher.jpg", audio: "teacher.mp3", translation: "professor" },
        { word: "student", image: "student.jpg", audio: "student.mp3", translation: "estudante" },
        { word: "classroom", image: "classroom.jpg", audio: "classroom.mp3", translation: "sala de aula" }
    ]
};

// Frases para o modo "Complete a frase"
const sentenceData = [
    {
        sentence: "I have a ___ that barks loudly.",
        correct: "dog",
        options: ["dog", "cat", "fish", "bird"],
        category: "animals"
    },
    {
        sentence: "Would you like an ___ for snack?",
        correct: "apple",
        options: ["apple", "banana", "bread", "milk"],
        category: "food"
    },
    {
        sentence: "The ___ writes on the board.",
        correct: "teacher",
        options: ["teacher", "student", "book", "pen"],
        category: "school"
    },
    {
        sentence: "I drink ___ every morning.",
        correct: "milk",
        options: ["milk", "water", "apple", "bread"],
        category: "food"
    },
    {
        sentence: "We read stories from a ___.",
        correct: "book",
        options: ["book", "pen", "teacher", "desk"],
        category: "school"
    }
];

// Níveis de dificuldade
const difficultyLevels = {
    easy: {
        timeLimit: 30000, // 30 segundos por pergunta
        wordsPerGame: 10,
        categories: ["animals", "food"]
    },
    medium: {
        timeLimit: 20000, // 20 segundos
        wordsPerGame: 15,
        categories: ["animals", "food", "school"]
    },
    hard: {
        timeLimit: 15000, // 15 segundos
        wordsPerGame: 20,
        categories: ["animals", "food", "school"],
        includePhrases: true
    }
};