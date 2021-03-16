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
  provider: 'google-cloud-storage',
  providerOptions: {
    bucketName: 'supreme-media',
    publicFiles: true,
    uniform: false,
    serviceAccount: {
      "type": "service_account",
      "project_id": "supreme-304316",
      "private_key_id": "9c65013132a05ea82eb15dc32e0d09efe4fc6643",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2rE7OWqh4L0Nw\nkaLTJwHnTC4KpOgGbTjRFNBzxUo+eXCfex3NGqSLg9N0WFilIFlSSBFa9l6hgj48\nM8WQ1YTiybYgO9gNqoPOfWQkQNB4eog29n+MLa8xyLElxOSlTQBkB9gRz7yxHD+z\n177N6p4oB3eMhTTIAtgsSR4rD4SDgIoH9plwaCk+SyYNMuh1q9wr8+l98bxKkITP\nHkeKhtAv1AfWHXYEfGBvEhRNwmNELi597gdv7+pJ67nlAY1QEwtMvyz+rsUrYX5T\n8FRsaduTGw2wWju0mlOcs5a2/TFB2jzoR2J3XuK3+fcSXiSv/nwjaJ/+llEeHOsZ\nfrLdACRFAgMBAAECggEAGDXyI+tkFLm+6HaE7BNpbyxrlcGRdviW5S8rCY0GcA1M\nXfbFVl/Hmy4Xon3rEcedzwf6NOIeXK2Ubgo2jyGdgSlW2CLWWclVutJnqV5lwvIK\nh65X7U5IwAJnaCgWXco82QUpIAM2cQrbboyTn1sPJyMGNzuYaUHnQMdYFkDyQTNY\nZqC9ZtG6D3zc5uj1tvq3J3Zdib5e6WLUTqG+rzM3ZnssrrX4NYb2DAjMvHAEiRCf\nB65dg9olgRPemfGRmvkknGnmy3g4W+hcYlfk18NP17wqO9+u/Sxvjw+M6rtHeY22\nPUevAmqlAFlGiRZ7PrGwIrOjXhVif1Bz2+NVjLdagQKBgQDyQr60NTK5UZK5rEC/\nCFQ1rQNhZ3Hw6aYyuR8Vf5UzrhQatvS0uE25gktIbGQTtAOQdGNyPg/8K5tOqWUq\nVduFZf9JD32/ZOzj30h3DbUMN+FAsIK474SYbS/DcPzfD9ajfeVa9KIjaAcWHCWd\nC1UqzRE2h06tZPLQ9ZLvcTj9cQKBgQDBCHEDP1xQtO5JubjKHTkNw1SXaRWdSljL\nHeTd9W5/wBjXMoh0kMKeHNnfPKcUaLKpHC+YQOpxAAjeW9lZeKH9ofH1V363ukqg\nJxNJi4AQwUKVpgLtnNeUxJ07Pq+tei/uriwlChYRGWqDDQ/J7BNlIaah8aDdpWPG\nbYI1a4P6FQKBgQDH9/ASMBc+gObr/BM1nFpmM/mmXQzgHvzgwY224Sj3D6noozw6\nMCd4COS7Uz0IRn7qrieoFTJ8pEH+HDU1TMl2w0qFtBPH+DbRoWzfWKEpBLcZ/pjo\nrkx0xSu313vjY9939GNtQKDVOPkgdvtVNhWGzt52dBmtZrZHZW1z17GDAQKBgQC3\nJfA8OZC4ToLMVrd6pPFuGoeXRTAp1dGbnlh5NBXMhhHLlHmdx3+wDwW05lJMbe4d\nv810sxr9bh/8Ab+eQXPJNy9gLczgO5P0kj6diAtRWlx3qlSa6DYvQ8E+5gI/IXB7\nEKx31DMNtES35Nu3JRNd3+i/PIf55KNfMKXbU5Cb5QKBgD0BhnApS/xjXHHljeTE\nUAv+yLnqSxSFP1uq6tLmYszDz+gr7aRmsDGEgW7Qrk5NbcmNFOgNMa0cllfXM05Y\nCFouHW4leD7R7wnugu9h3GJic+CDMxdujdFNmNHmD+VFRPRYfzzG36ry5qcqRw2Y\nzlUAXwqFB0TZbNzNEJGqU6B6\n-----END PRIVATE KEY-----\n",
      "client_email": "supreme-304316@appspot.gserviceaccount.com",
      "client_id": "111280826296012026034",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/supreme-304316%40appspot.gserviceaccount.com"
    }, // replace `{}` with your serviceAccount JSON object
    baseUrl: 'https://storage.googleapis.com/supreme-media',
    basePath: '',
  },
}
});

