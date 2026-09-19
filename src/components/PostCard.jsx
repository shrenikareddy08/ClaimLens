import React from 'react';
import { Clock } from 'lucide-react';
import ClaimLensButton from './ClaimLensButton';

export default function PostCard({ post, onSelect }) {
  return (
    <article className="product-card product-card-hover overflow-hidden flex flex-col justify-between border-slate-800">
      <div>
        {/* Post Image with Category & Sample Label */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <img
            src={post.imageUrl}
            alt={post.headline}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-black/80 backdrop-blur text-white tracking-wide uppercase">
              {post.category}
            </span>
          </div>

          {post.isSampleContent && (
            <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/85 backdrop-blur text-[10px] font-bold tracking-wider text-amber-300 border border-amber-500/30">
              SAMPLE / DEMONSTRATION CONTENT
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.source}</span>
          </div>

          <h3 className="text-base font-bold text-white leading-snug">
            {post.headline}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {post.shortDescription}
          </p>

          {/* Attached Claim Preview */}
          <div className="mt-3 p-3.5 rounded-lg bg-[#0d131f] border border-slate-800/90 text-xs space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Claim attached to this story:
            </span>
            <p className="text-slate-200 italic line-clamp-2 leading-relaxed">
              "{post.claim}"
            </p>
          </div>
        </div>
      </div>

      {/* Button: BROWSE WITH CLAIMLENS */}
      <div className="p-5 pt-1">
        <ClaimLensButton
          onClick={() => onSelect(post)}
          variant="primary"
          size="md"
          showArrow
          className="w-full"
        >
          BROWSE WITH CLAIMLENS
        </ClaimLensButton>
      </div>
    </article>
  );
}
