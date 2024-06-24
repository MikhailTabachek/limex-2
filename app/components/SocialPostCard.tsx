import React from 'react';

interface SocialPostCardProps {
  authorName: string;
  followers: string;
  postContent: string;
}

const SocialPostCard: React.FC<SocialPostCardProps> = ({ authorName, followers, postContent }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-2">
          <span className="text-sm font-bold">{authorName.charAt(0)}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{authorName}</h3>
          <span className="text-gray-500">{followers} followers</span>
        </div>
      </div>
      <div className="mt-4">
        <p>{postContent}</p>
      </div>
    </div>
  );
};

export default SocialPostCard;
