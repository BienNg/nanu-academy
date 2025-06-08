export interface CourseLesson {
  id: string;
  title: string;
  type: 'video' | 'vocab' | 'flashcards' | 'exercises';
  duration: string;
  completed: boolean;
  locked: boolean;
  xp: number;
  videoSummary?: string;
  url?: string;
  exerciseLevels?: {
    level: number;
    title: string;
    completed: boolean;
    locked: boolean;
  }[];
}

export interface CourseStage {
  id: string;
  title: string;
  description: string;
  stageNumber: number;
  progress: number;
  lessons: CourseLesson[];
  locked: boolean;
  completed: boolean;
}

export interface CourseStructure {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalStages: number;
  completedStages: number;
  stages: CourseStage[];
}

export const courseData: CourseStructure = {
  id: "course_001",
  title: "Deutsch A1.1",
  description: "Master the fundamentals of German language",
  progress: 35,
  totalStages: 5,
  completedStages: 1,
  stages: [
    {
      id: "stage_001",
      title: "Sich begüßen",
      description: "Learn basic German greetings and common phrases",
      stageNumber: 1,
      progress: 100,
      locked: false,
      completed: true,
      lessons: [
        {
          id: "lesson_001_01",
          title: "Sich begrüßen",
          type: "video",
          duration: "10 min",
          videoSummary: `**Lesson Overview:**
This lesson introduces you to the fundamental greetings and farewells in German, providing the building blocks for everyday conversation. Follow along with the video and use this summary as your reference and study guide.

**What You’ll Learn:**
- **Why Greetings Matter:**
  - Discover the cultural significance of greetings in German-speaking countries and how they set the tone for interactions.
- **Essential Greetings:**
  - "Hallo" (Hello): The universal greeting for any time of day.
  - "Guten Morgen" (Good morning), "Guten Tag" (Good day), "Guten Abend" (Good evening): Learn when and how to use each, with correct pronunciation and intonation.
- **Formal vs. Informal:**
  - Understand the difference between formal ("Sie") and informal ("du") address, and when to use each in greetings.
- **Introducing Yourself:**
  - Practice introducing yourself and responding to introductions in German, with sample phrases and dialogue.
- **Common Farewells:**
  - "Tschüss" (Bye), "Auf Wiedersehen" (Goodbye), "Bis bald" (See you soon): Learn how to say goodbye in various settings, both formal and informal.

**Key Phrases & Pronunciation:**
- Each greeting and farewell is broken down phonetically, with tips for mastering German sounds.
- Repeat after the instructor and use the provided example sentences to build your confidence.

**Cultural Notes:**
- Explore regional variations in greetings and farewells across Germany, Austria, and Switzerland.
- Learn about body language, eye contact, and handshake etiquette in German culture.

**Practice Scenarios:**
- Role-play meeting someone for the first time, entering a shop, or greeting classmates, using the phrases you’ve learned.
- On-screen prompts and example dialogues help reinforce each phrase, making it easy to follow along and practice in real time.

**By the End of This Lesson:**
- You’ll be able to confidently greet and bid farewell in a variety of social situations, laying a strong foundation for your German language journey.
`,
          completed: true,
          locked: false,
          xp: 15,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_001_02",
          title: "Vocab List: Basic Greetings",
          type: "vocab",
          duration: "5 min",
          completed: true,
          locked: false,
          xp: 10
        },
        {
          id: "lesson_001_03",
          title: "Flash Cards: Practice Greetings",
          type: "flashcards",
          duration: "15 min",
          completed: true,
          locked: false,
          xp: 20
        },
        {
          id: "lesson_001_04",
          title: "Exercises: Greeting Scenarios",
          type: "exercises",
          duration: "20 min",
          completed: true,
          locked: false,
          xp: 25,
          exerciseLevels: [
            { level: 1, title: "Basic Recognition", completed: true, locked: false },
            { level: 2, title: "Fill in the Blanks", completed: true, locked: false },
            { level: 3, title: "Multiple Choice", completed: true, locked: false },
            { level: 4, title: "Free Response", completed: true, locked: false }
          ]
        }
      ]
    },
    {
      id: "stage_002",
      title: "Numbers and Time",
      description: "Learn to count and tell time in German",
      stageNumber: 2,
      progress: 75,
      locked: false,
      completed: false,
      lessons: [
        {
          id: "lesson_002_01",
          title: "Video Lecture: Numbers 1-100",
          type: "video",
          duration: "12 min",
          videoSummary: `This comprehensive video lesson guides you through counting from 1 to 100 in German, starting with the basics and building up to more complex number patterns. The instructor begins by introducing the numbers 1 to 10, focusing on pronunciation, spelling, and mnemonic devices to aid memorization. You’ll hear each number pronounced slowly and clearly, with visual aids on screen. The lesson then progresses to numbers 11 through 20, highlighting unique patterns and exceptions. Next, you’ll explore the structure of tens (20, 30, 40, etc.) and learn how to construct compound numbers, such as 21 (einundzwanzig) and 57 (siebenundfünfzig), with clear explanations of German number-building rules. Practical exercises are included throughout: counting objects, answering "How many?" questions, and practicing with real-life scenarios like telling your age or giving a phone number. The instructor also covers tips for mastering tricky pronunciations and common mistakes to avoid. By the end of the video, you’ll have a strong grasp of German numbers up to 100, ready to use them confidently in conversation, shopping, and everyday life.`,
          completed: true,
          locked: false,
          xp: 15,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_002_02",
          title: "Vocab List: Numbers & Time",
          type: "vocab",
          duration: "8 min",
          completed: true,
          locked: false,
          xp: 10
        },
        {
          id: "lesson_002_03",
          title: "Flash Cards: Number Practice",
          type: "flashcards",
          duration: "12 min",
          completed: true,
          locked: false,
          xp: 20
        },
        {
          id: "lesson_002_04",
          title: "Exercises: Time & Numbers",
          type: "exercises",
          duration: "18 min",
          completed: false,
          locked: false,
          xp: 30,
          exerciseLevels: [
            { level: 1, title: "Number Recognition", completed: true, locked: false },
            { level: 2, title: "Time Telling", completed: true, locked: false },
            { level: 3, title: "Math Problems", completed: true, locked: false },
            { level: 4, title: "Real Scenarios", completed: false, locked: false }
          ]
        }
      ]
    },
    {
      id: "stage_003",
      title: "Everyday Objects",
      description: "Common objects and articles",
      stageNumber: 3,
      progress: 0,
      locked: false,
      completed: false,
      lessons: [
        {
          id: "lesson_003_01",
          title: "Video Lecture: Articles & Objects",
          type: "video",
          duration: "14 min",
          videoSummary: `This lesson delivers a deep dive into German articles—"der," "die," and "das"—and their use with everyday objects. The video opens with an explanation of grammatical gender in German, outlining why each noun is assigned a specific article. The instructor presents a curated list of common household and classroom objects, such as "der Tisch" (the table), "die Lampe" (the lamp), and "das Buch" (the book), with vivid images and clear pronunciation. You’ll learn strategies for remembering the correct article for each noun, including color-coding, rhymes, and association techniques. The lesson features interactive segments where you match objects to their articles, with instant feedback and explanations for each answer. Cultural notes are provided on regional variations and exceptions. The instructor also discusses plural forms and how articles change accordingly. Throughout the video, you’ll encounter mini-dialogues and real-life examples showing how to use these nouns and articles in context, such as describing your room or asking for an item in a store. By the end of the lesson, you’ll understand the logic behind German articles and feel confident using them with a wide range of everyday objects.`,
          completed: false,
          locked: false,
          xp: 15,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_003_02",
          title: "Vocab List: Household Items",
          type: "vocab",
          duration: "6 min",
          completed: false,
          locked: true,
          xp: 10
        },
        {
          id: "lesson_003_03",
          title: "Flash Cards: Object Practice",
          type: "flashcards",
          duration: "15 min",
          completed: false,
          locked: true,
          xp: 20
        },
        {
          id: "lesson_003_04",
          title: "Exercises: Articles Quiz",
          type: "exercises",
          duration: "25 min",
          completed: false,
          locked: true,
          xp: 35,
          exerciseLevels: [
            { level: 1, title: "Object Recognition", completed: false, locked: true },
            { level: 2, title: "Article Practice", completed: false, locked: true },
            { level: 3, title: "Sentence Building", completed: false, locked: true },
            { level: 4, title: "Description Tasks", completed: false, locked: true }
          ]
        }
      ]
    },
    {
      id: "stage_004",
      title: "Food and Drinks",
      description: "Food items and ordering at restaurants",
      stageNumber: 4,
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        {
          id: "lesson_004_01",
          title: "Video Lecture: Food Vocabulary",
          type: "video",
          duration: "16 min",
          completed: false,
          locked: true,
          xp: 20,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_004_02",
          title: "Vocab List: Meals & Drinks",
          type: "vocab",
          duration: "8 min",
          completed: false,
          locked: true,
          xp: 12
        },
        {
          id: "lesson_004_03",
          title: "Flash Cards: Food Practice",
          type: "flashcards",
          duration: "18 min",
          completed: false,
          locked: true,
          xp: 25
        },
        {
          id: "lesson_004_04",
          title: "Exercises: Restaurant Scenarios",
          type: "exercises",
          duration: "30 min",
          completed: false,
          locked: true,
          xp: 40,
          exerciseLevels: [
            { level: 1, title: "Menu Reading", completed: false, locked: true },
            { level: 2, title: "Ordering Practice", completed: false, locked: true },
            { level: 3, title: "Conversation Drills", completed: false, locked: true },
            { level: 4, title: "Role Play", completed: false, locked: true }
          ]
        }
      ]
    },
    {
      id: "stage_005",
      title: "Colors and Descriptions",
      description: "Colors and basic adjectives",
      stageNumber: 5,
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        {
          id: "lesson_005_01",
          title: "Video Lecture: Colors & Adjectives",
          type: "video",
          duration: "11 min",
          completed: false,
          locked: true,
          xp: 15,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_005_02",
          title: "Vocab List: Descriptive Words",
          type: "vocab",
          duration: "7 min",
          completed: false,
          locked: true,
          xp: 10
        },
        {
          id: "lesson_005_03",
          title: "Flash Cards: Color & Description Practice",
          type: "flashcards",
          duration: "16 min",
          completed: false,
          locked: true,
          xp: 22
        },
        {
          id: "lesson_005_04",
          title: "Exercises: Description Challenges",
          type: "exercises",
          duration: "22 min",
          completed: false,
          locked: true,
          xp: 35,
          exerciseLevels: [
            { level: 1, title: "Color Matching", completed: false, locked: true },
            { level: 2, title: "Adjective Agreement", completed: false, locked: true },
            { level: 3, title: "Description Writing", completed: false, locked: true },
            { level: 4, title: "Creative Descriptions", completed: false, locked: true }
          ]
        }
      ]
    }
  ]
};
