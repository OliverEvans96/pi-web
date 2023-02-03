import type { PayloadCollection } from './types';
import qs from "qs";
import type { LandingTitle, Post, Product, Page, Homepage, ContactInfo } from '@/payload/payload-types';

function apiFetch(url: string, options: any = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  return fetch(url, mergedOptions).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(
      `Error fetching page data: ${res.statusText} (${res.status})}`
    );
  });
}

export async function getPosts(query: any = null): Promise<PayloadCollection<Post>> {
  const stringifiedQuery = qs.stringify(
    query,
    { addQueryPrefix: true }
  );
  const data = await apiFetch(
    `${process.env.PAYLOAD_URL}/api/posts${stringifiedQuery}`
  )
  return data
}

export async function getProducts(query: any = null): Promise<PayloadCollection<Product>> {
  const stringifiedQuery = qs.stringify(
    query,
    { addQueryPrefix: true }
  );
  const data = await apiFetch(
    `${process.env.PAYLOAD_URL}/api/products${stringifiedQuery}`
  )
  return data
}

async function queryPagesBySlug(slug?: string): Promise<PayloadCollection<Page>> {
  const query = { slug: { equals: slug } };
  const stringifiedQuery = qs.stringify(
    { where: query },
    { addQueryPrefix: true }
  );
  const data = await apiFetch(`${process.env.PAYLOAD_URL}/api/pages${stringifiedQuery}`);
  return data
}

export async function getAllPages(): Promise<PayloadCollection<Page>> {
  return await queryPagesBySlug();
}

export async function getPageBySlug(slug?: string): Promise<Page | undefined> {
  let results = await queryPagesBySlug(slug);
  let [page,] = results.docs;
  return page;
}

export async function getHomepage(): Promise<Homepage> {
  const data = await apiFetch(
    `${process.env.PAYLOAD_URL}/api/globals/homepage`
  )
  return data
}

export async function getContactInfo(): Promise<ContactInfo> {
  const data = await apiFetch(
    `${process.env.PAYLOAD_URL}/api/globals/contact-info`
  )
  return data
}