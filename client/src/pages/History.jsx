import React, { useState } from 'react';
import { History as HistoryIcon, ArrowLeft } from 'lucide-react';
import VerificationResult from '../components/VerificationResult';
import ClaimLensButton from '../components/ClaimLensButton';

export default function History({ historyItems = [], onNavigateToVerify }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const getBadgeClass = (variant) => {
    if (variant === 'positive') return 'bg-emerald-950/80 text-emerald-300 border-emerald-800';
    if (variant === 'warning') return 'bg-amber-950/80 text-amber-300 border-amber-800';
    if (variant === 'negative') return 'bg-rose-950/80 text-rose-300 border-rose-800';
    return 'bg-slate-800 text-slate-300 border-slate-700';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Header Matching Requirement 15 */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          MY VERIFICATIONS
        </h1>
        <p className="text-slate-400 text-sm">
          Review evidence evaluations and detailed reasoning for your submitted claims.
        </p>
      </div>

      {/* Detail View of a Selected Historical Verification */}
      {selectedItem ? (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedItem(null)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all verifications</span>
          </button>

          <VerificationResult
            result={selectedItem.result}
            claimText={selectedItem.claim}
            onVerifyAnother={() => setSelectedItem(null)}
          />
        </div>
      ) : (
        /* History list or clean empty state */
        <div>
          {historyItems.length === 0 ? (
            <div className="product-card p-12 text-center space-y-5 border-slate-800">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto text-slate-400">
                <HistoryIcon className="w-6 h-6" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">
                  No verifications yet.
                </h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                  When you verify an image or scan a story from the For You page, your verification results will appear here.
                </p>
              </div>

              <div className="pt-2">
                <ClaimLensButton
                  onClick={onNavigateToVerify}
                  variant="primary"
                  size="md"
                  showArrow
                >
                  VERIFY YOUR FIRST IMAGE
                </ClaimLensButton>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {historyItems.map((item) => (
                <div
                  key={item.id}
                  className="product-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4 min-w-0">
                    {item.imageUrl && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shrink-0">
                        <img
                          src={item.imageUrl}
                          alt="Thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-brand-400 tracking-wider">
                          {item.id.startsWith("CASE") ? item.id : `CASE #${item.id}`}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">
                          {item.date}
                        </span>
                      </div>
                      
                      <p className="text-sm font-semibold text-white leading-snug truncate sm:max-w-lg">
                        "{item.claim}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap ${getBadgeClass(item.statusVariant)}`}>
                      {item.status}
                    </span>

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      VIEW RESULT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
