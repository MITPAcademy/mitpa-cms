import { defineField, defineType } from 'sanity';

export const project = defineType({
    name: 'Project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({ name: 'image', title: 'Image (CDN URL)', type: 'url' }),
        defineField({ name: 'content', title: 'Content', type: 'text' }),
        defineField({ name: 'creator', title: 'Creator', type: 'string' }),
        defineField({ name: 'ideaBy', title: 'Idea by', type: 'string' }),
        defineField({ name: 'link', title: 'Link', type: 'url' }),
        defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
        defineField({ name: 'contributorsLink', title: 'Contributors Link', type: 'url' }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({ name: 'license', title: 'License', type: 'string' }),
    ],
});
