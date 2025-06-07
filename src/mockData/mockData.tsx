// Mock Data for German A1.1 Language Learning Course
const mockData = {
  // DASHBOARD COURSES (Ready for direct use in dashboard)
  dashboardCourses: [
    {
      id: "course_001",
      title: "German Basics",
      description: "Master the fundamentals of German language",
      progress: 35,
      totalLessons: 12,
      completedCount: 4,
      lessons: [
        {
          id: 'lesson-1',
          title: 'Hello & Greetings',
          type: 'video',
          duration: '10 min',
          completed: true,
          locked: false,
          xp: 15,
          position: 'left'
        },
        {
          id: 'lesson-2',
          title: 'Basic Words',
          type: 'flashcards',
          duration: '15 min',
          completed: true,
          locked: false,
          xp: 20,
          position: 'right'
        },
        {
          id: 'lesson-3',
          title: 'Articles Quiz',
          type: 'quiz',
          duration: '5 min',
          completed: true,
          locked: false,
          xp: 25,
          position: 'left'
        },
        {
          id: 'lesson-4',
          title: 'Common Phrases',
          type: 'video',
          duration: '12 min',
          completed: false,
          locked: false,
          xp: 30,
          position: 'center'
        },
        {
          id: 'lesson-5',
          title: 'Numbers & Colors',
          type: 'flashcards',
          duration: '10 min',
          completed: false,
          locked: true,
          xp: 25,
          position: 'right'
        },
        {
          id: 'lesson-6',
          title: 'Grammar Basics',
          type: 'quiz',
          duration: '8 min',
          completed: false,
          locked: true,
          xp: 35,
          position: 'left'
        },
        {
          id: 'lesson-7',
          title: 'Checkpoint',
          type: 'quiz',
          duration: '15 min',
          completed: false,
          locked: true,
          xp: 50,
          position: 'center',
          isCheckpoint: true
        }
      ],
      flashcards: [
        { id: '1', german: 'Hallo', english: 'Hello', example: 'Hallo, wie geht es dir?' },
        { id: '2', german: 'Danke', english: 'Thank you', example: 'Danke für deine Hilfe!' },
        { id: '3', german: 'Bitte', english: 'Please/You\'re welcome', example: 'Bitte schön!' },
        { id: '4', german: 'Entschuldigung', english: 'Excuse me', example: 'Entschuldigung, wo ist der Bahnhof?' },
        { id: '5', german: 'Guten Tag', english: 'Good day', example: 'Guten Tag, Herr Schmidt!' },
        { id: '6', german: 'Auf Wiedersehen', english: 'Goodbye', example: 'Auf Wiedersehen, bis morgen!' }
      ],
      quizzes: [
        {
          id: '1',
          type: 'der-die-das',
          question: 'Haus',
          correctAnswer: 'das'
        },
        {
          id: '2',
          type: 'multiple-choice',
          question: 'What does "Guten Tag" mean?',
          correctAnswer: 'good afternoon',
          options: ['good morning', 'good afternoon', 'good night', 'goodbye']
        },
        {
          id: '3',
          type: 'type-answer',
          question: 'How do you say "water" in German?',
          correctAnswer: 'wasser'
        },
        {
          id: '4',
          type: 'multiple-choice',
          question: 'Which is the correct translation of "My name is..."?',
          correctAnswer: 'Ich heiße...',
          options: ['Ich bin...', 'Ich heiße...', 'Mein Name...', 'Wie heißt du?']
        },
        {
          id: '5',
          type: 'der-die-das',
          question: 'Mann',
          correctAnswer: 'der'
        },
        {
          id: '6',
          type: 'der-die-das',
          question: 'Frau',
          correctAnswer: 'die'
        }
      ]
    },
    {
      id: "course_002",
      title: "German A1.2",
      description: "Continue your German journey with intermediate concepts",
      progress: 15,
      totalLessons: 10,
      completedCount: 2,
      lessons: [
        {
          id: 'a2-lesson-1',
          title: 'Past Tense',
          type: 'video',
          duration: '12 min',
          completed: true,
          locked: false,
          xp: 20,
          position: 'left'
        },
        {
          id: 'a2-lesson-2',
          title: 'Modal Verbs',
          type: 'flashcards',
          duration: '10 min',
          completed: true,
          locked: false,
          xp: 25,
          position: 'right'
        },
        {
          id: 'a2-lesson-3',
          title: 'Question Forms',
          type: 'quiz',
          duration: '8 min',
          completed: false,
          locked: false,
          xp: 30,
          position: 'left'
        }
      ]
    }
  ],
  
  // Original data structure
    // COURSES COLLECTION
    courses: {
      "course_001": {
        course_id: "course_001",
        course_name: "A1.1",
        course_description: "Basic German - Beginners Level 1",
        course_order: 1,
        language_from: "Vietnamese",
        language_to: "German",
        published: true,
        created_at: "2024-01-15T00:00:00Z",
        updated_at: "2024-01-15T00:00:00Z"
      }
    },
  
    // STAGES COLLECTION
    stages: {
      "stage_001": {
        stage_id: "stage_001",
        course_id: "course_001",
        stage_number: 1,
        stage_name: "Greetings and Basic Phrases",
        stage_order: 1,
        description: "Learn basic German greetings and common phrases"
      },
      "stage_002": {
        stage_id: "stage_002",
        course_id: "course_001",
        stage_number: 2,
        stage_name: "Numbers and Time",
        stage_order: 2,
        description: "Master German numbers and time expressions"
      },
      "stage_003": {
        stage_id: "stage_003",
        course_id: "course_001",
        stage_number: 3,
        stage_name: "Family and People",
        stage_order: 3,
        description: "Vocabulary about family members and relationships"
      },
      "stage_004": {
        stage_id: "stage_004",
        course_id: "course_001",
        stage_number: 4,
        stage_name: "Food and Drinks",
        stage_order: 4,
        description: "Essential food and beverage vocabulary"
      },
      "stage_005": {
        stage_id: "stage_005",
        course_id: "course_001",
        stage_number: 5,
        stage_name: "Colors and Objects",
        stage_order: 5,
        description: "Learn colors and common everyday objects"
      }
    },
  
    // COURSE CONTENT COLLECTION
    courseContent: {
      // Stage 1 Content
      "content_001": {
        content_id: "content_001",
        stage_id: "stage_001",
        content_type: "VIDEO",
        content_order: 1,
        title: "Introduction to German Greetings",
        points_first_completion: 20,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0,
        video_url: "https://drive.google.com/file/d/1234567890/view",
        duration_minutes: 8
      },
      "content_002": {
        content_id: "content_002",
        stage_id: "stage_001",
        content_type: "VOCAB_LIST",
        content_order: 2,
        title: "Greetings Vocabulary",
        points_first_completion: 0,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0
      },
      "content_003": {
        content_id: "content_003",
        stage_id: "stage_001",
        content_type: "FLASHCARD",
        content_order: 3,
        title: "Greetings Flashcards",
        points_first_completion: 15,
        points_repeat_completion: 3,
        max_daily_repeats: 2,
        lives_count: 5
      },
      "content_004": {
        content_id: "content_004",
        stage_id: "stage_001",
        content_type: "EXERCISE",
        content_order: 4,
        title: "Greetings Exercises",
        points_first_completion: 20,
        points_repeat_completion: 5,
        max_daily_repeats: 2,
        lives_count: 5
      },
  
      // Stage 2 Content
      "content_005": {
        content_id: "content_005",
        stage_id: "stage_002",
        content_type: "VIDEO",
        content_order: 1,
        title: "German Numbers 1-20",
        points_first_completion: 20,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0,
        video_url: "https://drive.google.com/file/d/1234567891/view",
        duration_minutes: 10
      },
      "content_006": {
        content_id: "content_006",
        stage_id: "stage_002",
        content_type: "VOCAB_LIST",
        content_order: 2,
        title: "Numbers and Time Vocabulary",
        points_first_completion: 0,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0
      },
      "content_007": {
        content_id: "content_007",
        stage_id: "stage_002",
        content_type: "FLASHCARD",
        content_order: 3,
        title: "Numbers Flashcards",
        points_first_completion: 15,
        points_repeat_completion: 3,
        max_daily_repeats: 2,
        lives_count: 5
      },
      "content_008": {
        content_id: "content_008",
        stage_id: "stage_002",
        content_type: "EXERCISE",
        content_order: 4,
        title: "Numbers Exercises",
        points_first_completion: 20,
        points_repeat_completion: 5,
        max_daily_repeats: 2,
        lives_count: 5
      },
  
      // Stage 3 Content
      "content_009": {
        content_id: "content_009",
        stage_id: "stage_003",
        content_type: "VIDEO",
        content_order: 1,
        title: "Family Members in German",
        points_first_completion: 20,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0,
        video_url: "https://drive.google.com/file/d/1234567892/view",
        duration_minutes: 12
      },
      "content_010": {
        content_id: "content_010",
        stage_id: "stage_003",
        content_type: "VOCAB_LIST",
        content_order: 2,
        title: "Family Vocabulary",
        points_first_completion: 0,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0
      },
      "content_011": {
        content_id: "content_011",
        stage_id: "stage_003",
        content_type: "FLASHCARD",
        content_order: 3,
        title: "Family Flashcards",
        points_first_completion: 15,
        points_repeat_completion: 3,
        max_daily_repeats: 2,
        lives_count: 5
      },
      "content_012": {
        content_id: "content_012",
        stage_id: "stage_003",
        content_type: "EXERCISE",
        content_order: 4,
        title: "Family Exercises",
        points_first_completion: 20,
        points_repeat_completion: 5,
        max_daily_repeats: 2,
        lives_count: 5
      },
  
      // Stage 4 Content
      "content_013": {
        content_id: "content_013",
        stage_id: "stage_004",
        content_type: "VIDEO",
        content_order: 1,
        title: "Food and Drinks Vocabulary",
        points_first_completion: 20,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0,
        video_url: "https://drive.google.com/file/d/1234567893/view",
        duration_minutes: 15
      },
      "content_014": {
        content_id: "content_014",
        stage_id: "stage_004",
        content_type: "VOCAB_LIST",
        content_order: 2,
        title: "Food and Drinks List",
        points_first_completion: 0,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0
      },
      "content_015": {
        content_id: "content_015",
        stage_id: "stage_004",
        content_type: "FLASHCARD",
        content_order: 3,
        title: "Food Flashcards",
        points_first_completion: 15,
        points_repeat_completion: 3,
        max_daily_repeats: 2,
        lives_count: 5
      },
      "content_016": {
        content_id: "content_016",
        stage_id: "stage_004",
        content_type: "EXERCISE",
        content_order: 4,
        title: "Food Exercises",
        points_first_completion: 20,
        points_repeat_completion: 5,
        max_daily_repeats: 2,
        lives_count: 5
      },
  
      // Stage 5 Content
      "content_017": {
        content_id: "content_017",
        stage_id: "stage_005",
        content_type: "VIDEO",
        content_order: 1,
        title: "Colors and Objects",
        points_first_completion: 20,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0,
        video_url: "https://drive.google.com/file/d/1234567894/view",
        duration_minutes: 11
      },
      "content_018": {
        content_id: "content_018",
        stage_id: "stage_005",
        content_type: "VOCAB_LIST",
        content_order: 2,
        title: "Colors and Objects List",
        points_first_completion: 0,
        points_repeat_completion: 0,
        max_daily_repeats: 0,
        lives_count: 0
      },
      "content_019": {
        content_id: "content_019",
        stage_id: "stage_005",
        content_type: "FLASHCARD",
        content_order: 3,
        title: "Colors Flashcards",
        points_first_completion: 15,
        points_repeat_completion: 3,
        max_daily_repeats: 2,
        lives_count: 5
      },
      "content_020": {
        content_id: "content_020",
        stage_id: "stage_005",
        content_type: "EXERCISE",
        content_order: 4,
        title: "Colors Exercises",
        points_first_completion: 20,
        points_repeat_completion: 5,
        max_daily_repeats: 2,
        lives_count: 5
      }
    },
  
    // EXERCISE TYPES COLLECTION
    exerciseTypes: {
      "ex_type_001": {
        exercise_type_id: "ex_type_001",
        exercise_name: "Word Translation Multiple Choice",
        difficulty_level: 1,
        exercise_category: "translation"
      },
      "ex_type_002": {
        exercise_type_id: "ex_type_002",
        exercise_name: "Word Listening Comprehension Multiple Choice",
        difficulty_level: 1,
        exercise_category: "listening"
      },
      "ex_type_003": {
        exercise_type_id: "ex_type_003",
        exercise_name: "Word Translation Typing",
        difficulty_level: 2,
        exercise_category: "translation"
      },
      "ex_type_004": {
        exercise_type_id: "ex_type_004",
        exercise_name: "Word Listening Comprehension Typing",
        difficulty_level: 2,
        exercise_category: "listening"
      },
      "ex_type_005": {
        exercise_type_id: "ex_type_005",
        exercise_name: "Fill-in-the-Blank Choice",
        difficulty_level: 2,
        exercise_category: "grammar"
      },
      "ex_type_006": {
        exercise_type_id: "ex_type_006",
        exercise_name: "Matching Exercises",
        difficulty_level: 3,
        exercise_category: "matching"
      },
      "ex_type_007": {
        exercise_type_id: "ex_type_007",
        exercise_name: "Fill-in-the-Blank Typing",
        difficulty_level: 3,
        exercise_category: "grammar"
      },
      "ex_type_008": {
        exercise_type_id: "ex_type_008",
        exercise_name: "Phrase Translation",
        difficulty_level: 4,
        exercise_category: "translation"
      }
    },
  
    // VOCABULARY DATA COLLECTION
    vocabularyData: {
      // Stage 1 - Greetings
      "vocab_001": { word_id: "vocab_001", stage_id: "stage_001", german: "Hallo", vietnamese: "Xin chào", category: "greetings", audio_url: "/audio/hallo.mp3" },
      "vocab_002": { word_id: "vocab_002", stage_id: "stage_001", german: "Guten Morgen", vietnamese: "Chào buổi sáng", category: "greetings", audio_url: "/audio/guten_morgen.mp3" },
      "vocab_003": { word_id: "vocab_003", stage_id: "stage_001", german: "Guten Tag", vietnamese: "Chào buổi trưa", category: "greetings", audio_url: "/audio/guten_tag.mp3" },
      "vocab_004": { word_id: "vocab_004", stage_id: "stage_001", german: "Guten Abend", vietnamese: "Chào buổi tối", category: "greetings", audio_url: "/audio/guten_abend.mp3" },
      "vocab_005": { word_id: "vocab_005", stage_id: "stage_001", german: "Auf Wiedersehen", vietnamese: "Tạm biệt", category: "greetings", audio_url: "/audio/auf_wiedersehen.mp3" },
      "vocab_006": { word_id: "vocab_006", stage_id: "stage_001", german: "Tschüss", vietnamese: "Bye", category: "greetings", audio_url: "/audio/tschuess.mp3" },
      "vocab_007": { word_id: "vocab_007", stage_id: "stage_001", german: "Danke", vietnamese: "Cảm ơn", category: "greetings", audio_url: "/audio/danke.mp3" },
      "vocab_008": { word_id: "vocab_008", stage_id: "stage_001", german: "Bitte", vietnamese: "Làm ơn/Không có gì", category: "greetings", audio_url: "/audio/bitte.mp3" },
  
      // Stage 2 - Numbers
      "vocab_009": { word_id: "vocab_009", stage_id: "stage_002", german: "eins", vietnamese: "một", category: "numbers", audio_url: "/audio/eins.mp3" },
      "vocab_010": { word_id: "vocab_010", stage_id: "stage_002", german: "zwei", vietnamese: "hai", category: "numbers", audio_url: "/audio/zwei.mp3" },
      "vocab_011": { word_id: "vocab_011", stage_id: "stage_002", german: "drei", vietnamese: "ba", category: "numbers", audio_url: "/audio/drei.mp3" },
      "vocab_012": { word_id: "vocab_012", stage_id: "stage_002", german: "vier", vietnamese: "bốn", category: "numbers", audio_url: "/audio/vier.mp3" },
      "vocab_013": { word_id: "vocab_013", stage_id: "stage_002", german: "fünf", vietnamese: "năm", category: "numbers", audio_url: "/audio/fuenf.mp3" },
      "vocab_014": { word_id: "vocab_014", stage_id: "stage_002", german: "sechs", vietnamese: "sáu", category: "numbers", audio_url: "/audio/sechs.mp3" },
      "vocab_015": { word_id: "vocab_015", stage_id: "stage_002", german: "sieben", vietnamese: "bảy", category: "numbers", audio_url: "/audio/sieben.mp3" },
      "vocab_016": { word_id: "vocab_016", stage_id: "stage_002", german: "acht", vietnamese: "tám", category: "numbers", audio_url: "/audio/acht.mp3" },
  
      // Stage 3 - Family
      "vocab_017": { word_id: "vocab_017", stage_id: "stage_003", german: "die Familie", vietnamese: "gia đình", category: "family", audio_url: "/audio/familie.mp3" },
      "vocab_018": { word_id: "vocab_018", stage_id: "stage_003", german: "die Mutter", vietnamese: "mẹ", category: "family", audio_url: "/audio/mutter.mp3" },
      "vocab_019": { word_id: "vocab_019", stage_id: "stage_003", german: "der Vater", vietnamese: "bố", category: "family", audio_url: "/audio/vater.mp3" },
      "vocab_020": { word_id: "vocab_020", stage_id: "stage_003", german: "der Sohn", vietnamese: "con trai", category: "family", audio_url: "/audio/sohn.mp3" },
      "vocab_021": { word_id: "vocab_021", stage_id: "stage_003", german: "die Tochter", vietnamese: "con gái", category: "family", audio_url: "/audio/tochter.mp3" },
      "vocab_022": { word_id: "vocab_022", stage_id: "stage_003", german: "der Bruder", vietnamese: "anh/em trai", category: "family", audio_url: "/audio/bruder.mp3" },
      "vocab_023": { word_id: "vocab_023", stage_id: "stage_003", german: "die Schwester", vietnamese: "chị/em gái", category: "family", audio_url: "/audio/schwester.mp3" },
      "vocab_024": { word_id: "vocab_024", stage_id: "stage_003", german: "die Großmutter", vietnamese: "bà", category: "family", audio_url: "/audio/grossmutter.mp3" },
  
      // Stage 4 - Food
      "vocab_025": { word_id: "vocab_025", stage_id: "stage_004", german: "das Brot", vietnamese: "bánh mì", category: "food", audio_url: "/audio/brot.mp3" },
      "vocab_026": { word_id: "vocab_026", stage_id: "stage_004", german: "das Wasser", vietnamese: "nước", category: "food", audio_url: "/audio/wasser.mp3" },
      "vocab_027": { word_id: "vocab_027", stage_id: "stage_004", german: "die Milch", vietnamese: "sữa", category: "food", audio_url: "/audio/milch.mp3" },
      "vocab_028": { word_id: "vocab_028", stage_id: "stage_004", german: "der Kaffee", vietnamese: "cà phê", category: "food", audio_url: "/audio/kaffee.mp3" },
      "vocab_029": { word_id: "vocab_029", stage_id: "stage_004", german: "der Tee", vietnamese: "trà", category: "food", audio_url: "/audio/tee.mp3" },
      "vocab_030": { word_id: "vocab_030", stage_id: "stage_004", german: "der Apfel", vietnamese: "táo", category: "food", audio_url: "/audio/apfel.mp3" },
      "vocab_031": { word_id: "vocab_031", stage_id: "stage_004", german: "die Banane", vietnamese: "chuối", category: "food", audio_url: "/audio/banane.mp3" },
      "vocab_032": { word_id: "vocab_032", stage_id: "stage_004", german: "das Fleisch", vietnamese: "thịt", category: "food", audio_url: "/audio/fleisch.mp3" },
  
      // Stage 5 - Colors and Objects
      "vocab_033": { word_id: "vocab_033", stage_id: "stage_005", german: "rot", vietnamese: "đỏ", category: "colors", audio_url: "/audio/rot.mp3" },
      "vocab_034": { word_id: "vocab_034", stage_id: "stage_005", german: "blau", vietnamese: "xanh dương", category: "colors", audio_url: "/audio/blau.mp3" },
      "vocab_035": { word_id: "vocab_035", stage_id: "stage_005", german: "grün", vietnamese: "xanh lá", category: "colors", audio_url: "/audio/gruen.mp3" },
      "vocab_036": { word_id: "vocab_036", stage_id: "stage_005", german: "gelb", vietnamese: "vàng", category: "colors", audio_url: "/audio/gelb.mp3" },
      "vocab_037": { word_id: "vocab_037", stage_id: "stage_005", german: "der Tisch", vietnamese: "cái bàn", category: "objects", audio_url: "/audio/tisch.mp3" },
      "vocab_038": { word_id: "vocab_038", stage_id: "stage_005", german: "der Stuhl", vietnamese: "cái ghế", category: "objects", audio_url: "/audio/stuhl.mp3" },
      "vocab_039": { word_id: "vocab_039", stage_id: "stage_005", german: "das Buch", vietnamese: "quyển sách", category: "objects", audio_url: "/audio/buch.mp3" },
      "vocab_040": { word_id: "vocab_040", stage_id: "stage_005", german: "der Stift", vietnamese: "cái bút", category: "objects", audio_url: "/audio/stift.mp3" }
    },
  
    // EXERCISE CONTENT COLLECTION (Sample exercises for each type and stage)
    exerciseContent: {
      // Stage 1 Exercises - Level 1
      "exercise_001": {
        exercise_content_id: "exercise_001",
        content_id: "content_004", // Stage 1 Exercise Content
        exercise_type_id: "ex_type_001", // Word Translation Multiple Choice
        question_data: {
          question: "Hallo",
          question_type: "german_to_vietnamese"
        },
        correct_answer: "Xin chào",
        options: ["Xin chào", "Tạm biệt", "Cảm ơn", "Làm ơn"],
        audio_file_path: "/audio/hallo.mp3",
        category: "greetings",
        difficulty_level: 1
      },
      "exercise_002": {
        exercise_content_id: "exercise_002",
        content_id: "content_004",
        exercise_type_id: "ex_type_002", // Word Listening Comprehension Multiple Choice
        question_data: {
          question: "Listen and select the Vietnamese translation",
          question_type: "audio_to_vietnamese"
        },
        correct_answer: "Chào buổi sáng",
        options: ["Chào buổi sáng", "Chào buổi trưa", "Chào buổi tối", "Tạm biệt"],
        audio_file_path: "/audio/guten_morgen.mp3",
        category: "greetings",
        difficulty_level: 1
      },
  
      // Stage 2 Exercises - Level 2
      "exercise_003": {
        exercise_content_id: "exercise_003",
        content_id: "content_008", // Stage 2 Exercise Content
        exercise_type_id: "ex_type_003", // Word Translation Typing
        question_data: {
          question: "hai",
          question_type: "vietnamese_to_german"
        },
        correct_answer: "zwei",
        options: null,
        audio_file_path: null,
        category: "numbers",
        difficulty_level: 2
      },
      "exercise_004": {
        exercise_content_id: "exercise_004",
        content_id: "content_008",
        exercise_type_id: "ex_type_005", // Fill-in-the-Blank Choice
        question_data: {
          question: "Ich bin ____ Jahre alt.",
          question_type: "fill_blank",
          context: "age_statement"
        },
        correct_answer: "fünf",
        options: ["drei", "vier", "fünf", "sechs"],
        audio_file_path: null,
        category: "numbers",
        difficulty_level: 2
      },
  
      // Stage 3 Exercises - Level 3
      "exercise_005": {
        exercise_content_id: "exercise_005",
        content_id: "content_012", // Stage 3 Exercise Content
        exercise_type_id: "ex_type_006", // Matching Exercises
        question_data: {
          question: "Match German words with Vietnamese translations",
          question_type: "matching",
          pairs: [
            { german: "die Mutter", vietnamese: "mẹ" },
            { german: "der Vater", vietnamese: "bố" },
            { german: "der Sohn", vietnamese: "con trai" },
            { german: "die Tochter", vietnamese: "con gái" }
          ]
        },
        correct_answer: "all_pairs_matched",
        options: null,
        audio_file_path: null,
        category: "family",
        difficulty_level: 3
      },
  
      // Stage 4 Exercises - Level 4
      "exercise_006": {
        exercise_content_id: "exercise_006",
        content_id: "content_016", // Stage 4 Exercise Content
        exercise_type_id: "ex_type_008", // Phrase Translation
        question_data: {
          question: "Tôi uống cà phê.",
          question_type: "phrase_translation",
          word_bank: ["Ich", "trinke", "Kaffee", "esse", "Brot", "der", "die", "das"]
        },
        correct_answer: "Ich trinke Kaffee.",
        options: null,
        audio_file_path: null,
        category: "food",
        difficulty_level: 4
      }
    },
  
    // USER PROGRESS COLLECTION (Sample user progress)
    userProgress: {
      "progress_001": {
        user_id: "user_123",
        content_id: "content_001",
        completion_count: 1,
        daily_completion_count: 1,
        last_completion_date: "2024-06-07",
        current_lives: 5,
        total_points_earned: 20,
        current_difficulty_level: 1
      },
      "progress_002": {
        user_id: "user_123",
        content_id: "content_002",
        completion_count: 1,
        daily_completion_count: 1,
        last_completion_date: "2024-06-07",
        current_lives: 0,
        total_points_earned: 0,
        current_difficulty_level: 1
      }
    }
  };

export default mockData;