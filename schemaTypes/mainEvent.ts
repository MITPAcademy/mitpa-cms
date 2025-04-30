import { defineField, defineType } from 'sanity';

export const mainEvent = defineType({
    name: 'mainEvent',
    title: 'Main Event',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'date', title: 'Date', type: 'datetime' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'link', title: 'Link', type: 'url' }),
    ],
});
