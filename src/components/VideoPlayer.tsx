import { Button } from '@/components/ui/button';
import { Play, Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface VideoPlayerProps {
  title: string;
  description: string;
  videoUrl?: string;
  videoSummary?: string;
  onComplete?: () => void;
}

const VideoPlayer = ({ title, description, videoUrl, videoSummary, onComplete }: VideoPlayerProps) => {
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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      {/* Video Header */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      </div>

      {/* Video Container */}
      <div 
        className="relative bg-black w-full" 
        style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}
        onContextMenu={(e) => e.preventDefault()} // Disable context menu
      >
        {embedUrl ? (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
            <iframe
              src={embedUrl}
              style={{
                position: 'absolute',
                top: '-60px', // Increased to hide the top bar more aggressively
                left: '0',    // Reset left offset, button seems to be only at the top
                width: '100%', // Reset width, button seems to be only at the top
                height: 'calc(100% + 60px)', // Compensate for the upward shift
                border: 'none',
              }}
              title={title}
              allow="autoplay; encrypted-media; fullscreen"
            ></iframe>
          </div>
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

      {/* Description */}
      <div className="p-6 border-t border-gray-100">
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Video Summary */}
        {videoSummary && (
          <div className="border-t border-gray-200 pt-6">
            <div className="p-4 flex items-center bg-indigo-50 rounded-lg">
              <Info className="h-5 w-5 text-indigo-600 mr-2" />
              <h3 className="font-medium text-indigo-800">Lesson Summary</h3>
            </div>
            <div className="mt-4 prose prose-indigo max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: ({node, inline, className, children, ...props}: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                  h2: ({node, ...props}) => <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-lg font-medium text-gray-800 mt-5 mb-2" {...props} />,
                  p: ({node, ...props}) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-1 mb-4" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 space-y-1 mb-4" {...props} />,
                  li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
                  a: ({node, ...props}) => <a className="text-indigo-600 hover:text-indigo-800 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-gray-600 my-4" {...props} />,
                }}
              >
                {videoSummary}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      {/* Mark as Complete Button */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex items-center justify-end">
          <Button 
            onClick={onComplete}
            className="bg-green-500 hover:bg-green-600"
          >
            Mark as Complete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
