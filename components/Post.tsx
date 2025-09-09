import React from 'react';
import type { Post as PostType } from '../types';
import { HeartIcon, CommentIcon, ShareIcon, BookmarkIcon, VerifiedIcon, DocumentIcon } from './Icons';

interface PostProps {
  post: PostType;
}

const renderContentWithHashtags = (text: string) => {
    const parts = text.split(/(#\w+)/g);
    return parts.map((part, index) =>
        part.startsWith('#') ?
        <span key={index} className="text-brand-orange font-semibold cursor-pointer hover:underline">{part}</span> :
        part
    );
};

const PostMedia: React.FC<{ post: PostType }> = ({ post }) => {
    switch (post.type) {
        case 'image':
            return post.imageUrl ? (
                <div className="mt-4">
                    <img src={post.imageUrl} alt="Post content" className="rounded-lg w-full h-auto max-h-96 object-cover" />
                </div>
            ) : null;
        case 'document':
            return post.document ? (
                <div className="mt-4 border border-dark-border rounded-lg p-3 flex items-center gap-4 bg-dark-bg cursor-pointer hover:bg-dark-border transition">
                    <DocumentIcon className="h-10 w-10 text-dark-text-secondary flex-shrink-0" />
                    <div>
                        <p className="font-semibold text-dark-text">{post.document.name}</p>
                        <p className="text-sm text-dark-text-secondary">{post.document.type} Document</p>
                    </div>
                </div>
            ) : null;
        case 'link':
            return post.linkPreview ? (
                <a href={post.linkPreview.url} target="_blank" rel="noopener noreferrer" className="mt-4 block border border-dark-border rounded-lg overflow-hidden hover:border-brand-orange/50 transition">
                    <img src={post.linkPreview.image} alt={post.linkPreview.title} className="w-full h-48 object-cover" />
                    <div className="p-3 bg-dark-bg">
                        <p className="font-semibold text-dark-text">{post.linkPreview.title}</p>
                        <p className="text-sm text-dark-text-secondary mt-1">{post.linkPreview.description}</p>
                    </div>
                </a>
            ) : null;
        default:
            return null;
    }
};

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <article className="bg-dark-surface border border-dark-border rounded-lg p-4 transition hover:border-brand-orange/50">
      <div className="flex items-start gap-4">
        <img src={post.author.avatarUrl} alt={post.author.name} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-bold text-dark-text">{post.author.name}</p>
            {post.author.isOfficial && <VerifiedIcon className="h-5 w-5 text-blue-400" />}
            <p className="text-dark-text-secondary">{post.author.handle}</p>
            <span className="text-dark-text-secondary">·</span>
            <p className="text-dark-text-secondary text-sm">{post.timestamp}</p>
          </div>
           <p className="text-dark-text-secondary text-sm">{post.author.course} @ {post.author.etec}</p>

          <div className="mt-2 text-dark-text whitespace-pre-wrap">
            {renderContentWithHashtags(post.content)}
          </div>

          <PostMedia post={post} />

          <div className="mt-4 flex justify-between items-center text-dark-text-secondary">
            <button className="flex items-center gap-2 hover:text-brand-red transition group">
              <HeartIcon className="h-5 w-5" />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500 transition group">
              <CommentIcon className="h-5 w-5" />
              <span className="text-sm">{post.comments}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-500 transition group">
              <ShareIcon className="h-5 w-5" />
              <span className="text-sm">{post.shares}</span>
            </button>
            <button className="hover:text-yellow-500 transition group">
              <BookmarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
