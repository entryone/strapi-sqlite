module.exports = ({ env }) => ({// ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: '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'
    },
    settings: {
      defaultFrom: 'a.i.kulinich@gmail.com',
      defaultReplyTo: 'a.i.kulinich@gmail.com',
    }
  },
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});

