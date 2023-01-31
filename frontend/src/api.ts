import type { PayloadCollection } from './types';
import qs from "qs";
import type { Post } from '@/payload/payload-types';

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

///////
interface LandingTitle {
  globalType: string,
  createdAt: string,
  updatedAt: string,
  header: string,
  id: string
}

export async function getLandingTitle(): Promise<LandingTitle> {
  const data = await apiFetch(
    `${process.env.PAYLOAD_URL}/api/globals/landingTitle`
  )
  return data
}