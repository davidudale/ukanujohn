import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onEnquire: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Product Image */}
        <div className="relative h-52 w-full bg-slate-100 overflow-hidden flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-forest-900/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-forest-700">
            {product.category}
          </div>
          <div className="absolute top-3 right-3 bg-solar-500 text-charcoal-950 text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
            {product.capacityOrPower}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-charcoal-900 leading-snug">
            {product.name}
          </h3>

          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick Specs summary */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                Technical Highlights
              </span>
              <button
                type="button"
                onClick={() => setShowSpecs(!showSpecs)}
                className="text-xs text-forest-800 hover:text-forest-950 font-semibold underline underline-offset-2"
              >
                {showSpecs ? 'Hide Full Specs' : 'View Specifications'}
              </button>
            </div>

            {/* Collapsible Specs or Highlights */}
            {showSpecs ? (
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5 my-2 max-h-48 overflow-y-auto">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-slate-200/60 last:border-0">
                    <span className="text-slate-500 font-medium">{key}:</span>
                    <span className="text-charcoal-900 font-semibold text-right pl-2">{val}</span>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-1 text-xs text-slate-600 mb-2">
                {product.features.slice(0, 2).map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Applications */}
            <div className="mt-3">
              <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1.5">
                Intended Applications:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.applications.map((app, i) => (
                  <span
                    key={i}
                    className="inline-block bg-slate-100 text-slate-700 text-[10px] font-medium px-2 py-0.5 rounded-md"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Inquiry Action */}
      <div className="p-6 pt-0 bg-white">
        <Button
          variant="primary"
          fullWidth
          size="sm"
          onClick={() => onEnquire(`Product Inquiry: ${product.name}`)}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Inquire About This Equipment
        </Button>
      </div>
    </div>
  );
};
