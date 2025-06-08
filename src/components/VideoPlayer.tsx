import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  description: string;
  videoUrl?: string;
  onComplete?: () => void;
}

const VideoPlayer = ({ title, description, videoUrl, onComplete }: VideoPlayerProps) => {
  const getGoogleDriveEmbedUrl = (url?: string): string | null => {
    if (!url) return null;
    const regex = /drive\.google\.com\/file\/d\/([^/]+)\//;
    const match = url.match(regex);
    if (match && match[1]) {
      // Use /preview endpoint
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    // Handle direct preview links
    if (url.includes('/preview')) {
        return url;
    }
    // If it's an embed link, try to convert it to preview (less common, but for completeness)
    if (url.includes('/embed')) {
        const fileId = url.split('/d/')[1]?.split('/')[0];
        if (fileId) {
            return `https://drive.google.com/file/d/${fileId}/preview`;
        }
    }
    return null; // Or return a placeholder/error URL
  };

  const embedUrl = getGoogleDriveEmbedUrl(videoUrl);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Video Header */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Video Container */}
      <div 
        className="relative bg-black w-full" 
        style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}
        onContextMenu={(e) => e.preventDefault()} // Disable context menu
      >
        {embedUrl ? (
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full"
            title={title}
            allow="autoplay; encrypted-media; fullscreen"
            // sandbox attribute removed as it was causing playback issues with Google Drive
          ></iframe>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Video not available</p>
              <p className="text-sm opacity-75">Please check the video URL.</p>
            </div>
          </div>
        )}
      </div>

      {/* Video Info & Actions */}
      <div className="p-6">
        <div className="flex items-center justify-end">
          {onComplete && (
            <Button className="bg-green-500 hover:bg-green-600" onClick={onComplete}>
              Mark as Complete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
