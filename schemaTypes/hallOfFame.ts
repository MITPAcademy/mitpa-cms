import { defineField, defineType } from 'sanity';

export const hallOfFame = defineType({
    name: 'hallOfFame',
    title: 'Hall of Fame',
    type: 'document',
    fields: [
        defineField({
            name: 'names',
            title: 'Names',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'majors',
            title: 'Majors',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'icons',
            title: 'Icons (CDN URLs)',
            type: 'array',
            of: [{ type: 'url' }],
        }),
    ],
});
