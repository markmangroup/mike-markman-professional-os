"use client";

import Image from "next/image";
import { ArrowRight, Database, RefreshCw } from "lucide-react";

interface DataArchitectureDiagramProps {
  className?: string;
}

// Standard grid unit for consistent spacing
const LOGO_BOX_SIZE = 135; // Further reduced to ensure no overflow
const TEXT_CARD_HEIGHT = 60; // Fixed height for text cards
const ARROW_COLUMN_WIDTH = 40; // Reduced arrow column width
const GAP_SIZE = 16; // Further reduced gap

export default function DataArchitectureDiagram({ className = "" }: DataArchitectureDiagramProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Main Container - Enhanced contrast */}
      <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border-2 border-gray-300 dark:border-gray-700 max-w-[1400px] mx-auto overflow-hidden shadow-lg dark:shadow-2xl">
        {/* Stage Titles Row - Aligned with logo columns */}
        <div 
          className="grid items-start mb-6"
          style={{ 
            gridTemplateColumns: `repeat(3, 1fr) ${ARROW_COLUMN_WIDTH}px 1fr ${ARROW_COLUMN_WIDTH}px 1fr ${ARROW_COLUMN_WIDTH}px 1fr`,
            gap: `${GAP_SIZE}px`
          }}
        >
          {/* Data Extraction - spans first 3 columns */}
          <div className="col-span-3 text-center">
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
              Data Extraction
            </div>
          </div>
          <div className="col-span-1"></div> {/* Arrow spacer */}
          {/* SQL Database heading - spans 1 column */}
          <div className="col-span-1 text-center">
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
              SQL Database
            </div>
          </div>
          <div className="col-span-1"></div> {/* Arrow spacer */}
          {/* Data Transformation - spans 1 column */}
          <div className="col-span-1 text-center">
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
              Data Transformation
            </div>
          </div>
          <div className="col-span-1"></div> {/* Arrow spacer */}
          {/* Data Visualization - spans 1 column */}
          <div className="col-span-1 text-center">
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
              Data Visualization
            </div>
          </div>
        </div>

        {/* Logos Row - All aligned horizontally */}
        <div 
          className="grid items-center mb-4"
          style={{ 
            gridTemplateColumns: `repeat(3, 1fr) ${ARROW_COLUMN_WIDTH}px 1fr ${ARROW_COLUMN_WIDTH}px 1fr ${ARROW_COLUMN_WIDTH}px 1fr`,
            gap: `${GAP_SIZE}px`
          }}
        >
          {/* CRM - Salesforce - Enhanced contrast */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-blue-100 dark:bg-blue-900/40 border-2 border-blue-300 dark:border-blue-700 rounded-xl flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 shadow-md dark:shadow-blue-900/20"
              style={{ width: LOGO_BOX_SIZE, height: LOGO_BOX_SIZE }}
            >
              <Image 
                src="/assets/salesforce.svg" 
                alt="Salesforce" 
                width={115} 
                height={80}
                className="object-contain p-2.5"
              />
            </div>
          </div>

          {/* MRA - Oracle - Enhanced contrast */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-red-100 dark:bg-red-900/40 border-2 border-red-300 dark:border-red-700 rounded-xl flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 shadow-md dark:shadow-red-900/20"
              style={{ width: LOGO_BOX_SIZE, height: LOGO_BOX_SIZE }}
            >
              <Image 
                src="/assets/Oracle_logo.svg.png" 
                alt="Oracle" 
                width={115} 
                height={80}
                className="object-contain p-2.5"
              />
            </div>
          </div>

          {/* Manual Inputs - Enhanced contrast */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-purple-100 dark:bg-purple-900/40 border-2 border-purple-300 dark:border-purple-700 rounded-xl flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 shadow-md dark:shadow-purple-900/20"
              style={{ width: LOGO_BOX_SIZE, height: LOGO_BOX_SIZE }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-500 dark:to-purple-600 rounded-xl flex items-center justify-center shadow-lg border-2 border-purple-400 dark:border-purple-500">
                <RefreshCw className="h-10 w-10 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="col-span-1 flex items-center justify-center" style={{ width: ARROW_COLUMN_WIDTH }}>
            <ArrowRight className="h-8 w-8 text-gray-600 dark:text-gray-300" strokeWidth={2.5} />
          </div>

          {/* SQL Database - Enhanced contrast */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-xl flex items-center justify-center shadow-xl dark:shadow-gray-900/50"
              style={{ width: LOGO_BOX_SIZE, height: LOGO_BOX_SIZE }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 shadow-inner flex items-center justify-center border border-gray-300 dark:border-gray-700">
                <Database className="h-7 w-7 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="col-span-1 flex items-center justify-center" style={{ width: ARROW_COLUMN_WIDTH }}>
            <ArrowRight className="h-8 w-8 text-gray-600 dark:text-gray-300" strokeWidth={2.5} />
          </div>

          {/* Celonis - Enhanced contrast */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/40 dark:to-yellow-900/40 border-2 border-orange-300 dark:border-orange-700 rounded-xl flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 shadow-md dark:shadow-orange-900/20"
              style={{ width: LOGO_BOX_SIZE, height: LOGO_BOX_SIZE }}
            >
              <Image 
                src="/assets/Celonis_Logo_2025.jpg" 
                alt="Celonis" 
                width={115} 
                height={115}
                className="object-contain p-2.5"
              />
            </div>
          </div>

          {/* Arrow 3 */}
          <div className="col-span-1 flex items-center justify-center" style={{ width: ARROW_COLUMN_WIDTH }}>
            <ArrowRight className="h-8 w-8 text-gray-600 dark:text-gray-300" strokeWidth={2.5} />
          </div>

          {/* Power BI - Enhanced contrast */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/40 dark:to-amber-900/40 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 shadow-md dark:shadow-yellow-900/20"
              style={{ width: LOGO_BOX_SIZE, height: LOGO_BOX_SIZE }}
            >
              <Image 
                src="/assets/power-bi-vector-logo-2022.png" 
                alt="Power BI" 
                width={115} 
                height={115}
                className="object-contain p-2.5"
              />
            </div>
          </div>
        </div>

        {/* Text Cards Row - All aligned horizontally - Enhanced contrast */}
        <div 
          className="grid items-start mb-8"
          style={{ 
            gridTemplateColumns: `repeat(3, 1fr) ${ARROW_COLUMN_WIDTH}px 1fr ${ARROW_COLUMN_WIDTH}px 1fr ${ARROW_COLUMN_WIDTH}px 1fr`,
            gap: `${GAP_SIZE}px`
          }}
        >
          {/* CRM Text Card */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-center shadow-md dark:shadow-lg"
              style={{ width: LOGO_BOX_SIZE, height: TEXT_CARD_HEIGHT }}
            >
              <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-1">CRM</div>
              <div className="text-[10px] text-gray-600 dark:text-gray-300">Salesforce</div>
            </div>
          </div>

          {/* MRA Text Card */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-center shadow-md dark:shadow-lg"
              style={{ width: LOGO_BOX_SIZE, height: TEXT_CARD_HEIGHT }}
            >
              <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-1">MRA</div>
              <div className="text-[10px] text-gray-600 dark:text-gray-300">Oracle</div>
            </div>
          </div>

          {/* Inputs Text Card */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-center shadow-md dark:shadow-lg"
              style={{ width: LOGO_BOX_SIZE, height: TEXT_CARD_HEIGHT }}
            >
              <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-1">Inputs</div>
              <div className="text-[10px] text-gray-600 dark:text-gray-300">MDM/Assets</div>
            </div>
          </div>

          {/* Arrow spacer */}
          <div className="col-span-1"></div>

          {/* SQL Text Card */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-center shadow-md dark:shadow-lg"
              style={{ width: LOGO_BOX_SIZE, height: TEXT_CARD_HEIGHT }}
            >
              <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">SQL</div>
              <div className="text-[10px] text-gray-600 dark:text-gray-300">Database</div>
            </div>
          </div>

          {/* Arrow spacer */}
          <div className="col-span-1"></div>

          {/* Celonis Text Card */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-center shadow-md dark:shadow-lg"
              style={{ width: LOGO_BOX_SIZE, height: TEXT_CARD_HEIGHT }}
            >
              <div className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-1">Celonis</div>
              <div className="text-[10px] text-gray-600 dark:text-gray-300">Process Mining</div>
            </div>
          </div>

          {/* Arrow spacer */}
          <div className="col-span-1"></div>

          {/* Power BI Text Card */}
          <div className="col-span-1 flex items-center justify-center">
            <div 
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-center shadow-md dark:shadow-lg"
              style={{ width: LOGO_BOX_SIZE, height: TEXT_CARD_HEIGHT }}
            >
              <div className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-1">Power BI</div>
              <div className="text-[10px] text-gray-600 dark:text-gray-300">Dashboards</div>
            </div>
          </div>
        </div>

        {/* Refresh Frequencies - Enhanced contrast */}
        <div className="pt-6 border-t-2 border-gray-300 dark:border-gray-700">
          <div className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center uppercase tracking-wide">
            Refresh Frequencies
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg text-center border-2 border-blue-300 dark:border-blue-700 shadow-md dark:shadow-blue-900/20">
              <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-1">Sales</div>
              <div className="text-[10px] text-gray-700 dark:text-gray-300">Daily</div>
            </div>
            <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-lg text-center border-2 border-red-300 dark:border-red-700 shadow-md dark:shadow-red-900/20">
              <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-1">Revenue</div>
              <div className="text-[10px] text-gray-700 dark:text-gray-300">Monthly</div>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg text-center border-2 border-purple-300 dark:border-purple-700 shadow-md dark:shadow-purple-900/20">
              <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-1">MDM</div>
              <div className="text-[10px] text-gray-700 dark:text-gray-300">Ad-hoc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
