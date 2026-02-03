import { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function ROICalculator() {
    const [propertyPrice, setPropertyPrice] = useState(2500000);
    const [downPaymentPercent, setDownPaymentPercent] = useState(20);
    const [years, setYears] = useState(5);
    const [appreciationRate, setAppreciationRate] = useState(5); // 5% annual growth default
    const [rentalYield, setRentalYield] = useState(6); // 6% annual yield default

    // Calculate formatted values
    const calculations = useMemo(() => {
        const downPaymentAmount = propertyPrice * (downPaymentPercent / 100);
        const loanAmount = propertyPrice - downPaymentAmount;

        // Generate data for chart based on selected year range
        const chartData = [];
        let currentVal = propertyPrice;
        let totalRent = 0;

        for (let i = 0; i <= years; i++) {
            const yearRent = currentVal * (rentalYield / 100);

            if (i > 0) {
                totalRent += yearRent; // Simple cumulative rent
                currentVal = currentVal * (1 + appreciationRate / 100);
            }

            chartData.push({
                year: `Year ${i}`,
                value: Math.round(currentVal),
                profit: Math.round(currentVal - propertyPrice + totalRent),
                initial: propertyPrice
            });
        }

        const finalValue = Math.round(currentVal);
        const totalAppreciation = finalValue - propertyPrice;
        const totalReturn = totalAppreciation + totalRent;
        const roiPercent = (totalReturn / downPaymentAmount) * 100;

        return {
            downPaymentAmount,
            loanAmount,
            finalValue,
            totalAppreciation,
            totalRent,
            totalReturn,
            roiPercent,
            chartData
        };
    }, [propertyPrice, downPaymentPercent, years, appreciationRate, rentalYield]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <section className="py-24 bg-navy-900 text-white relative overflow-hidden" id="roi-calculator">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
                        Investment Intelligence
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
                        Calculate the potential returns of your luxury asset in Dubai's thriving real estate market.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">

                    {/* Controls Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Property Value</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-serif">AED</span>
                                <input
                                    type="number"
                                    value={propertyPrice}
                                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-14 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all font-mono"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Down Payment</label>
                                <span className="text-white font-mono">{downPaymentPercent}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={downPaymentPercent}
                                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                            />
                            <div className="mt-1 text-xs text-blue-300 text-right font-mono">
                                {formatCurrency(calculations.downPaymentAmount)}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Investment Horizon</label>
                                <span className="text-white font-mono">{years} Years</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Est. Appreciation</label>
                                <div className="flex items-center bg-white/5 rounded-lg border border-white/10 px-3 py-2">
                                    <input
                                        type="number"
                                        value={appreciationRate}
                                        onChange={(e) => setAppreciationRate(Number(e.target.value))}
                                        className="bg-transparent w-full text-white font-mono focus:outline-none"
                                    />
                                    <span className="text-gray-400 text-sm">%</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Est. Rental Yield</label>
                                <div className="flex items-center bg-white/5 rounded-lg border border-white/10 px-3 py-2">
                                    <input
                                        type="number"
                                        value={rentalYield}
                                        onChange={(e) => setRentalYield(Number(e.target.value))}
                                        className="bg-transparent w-full text-white font-mono focus:outline-none"
                                    />
                                    <span className="text-gray-400 text-sm">%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results & Chart Section */}
                    <div className="lg:col-span-8 bg-black/20 rounded-2xl p-6 md:p-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Projected Value</p>
                                <p className="text-2xl md:text-3xl font-serif text-white">{formatCurrency(calculations.finalValue)}</p>
                                <p className="text-green-400 text-xs mt-1">+{formatCurrency(calculations.totalAppreciation)} growth</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Rental Income</p>
                                <p className="text-2xl md:text-3xl font-serif text-white">{formatCurrency(calculations.totalRent)}</p>
                                <p className="text-gray-500 text-xs mt-1">Over {years} years</p>
                            </div>
                            <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md">
                                <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">Total ROI</p>
                                <p className="text-3xl md:text-4xl font-serif text-white">{Math.round(calculations.roiPercent)}%</p>
                                <p className="text-blue-300 text-xs mt-1">Return on Cash Invested</p>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={calculations.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#fff" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis
                                        dataKey="year"
                                        stroke="rgba(255,255,255,0.5)"
                                        tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        stroke="rgba(255,255,255,0.5)"
                                        tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                                        tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f2451', borderColor: 'rgba(255,255,255,0.2)', borderRadius: '8px', color: '#fff' }}
                                        itemStyle={{ color: '#fff' }}
                                        formatter={(value: number | undefined) => formatCurrency(value || 0)}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#fff"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                        name="Property Value"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="profit"
                                        stroke="#60A5FA"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorProfit)"
                                        name="Total Net Gain"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <p className="text-xs text-gray-500 mt-4 text-center italic">
                            * Note: Figures are estimates for illustrative purposes only. Market conditions vary.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
