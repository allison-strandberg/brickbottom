import remark from 'remark'
import html from 'remark-html'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Name } from '../pages/[artist]';

const artistsDirectory = path.join(process.cwd(), 'artists')

export async function getArtistsData() {
  // Get file names under /artists
  const fileNames = fs.readdirSync(artistsDirectory);
  const allArtists = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    return fileName.replace(/\.md$/, '')
  });
  const allArtistsData = await Promise.all(allArtists.map(async (artist) => {
    const data = await getArtistData(artist);
    return data;
  }))
  // Sort artists by last name
  return allArtistsData.sort((a, b) => {
    if (a.name.last > b.name.last) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllArtists() {
  const fileNames = fs.readdirSync(artistsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       artist: 'frida-kahlo'
  //     }
  //   },
  //   {
  //     params: {
  //       artist: 'michaelangelo'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        artist: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getArtistData(artist) {
  const fullPath = path.join(artistsDirectory, `${artist}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Create full name string
  const fullName = [
    matterResult.data.name.first,
    matterResult.data.name.middle,
    matterResult.data.name.last,
  ].join(' ');

  const name: Name = {full: fullName, ...matterResult.data.name};

  // Combine the data with the artist
  return {
    artist,
    statement: contentHtml,
    ...matterResult.data,
    name,
  }
}