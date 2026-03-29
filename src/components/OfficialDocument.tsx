import type { ReactNode } from 'react';
import { WaxSeal } from './WaxSeal';

interface OfficialDocumentProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  showSeal?: boolean;
  commanderName?: string;
}

export function OfficialDocument({
  title,
  subtitle,
  children,
  showSeal = true,
  commanderName = 'Высшее Командование'
}: OfficialDocumentProps) {
  return (
    <div className="official-document">
      <div className="mb-8">
        {/* Верхний орнамент */}
        <div className="glow-line mb-6"></div>
        
        <h1 className="official-title">{title}</h1>
        {subtitle && <p className="official-subtitle">{subtitle}</p>}
        
        <div className="glow-line mt-6 mb-8"></div>
      </div>

      <div className="space-y-6">
        {children}
      </div>

      {/* Нижняя часть с печатью */}
      <div className="mt-12 pt-8 border-t-2 border-military-gold flex items-end justify-between">
        <div>
          <div className="signature-line">
            ___________________________
          </div>
          <p className="text-sm italic mt-2 font-accent">{commanderName}</p>
        </div>
        
        {showSeal && (
          <div className="transform -rotate-12">
            <WaxSeal size="md" />
          </div>
        )}
      </div>

      {/* Нижний орнамент */}
      <div className="glow-line mt-12"></div>
    </div>
  );
}
