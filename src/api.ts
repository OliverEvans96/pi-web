import payload from 'payload';
import type { PayloadCollection } from './types';
import qs from "qs";
import type { Post } from './payload-types';

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

// export async function getPosts(query: any = null): Promise<PayloadCollection<Post>> {
export async function getPosts(query: any = null): Promise<any> {
  // const stringifiedQuery = qs.stringify(
  //   query,
  //   { addQueryPrefix: true }
  // );
  // const data = await apiFetch(
  //   // `${import.meta.env.PAYLOAD_URL}/api/posts${stringifiedQuery}`
  //   "http://example.com"
  // )
  //
  //
  let data = await payload.find<any>({collection: 'posts'});
  console.log(`POSTS: `, data);

  return data;
}

// export async function getPosts(query: any = null): Promise<PayloadCollection<Post>> {
export async function getPostBySlug(slug: string): Promise<any> {
  let data = await payload.find<any>({collection: 'posts', where: {
    slug: {
      equals: slug,
    }
  }});

  // TODO: What if there are no results?
  return data.docs[0];
}
