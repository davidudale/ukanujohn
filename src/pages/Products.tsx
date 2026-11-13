import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Filter, Box
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';

interface OutletContextType {
  onOpenQuoteModal: (enquiryType?: string, subject?: string) => void;
}

export const Products: React.FC = () => {
  const { onOpenQuoteModal } = useOutletContext<OutletContextType>();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Solar Panels', 'Inverters', 'Battery Storage', 'Accessories'];

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Page Header Banner */}
      <section className="bg-forest-950 text-white py-16 sm:py-20 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-solar-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Box className="w-3.5 h-3.5" />
            <span>Equipment & Hardware Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Tier-1 Renewable Energy Products
          </h1>
          <p className="mt-4 text-base sm:text-lg text-forest-100/90 max-w-2xl leading-relaxed">
            High-efficiency photovoltaic modules, intelligent hybrid inverters, and long-life Lithium Iron Phosphate (LiFePO4) energy storage systems backed by manufacturer warranties.
          </p>
        </div>
      </section>

      {/* Main Content & Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-slate-200 pb-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Filter Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-forest-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={(name) => onOpenQuoteModal('Product & Equipment Supply', name)}
            />
          ))}
        </div>

        {/* Scope disclaimer */}
        <div className="mt-14 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-3xl mx-auto text-center space-y-1">
          <p className="font-semibold text-charcoal-900">
            Corporate Equipment Procurement & System Integration
          </p>
          <p>
            All hardware items are supplied as part of our turnkey engineering installations or direct bulk commercial supply agreements. For volume specifications or custom system matching, please contact our technical procurement desk.
          </p>
        </div>

      </div>

    </div>
  );
};
