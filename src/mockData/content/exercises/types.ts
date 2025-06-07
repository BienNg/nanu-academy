// Exercise Types
export type ExerciseTypeName = 'multiple_choice' | 'fill_blank' | 'matching' | 'true_false' | 'der_die_das' | 'type_answer';

export interface ExerciseType {
  type_id: string;
  type_name: ExerciseTypeName;
  display_name: string;
  description: string;
}

export const exerciseTypes: Record<string, ExerciseType> = {
  "ex_type_001": {
    type_id: "ex_type_001",
    type_name: 'multiple_choice',
    display_name: "Multiple Choice",
    description: "Choose the correct answer from given options"
  },
  "ex_type_002": {
    type_id: "ex_type_002",
    type_name: 'fill_blank',
    display_name: "Fill in the Blank",
    description: "Fill in the missing word(s)"
  },
  "ex_type_003": {
    type_id: "ex_type_003",
    type_name: 'matching',
    display_name: "Matching Pairs",
    description: "Match items from two columns"
  },
  "ex_type_004": {
    type_id: "ex_type_004",
    type_name: 'true_false',
    display_name: "True or False",
    description: "Determine if the statement is true or false"
  },
  "ex_type_005": {
    type_id: "ex_type_005",
    type_name: 'der_die_das',
    display_name: "Der/Die/Das",
    description: "Select the correct German article"
  },
  "ex_type_006": {
    type_id: "ex_type_006",
    type_name: 'type_answer',
    display_name: "Type the Answer",
    description: "Type the correct answer"
  }
};
