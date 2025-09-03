'use client';
import { useState, useEffect, useCallback } from 'react';
import { Users, Monitor, MessageSquare, Settings, BookOpen, CheckCircle, RotateCcw } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  attention: number;
  participation: number;
  technical: number;
  status: 'active' | 'inactive' | 'struggling' | 'excelling';
  currentActivity: string;
}

interface ClassActivity {
  id: string;
  name: string;
  type: 'lecture' | 'discussion' | 'exercise' | 'quiz';
  duration: number;
  engagement: number;
  difficulty: number;
}

interface VirtualClassroomManagerGameProps {
  onComplete: (success: boolean) => void;
}

const STUDENTS_DATA: Student[] = [
  {
    id: '1',
    name: 'An',
    attention: 80,
    participation: 70,
    technical: 90,
    status: 'active',
    currentActivity: 'listening',
  },
  {
    id: '2',
    name: 'Bình',
    attention: 60,
    participation: 40,
    technical: 60,
    status: 'struggling',
    currentActivity: 'confused',
  },
  {
    id: '3',
    name: 'Cường',
    attention: 90,
    participation: 85,
    technical: 95,
    status: 'excelling',
    currentActivity: 'engaged',
  },
  {
    id: '4',
    name: 'Dung',
    attention: 75,
    participation: 80,
    technical: 70,
    status: 'active',
    currentActivity: 'participating',
  },
  {
    id: '5',
    name: 'Hòa',
    attention: 45,
    participation: 30,
    technical: 50,
    status: 'inactive',
    currentActivity: 'distracted',
  },
  {
    id: '6',
    name: 'Linh',
    attention: 85,
    participation: 90,
    technical: 80,
    status: 'excelling',
    currentActivity: 'leading',
  },
  {
    id: '7',
    name: 'Minh',
    attention: 70,
    participation: 60,
    technical: 75,
    status: 'active',
    currentActivity: 'thinking',
  },
  {
    id: '8',
    name: 'Nam',
    attention: 55,
    participation: 45,
    technical: 65,
    status: 'struggling',
    currentActivity: 'confused',
  },
];

const ACTIVITIES_DATA: ClassActivity[] = [
  { id: 'lecture', name: 'Giảng bài', type: 'lecture', duration: 15, engagement: 60, difficulty: 3 },
  { id: 'discussion', name: 'Thảo luận nhóm', type: 'discussion', duration: 10, engagement: 85, difficulty: 4 },
  { id: 'exercise', name: 'Bài tập thực hành', type: 'exercise', duration: 12, engagement: 75, difficulty: 6 },
  { id: 'quiz', name: 'Kiểm tra nhanh', type: 'quiz', duration: 8, engagement: 70, difficulty: 5 },
];

