
import React from 'react';
import { Play, BookOpen, Brain, Lock, CheckCircle, Star, Clock, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CourseStage, CourseLesson } from '@/mockData/courses/courseStructure';

interface StageCardProps {
  stage: CourseStage;
  onLessonStart: (lesson: CourseLesson) => void;
}

const StageCard: React.FC<StageCardProps> = ({ stage, onLessonStart }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'vocab': return BookOpen;
      case 'flashcards': return BookOpen;
      case 'exercises': return Brain;
      default: return Play;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'text-red-600 bg-red-100';
      case 'vocab': return 'text-blue-600 bg-blue-100';
      case 'flashcards': return 'text-green-600 bg-green-100';
      case 'exercises': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getLessonNodeColor = (lesson: CourseLesson) => {
    if (lesson.locked) return 'bg-gray-300 border-gray-400';
    if (lesson.completed) return 'bg-green-500 border-green-600 shadow-green-200';
    return 'bg-blue-500 border-blue-600 shadow-blue-200';
  };

  return (
    <Card className="mb-8 transition-all duration-200 hover:shadow-lg">
      <CardContent className="p-6">
        {/* Stage Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
              stage.locked ? 'bg-gray-300 border-gray-400' : 
              stage.completed ? 'bg-green-500 border-green-600' : 'bg-blue-500 border-blue-600'
            }`}>
              {stage.locked ? (
                <Lock className="h-6 w-6 text-white" />
              ) : stage.completed ? (
                <Star className="h-6 w-6 text-white fill-current" />
              ) : (
                <Crown className="h-6 w-6 text-white" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Stage {stage.stageNumber}: {stage.title}
              </h3>
              <p className="text-gray-600">{stage.description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{Math.round(stage.progress)}%</div>
            <div className="text-sm text-gray-500">Complete</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <Progress value={stage.progress} className="h-2" />
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stage.lessons.map((lesson, index) => {
            const Icon = getIcon(lesson.type);
            const typeColor = getTypeColor(lesson.type);
            const nodeColor = getLessonNodeColor(lesson);
            
            return (
              <Card 
                key={lesson.id} 
                className={`
                  transition-all duration-200 cursor-pointer hover:shadow-md
                  ${lesson.locked ? 'cursor-not-allowed' : 'hover:scale-105'}
                `}
                onClick={() => !lesson.locked && onLessonStart(lesson)}
              >
                <CardContent className="p-4">
                  {/* Lesson Node */}
                  <div className={`
                    w-16 h-16 rounded-full border-4 flex items-center justify-center mx-auto mb-3
                    ${nodeColor} shadow-lg
                  `}>
                    {lesson.locked ? (
                      <Lock className="h-6 w-6 text-white" />
                    ) : lesson.completed ? (
                      <CheckCircle className="h-6 w-6 text-white" />
                    ) : (
                      <Icon className="h-6 w-6 text-white" />
                    )}
                  </div>

                  {/* Lesson Info */}
                  <div className="text-center">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-2 ${typeColor}`}>
                      {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">{lesson.title}</h4>
                    <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
                      <Clock className="h-3 w-3 mr-1" />
                      {lesson.duration}
                    </div>
                    <div className="text-xs text-yellow-600 font-medium">+{lesson.xp} XP</div>
                    
                    {/* Exercise Levels (if applicable) */}
                    {lesson.type === 'exercises' && lesson.exerciseLevels && (
                      <div className="mt-3 grid grid-cols-4 gap-1">
                        {lesson.exerciseLevels.map((level) => (
                          <div
                            key={level.level}
                            className={`
                              w-4 h-4 rounded-full text-xs flex items-center justify-center
                              ${level.completed ? 'bg-green-500 text-white' : 
                                level.locked ? 'bg-gray-300' : 'bg-blue-500 text-white'}
                            `}
                          >
                            {level.level}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Start Button */}
                  {!lesson.locked && (
                    <Button 
                      size="sm" 
                      className="w-full mt-3 text-xs"
                      variant={lesson.completed ? "outline" : "default"}
                    >
                      {lesson.completed ? 'Review' : 'Start'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default StageCard;
