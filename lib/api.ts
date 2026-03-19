import axios from "axios";
import { SiteFormData } from "./validation/site";

export interface Site {
  id: string;
  name: string;
  domain: string;
}

export interface PageView {
  date: string;
  count: number;
}

export interface Visitor {
  date: string;
  count: number;
}

export interface Page {
  pathname: string;
  count: number;
  visitors: number;
}

export interface Referrer {
  referrer: string;
  count: number;
  visitors: number;
}

export interface Country {
  country: string;
  count: number;
}

export interface Browser {
  browser: string;
  count: number;
}

export interface Device {
  device: string;
  count: number;
}

export interface Os {
  os: string;
  count: number;
}

export const fetchSites = async (): Promise<Site[]> => {
  const res = await axios.get("/api/sites");
  return res.data;
};

export const fetchSiteData = async (siteId: string): Promise<Site> => {
  const res = await axios.get(`/api/sites/${siteId}/data`);
  return res.data;
};

export const createSite = async (data: SiteFormData): Promise<Site> => {
  const res = await axios.post("/api/sites", data);
  return res.data;
};

export const updateSite = async (
  siteId: string,
  data: SiteFormData,
): Promise<Site> => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/api/project/update/${siteId}`,
    data,
  );
  return res.data;
};

export const deleteSite = async (siteId: string): Promise<void> => {
  await axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/api/project/delete/${siteId}`,
  );
};

export const fetchPageViews = async (siteId: string): Promise<PageView[]> => {
  const res = await axios.get(`/api/sites/${siteId}/analytics/timeseries`);
  return res.data;
};

export const fetchUniqueVisitors = async (
  siteId: string,
): Promise<Visitor[]> => {
  const res = await axios.get(`/api/sites/${siteId}/analytics/uniques`);
  return res.data;
};

export const fetchPages = async (siteId: string): Promise<Page[]> => {
  const res = await axios.get(`/api/sites/${siteId}/analytics/pages`);
  return res.data;
};

export const fetchReferrers = async (siteId: string): Promise<Referrer[]> => {
  const res = await axios.get(`/api/sites/${siteId}/analytics/referrers`);
  return res.data;
};

export const fetchCountries = async (siteId: string): Promise<Country[]> => {
  const res = await axios.get(`/api/sites/${siteId}/analytics/countries`);
  return res.data;
};

export const fetchBrowsers = async (siteId: string): Promise<Browser[]> => {
  const res = await axios.get(`/api/sites/${siteId}/analytics/browser`);
  return res.data;
};

export const fetchDevices = async (siteId: string): Promise<Device[]> => {
  const res = await axios.get(`/api/sites/${siteId}/analytics/devices`);
  return res.data;
};

export const fetchOs = async (siteId: string): Promise<Os[]> => {
  const res = await axios.get(`/api/sites/${siteId}/analytics/os`);
  return res.data;
};
