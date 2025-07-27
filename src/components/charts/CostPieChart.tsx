import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { cn } from '../../lib/utils';
import type { CostBreakdown } from '../../types/calculator';

interface CostPieChartProps {
  data: CostBreakdown;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  showLegend?: boolean;
  className?: string;
}

export function CostPieChart({
  data,
  size = 'md',
  showLabels = true,
  showLegend = true,
  className
}: CostPieChartProps) {
  // Debug log to verify this version is loaded
  console.log('CostPieChart loaded - using hardcoded colors');
  
  const chartData = [
    {
      name: 'Principal',
      value: data.principal,
      percentage: data.percentages.principal,
      color: '#10b981' // success-primary
    },
    {
      name: 'Interest',
      value: data.interest,
      percentage: data.percentages.interest,
      color: '#f59e0b' // warning-primary
    },
    {
      name: 'Processing Fees',
      value: data.fees,
      percentage: data.percentages.fees,
      color: '#3b82f6' // info-primary
    },
    {
      name: 'GST',
      value: data.gst,
      percentage: data.percentages.gst,
      color: '#ef4444' // error-primary
    }
  ];

  const sizeClasses = {
    sm: 'h-48',
    md: 'h-64',
    lg: 'h-80'
  };

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: { name: string; value: number; percentage: number } }> }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-surface-primary p-3 border border-border-primary rounded-lg shadow-lg">
          <p className="font-medium text-text-primary">{data.name}</p>
          <p className="text-sm text-text-secondary">
            ₹{data.value.toLocaleString('en-IN')}
          </p>
          <p className="text-sm text-text-tertiary">
            {data.percentage.toFixed(1)}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-lg font-semibold text-text-primary text-center">
        Cost Distribution
      </h3>
      
      <div className={cn('w-full', sizeClasses[size])}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={size === 'sm' ? 30 : 40}
              outerRadius={size === 'sm' ? 80 : 100}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            
            {showLabels && (
              <Tooltip content={<CustomTooltip />} />
            )}
            
            {showLegend && (
              <Legend 
                verticalAlign="bottom" 
                height={36}
              />
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 