'use client';

import React, { ReactNode } from 'react';
import Table from './Table';

interface GenericTableProps<T> {
  data: T[];
  headers: string[];
  loading: boolean;
  title?: string;
  renderRow?: (item: T) => ReactNode;
  getItemKey: (item: T) => string | number;
  loadingMessage?: string;
  noDataMessage?: string;
}

const defaultRowRenderer = (item: any) => (
  <tr>
    {Object.values(item).map((value, index) => (
      <td key={index}>{String(value || '')}</td>
    ))}
  </tr>
);

export default function GenericTable<T>({
  data,
  headers,
  loading,
  title = 'Results',
  renderRow = defaultRowRenderer,
  getItemKey,
  loadingMessage = 'Loading...',
  noDataMessage = 'No data found'
}: GenericTableProps<T>) {
  return (
    <div className="search-results active">
      <div className="results-header">
        <h3 className="results-title">{title}</h3>
        <span className="result-count">{data.length}</span>
      </div>

      <Table headers={headers}>
        {loading ? (
          <tr>
            <td colSpan={headers.length} className="loading">{loadingMessage}</td>
          </tr>
        ) : data.length === 0 ? (
          <tr>
            <td colSpan={headers.length} className="no-results">{noDataMessage}</td>
          </tr>
        ) : (
          data.map((item) => (
            <React.Fragment key={getItemKey(item)}>{renderRow(item)}</React.Fragment>
          ))
        )}
      </Table>
    </div>
  );
}