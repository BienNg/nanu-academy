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

export const courseDataA1_2: CourseStructure = {
  id: "course_002",
  title: "Deutsch A1.2",
  description: "Build on your German foundations with practical conversations",
  progress: 0,
  totalStages: 6,
  completedStages: 0,
  stages: [
    {
      id: "stage_006",
      title: "Familie und Freunde",
      description: "Family members, relationships, and personal information",
      stageNumber: 1,
      progress: 0,
      locked: false,
      completed: false,
      lessons: [
        {
          id: "lesson_006_01",
          title: "Video Lecture: Family Members",
          type: "video",
          duration: "13 min",
          videoSummary: `**Lesson Overview:**\nLearn to talk about your family and relationships in German, mastering essential vocabulary and possessive pronouns.\n\n**What You'll Learn:**\n- **Family Vocabulary:**\n  - Core family terms: "die Familie" (family), "die Mutter/Mama" (mother), "der Vater/Papa" (father), "der Bruder" (brother), "die Schwester" (sister)\n  - Extended family: "die Großmutter/Oma" (grandmother), "der Großvater/Opa" (grandfather), "die Tante" (aunt), "der Onkel" (uncle)\n- **Possessive Pronouns:**\n  - Learn "mein/meine" (my), "dein/deine" (your), "sein/seine" (his), "ihr/ihre" (her) and their correct usage with family members\n- **Personal Information:**\n  - Practice stating ages, occupations, and relationships: "Mein Vater ist 45 Jahre alt" (My father is 45 years old)\n- **Cultural Insights:**\n  - German family traditions, typical family structures, and how Germans talk about family relationships\n- **Conversation Practice:**\n  - Role-play introducing family members and asking about others' families using natural dialogue patterns\n\n**Interactive Elements:**\n- Family tree exercises where you identify relationships and practice possessive pronouns\n- Listening comprehension with native speakers describing their families\n- Photo description activities using family vocabulary\n\n**By the End of This Lesson:**\nYou'll confidently describe your family, ask about others' relatives, and use possessive pronouns correctly in context.`,
          completed: false,
          locked: false,
          xp: 18,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_006_02",
          title: "Vocab List: Family & Relationships",
          type: "vocab",
          duration: "7 min",
          completed: false,
          locked: false,
          xp: 12
        },
        {
          id: "lesson_006_03",
          title: "Flash Cards: Family Members",
          type: "flashcards",
          duration: "16 min",
          completed: false,
          locked: false,
          xp: 24
        },
        {
          id: "lesson_006_04",
          title: "Exercises: Family Descriptions",
          type: "exercises",
          duration: "28 min",
          completed: false,
          locked: false,
          xp: 36,
          exerciseLevels: [
            { level: 1, title: "Family Tree Completion", completed: false, locked: true },
            { level: 2, title: "Possessive Pronouns", completed: false, locked: true },
            { level: 3, title: "Family Interviews", completed: false, locked: true },
            { level: 4, title: "Personal Stories", completed: false, locked: true }
          ]
        }
      ]
    },
    {
      id: "stage_007",
      title: "Hobbys und Freizeit",
      description: "Hobbies, leisure activities, and expressing preferences",
      stageNumber: 2,
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        {
          id: "lesson_007_01",
          title: "Video Lecture: Hobbies & Activities",
          type: "video",
          duration: "15 min",
          videoSummary: `This engaging lesson introduces you to talking about hobbies and free time activities in German. You'll learn essential vocabulary for popular pastimes including sports ("der Sport"), reading ("lesen"), music ("die Musik"), and outdoor activities. The instructor covers verb conjugations for hobby-related activities, focusing on regular and irregular verbs like "spielen" (to play), "gehen" (to go), and "machen" (to do/make). You'll master expressing preferences using "Ich mag..." (I like) and "Ich liebe..." (I love), as well as frequency expressions like "oft" (often), "manchmal" (sometimes), and "nie" (never). The lesson includes cultural segments about popular German leisure activities, seasonal sports, and how Germans typically spend their weekends. Practical dialogues demonstrate asking about and describing hobbies: "Was machst du gern in deiner Freizeit?" (What do you like to do in your free time?). Interactive elements include matching activities to seasons, expressing opinions about different hobbies, and building sentences about your weekly routine using time expressions and hobby vocabulary.`,
          completed: false,
          locked: true,
          xp: 20,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_007_02",
          title: "Vocab List: Hobbies & Sports",
          type: "vocab",
          duration: "9 min",
          completed: false,
          locked: true,
          xp: 14
        },
        {
          id: "lesson_007_03",
          title: "Flash Cards: Activity Practice",
          type: "flashcards",
          duration: "18 min",
          completed: false,
          locked: true,
          xp: 26
        },
        {
          id: "lesson_007_04",
          title: "Exercises: Hobby Conversations",
          type: "exercises",
          duration: "32 min",
          completed: false,
          locked: true,
          xp: 40,
          exerciseLevels: [
            { level: 1, title: "Activity Matching", completed: false, locked: true },
            { level: 2, title: "Preference Expressions", completed: false, locked: true },
            { level: 3, title: "Schedule Planning", completed: false, locked: true },
            { level: 4, title: "Hobby Presentations", completed: false, locked: true }
          ]
        }
      ]
    },
    {
      id: "stage_008",
      title: "Einkaufen und Kleidung",
      description: "Shopping vocabulary, clothing items, and sizes",
      stageNumber: 3,
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        {
          id: "lesson_008_01",
          title: "Video Lecture: Shopping & Clothing",
          type: "video",
          duration: "17 min",
          videoSummary: `This comprehensive shopping lesson equips you with essential vocabulary and phrases for clothing stores and general shopping in German-speaking countries. You'll learn clothing items from basics like "das T-Shirt," "die Hose" (pants), "der Rock" (skirt) to accessories like "die Schuhe" (shoes) and "die Tasche" (bag). The instructor covers size expressions, colors with clothing, and price discussions including "Wie viel kostet...?" (How much does... cost?) and "Das ist zu teuer" (That's too expensive). You'll master shopping phrases for asking for help: "Können Sie mir helfen?" (Can you help me?), trying things on: "Kann ich das anprobieren?" (Can I try this on?), and making purchases. Cultural notes highlight German shopping customs, typical store hours, and payment methods. The lesson includes role-play scenarios in clothing stores, department stores, and markets, with authentic dialogues between customers and salespeople. Interactive exercises feature virtual shopping experiences where you practice describing clothing preferences, asking about availability in different sizes, and negotiating prices at markets.`,
          completed: false,
          locked: true,
          xp: 22,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_008_02",
          title: "Vocab List: Clothing & Shopping",
          type: "vocab",
          duration: "10 min",
          completed: false,
          locked: true,
          xp: 15
        },
        {
          id: "lesson_008_03",
          title: "Flash Cards: Shopping Scenarios",
          type: "flashcards",
          duration: "20 min",
          completed: false,
          locked: true,
          xp: 28
        },
        {
          id: "lesson_008_04",
          title: "Exercises: Store Interactions",
          type: "exercises",
          duration: "35 min",
          completed: false,
          locked: true,
          xp: 45,
          exerciseLevels: [
            { level: 1, title: "Clothing Identification", completed: false, locked: true },
            { level: 2, title: "Size & Color Practice", completed: false, locked: true },
            { level: 3, title: "Shopping Dialogues", completed: false, locked: true },
            { level: 4, title: "Market Negotiations", completed: false, locked: true }
          ]
        }
      ]
    },
    {
      id: "stage_009",
      title: "Wohnen und Zuhause",
      description: "Home, rooms, furniture, and living situations",
      stageNumber: 4,
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        {
          id: "lesson_009_01",
          title: "Video Lecture: Home & Living",
          type: "video",
          duration: "16 min",
          videoSummary: `Explore German vocabulary for describing homes, apartments, and living situations in this detailed lesson. You'll learn room names including "das Wohnzimmer" (living room), "die Küche" (kitchen), "das Schlafzimmer" (bedroom), and "das Badezimmer" (bathroom), along with common furniture and household items. The instructor covers housing types from "die Wohnung" (apartment) to "das Haus" (house), and rental vocabulary including "die Miete" (rent) and "der Vermieter" (landlord). You'll master prepositions of location: "in," "auf," "unter," "neben" to describe where things are placed. The lesson includes essential phrases for describing your living situation, asking about apartments, and talking about household chores. Cultural segments explore typical German housing, living arrangements for students and families, and apartment hunting customs. Interactive elements include virtual house tours where you practice describing rooms and their contents, location exercises using prepositions, and role-plays for apartment viewings and describing your ideal home to others.`,
          completed: false,
          locked: true,
          xp: 20,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_009_02",
          title: "Vocab List: Rooms & Furniture",
          type: "vocab",
          duration: "8 min",
          completed: false,
          locked: true,
          xp: 13
        },
        {
          id: "lesson_009_03",
          title: "Flash Cards: Home Description",
          type: "flashcards",
          duration: "17 min",
          completed: false,
          locked: true,
          xp: 25
        },
        {
          id: "lesson_009_04",
          title: "Exercises: Living Situations",
          type: "exercises",
          duration: "30 min",
          completed: false,
          locked: true,
          xp: 42,
          exerciseLevels: [
            { level: 1, title: "Room Identification", completed: false, locked: true },
            { level: 2, title: "Furniture Placement", completed: false, locked: true },
            { level: 3, title: "Home Descriptions", completed: false, locked: true },
            { level: 4, title: "Apartment Hunting", completed: false, locked: true }
          ]
        }
      ]
    },
    {
      id: "stage_010",
      title: "Verkehrsmittel und Reisen",
      description: "Transportation, travel, and giving directions",
      stageNumber: 5,
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        {
          id: "lesson_010_01",
          title: "Video Lecture: Transportation & Travel",
          type: "video",
          duration: "18 min",
          videoSummary: `Master German transportation vocabulary and travel expressions in this comprehensive lesson covering everything from daily commuting to vacation planning. You'll learn transportation modes including "der Bus," "die Bahn/der Zug" (train), "das Auto," "das Fahrrad" (bicycle), and "das Flugzeug" (airplane), along with related vocabulary like "der Bahnhof" (train station) and "der Flughafen" (airport). The instructor covers travel verbs: "fahren" (to drive/go by vehicle), "fliegen" (to fly), "gehen" (to walk), and "reisen" (to travel). You'll master asking for and giving directions using "Wo ist...?" (Where is...?), "Wie komme ich zu...?" (How do I get to...?), and direction words like "links" (left), "rechts" (right), "geradeaus" (straight ahead). The lesson includes practical phrases for buying tickets, asking about schedules, and navigating public transportation. Cultural insights cover German public transport systems, travel customs, and popular vacation destinations. Interactive segments include map reading exercises, role-playing at ticket machines, and planning imaginary trips using transportation vocabulary and time expressions.`,
          completed: false,
          locked: true,
          xp: 24,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_010_02",
          title: "Vocab List: Transport & Directions",
          type: "vocab",
          duration: "11 min",
          completed: false,
          locked: true,
          xp: 16
        },
        {
          id: "lesson_010_03",
          title: "Flash Cards: Travel Vocabulary",
          type: "flashcards",
          duration: "19 min",
          completed: false,
          locked: true,
          xp: 27
        },
        {
          id: "lesson_010_04",
          title: "Exercises: Journey Planning",
          type: "exercises",
          duration: "33 min",
          completed: false,
          locked: true,
          xp: 43,
          exerciseLevels: [
            { level: 1, title: "Transport Recognition", completed: false, locked: true },
            { level: 2, title: "Direction Giving", completed: false, locked: true },
            { level: 3, title: "Ticket Purchases", completed: false, locked: true },
            { level: 4, title: "Trip Planning", completed: false, locked: true }
          ]
        }
      ]
    },
    {
      id: "stage_011",
      title: "Gesundheit und Körper",
      description: "Health, body parts, and medical situations",
      stageNumber: 6,
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        {
          id: "lesson_011_01",
          title: "Video Lecture: Health & Body",
          type: "video",
          duration: "14 min",
          videoSummary: `Learn essential German vocabulary for health, body parts, and medical situations in this vital lesson for daily life and emergencies. You'll master body part vocabulary from basic terms like "der Kopf" (head), "die Hand" (hand), "der Fuß" (foot) to internal organs and more specific parts. The instructor covers common health problems and symptoms: "Ich habe Kopfschmerzen" (I have a headache), "Mir ist schlecht" (I feel sick), "Ich bin erkältet" (I have a cold). You'll learn to express pain and discomfort, describe symptoms to a doctor, and understand basic medical advice. Essential phrases include making appointments: "Ich brauche einen Termin" (I need an appointment), asking for help: "Können Sie mir helfen?" (Can you help me?), and emergency expressions. The lesson includes cultural insights about the German healthcare system, pharmacy visits, and when to see a doctor versus self-care. Interactive elements feature body part identification exercises, symptom description practice, and role-playing doctor-patient conversations with authentic medical dialogue patterns.`,
          completed: false,
          locked: true,
          xp: 18,
          url: "https://drive.google.com/file/d/1TGIW7-XvuW4F742f-DLQlpkmXPJqUvkc/view?usp=sharing"
        },
        {
          id: "lesson_011_02",
          title: "Vocab List: Body & Health",
          type: "vocab",
          duration: "9 min",
          completed: false,
          locked: true,
          xp: 14
        },
        {
          id: "lesson_011_03",
          title: "Flash Cards: Medical Vocabulary",
          type: "flashcards",
          duration: "16 min",
          completed: false,
          locked: true,
          xp: 24
        },
        {
          id: "lesson_011_04",
          title: "Exercises: Health Scenarios",
          type: "exercises",
          duration: "28 min",
          completed: false,
          locked: true,
          xp: 38,
          exerciseLevels: [
            { level: 1, title: "Body Part Identification", completed: false, locked: true },
            { level: 2, title: "Symptom Description", completed: false, locked: true },
            { level: 3, title: "Doctor Visits", completed: false, locked: true }
          ]
        }
      ]
    }
  ]
};

export const allCourses: CourseStructure[] = [courseData, courseDataA1_2];
