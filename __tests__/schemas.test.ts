import { blogPost } from '../schemaTypes/blogPost';
import { event } from '../schemaTypes/event';
import { hallOfFame } from '../schemaTypes/hallOfFame';
import { mainEvent } from '../schemaTypes/mainEvent';
import { project } from '../schemaTypes/project';

type SchemaField = {
    name: string;
    type: string;
    of?: { type: string }[];
};

type Schema = {
    fields: SchemaField[];
};

describe('Sanity Schemas', () => {
    test('blogPost schema should have required fields', () => {
        const fields = (blogPost as Schema).fields;
        const fieldNames = fields.map((f) => f.name);
        expect(fieldNames).toEqual(
            expect.arrayContaining(['image', 'content', 'creator', 'link', 'publishedAt'])
        );
    });

    test('event schema should have required fields', () => {
        const fields = (event as Schema).fields;
        const fieldNames = fields.map((f) => f.name);
        expect(fieldNames).toEqual(
            expect.arrayContaining(['name', 'date', 'description', 'link'])
        );
    });

    test('hallOfFame schema should have arrays of correct types', () => {
        const fields = (hallOfFame as Schema).fields;
        const namesField = fields.find((f) => f.name === 'names');
        expect(namesField?.type).toBe('array');
        expect(namesField?.of && namesField.of[0]?.type).toBe('string');
    });

    test('mainEvent schema should have image and link fields with url type', () => {
        const fields = (mainEvent as Schema).fields;
        const imageField = fields.find((f) => f.name === 'image');
        const linkField = fields.find((f) => f.name === 'link');
        expect(imageField?.type).toBe('url');
        expect(linkField?.type).toBe('url');
    });

    test('project schema should have tags as array of string', () => {
        const fields = (project as Schema).fields;
        const tagsField = fields.find((f) => f.name === 'tags');
        expect(tagsField?.type).toBe('array');
        expect(tagsField?.of && tagsField.of[0]?.type).toBe('string');
    });
});