interface VocabularyItem {
  word_id: string;
  course_id: string;
  stage_id: string;
  german: string;
  vietnamese: string;
  category: string;
  audio_url: string;
}

// Helper type to organize vocabulary by course and stage
type VocabularyByCourseAndStage = Record<string, Record<string, VocabularyItem[]>>;

// All vocabulary items with their course assignments
const vocabularyItems: VocabularyItem[] = [
  // Course 001 - Deutsch A1.1
  // Stage 1 - Greetings
  { word_id: "vocab_001", course_id: "course_001", stage_id: "stage_001", german: "Hallo", vietnamese: "Xin chào", category: "greetings", audio_url: "/audio/hallo.mp3" },
  { word_id: "vocab_002", course_id: "course_001", stage_id: "stage_001", german: "Guten Morgen", vietnamese: "Chào buổi sáng", category: "greetings", audio_url: "/audio/guten_morgen.mp3" },
  { word_id: "vocab_003", course_id: "course_001", stage_id: "stage_001", german: "Guten Tag", vietnamese: "Chào buổi trưa", category: "greetings", audio_url: "/audio/guten_tag.mp3" },
  { word_id: "vocab_004", course_id: "course_001", stage_id: "stage_001", german: "Guten Abend", vietnamese: "Chào buổi tối", category: "greetings", audio_url: "/audio/guten_abend.mp3" },
  { word_id: "vocab_005", course_id: "course_001", stage_id: "stage_001", german: "Auf Wiedersehen", vietnamese: "Tạm biệt", category: "greetings", audio_url: "/audio/auf_wiedersehen.mp3" },
  { word_id: "vocab_006", course_id: "course_001", stage_id: "stage_001", german: "Tschüss", vietnamese: "Tạm biệt (thân mật)", category: "greetings", audio_url: "/audio/tschuess.mp3" },
  { word_id: "vocab_007", course_id: "course_001", stage_id: "stage_001", german: "Danke", vietnamese: "Cảm ơn", category: "common_phrases", audio_url: "/audio/danke.mp3" },
  { word_id: "vocab_008", course_id: "course_001", stage_id: "stage_001", german: "Bitte", vietnamese: "Làm ơn/Không có chi", category: "common_phrases", audio_url: "/audio/bitte.mp3" },
  { word_id: "vocab_009", course_id: "course_001", stage_id: "stage_001", german: "Entschuldigung", vietnamese: "Xin lỗi", category: "common_phrases", audio_url: "/audio/entschuldigung.mp3" },
  { word_id: "vocab_010", course_id: "course_001", stage_id: "stage_001", german: "Ja/Nein", vietnamese: "Có/Không", category: "common_phrases", audio_url: "/audio/ja_nein.mp3" },

  // Stage 2 - Numbers and Time
  { word_id: "vocab_011", course_id: "course_001", stage_id: "stage_002", german: "eins", vietnamese: "một", category: "numbers", audio_url: "/audio/eins.mp3" },
  { word_id: "vocab_012", course_id: "course_001", stage_id: "stage_002", german: "zwei", vietnamese: "hai", category: "numbers", audio_url: "/audio/zwei.mp3" },
  { word_id: "vocab_013", course_id: "course_001", stage_id: "stage_002", german: "drei", vietnamese: "ba", category: "numbers", audio_url: "/audio/drei.mp3" },
  { word_id: "vocab_014", course_id: "course_001", stage_id: "stage_002", german: "vier", vietnamese: "bốn", category: "numbers", audio_url: "/audio/vier.mp3" },
  { word_id: "vocab_015", course_id: "course_001", stage_id: "stage_002", german: "fünf", vietnamese: "năm", category: "numbers", audio_url: "/audio/fuenf.mp3" },
  { word_id: "vocab_016", course_id: "course_001", stage_id: "stage_002", german: "sechs", vietnamese: "sáu", category: "numbers", audio_url: "/audio/sechs.mp3" },
  { word_id: "vocab_017", course_id: "course_001", stage_id: "stage_002", german: "sieben", vietnamese: "bảy", category: "numbers", audio_url: "/audio/sieben.mp3" },
  { word_id: "vocab_018", course_id: "course_001", stage_id: "stage_002", german: "acht", vietnamese: "tám", category: "numbers", audio_url: "/audio/acht.mp3" },
  { word_id: "vocab_019", course_id: "course_001", stage_id: "stage_002", german: "neun", vietnamese: "chín", category: "numbers", audio_url: "/audio/neun.mp3" },
  { word_id: "vocab_020", course_id: "course_001", stage_id: "stage_002", german: "zehn", vietnamese: "mười", category: "numbers", audio_url: "/audio/zehn.mp3" },

  // Stage 3 - Everyday Objects
  { word_id: "vocab_021", course_id: "course_001", stage_id: "stage_003", german: "der Tisch", vietnamese: "cái bàn", category: "objects", audio_url: "/audio/tisch.mp3" },
  { word_id: "vocab_022", course_id: "course_001", stage_id: "stage_003", german: "der Stuhl", vietnamese: "cái ghế", category: "objects", audio_url: "/audio/stuhl.mp3" },
  { word_id: "vocab_023", course_id: "course_001", stage_id: "stage_003", german: "das Buch", vietnamese: "quyển sách", category: "objects", audio_url: "/audio/buch.mp3" },
  { word_id: "vocab_024", course_id: "course_001", stage_id: "stage_003", german: "der Stift", vietnamese: "cây bút", category: "objects", audio_url: "/audio/stift.mp3" },
  { word_id: "vocab_025", course_id: "course_001", stage_id: "stage_003", german: "das Papier", vietnamese: "tờ giấy", category: "objects", audio_url: "/audio/papier.mp3" },

  // Stage 4 - Food and Drinks
  { word_id: "vocab_026", course_id: "course_001", stage_id: "stage_004", german: "das Wasser", vietnamese: "nước", category: "drinks", audio_url: "/audio/wasser.mp3" },
  { word_id: "vocab_027", course_id: "course_001", stage_id: "stage_004", german: "der Kaffee", vietnamese: "cà phê", category: "drinks", audio_url: "/audio/kaffee.mp3" },
  { word_id: "vocab_028", course_id: "course_001", stage_id: "stage_004", german: "der Tee", vietnamese: "trà", category: "drinks", audio_url: "/audio/tee.mp3" },
  { word_id: "vocab_029", course_id: "course_001", stage_id: "stage_004", german: "das Brot", vietnamese: "bánh mì", category: "food", audio_url: "/audio/brot.mp3" },
  { word_id: "vocab_030", course_id: "course_001", stage_id: "stage_004", german: "der Apfel", vietnamese: "táo", category: "food", audio_url: "/audio/apfel.mp3" },
  { word_id: "vocab_031", course_id: "course_001", stage_id: "stage_004", german: "die Banane", vietnamese: "chuối", category: "food", audio_url: "/audio/banane.mp3" },
  { word_id: "vocab_032", course_id: "course_001", stage_id: "stage_004", german: "das Fleisch", vietnamese: "thịt", category: "food", audio_url: "/audio/fleisch.mp3" },

  // Stage 5 - Colors and Objects
  { word_id: "vocab_033", course_id: "course_001", stage_id: "stage_005", german: "rot", vietnamese: "màu đỏ", category: "colors", audio_url: "/audio/rot.mp3" },
  { word_id: "vocab_034", course_id: "course_001", stage_id: "stage_005", german: "blau", vietnamese: "màu xanh dương", category: "colors", audio_url: "/audio/blau.mp3" },
  { word_id: "vocab_035", course_id: "course_001", stage_id: "stage_005", german: "grün", vietnamese: "màu xanh lá cây", category: "colors", audio_url: "/audio/gruen.mp3" },
  { word_id: "vocab_036", course_id: "course_001", stage_id: "stage_005", german: "gelb", vietnamese: "màu vàng", category: "colors", audio_url: "/audio/gelb.mp3" },
  { word_id: "vocab_037", course_id: "course_001", stage_id: "stage_005", german: "schwarz", vietnamese: "màu đen", category: "colors", audio_url: "/audio/schwarz.mp3" },
  { word_id: "vocab_038", course_id: "course_001", stage_id: "stage_005", german: "weiß", vietnamese: "màu trắng", category: "colors", audio_url: "/audio/weiss.mp3" },
  { word_id: "vocab_039", course_id: "course_001", stage_id: "stage_005", german: "groß", vietnamese: "to, lớn", category: "adjectives", audio_url: "/audio/gross.mp3" },
  { word_id: "vocab_040", course_id: "course_001", stage_id: "stage_005", german: "klein", vietnamese: "nhỏ, bé", category: "adjectives", audio_url: "/audio/klein.mp3" },

  // Course 002 - Deutsch A1.2 - Family & Relationships
  { word_id: "vocab_041", course_id: "course_002", stage_id: "stage_006", german: "die Familie", vietnamese: "gia đình", category: "family", audio_url: "/audio/familie.mp3" },
  { word_id: "vocab_042", course_id: "course_002", stage_id: "stage_006", german: "die Eltern (pl)", vietnamese: "bố mẹ", category: "family", audio_url: "/audio/eltern.mp3" },
  { word_id: "vocab_043", course_id: "course_002", stage_id: "stage_006", german: "die Mutter", vietnamese: "mẹ", category: "family", audio_url: "/audio/mutter.mp3" },
  { word_id: "vocab_044", course_id: "course_002", stage_id: "stage_006", german: "der Vater", vietnamese: "bố", category: "family", audio_url: "/audio/vater.mp3" },
  { word_id: "vocab_045", course_id: "course_002", stage_id: "stage_006", german: "die Geschwister (pl)", vietnamese: "anh chị em ruột", category: "family", audio_url: "/audio/geschwister.mp3" },
  { word_id: "vocab_046", course_id: "course_002", stage_id: "stage_006", german: "der Bruder", vietnamese: "anh/em trai", category: "family", audio_url: "/audio/bruder.mp3" },
  { word_id: "vocab_047", course_id: "course_002", stage_id: "stage_006", german: "die Schwester", vietnamese: "chị/em gái", category: "family", audio_url: "/audio/schwester.mp3" },
  { word_id: "vocab_048", course_id: "course_002", stage_id: "stage_006", german: "die Großeltern (pl)", vietnamese: "ông bà", category: "family", audio_url: "/audio/grosseltern.mp3" },
  { word_id: "vocab_049", course_id: "course_002", stage_id: "stage_006", german: "die Großmutter", vietnamese: "bà", category: "family", audio_url: "/audio/grossmutter.mp3" },
  { word_id: "vocab_050", course_id: "course_002", stage_id: "stage_006", german: "der Großvater", vietnamese: "ông", category: "family", audio_url: "/audio/grossvater.mp3" },
  { word_id: "vocab_051", course_id: "course_002", stage_id: "stage_006", german: "der Enkel", vietnamese: "cháu trai", category: "family", audio_url: "/audio/enkel.mp3" },
  { word_id: "vocab_052", course_id: "course_002", stage_id: "stage_006", german: "die Enkelin", vietnamese: "cháu gái", category: "family", audio_url: "/audio/enkelin.mp3" },
  { word_id: "vocab_053", course_id: "course_002", stage_id: "stage_006", german: "der Onkel", vietnamese: "bác/chú/cậu", category: "family", audio_url: "/audio/onkel.mp3" },
  { word_id: "vocab_054", course_id: "course_002", stage_id: "stage_006", german: "die Tante", vietnamese: "cô/dì/thím/mợ", category: "family", audio_url: "/audio/tante.mp3" },
  { word_id: "vocab_055", course_id: "course_002", stage_id: "stage_006", german: "der Cousin", vietnamese: "anh/em họ (nam)", category: "family", audio_url: "/audio/cousin.mp3" },
  { word_id: "vocab_056", course_id: "course_002", stage_id: "stage_006", german: "die Cousine", vietnamese: "chị/em họ (nữ)", category: "family", audio_url: "/audio/cousine.mp3" },
  { word_id: "vocab_057", course_id: "course_002", stage_id: "stage_006", german: "der Neffe", vietnamese: "cháu trai (con của anh chị em)", category: "family", audio_url: "/audio/neffe.mp3" },
  { word_id: "vocab_058", course_id: "course_002", stage_id: "stage_006", german: "die Nichte", vietnamese: "cháu gái (con của anh chị em)", category: "family", audio_url: "/audio/nichte.mp3" },
  { word_id: "vocab_059", course_id: "course_002", stage_id: "stage_006", german: "der Schwiegervater", vietnamese: "bố chồng/bố vợ", category: "family", audio_url: "/audio/schwiegervater.mp3" },
  { word_id: "vocab_060", course_id: "course_002", stage_id: "stage_006", german: "die Schwiegermutter", vietnamese: "mẹ chồng/mẹ vợ", category: "family", audio_url: "/audio/schwiegermutter.mp3" },
  { word_id: "vocab_061", course_id: "course_002", stage_id: "stage_006", german: "der Schwiegersohn", vietnamese: "con rể", category: "family", audio_url: "/audio/schwiegersohn.mp3" },
  { word_id: "vocab_062", course_id: "course_002", stage_id: "stage_006", german: "die Schwiegertochter", vietnamese: "con dâu", category: "family", audio_url: "/audio/schwiegertochter.mp3" },
  { word_id: "vocab_063", course_id: "course_002", stage_id: "stage_006", german: "der Stiefvater", vietnamese: "bố dượng", category: "family", audio_url: "/audio/stiefvater.mp3" },
  { word_id: "vocab_064", course_id: "course_002", stage_id: "stage_006", german: "die Stiefmutter", vietnamese: "mẹ kế", category: "family", audio_url: "/audio/stiefmutter.mp3" },
  { word_id: "vocab_065", course_id: "course_002", stage_id: "stage_006", german: "der Stiefbruder", vietnamese: "anh/em trai kế", category: "family", audio_url: "/audio/stiefbruder.mp3" },
  { word_id: "vocab_066", course_id: "course_002", stage_id: "stage_006", german: "die Stiefschwester", vietnamese: "chị/em gái kế", category: "family", audio_url: "/audio/stiefschwester.mp3" },
  { word_id: "vocab_067", course_id: "course_002", stage_id: "stage_006", german: "der Halbbruder", vietnamese: "anh/em trai cùng cha khác mẹ hoặc cùng mẹ khác cha", category: "family", audio_url: "/audio/halbbruder.mp3" },
  { word_id: "vocab_068", course_id: "course_002", stage_id: "stage_006", german: "die Halbschwester", vietnamese: "chị/em gái cùng cha khác mẹ hoặc cùng mẹ khác cha", category: "family", audio_url: "/audio/halbschwester.mp3" },
  { word_id: "vocab_069", course_id: "course_002", stage_id: "stage_006", german: "der Ehemann", vietnamese: "chồng", category: "family", audio_url: "/audio/ehemann.mp3" },
  { word_id: "vocab_070", course_id: "course_002", stage_id: "stage_006", german: "die Ehefrau", vietnamese: "vợ", category: "family", audio_url: "/audio/ehefrau.mp3" },
  { word_id: "vocab_071", course_id: "course_002", stage_id: "stage_006", german: "der Freund", vietnamese: "bạn trai/bạn thân (nam)", category: "relationships", audio_url: "/audio/freund.mp3" },
  { word_id: "vocab_072", course_id: "course_002", stage_id: "stage_006", german: "die Freundin", vietnamese: "bạn gái/bạn thân (nữ)", category: "relationships", audio_url: "/audio/freundin.mp3" },
  { word_id: "vocab_073", course_id: "course_002", stage_id: "stage_006", german: "der Partner", vietnamese: "bạn đời (nam)", category: "relationships", audio_url: "/audio/partner.mp3" },
  { word_id: "vocab_074", course_id: "course_002", stage_id: "stage_006", german: "die Partnerin", vietnamese: "bạn đời (nữ)", category: "relationships", audio_url: "/audio/partnerin.mp3" },
  { word_id: "vocab_075", course_id: "course_002", stage_id: "stage_006", german: "der Verlobte", vietnamese: "chồng chưa cưới", category: "relationships", audio_url: "/audio/verlobter.mp3" },
  { word_id: "vocab_076", course_id: "course_002", stage_id: "stage_006", german: "die Verlobte", vietnamese: "vợ chưa cưới", category: "relationships", audio_url: "/audio/verlobte.mp3" },
  { word_id: "vocab_077", course_id: "course_002", stage_id: "stage_006", german: "der Ex-Mann", vietnamese: "chồng cũ", category: "relationships", audio_url: "/audio/exmann.mp3" },
  { word_id: "vocab_078", course_id: "course_002", stage_id: "stage_006", german: "die Ex-Frau", vietnamese: "vợ cũ", category: "relationships", audio_url: "/audio/exfrau.mp3" },
  { word_id: "vocab_079", course_id: "course_002", stage_id: "stage_006", german: "der Nachbar", vietnamese: "hàng xóm (nam)", category: "relationships", audio_url: "/audio/nachbar.mp3" },
  { word_id: "vocab_080", course_id: "course_002", stage_id: "stage_006", german: "die Nachbarin", vietnamese: "hàng xóm (nữ)", category: "relationships", audio_url: "/audio/nachbarin.mp3" },
];

// Organize vocabulary by course and stage
const organizeVocabulary = (items: VocabularyItem[]): VocabularyByCourseAndStage => {
  const organized: VocabularyByCourseAndStage = {};
  
  items.forEach(item => {
    if (!organized[item.course_id]) {
      organized[item.course_id] = {};
    }
    
    if (!organized[item.course_id][item.stage_id]) {
      organized[item.course_id][item.stage_id] = [];
    }
    
    organized[item.course_id][item.stage_id].push(item);
  });
  
  return organized;
};

// Create a map of word_id to vocabulary item for quick lookup
export const vocabulary: Record<string, VocabularyItem> = vocabularyItems.reduce((acc, item) => {
  acc[item.word_id] = item;
  return acc;
}, {} as Record<string, VocabularyItem>);

// Export the organized vocabulary
export const vocabularyByCourseAndStage = organizeVocabulary(vocabularyItems);

// Helper function to get vocabulary for a specific course and stage
export const getVocabularyForCourseAndStage = (courseId: string, stageId: string): VocabularyItem[] => {
  return vocabularyByCourseAndStage[courseId]?.[stageId] || [];
};

export type Vocabulary = typeof vocabulary;
