import { Dispatch } from 'react';

export enum DateActionEnum {
  SET_START = 'SET_START',
  SET_END = 'SET_END',
}

export type CategoryType = '전체 광고' | '진행중' | '중단됨';

export type DateActionType =
  | { type: DateActionEnum.SET_START; date: Date | null }
  | { type: DateActionEnum.SET_END; date: Date | null };

export enum CategoryEnum {
  all = '전체 광고',
  active = '진행중',
  ended = '중단됨',
}

type ReportType = {
  cost: number;
  convValue: number;
  roas: number;
};

export type AdType = {
  id: number;
  adType: keyof typeof CategoryEnum;
  title: string;
  budget: number;
  status: keyof typeof CategoryEnum;
  startDate: string;
  endDate: null | string;
  report: ReportType;
};

export enum DataActionEnum {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_DATA = 'SET_DATA',
  SET_ERROR = 'SET_ERROR',
}

export type TrendType = {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
};
