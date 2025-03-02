import {defineField, defineType} from 'sanity'
import CharacterCount from './CharacterCount';


export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2
    }),    
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.max(250).warning('Excerpts should be under 250 characters'),
      components: {
        input: CharacterCount,
      },
      options: {
        maxChars: 250, // Ensures the counter uses the correct limit
        rows: 2, // Sets the textarea to display 2 rows
      }
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImageAlt',
      title: 'Main Image Alt Text',
      type: 'string',
      validation: (Rule) => Rule.max(100).warning('Alt text should be under 100 characters'),
      components: {
        input: CharacterCount,
      },
      options: {
        maxChars: 100,
      }
    }),    
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning('Meta titles should be under 60 characters'),
      components: {
        input: CharacterCount,
      },
      options: {
        maxChars: 60,
      }
    }),    
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) => Rule.max(150).warning('Meta descriptions should be under 150 characters'),
      components: {
        input: CharacterCount,
      },
      options: {
        maxChars: 150, // Ensures the counter uses the correct limit
        rows: 2, // Sets the textarea to display 2 rows
      }
    }),       
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