export default function VirtualClassroomManagerGame({ onComplete }: VirtualClassroomManagerGameProps) {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'playing' | 'results'>('briefing');
  const [students, setStudents] = useState<Student[]>(STUDENTS_DATA);
  const [currentActivity, setCurrentActivity] = useState<ClassActivity | null>(null);
  const [classTime, setClassTime] = useState(0);
  const [score, setScore] = useState(0);
  const [totalEngagement, setTotalEngagement] = useState(0);
  const [activitiesCompleted, setActivitiesCompleted] = useState(0);
  const [strugglingStudents, setStrugglingStudents] = useState(0);
  const [activityTimeLeft, setActivityTimeLeft] = useState(0);
  const [classEvents, setClassEvents] = useState<string[]>([]);

  const startGame = () => {
    setGamePhase('playing');
    setStudents(STUDENTS_DATA);
    setCurrentActivity(null);
    setClassTime(0);
    setScore(0);
    setTotalEngagement(0);
    setActivitiesCompleted(0);
    setStrugglingStudents(0);
    setActivityTimeLeft(0);
    setClassEvents(['Lớp học bắt đầu! Chọn hoạt động đầu tiên.']);
  };

  const resetGame = useCallback(() => {
    setGamePhase('briefing');
  }, []);

  const startActivity = (activity: ClassActivity) => {
    setCurrentActivity(activity);
    setActivityTimeLeft(activity.duration);
    setClassEvents((prev) => [...prev, `Bắt đầu: ${activity.name}`]);

    // Update student status based on activity
    setStudents((prev) =>
      prev.map((student) => {
        let newAttention = student.attention;
        let newParticipation = student.participation;

        // Activity affects students differently based on type
        switch (activity.type) {
          case 'lecture':
            newAttention += student.technical > 70 ? 5 : -5;
            break;
          case 'discussion':
            newParticipation += student.participation > 60 ? 10 : -5;
            newAttention += 5;
            break;
          case 'exercise':
            newAttention += student.technical > 80 ? 10 : -10;
            newParticipation += 5;
            break;
          case 'quiz':
            newAttention += 15;
            break;
        }

        newAttention = Math.max(0, Math.min(100, newAttention));
        newParticipation = Math.max(0, Math.min(100, newParticipation));

        // Determine new status
        let newStatus: Student['status'] = 'active';
        if (newAttention < 50 || newParticipation < 40) {
          newStatus = 'struggling';
        } else if (newAttention > 85 && newParticipation > 80) {
          newStatus = 'excelling';
        }

        return {
          ...student,
          attention: newAttention,
          participation: newParticipation,
          status: newStatus,
        };
      }),
    );
  };

  const helpStudent = (studentId: string) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === studentId) {
          return {
            ...student,
            attention: Math.min(100, student.attention + 20),
            participation: Math.min(100, student.participation + 15),
            status: student.attention + 20 > 70 ? 'active' : student.status,
          };
        }
        return student;
      }),
    );

    setScore((prev) => prev + 25);
    setClassEvents((prev) => [...prev, `Hỗ trợ học sinh: ${students.find((s) => s.id === studentId)?.name}`]);
  };

  const adjustClassPace = useCallback(
    (adjustment: 'slower' | 'faster') => {
      if (!currentActivity) return;

      const multiplier = adjustment === 'slower' ? 1.2 : 0.8;
      setActivityTimeLeft((prev) => Math.round(prev * multiplier));

      setStudents((prev) =>
        prev.map((student) => {
          let attentionChange = 0;
          if (adjustment === 'slower' && student.status === 'struggling') {
            attentionChange = 10;
          } else if (adjustment === 'faster' && student.status === 'excelling') {
            attentionChange = 5;
          } else {
            attentionChange = -5;
          }

          return {
            ...student,
            attention: Math.max(0, Math.min(100, student.attention + attentionChange)),
          };
        }),
      );

      setClassEvents((prev) => [...prev, `Điều chỉnh tốc độ: ${adjustment === 'slower' ? 'chậm lại' : 'nhanh hơn'}`]);
    },
    [currentActivity],
  );

  const getStudentStatusColor = (status: Student['status']) => {
    switch (status) {
      case 'excelling':
        return 'border-green-400 bg-green-500/10';
      case 'struggling':
        return 'border-red-400 bg-red-500/10';
      case 'inactive':
        return 'border-gray-400 bg-gray-500/10';
      default:
        return 'border-blue-400 bg-blue-500/10';
    }
  };

  const getStatusIcon = (status: Student['status']) => {
    switch (status) {
      case 'excelling':
        return '⭐';
      case 'struggling':
        return '😟';
      case 'inactive':
        return '😴';
      default:
        return '😊';
    }
  };

  // Game timer and activity management
  useEffect(() => {
    if (gamePhase !== 'playing') return;

    const timer = setInterval(() => {
      setClassTime((prev) => prev + 1);

      if (currentActivity && activityTimeLeft > 0) {
        setActivityTimeLeft((prev) => prev - 1);

        // Update engagement during activity
        const currentEngagement =
          students.reduce((sum, student) => sum + (student.attention + student.participation) / 2, 0) / students.length;
        setTotalEngagement((prev) => prev + currentEngagement);

        // Activity completed
        if (activityTimeLeft === 1) {
          setActivitiesCompleted((prev) => prev + 1);
          setScore((prev) => prev + Math.round(currentEngagement));
          setClassEvents((prev) => [...prev, `Hoàn thành: ${currentActivity.name}`]);
          setCurrentActivity(null);
        }
      }

      // Update struggling students count
      const struggling = students.filter((s) => s.status === 'struggling' || s.status === 'inactive').length;
      setStrugglingStudents(struggling);

      // Natural attention decay over time
      if (classTime % 5 === 0 && !currentActivity) {
        setStudents((prev) =>
          prev.map((student) => ({
            ...student,
            attention: Math.max(0, student.attention - 2),
          })),
        );
      }

      // End game after 5 minutes
      if (classTime >= 300) {
        setGamePhase('results');
        const avgEngagement = totalEngagement / Math.max(1, classTime);
        const finalScore = Math.round(score + avgEngagement * 2 + activitiesCompleted * 50 - strugglingStudents * 10);
        setScore(finalScore);
        setTimeout(() => onComplete(finalScore > 400), 2000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [
    gamePhase,
    classTime,
    currentActivity,
    activityTimeLeft,
    students,
    totalEngagement,
    score,
    activitiesCompleted,
    strugglingStudents,
    onComplete,
  ]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Monitor className="w-8 h-8 mr-3 text-purple-400" />
              Virtual Classroom Manager
            </h1>
            <p className="text-gray-300 text-lg">
              Quản lý lớp học trực tuyến hiệu quả và tối ưu hóa trải nghiệm học tập
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="font-semibold text-purple-400 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Mục tiêu Game
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>• Quản lý sự chú ý của học sinh</p>
                <p>• Chọn hoạt động phù hợp theo thời gian</p>
                <p>• Hỗ trợ học sinh gặp khó khăn</p>
                <p>• Tối ưu hóa mức độ tương tác</p>
                <p>• Duy trì môi trường học tập tích cực</p>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="font-semibold text-green-400 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Cách chơi
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>• Chọn hoạt động phù hợp từ menu</p>
                <p>• Theo dõi trạng thái học sinh</p>
                <p>• Click vào học sinh để hỗ trợ</p>
                <p>• Điều chỉnh tốc độ lớp học</p>
                <p>• Duy trì engagement cao nhất có thể</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">🎯 Kiến thức học được</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p>• Quản lý lớp học trực tuyến hiệu quả</p>
                <p>• Sử dụng công nghệ EdTech</p>
                <p>• Phân tích dữ liệu học tập</p>
              </div>
              <div>
                <p>• Thiết kế trải nghiệm học tập</p>
                <p>• Tương tác và engagement</p>
                <p>• Cá nhân hóa việc học</p>
              </div>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 flex items-center justify-center"
          >
            <Monitor className="w-5 h-5 mr-2" />
            Bắt đầu quản lý lớp học
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const avgEngagement = totalEngagement / Math.max(1, classTime);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">🏆 Kết quả quản lý lớp học</h1>
            <div className="text-6xl font-bold text-purple-400 mb-4">{score}</div>
            <p className="text-gray-300 text-lg">
              {score > 400
                ? 'Xuất sắc! Bạn là giáo viên online tuyệt vời!'
                : score > 250
                  ? 'Tốt! Bạn đã quản lý lớp học khá hiệu quả!'
                  : 'Cần cải thiện! Hãy thử lại để đạt kết quả tốt hơn.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="font-semibold text-purple-400 mb-4">📊 Thống kê chi tiết</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Thời gian dạy:</span>
                  <span className="text-blue-400 font-medium">
                    {Math.floor(classTime / 60)}:{(classTime % 60).toString().padStart(2, '0')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Hoạt động hoàn thành:</span>
                  <span className="text-green-400 font-medium">{activitiesCompleted}</span>
                </div>
                <div className="flex justify-between">
                  <span>Engagement trung bình:</span>
                  <span className="text-yellow-400 font-medium">{avgEngagement.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Học sinh cần hỗ trợ:</span>
                  <span className="text-red-400 font-medium">{strugglingStudents}</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="font-semibold text-green-400 mb-4">🎓 Kiến thức đạt được</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>✅ Hiểu nguyên lý quản lý lớp học trực tuyến</p>
                <p>✅ Học cách sử dụng công nghệ EdTech hiệu quả</p>
                <p>✅ Áp dụng phân tích dữ liệu trong giáo dục</p>
                <p>✅ Thiết kế trải nghiệm học tập tương tác</p>
                <p>✅ Cá nhân hóa việc học cho từng học sinh</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={resetGame}
              className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-6 rounded-xl font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 flex items-center justify-center"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Chơi lại
            </button>
            <button
              onClick={() => onComplete(score > 400)}
              className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-200"
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-xl font-bold text-white flex items-center">
                <Monitor className="w-6 h-6 mr-2 text-purple-400" />
                Virtual Classroom Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-white">
                  {Math.floor(classTime / 60)}:{(classTime % 60).toString().padStart(2, '0')}
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-white">
                  Engagement:{' '}
                  {(
                    students.reduce((sum, s) => sum + (s.attention + s.participation) / 2, 0) / students.length
                  ).toFixed(0)}
                  %
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 font-medium">Điểm: {score}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Student Status */}
          <div className="lg:col-span-2 bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-400" />
              Trạng thái học sinh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {students.map((student) => (
                <button
                  key={student.id}
                  onClick={() => helpStudent(student.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${getStudentStatusColor(student.status)}`}
                  disabled={!currentActivity}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{getStatusIcon(student.status)}</div>
                    <div className="text-white text-sm font-medium">{student.name}</div>
                    <div className="text-xs text-gray-300 mt-1">Chú ý: {student.attention}%</div>
                    <div className="text-xs text-gray-300">Tham gia: {student.participation}%</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Activity Control */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-purple-400" />
              Hoạt động lớp học
            </h3>

            {currentActivity ? (
              <div className="space-y-4">
                <div className="bg-purple-500/20 border border-purple-500/40 rounded-lg p-3">
                  <div className="text-white font-medium">{currentActivity.name}</div>
                  <div className="text-purple-300 text-sm">
                    Còn lại: {Math.floor(activityTimeLeft / 60)}:{(activityTimeLeft % 60).toString().padStart(2, '0')}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(activityTimeLeft / currentActivity.duration) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => adjustClassPace('slower')}
                    className="w-full bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 py-2 px-3 rounded-lg text-sm border border-blue-500/20 transition-all duration-200"
                    disabled={!currentActivity}
                  >
                    Chậm lại
                  </button>
                  <button
                    onClick={() => adjustClassPace('faster')}
                    className="w-full bg-red-500/20 hover:bg-red-500/40 text-red-400 py-2 px-3 rounded-lg text-sm border border-red-500/20 transition-all duration-200"
                    disabled={!currentActivity}
                  >
                    Nhanh hơn
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {ACTIVITIES_DATA.map((activity) => (
                  <button
                    key={activity.id}
                    onClick={() => startActivity(activity)}
                    className="w-full bg-green-500/20 hover:bg-green-500/40 text-green-400 py-2 px-3 rounded-lg text-sm border border-green-500/20 transition-all duration-200 text-left"
                    disabled={!!currentActivity}
                  >
                    <div className="font-medium">{activity.name}</div>
                    <div className="text-xs text-gray-300">{activity.duration} phút</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Events Log */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-purple-400" />
              Nhật ký sự kiện
            </h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {classEvents
                .slice(-10)
                .reverse()
                .map((event, index) => (
                  <div key={index} className="bg-gray-700/50 rounded p-2 text-sm text-gray-300">
                    {event}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
