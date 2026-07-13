import type { APIRoute } from 'astro';
import { searchIndex } from '../data/search-index';

export const prerender = true;

/** Site araması için statik index — her sayfaya gömülmez; ilk açılışta fetch edilir. */
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
