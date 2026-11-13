import React, { useState } from 'react';
import { Sun, Battery, ArrowRight, Zap } from 'lucide-react';
import { Button } from './Button';

interface EnergyEstimatorProps {
  onSelectEstimate: (summary: string) => void;
}

export const EnergyEstimator: React.FC<EnergyEstimatorProps> = ({ onSelectEstimate }) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | 'institutional'>('residential');
  const [acCount, setAcCount] = useState<number>(2);
  const [fridgeCount, setFridgeCount] = useState<number>(1);
  const [hasWaterPump, setHasWaterPump] = useState<boolean>(true);
  const [hasHeavyGear, setHasHeavyGear] = useState<boolean>(false);
  const [hoursBackupNeeded, setHoursBackupNeeded] = useState<number>(12);

  // Sizing estimation logic (educational approximation)
  const calculateEstimate = () => {
    // Base loads in Watts
    let continuousWatts = 400; // Lighting, wifi, entertainment/laptops
    continuousWatts += acCount * 1200; // Average inverter AC consumption
    continuousWatts += fridgeCount * 200; // Average refrigerator / freezer
    if (hasWaterPump) continuousWatts += 300; // Average daily duty cycle share of 1-1.5HP pump
    if (hasHeavyGear) continuousWatts += 1500; // Diagnostics / cold room / machinery

    // Peak surge
    const peakSurgeVA = continuousWatts * 1.6;

    // Recommended Inverter capacity (kVA)
    let recommendedInverter = '5kVA Pure Sine Wave';
    if (peakSurgeVA > 15000) recommendedInverter = '30kW - 45kW Three-Phase Hybrid';
    else if (peakSurgeVA > 9000) recommendedInverter = '15kVA Smart Hybrid';
    else if (peakSurgeVA > 5500) recommendedInverter = '10kVA Smart Hybrid';
    else if (peakSurgeVA > 3200) recommendedInverter = '7.5kVA Smart Hybrid';

    // Daily energy in kWh
    const dailyKwh = ((continuousWatts * 14) / 1000); // 14 active daytime & evening hours
    
    // Solar PV Array size needed (considering ~4.8 peak sun hours and 85% efficiency)
    const solarArrayKw = Math.max(3.3, Math.ceil((dailyKwh / 4.8 / 0.85) * 2) / 2);

    // Battery capacity for requested nighttime/cloudy autonomy hours
    // (assuming continuous night load is ~45% of peak continuous)
    const nightWatts = continuousWatts * 0.45;
    const rawBatteryKwh = (nightWatts * hoursBackupNeeded) / 1000;
    // LiFePO4 depth of discharge 85%
    const batteryStorageKwh = Math.max(5.12, Math.ceil((rawBatteryKwh / 0.85) / 5) * 5.12);

    // Estimated monthly generator fuel savings (approx 1.5L/hr diesel/petrol @ standard regional cost)
    const monthlyFuelSavings = Math.round(hoursBackupNeeded * 28 * 1.4 * 1200);

    return {
      recommendedInverter,
      solarArrayKw,
      batteryStorageKwh: batteryStorageKwh.toFixed(1),
      estimatedDailyKwh: dailyKwh.toFixed(1),
      monthlyFuelSavings: monthlyFuelSavings.toLocaleString()
    };
  };

  const estimate = calculateEstimate();

  const handleApplyToQuote = () => {
    const summary = `${propertyType.toUpperCase()} Estimate: ${estimate.recommendedInverter} with ${estimate.solarArrayKw}kW Solar PV & ${estimate.batteryStorageKwh}kWh LiFePO4 Battery Storage (Daily Est: ${estimate.estimatedDailyKwh} kWh).`;
    onSelectEstimate(summary);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-forest-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-solar-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Interactive Load Calculator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Estimate Your System Specifications</h3>
            <p className="text-sm text-forest-100/90 mt-1">
              Select your property type and primary power loads to preview an engineered configuration.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 bg-forest-950/60 p-1.5 rounded-xl border border-forest-800">
            <button
              onClick={() => {
                setPropertyType('residential');
                setAcCount(2);
                setFridgeCount(1);
                setHasWaterPump(true);
                setHasHeavyGear(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                propertyType === 'residential' ? 'bg-solar-500 text-charcoal-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => {
                setPropertyType('commercial');
                setAcCount(5);
                setFridgeCount(2);
                setHasWaterPump(true);
                setHasHeavyGear(true);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                propertyType === 'commercial' ? 'bg-solar-500 text-charcoal-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => {
                setPropertyType('institutional');
                setAcCount(8);
                setFridgeCount(3);
                setHasWaterPump(true);
                setHasHeavyGear(true);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                propertyType === 'institutional' ? 'bg-solar-500 text-charcoal-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              Institutional
            </button>
          </div>
        </div>
      </div>

      {/* Calculator Body */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2">
              <span>Air Conditioners to Run Simultaneously</span>
              <span className="text-forest-900 font-bold font-mono text-sm">{acCount} {acCount === 1 ? 'Unit' : 'Units'}</span>
            </label>
            <input
              type="range"
              min="0"
              max="12"
              value={acCount}
              onChange={e => setAcCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-forest-900"
            />
            <div className="flex justify-between text-[11px] text-slate-600 mt-1">
              <span>0 (None)</span>
              <span>2 - 3 (Medium House)</span>
              <span>6+ (Commercial/Large Villa)</span>
              <span>12 (Facility)</span>
            </div>
          </div>

          <div>
            <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2">
              <span>Refrigerators / Deep Freezers</span>
              <span className="text-forest-900 font-bold font-mono text-sm">{fridgeCount} {fridgeCount === 1 ? 'Unit' : 'Units'}</span>
            </label>
            <input
              type="range"
              min="1"
              max="8"
              value={fridgeCount}
              onChange={e => setFridgeCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-forest-900"
            />
          </div>

          <div>
            <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2">
              <span>Nighttime / Blackout Autonomy Hours Needed</span>
              <span className="text-forest-900 font-bold font-mono text-sm">{hoursBackupNeeded} Hours</span>
            </label>
            <input
              type="range"
              min="4"
              max="24"
              step="2"
              value={hoursBackupNeeded}
              onChange={e => setHoursBackupNeeded(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-forest-900"
            />
            <div className="flex justify-between text-[11px] text-slate-600 mt-1">
              <span>4 hrs (Evening)</span>
              <span>12 hrs (Full Overnight)</span>
              <span>24 hrs (Full Autonomy)</span>
            </div>
          </div>

          {/* Toggle Checkboxes */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-forest-600 cursor-pointer transition-colors bg-slate-50/50">
              <input
                type="checkbox"
                checked={hasWaterPump}
                onChange={e => setHasWaterPump(e.target.checked)}
                className="w-4 h-4 rounded text-forest-900 focus:ring-forest-800"
              />
              <span className="text-xs font-semibold text-slate-700">Include Borehole / Water Booster Pump (1–2 HP)</span>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-forest-600 cursor-pointer transition-colors bg-slate-50/50">
              <input
                type="checkbox"
                checked={hasHeavyGear}
                onChange={e => setHasHeavyGear(e.target.checked)}
                className="w-4 h-4 rounded text-forest-900 focus:ring-forest-800"
              />
              <span className="text-xs font-semibold text-slate-700">Include Medical Analyzers / Heavy Lab Motors</span>
            </label>
          </div>
        </div>

        {/* Right Output Card (5 cols) */}
        <div className="lg:col-span-5 bg-forest-50/70 border border-forest-200/80 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-forest-200/70 pb-3 mb-4">
              <span className="text-xs font-bold text-forest-900 uppercase tracking-wider">
                Engineering Sizing Output
              </span>
              <span className="text-[10px] font-semibold bg-forest-900 text-white px-2 py-0.5 rounded-full">
                Preliminary
              </span>
            </div>

            <div className="space-y-4">
              {/* Inverter */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-semibold text-slate-600 uppercase">Recommended Inverter Rating</div>
                <div className="text-base font-extrabold text-charcoal-900 mt-0.5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-solar-500" />
                  <span>{estimate.recommendedInverter}</span>
                </div>
              </div>

              {/* Solar Array */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-semibold text-slate-600 uppercase">Suggested Solar PV Array</div>
                <div className="text-base font-extrabold text-charcoal-900 mt-0.5 flex items-center gap-2">
                  <Sun className="w-4 h-4 text-solar-500" />
                  <span>{estimate.solarArrayKw} kWp (~{Math.ceil(estimate.solarArrayKw * 1000 / 550)} x 550W Panels)</span>
                </div>
              </div>

              {/* Battery Storage */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-semibold text-slate-600 uppercase">Recommended LiFePO4 Battery Bank</div>
                <div className="text-base font-extrabold text-charcoal-900 mt-0.5 flex items-center gap-2">
                  <Battery className="w-4 h-4 text-solar-500" />
                  <span>{estimate.batteryStorageKwh} kWh LiFePO4 (6,000+ Cycles)</span>
                </div>
              </div>

              {/* Fuel reduction indicator */}
              <div className="p-3 bg-solar-50 rounded-xl border border-solar-200 text-xs text-amber-900">
                <span className="font-bold">Projected Monthly Fuel Offset:</span>
                <p className="mt-0.5 text-slate-700">
                  Estimated ~₦{estimate.monthlyFuelSavings} saved monthly compared to dedicated petrol/diesel generator running costs.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-forest-200/70 space-y-2">
            <Button
              variant="primary"
              fullWidth
              size="md"
              onClick={handleApplyToQuote}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Proposal for This Sizing
            </Button>
            <p className="text-[11px] text-slate-600 text-center">
              *Preliminary guideline. Final sizing requires our on-site load log and structural assessment.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
