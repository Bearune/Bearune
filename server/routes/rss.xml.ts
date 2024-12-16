// server/routes/rss.xml.ts
import { serverQueryContent } from '#content/server';
import rss from 'rss';

export default defineEventHandler(async (event) => {
  try {
    const articles = await serverQueryContent(event, 'article')
      .sort({ date: -1 })
      .find();

    const feed = new rss({
      title: 'Bearune',
      site_url: 'https://bearune.com',
      feed_url: 'https://bearune.com/rss.xml',
      language: 'zh-tw'
    });

    for (const article of articles) {
      feed.item({
        title: article.title || '',
        description: article.description,
        date: article.date,
        url: `https://bearune.com${article._path}`,
        author: '瓜熊',
        categories: article.tags
      });
    }

    setHeaders(event, { 'Content-Type': 'application/rss+xml; charset=UTF-8' });
    return feed.xml();
  } catch (err) {
    setHeaders(event, { 'Content-Type': 'application/xml' });
    return '<?xml version="1.0" encoding="UTF-8"?> <error>Unable to generate RSS feed</error>';
  }
});