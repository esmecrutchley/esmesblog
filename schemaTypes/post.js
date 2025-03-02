import {defineField, defineType} from 'sanity'


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
      description: 'The slug should be under 96 characters',
      options: {
        source: 'title',
        maxLength: 96,
      }
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'The excerpt should be under 250 characters',
      validation: (Rule) => Rule.max(250).warning('Excerpts should be under 250 characters'),
      rows: 2
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'Blog Post Featured Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImageAlt',
      title: 'Main Image Alt Text',
      type: 'string',
      description: 'Alt text should be under 100 characters',
      validation: (Rule) => Rule.max(100).warning('Alt text should be under 100 characters'),
    }),    
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'The Meta Title should be under 60 characters',
      validation: (Rule) => Rule.max(60).warning('Meta titles should be under 60 characters'),
    }),    
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'The Meta Description should be under 150 characters',
      validation: (Rule) => Rule.max(150).warning('Meta descriptions should be under 150 characters'),
      rows: 2
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
