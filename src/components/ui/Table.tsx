// src/components/ui/Table.tsx
/**
 * @file Table.tsx
 * @description Conjunto de componentes modulares para exibição de dados tabulares.
 * Estrutura otimizada para legibilidade em sistemas de gestão e ERPs.
 */
import React from 'react';
import { cn } from '@/utils/cn';

export const Table = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <div className="w-full overflow-auto">
        <table className={cn("w-full caption-bottom text-sm border-collapse font-sans", className)}>
            {children}
        </table>
    </div>
);

export const TableHeader = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <thead className={cn("border-b border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-900/50", className)}>
        {children}
    </thead>
);

export const TableBody = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <tbody className={cn("[&_tr:last-child]:border-0", className)}>
        {children}
    </tbody>
);

export const TableRow = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <tr className={cn(
        "border-b border-gray-200 transition-colors hover:bg-gray-50/50",
        "dark:border-gray-800 dark:hover:bg-gray-900/50",
        className
    )}>
        {children}
    </tr>
);

export const TableHead = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <th className={cn(
        "h-12 px-4 text-left align-middle font-bold text-gray-800 dark:text-gray-50 font-sans tracking-tight",
        className
    )}>
        {children}
    </th>
);

export const TableCell = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <td className={cn("p-4 align-middle text-gray-400 dark:text-gray-200 font-sans", className)}>
        {children}
    </td>
);