import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Play, X, Maximize2, Sparkles, LeafyGreen, Droplets, Flower2 } from 'lucide-react';
import { Badge } from './ui/badge';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  icon: typeof Sparkles;
  category: string;
}

export function VideoGallery() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos: Video[] = [
    {
      id: 'isoborneol-flakes',
      title: 'Isoborneol Flakes',
      description: 'High-purity isoborneol flakes perfect for pharmaceutical and cosmetic applications. Witness the crystal-clear quality and perfect flake structure.',
      thumbnail: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      videoUrl: '/videos/isoborneol-flakes.mp4', // Replace with actual video
      icon: Sparkles,
      category: 'Menthol Products'
    },
    {
      id: 'menthol-crystals',
      title: 'Menthol Bold Crystals',
      description: 'Premium menthol bold crystals extracted from natural Mentha Arvensis. See the brilliant clarity and perfect crystalline structure.',
      thumbnail: 'https://images.unsplash.com/photo-1608571607089-9e5e8b29ee4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      videoUrl: '/videos/menthol-crystals.mp4', // Replace with actual video
      icon: LeafyGreen,
      category: 'Menthol Products'
    },
    {
      id: 'essential-oil-extraction',
      title: 'Essential Oil Extraction Process',
      description: 'See how we extract pure essential oils using state-of-the-art distillation equipment while preserving the natural therapeutic properties.',
      thumbnail: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      videoUrl: '/videos/essential-oil-extraction.mp4', // Replace with actual video
      icon: Droplets,
      category: 'Essential Oils'
    },
    {
      id: 'peppermint-oil',
      title: 'Peppermint Oil Production',
      description: 'From fresh mint leaves to pure peppermint oil. Watch our complete production process ensuring the highest quality standards.',
      thumbnail: 'https://images.unsplash.com/photo-1628556899487-bb4dc5d3e566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      videoUrl: '/videos/peppermint-oil.mp4', // Replace with actual video
      icon: Flower2,
      category: 'Mint Products'
    }
  ];

  const currentVideo = videos[currentVideoIndex];

  const handlePrevious = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const handleVideoSelect = (index: number) => {
    setCurrentVideoIndex(index);
    setIsPlaying(false);
  };

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentVideoIndex]);

  return (
    <div className="relative">
      {/* Main Video Player */}
      <div className="max-w-5xl mx-auto mb-8">
        <Card className="overflow-hidden border-2 border-green-200 shadow-2xl">
          <CardContent className="p-0">
            <div className="relative bg-gradient-to-b from-green-100 to-green-50 aspect-[9/16] md:aspect-video">
              {/* Video Element - Currently shows placeholder */}
              <div className="absolute inset-0">
                {/* Placeholder - Replace when videos are uploaded */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-white">
                  <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <currentVideo.icon className="w-12 h-12 text-green-700" />
                  </div>
                  <h3 className="text-2xl mb-3 text-green-800 text-center px-4">{currentVideo.title}</h3>
                  <Badge className="mb-4 bg-green-600">{currentVideo.category}</Badge>
                  <p className="text-sm text-muted-foreground px-6 text-center max-w-md mb-6">
                    {currentVideo.description}
                  </p>
                  <div className="bg-white px-6 py-3 rounded-full border-2 border-green-300 shadow-md">
                    <p className="text-xs text-green-700 text-center">
                      📹 Upload your videos to <code className="bg-green-50 px-2 py-1 rounded">/public/videos/</code>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    See VIDEO-UPLOAD-GUIDE.md for instructions
                  </p>
                </div>
                
                {/* Uncomment when videos are uploaded */}
                {/* <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  poster={currentVideo.thumbnail}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={currentVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>

              {/* Expand Button */}
              <button
                onClick={handleExpand}
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all z-10"
                title="Expand fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>

              {/* Play Overlay for Placeholder */}
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all group"
              >
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </button>
            </div>

            {/* Video Info */}
            <div className="p-6 bg-white">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <currentVideo.icon className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl text-green-700">{currentVideo.title}</h3>
                  </div>
                  <Badge variant="secondary" className="mb-3">{currentVideo.category}</Badge>
                  <p className="text-muted-foreground">{currentVideo.description}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  {currentVideoIndex + 1} / {videos.length}
                </div>

                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Video Thumbnails Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <Card
            key={video.id}
            className={`cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 ${
              currentVideoIndex === index
                ? 'ring-4 ring-green-500 shadow-xl'
                : 'hover:ring-2 hover:ring-green-300'
            }`}
            onClick={() => handleVideoSelect(index)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[9/16] md:aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-green-600 ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Current Video Indicator */}
                {currentVideoIndex === index && (
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-green-600">Now Playing</Badge>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-2 left-2 right-2">
                  <Badge variant="secondary" className="text-xs">
                    {video.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-3">
                <h4 className="text-sm line-clamp-2">{video.title}</h4>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Expanded Fullscreen Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-6xl">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Expanded Video Player - Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-900">
                <div className="w-32 h-32 bg-green-700 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                  <currentVideo.icon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl mb-4 text-white text-center px-4">{currentVideo.title}</h3>
                <Badge className="mb-6 bg-green-600 text-lg px-4 py-2">{currentVideo.category}</Badge>
                <p className="text-white/80 px-8 text-center max-w-2xl mb-8">
                  {currentVideo.description}
                </p>
                <div className="bg-white/10 px-8 py-4 rounded-full border-2 border-white/30 backdrop-blur-sm">
                  <p className="text-sm text-white text-center">
                    📹 Upload videos to display here • See VIDEO-UPLOAD-GUIDE.md
                  </p>
                </div>
              </div>

              {/* Uncomment when videos are ready */}
              {/* <video 
                ref={videoRef}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              >
                <source src={currentVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </div>

            {/* Navigation in Fullscreen */}
            <div className="flex items-center justify-between mt-6">
              <Button
                onClick={handlePrevious}
                variant="secondary"
                size="lg"
                className="gap-2"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous Video
              </Button>

              <div className="text-white">
                {currentVideoIndex + 1} / {videos.length}
              </div>

              <Button
                onClick={handleNext}
                variant="secondary"
                size="lg"
                className="gap-2"
              >
                Next Video
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions Notice */}
      <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-green-700" />
          </div>
          <div>
            <h4 className="mb-2 text-green-800">Ready for Your Product Videos!</h4>
            <p className="text-sm text-muted-foreground mb-3">
              This interactive video gallery is ready to showcase your products. Simply upload your videos and uncomment the video tags in the code.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">✅ Click thumbnails to switch videos</Badge>
              <Badge variant="outline" className="text-xs">✅ Previous/Next navigation</Badge>
              <Badge variant="outline" className="text-xs">✅ Fullscreen expand viewer</Badge>
              <Badge variant="outline" className="text-xs">✅ Mobile responsive</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              📖 See <code className="bg-white px-2 py-1 rounded border">VIDEO-UPLOAD-GUIDE.md</code> for detailed upload instructions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
