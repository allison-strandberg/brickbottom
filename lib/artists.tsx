import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const artistsDirectory = path.join(process.cwd(), 'artists')

export function getArtistsData() {
  // Get file names under /artists
  const fileNames = fs.readdirSync(artistsDirectory)
  const allArtistsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const artist = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(artistsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the artist metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the artist
    return {
      artist,
      ...matterResult.data
    }
  })
  return allArtistsData;
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

  // Combine the data with the artist
  return {
    artist,
    ...matterResult.data
  }
}