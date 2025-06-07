interface VocabularyItem {
  word_id: string;
  stage_id: string;
  german: string;
  vietnamese: string;
  category: string;
  audio_url: string;
}

export const vocabulary: Record<string, VocabularyItem> = {
  // Stage 1 - Greetings
  "vocab_001": { word_id: "vocab_001", stage_id: "stage_001", german: "Hallo", vietnamese: "Xin chào", category: "greetings", audio_url: "/audio/hallo.mp3" },
  "vocab_002": { word_id: "vocab_002", stage_id: "stage_001", german: "Guten Morgen", vietnamese: "Chào buổi sáng", category: "greetings", audio_url: "/audio/guten_morgen.mp3" },
  "vocab_003": { word_id: "vocab_003", stage_id: "stage_001", german: "Guten Tag", vietnamese: "Chào buổi trưa", category: "greetings", audio_url: "/audio/guten_tag.mp3" },
  "vocab_004": { word_id: "vocab_004", stage_id: "stage_001", german: "Guten Abend", vietnamese: "Chào buổi tối", category: "greetings", audio_url: "/audio/guten_abend.mp3" },
  "vocab_005": { word_id: "vocab_005", stage_id: "stage_001", german: "Auf Wiedersehen", vietnamese: "Tạm biệt", category: "greetings", audio_url: "/audio/auf_wiedersehen.mp3" },
  "vocab_006": { word_id: "vocab_006", stage_id: "stage_001", german: "Tschüss", vietnamese: "Tạm biệt (thân mật)", category: "greetings", audio_url: "/audio/tschuess.mp3" },
  "vocab_007": { word_id: "vocab_007", stage_id: "stage_001", german: "Danke", vietnamese: "Cảm ơn", category: "common_phrases", audio_url: "/audio/danke.mp3" },
  "vocab_008": { word_id: "vocab_008", stage_id: "stage_001", german: "Bitte", vietnamese: "Làm ơn/Không có chi", category: "common_phrases", audio_url: "/audio/bitte.mp3" },
  "vocab_009": { word_id: "vocab_009", stage_id: "stage_001", german: "Entschuldigung", vietnamese: "Xin lỗi", category: "common_phrases", audio_url: "/audio/entschuldigung.mp3" },
  "vocab_010": { word_id: "vocab_010", stage_id: "stage_001", german: "Ja/Nein", vietnamese: "Có/Không", category: "common_phrases", audio_url: "/audio/ja_nein.mp3" },

  // Stage 2 - Numbers and Time
  "vocab_011": { word_id: "vocab_011", stage_id: "stage_002", german: "eins", vietnamese: "một", category: "numbers", audio_url: "/audio/eins.mp3" },
  "vocab_012": { word_id: "vocab_012", stage_id: "stage_002", german: "zwei", vietnamese: "hai", category: "numbers", audio_url: "/audio/zwei.mp3" },
  "vocab_013": { word_id: "vocab_013", stage_id: "stage_002", german: "drei", vietnamese: "ba", category: "numbers", audio_url: "/audio/drei.mp3" },
  "vocab_014": { word_id: "vocab_014", stage_id: "stage_002", german: "vier", vietnamese: "bốn", category: "numbers", audio_url: "/audio/vier.mp3" },
  "vocab_015": { word_id: "vocab_015", stage_id: "stage_002", german: "fünf", vietnamese: "năm", category: "numbers", audio_url: "/audio/fuenf.mp3" },
  "vocab_016": { word_id: "vocab_016", stage_id: "stage_002", german: "sechs", vietnamese: "sáu", category: "numbers", audio_url: "/audio/sechs.mp3" },
  "vocab_017": { word_id: "vocab_017", stage_id: "stage_002", german: "sieben", vietnamese: "bảy", category: "numbers", audio_url: "/audio/sieben.mp3" },
  "vocab_018": { word_id: "vocab_018", stage_id: "stage_002", german: "acht", vietnamese: "tám", category: "numbers", audio_url: "/audio/acht.mp3" },
  "vocab_019": { word_id: "vocab_019", stage_id: "stage_002", german: "neun", vietnamese: "chín", category: "numbers", audio_url: "/audio/neun.mp3" },
  "vocab_020": { word_id: "vocab_020", stage_id: "stage_002", german: "zehn", vietnamese: "mười", category: "numbers", audio_url: "/audio/zehn.mp3" },

  // Stage 3 - Everyday Objects
  "vocab_021": { word_id: "vocab_021", stage_id: "stage_003", german: "der Tisch", vietnamese: "cái bàn", category: "objects", audio_url: "/audio/tisch.mp3" },
  "vocab_022": { word_id: "vocab_022", stage_id: "stage_003", german: "der Stuhl", vietnamese: "cái ghế", category: "objects", audio_url: "/audio/stuhl.mp3" },
  "vocab_023": { word_id: "vocab_023", stage_id: "stage_003", german: "das Buch", vietnamese: "quyển sách", category: "objects", audio_url: "/audio/buch.mp3" },
  "vocab_024": { word_id: "vocab_024", stage_id: "stage_003", german: "der Stift", vietnamese: "cây bút", category: "objects", audio_url: "/audio/stift.mp3" },
  "vocab_025": { word_id: "vocab_025", stage_id: "stage_003", german: "das Papier", vietnamese: "tờ giấy", category: "objects", audio_url: "/audio/papier.mp3" },

  // Stage 4 - Food and Drinks
  "vocab_026": { word_id: "vocab_026", stage_id: "stage_004", german: "das Wasser", vietnamese: "nước", category: "drinks", audio_url: "/audio/wasser.mp3" },
  "vocab_027": { word_id: "vocab_027", stage_id: "stage_004", german: "der Kaffee", vietnamese: "cà phê", category: "drinks", audio_url: "/audio/kaffee.mp3" },
  "vocab_028": { word_id: "vocab_028", stage_id: "stage_004", german: "der Tee", vietnamese: "trà", category: "drinks", audio_url: "/audio/tee.mp3" },
  "vocab_029": { word_id: "vocab_029", stage_id: "stage_004", german: "das Brot", vietnamese: "bánh mì", category: "food", audio_url: "/audio/brot.mp3" },
  "vocab_030": { word_id: "vocab_030", stage_id: "stage_004", german: "der Apfel", vietnamese: "táo", category: "food", audio_url: "/audio/apfel.mp3" },
  "vocab_031": { word_id: "vocab_031", stage_id: "stage_004", german: "die Banane", vietnamese: "chuối", category: "food", audio_url: "/audio/banane.mp3" },
  "vocab_032": { word_id: "vocab_032", stage_id: "stage_004", german: "das Fleisch", vietnamese: "thịt", category: "food", audio_url: "/audio/fleisch.mp3" },

  // Stage 5 - Colors and Objects
  "vocab_033": { word_id: "vocab_033", stage_id: "stage_005", german: "rot", vietnamese: "màu đỏ", category: "colors", audio_url: "/audio/rot.mp3" },
  "vocab_034": { word_id: "vocab_034", stage_id: "stage_005", german: "blau", vietnamese: "màu xanh dương", category: "colors", audio_url: "/audio/blau.mp3" },
  "vocab_035": { word_id: "vocab_035", stage_id: "stage_005", german: "grün", vietnamese: "màu xanh lá cây", category: "colors", audio_url: "/audio/gruen.mp3" },
  "vocab_036": { word_id: "vocab_036", stage_id: "stage_005", german: "gelb", vietnamese: "màu vàng", category: "colors", audio_url: "/audio/gelb.mp3" },
  "vocab_037": { word_id: "vocab_037", stage_id: "stage_005", german: "schwarz", vietnamese: "màu đen", category: "colors", audio_url: "/audio/schwarz.mp3" },
  "vocab_038": { word_id: "vocab_038", stage_id: "stage_005", german: "weiß", vietnamese: "màu trắng", category: "colors", audio_url: "/audio/weiss.mp3" },
  "vocab_039": { word_id: "vocab_039", stage_id: "stage_005", german: "groß", vietnamese: "to, lớn", category: "adjectives", audio_url: "/audio/gross.mp3" },
  "vocab_040": { word_id: "vocab_040", stage_id: "stage_005", german: "klein", vietnamese: "nhỏ, bé", category: "adjectives", audio_url: "/audio/klein.mp3" }
};

export type Vocabulary = typeof vocabulary;
