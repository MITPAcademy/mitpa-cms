import { defineField, defineType } from 'sanity';

export const blogPost = defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({ name: 'image', title: 'Image (CDN URL)', type: 'url' }),
        defineField({ name: 'content', title: 'Content', type: 'text' }),
        defineField({ name: 'creator', title: 'Creator', type: 'string' }),
        defineField({ name: 'link', title: 'Link', type: 'url' }),
        defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    ],
});
