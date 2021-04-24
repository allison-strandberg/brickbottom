import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Name } from '../pages/[artist]';

const artistsDirectory = path.join(process.cwd(), 'artists')

export function getArtistsData() {
  // Get file names under /artists
  const fileNames = fs.readdirSync(artistsDirectory)
  const allArtistsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const artist = fileName.replace(/\.md$/, '')
    return getArtistData(artist);
  })
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

export function getArtistData(artist) {
  const fullPath = path.join(artistsDirectory, `${artist}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

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
    ...matterResult.data,
    name,
  }
}