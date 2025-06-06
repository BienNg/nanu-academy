
import { Trophy, Star, Calendar, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
  progress: number;
}

interface ProgressTrackerProps {
  level: number;
  xp: number;
  xpToNextLevel: number;
  streak: number;
  achievements: Achievement[];
}

const ProgressTracker = ({ level, xp, xpToNextLevel, streak, achievements }: ProgressTrackerProps) => {
  const completedAchievements = achievements.filter(a => a.completed).length;
  const progressToNextLevel = (xp / xpToNextLevel) * 100;

  return (
    <div className="space-y-6">
      {/* Level Progress */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="h-6 w-6 mr-2" />
            Level {level}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>{xp} XP</span>
              <span>{xpToNextLevel} XP to next level</span>
            </div>
            <Progress value={progressToNextLevel} className="bg-white/20" />
            <div className="text-center">
              <p className="text-blue-100">Keep learning to reach Level {level + 1}!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-orange-500" />
            <div className="text-2xl font-bold text-orange-600">{streak}</div>
            <p className="text-sm text-gray-600">Day Streak</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <div className="text-2xl font-bold text-yellow-600">{completedAchievements}</div>
            <p className="text-sm text-gray-600">Achievements</p>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`flex items-center space-x-4 p-4 rounded-lg border ${
                  achievement.completed 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${
                    achievement.completed ? 'text-green-800' : 'text-gray-800'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${
                    achievement.completed ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {achievement.description}
                  </p>
                  {!achievement.completed && achievement.progress > 0 && (
                    <div className="mt-2">
                      <Progress value={achievement.progress} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        {Math.round(achievement.progress)}% complete
                      </p>
                    </div>
                  )}
                </div>
                {achievement.completed && (
                  <div className="text-green-500">
                    <Trophy className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Goal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Weekly Goal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4/7</div>
            <p className="text-gray-600 mb-4">days completed this week</p>
            <Progress value={57} className="mb-4" />
            <p className="text-sm text-gray-500">
              Complete 3 more days to reach your weekly goal!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressTracker;
